# AppSync with Lambda Authorizer

## Steps to follow

1. Create a new directory and navigate to it using `mkdir lambda-authorizor` and `cd lambda-authorizor`
2. Create a new cdk app using `cdk init app --language=typescript`

3. Create './schema/schema.graphql' to define the schema for the api

   ```graphql
   type Todo {
     id: ID!
     title: String!
     done: Boolean!
   }
   input TodoInput {
     id: ID!
     title: String!
     done: Boolean!
   }
   input UpdateTodoInput {
     id: ID!
     title: String
     done: Boolean
   }
   type Query {
     getTodos: [Todo]
     getTodoById(todoId: String!): Todo
   }
   type Mutation {
     addTodo(todo: TodoInput!): Todo
     updateTodo(todo: UpdateTodoInput!): Todo
     deleteTodo(todoId: String!): String
   }
   ```

4. update 'lib/lambda-authorizor-stack.ts' to define a lambda authorizer function and also create an handler code in 'lambdaAuthorizor/index.ts'

   ```ts
   import { aws_lambda as lambda } from 'aws-cdk-lib';
   const lambdaAuthorizor = new lambda.Function(
     this,
     'AppsyncLambdaAuthorizor',
     {
       runtime: lambda.Runtime.NODEJS_16_X,
       handler: 'index.handler',
       code: lambda.Code.fromAsset('lambdaAuthorizor'),
       memorySize: 1024,
     }
   );
   ```

   ```ts
   import {
     AppSyncResolverEvent,
     AppSyncAuthorizerEvent,
     AppSyncAuthorizerResult,
   } from 'aws-lambda';

   exports.handler = async (
     event: AppSyncAuthorizerEvent
   ): Promise<AppSyncAuthorizerResult<any>> => {
     console.log(`event >`, JSON.stringify(event, null, 2));
     const { authorizationToken } = event;

     const response: AppSyncAuthorizerResult<any> = {
       isAuthorized: authorizationToken === 'custom-authorized',
       resolverContext: {
         userid: 'test-user-id',
       },
       deniedFields: [],
       ttlOverride: 1,
     };
     console.log(`response >`, JSON.stringify(response, null, 2));
     return response;
   };
   ```

5. Install AppSync in the app using `npm i @aws-cdk/aws-appsync-alpha` and update 'lib/lambda-authorizor-stack.ts' to define a new appsync api

   ```ts
   import * as appsync from '@aws-cdk/aws-appsync-alpha';
   import { AuthorizationType } from '@aws-cdk/aws-appsync-alpha';
   const appsyncApi = new appsync.GraphqlApi(this, 'api', {
     name: 'api-development',
     schema: appsync.SchemaFile.fromAsset('schema/schema.graphql'),
     authorizationConfig: {
       defaultAuthorization: {
         authorizationType: AuthorizationType.LAMBDA,
         lambdaAuthorizerConfig: {
           handler: lambdaAuthorizor,
           resultsCacheTtl: cdk.Duration.seconds(0),
         },
       },
     },
   });
   ```

6. Update 'lib/lambda-authorizor-stack.ts' to define a new lambda function

   ```ts
   const todosLambda = new lambda.Function(this, 'AppsyncTodoHandler', {
     runtime: lambda.Runtime.NODEJS_12_X,
     handler: 'main.handler',
     code: lambda.Code.fromAsset('functions'),
     memorySize: 1024,
   });
   ```

7. Create function handler files in 'functions' folder

8. Update 'lib/lambda-authorizor-stack.ts' to define a ddb table, grant acces and add datas source

   ```ts
   import { aws_dynamodb as dynamodb, RemovalPolicy } from 'aws-cdk-lib';
   const todosTable = new dynamodb.Table(this, 'TodosTable', {
     partitionKey: {
       name: 'id',
       type: dynamodb.AttributeType.STRING,
     },
     billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
     removalPolicy: RemovalPolicy.DESTROY,
   });
   todosTable.grantFullAccess(todosLambda);
   todosLambda.addEnvironment('TODOS_TABLE', todosTable.tableName);
   // Add lambda as data source
   const lambdaDs = appsyncApi.addLambdaDataSource(
     'lambdaDatasource',
     todosLambda
   );
   ```

9. Update 'lib/lambda-authorizor-stack.ts' to add resolversa to the datasource

   ```ts
   lambdaDs.createResolver('q1', {
     typeName: 'Query',
     fieldName: 'getTodos',
   });
   lambdaDs.createResolver('q2', {
     typeName: 'Query',
     fieldName: 'getTodoById',
   });
   lambdaDs.createResolver('m1', {
     typeName: 'Mutation',
     fieldName: 'addTodo',
   });
   lambdaDs.createResolver('m2', {
     typeName: 'Mutation',
     fieldName: 'updateTodo',
   });
   lambdaDs.createResolver('m3', {
     typeName: 'Mutation',
     fieldName: 'deleteTodo',
   });
   ```

10. Build the app using `npm run build`
11. To verify that everything is working correctly, list the stacks using `cdk ls`
12. Synthesize an AWS CloudFormation template for the app using `cdk synth`
13. Deploy the app using `cdk deploy`
14. After deployment test the api from AppSync console and perform multiple queries
15. Delete app using `cdk destroy`
