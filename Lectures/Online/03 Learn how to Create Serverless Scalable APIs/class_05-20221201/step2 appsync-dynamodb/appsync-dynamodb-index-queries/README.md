# AppSync DynamoDB Index Queries

## Steps to follow

1. Create a new directory and navigate to it using `mkdir appsync-dynamodb-index-queries` and `cd appsync-dynamodb-index-queries`
2. Create a new cdk app using `cdk init app --language=typescript`

3. Create './schema/schema.graphql' to define the schema for the api

   ```graphql
   type Todo {
     username: String!
     id: ID!
     title: String!
     done: Boolean!
     year: Int!
   }
   input TodoInput {
     username: String!
     id: ID!
     title: String!
     done: Boolean!
     year: Int!
   }
   input UpdateTodoInput {
     username: String!
     id: ID!
     title: String!
     done: Boolean
     year: Int
   }
   input TodoByUsernameAndTitleInput {
     username: String!
     title: String!
   }
   input TodoByUsernameAndIdInput {
     username: String!
     id: ID!
   }
   input TodosByUsernameAndYearInput {
     username: String!
     year: Int!
   }
   input TodosByYearAndTitleInput {
     title: String!
     year: Int!
   }
   input DeleteTodoInput {
     title: String!
     username: String!
   }
   type Query {
     getTodos: [Todo]
     getTodoByUsername(username: String!): [Todo]
     getTodoByUsernameAndTitle(input: TodoByUsernameAndTitleInput!): [Todo]
     getTodoByUsernameAndId(input: TodoByUsernameAndIdInput!): [Todo]
     getTodosByUsernameAndYear(input: TodosByUsernameAndYearInput!): [Todo]
     getTodosByYearAndTitle(input: TodosByYearAndTitleInput!): [Todo]
   }
   type Mutation {
     addTodo(todo: TodoInput!): Todo
     updateTodo(todo: UpdateTodoInput!): Todo
     deleteTodo(input: DeleteTodoInput!): String
   }
   ```

4. Install AppSync in the app using `npm i @aws-cdk/aws-appsync-alpha` and update 'lib/appsync-dynamodb-index-queries-stack.ts' to define a new appsync api

   ```ts
   import * as appSync from '@aws-cdk/aws-appsync-alpha';
   const appsyncApi = new appSync.GraphqlApi(this, 'api', {
     name: 'appsync-dynodb-query-api',
     schema: appSync.SchemaFile.fromAsset('schema/schema.graphql'),
   });
   ```

5. Update 'lib/appsync-dynamodb-index-queries-stack.ts' to create a dynamoDB table

   ```ts
   import { aws_dynamodb as dynamodb, RemovalPolicy } from 'aws-cdk-lib';
   const todosTable = new dynamodb.Table(this, 'TodosTable', {
     partitionKey: {
       name: 'username',
       type: dynamodb.AttributeType.STRING,
     },
     sortKey: {
       name: 'title',
       type: dynamodb.AttributeType.STRING,
     },
     billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
     stream: dynamodb.StreamViewType.NEW_IMAGE,
     removalPolicy: RemovalPolicy.DESTROY,
   });
   ```

6. Update 'lib/appsync-dynamodb-index-queries-stack.ts' to create a local and global secondrty indexes

   ```ts
   todosTable.addLocalSecondaryIndex({
     indexName: 'Todos-Year-Index',
     sortKey: {
       name: 'year',
       type: dynamodb.AttributeType.NUMBER,
     },
   });
   todosTable.addGlobalSecondaryIndex({
     indexName: 'Todos-Title-Year-Index',
     partitionKey: {
       name: 'year',
       type: dynamodb.AttributeType.NUMBER,
     },
     sortKey: {
       name: 'title',
       type: dynamodb.AttributeType.STRING,
     },
   });
   ```

7. Update 'lib/appsync-dynamodb-index-queries-stack.ts' to create a lambda function to execute on dynamodb stream also add atream event to the lambda function

   ```ts
   import { aws_lambda as lambda } from 'aws-cdk-lib';
   import { DynamoEventSource } from 'aws-cdk-lib/aws-lambda-event-sources';
   const TableStreamHandler = new lambda.Function(
     this,
     'StreamHandlerDyanmodb',
     {
       code: lambda.Code.fromAsset('functions/TableStreamHandler'),
       handler: 'index.handler',
       functionName: 'TableStreamHandler',
       runtime: lambda.Runtime.NODEJS_16_X,
     }
   );
   TableStreamHandler.addEventSource(
     new DynamoEventSource(todosTable, {
       startingPosition: lambda.StartingPosition.LATEST,
     })
   );
   ```

8. Update 'lib/appsync-dynamodb-index-queries-stack.ts' to create a lambda function which to be executed with the appSync api, add environemt varibale and add as datasource

   ```ts
   const todosLambda = new lambda.Function(this, 'AppsyncTodoHandler', {
     runtime: lambda.Runtime.NODEJS_16_X,
     handler: 'main.handler',
     code: lambda.Code.fromAsset('functions'),
     memorySize: 1024,
   });
   todosTable.grantFullAccess(todosLambda);
   todosLambda.addEnvironment('TODOS_TABLE', todosTable.tableName);
   todosLambda.addEnvironment(
     'TODOS_TITLE_YEAR_INDEX',
     'Todos-Title-Year-Index'
   );
   todosLambda.addEnvironment('TODOS_YEAR_INDEX', 'Todos-Year-Index');
   const lambdaDs = appsyncApi.addLambdaDataSource(
     'lambdaDatasource',
     todosLambda
   );
   ```

9. Update 'lib/appsync-dynamodb-index-queries-stack.ts' to create resolvers

   ```ts
   // Add resolvers
   lambdaDs.createResolver({
     typeName: 'Query',
     fieldName: 'getTodos',
   });

   lambdaDs.createResolver({
     typeName: 'Query',
     fieldName: 'getTodoByUsername',
   });

   lambdaDs.createResolver({
     typeName: 'Query',
     fieldName: 'getTodoByUsernameAndTitle',
   });

   lambdaDs.createResolver({
     typeName: 'Query',
     fieldName: 'getTodoByUsernameAndId',
   });

   lambdaDs.createResolver({
     typeName: 'Query',
     fieldName: 'getTodosByUsernameAndYear',
   });
   lambdaDs.createResolver({
     typeName: 'Query',
     fieldName: 'getTodosByYearAndTitle',
   });

   lambdaDs.createResolver({
     typeName: 'Mutation',
     fieldName: 'addTodo',
   });

   lambdaDs.createResolver({
     typeName: 'Mutation',
     fieldName: 'updateTodo',
   });

   lambdaDs.createResolver({
     typeName: 'Mutation',
     fieldName: 'deleteTodo',
   });
   ```

10. Create lambda functions in 'functions' folder
11. Build the app using `npm run build`
12. To verify that everything is working correctly, list the stacks using `cdk ls`
13. Synthesize an AWS CloudFormation template for the app using `cdk synth`
14. Deploy the app using `cdk deploy`
15. After deployment test the api from AppSync console and perform multiple queries
16. Delete app using `cdk destroy`
