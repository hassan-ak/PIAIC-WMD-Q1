# GQL API using appsync

## Steps to follow

1. Create a new directory and navigate to it using `mkdir appsync` and `cd appsync`
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
   type Query {
     getTodos: [Todo]
   }
   type Mutation {
     addTodo(todo: TodoInput!): Todo
     updateTodo(id: ID!, title: String!, done: Boolean!): Todo
   }
   ```

4. Install AppSync in the app using `npm i @aws-cdk/aws-appsync-alpha` and update 'lib/appsync-stack.ts' to define a new appsync api

   ```ts
   import * as appsync_alpha from '@aws-cdk/aws-appsync-alpha';
   const appsyncApi = new appsync_alpha.GraphqlApi(this, 'api', {
     name: 'test Api',
     schema: appsync_alpha.Schema.fromAsset('schema/schema.graphql'),
   });
   ```

5. Update 'lib/appsync-stack.ts' to define a new lambda function whihc is then added to the appSync api as data source also define IAM role

   ```ts
   const lambdaFnAppsync = new cdk.aws_lambda.Function(
     this,
     'appsynctestLambda',
     {
       functionName: `appsynctestlambda`,
       runtime: cdk.aws_lambda.Runtime.NODEJS_14_X,
       code: cdk.aws_lambda.Code.fromAsset('lambda'),
       handler: 'index.handler',
     }
   );
   const role = new iam.Role(this, 'Role', {
     assumedBy: new iam.ServicePrincipal('appsync.amazonaws.com'),
   });
   const lambdaDs = new appsync_alpha.LambdaDataSource(
     this,
     'MyLambdaDataSource',
     {
       api: appsyncApi,
       lambdaFunction: lambdaFnAppsync,
       serviceRole: role,
     }
   );
   ```

6. Update 'lib/appsync-stack.ts' to add resolversa to the datasource

   ```ts
   lambdaDs.createResolver({
     typeName: 'Query',
     fieldName: 'getTodos',
   });
   lambdaDs.createResolver({
     typeName: 'Mutation',
     fieldName: 'addTodo',
   });
   lambdaDs.createResolver({
     typeName: 'Mutation',
     fieldName: 'updateTodo',
   });
   ```

7. Create lambda handler files in 'lambda', before doing so we need to add lambda and its types thus use `npm install -D aws-lambda` and `npm install -D @types/aws-lambda`

   ```ts
   /*
     ./lambda/index.ts
   */
   import { AppSyncResolverEvent } from 'aws-lambda';
   import addTodo from './addTodo';
   import getTodos from './getTodo';
   import updateTodo from './updateTodo';
   export async function handler(event: AppSyncResolverEvent<any>) {
     console.log('Event : ', event);
     switch (event.info.fieldName) {
       case 'getTodos':
         return getTodos();
       case 'addTodo':
         return addTodo(event.arguments.todo);
       case 'updateTodo':
         return updateTodo(event.arguments);
       default:
         return null;
     }
   }

   /*
     ./lambda/getTodo/index.ts
   */
   function getTodos() {
     type Todo = {
       id: String;
       title: string;
       done: boolean;
     };
     const todos: Todo[] = [
       { title: 'todo1', done: false, id: '1' },
       { title: 'todo2', done: true, id: '2' },
     ];
     return todos;
   }
   export default getTodos;

   /*
     ./lambda/addtodo/index.ts
   */
   type Todo = {
     id: string;
     title: string;
     done: boolean;
   };
   function addTodo(todo: Todo): Todo {
     console.log('add mutation started');
     return todo;
   }
   export default addTodo;

   /*
     ./lambda/updateTodo/index.ts
   */
   type Todo = {
     id: string;
     title: string;
     done: boolean;
   };
   function updateTodo(todo: Todo): Todo {
     console.log('update mutation started');
     return todo;
   }
   export default updateTodo;
   ```

8. Build the app using `npm run build`
9. To verify that everything is working correctly, list the stacks using `cdk ls`
10. Synthesize an AWS CloudFormation template for the app using `cdk synth`
11. Deploy the app using `cdk deploy`
12. After deployment test the api from AppSync console and perform multiple queries
13. Delete app using `cdk destroy`
