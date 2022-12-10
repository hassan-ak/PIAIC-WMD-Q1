# AppSync DynamoDB with lambda data source

## Steps to follow

1. Create a new directory and navigate to it using `mkdir appsync-dynamodb-lambda-data_source` and `cd appsync-dynamodb-lambda-data_source`
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
     updateTodo(todo: UpdateTodoInput!): todo
     deleteTodo(todoId: String!): String
   }
   ```

4. Install AppSync in the app using `npm i @aws-cdk/aws-appsync-alpha` and update 'lib/appsync-dynamodb-lambda-data_source-stack.ts' to define a new appsync api

   ```ts
   import * as appsync from '@aws-cdk/aws-appsync-alpha';
   const testGqlApi = new appsync.GraphqlApi(this, 'testApi', {
     name: 'appsync-dynmodb-lambda-api',
     schema: appsync.Schema.fromAsset('schema/schema.graphql'),
   });
   ```

5. Update 'lib/appsync-dynamodb-lambda-data_source-stack.ts' to define a new lambda function which is then added to the appSync api as data source

   ```ts
   const testLambda = new lambda.Function(this, 'testLambda', {
     functionName: 'testLambda',
     runtime: lambda.Runtime.NODEJS_14_X,
     handler: 'main.handler',
     code: lambda.Code.fromAsset('lambda'),
     memorySize: 1024,
   });
   const lambdaDs = testGqlApi.addLambdaDataSource(
     'lambdaDatasource',
     testLambda
   );
   ```

6. Update 'lib/appsync-dynamodb-lambda-data_source-stack.ts' to add resolversa to the datasource

   ```ts
   lambdaDs.createResolver({
     typeName: 'Query',
     fieldName: 'getTodos',
   });

   lambdaDs.createResolver({
     typeName: 'Query',
     fieldName: 'getTodoById',
   });

   lambdaDs.createResolver({
     typeName: 'Mutation',
     fieldName: 'addTodo',
   });

   lambdaDs.createResolver({
     typeName: 'Mutation',
     fieldName: 'deleteTodo',
   });

   lambdaDs.createResolver({
     typeName: 'Mutation',
     fieldName: 'updateTodo',
   });
   ```

7. Update 'lib/appsync-dynamodb-lambda-data_source-stack.ts' to create a dynamoDB table, give permissions to lambda function and set environment variable

   ```ts
   const todosTable = new dynamodb.Table(this, 'TodosTable', {
     partitionKey: {
       name: 'id',
       type: dynamodb.AttributeType.STRING,
     },
     billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
   });
   todosTable.grantFullAccess(testLambda);
   testLambda.addEnvironment('TODOS_TABLE', todosTable.tableName);
   ```

8. Create lambda handler files in 'lambda'

   ```ts
   /*
     ./lambda/Todo.ts
   */
   type Todo = {
     id: string;
     title: string;
     done: boolean;
   };
   export default Todo;

   /*
     ./lambda/addTodo.ts
   */
   const AWS = require('aws-sdk');
   const docClient = new AWS.DynamoDB.DocumentClient();
   import Todo from './Todo';
   async function addTodo(todo: Todo) {
     const params = {
       TableName: process.env.TODOS_TABLE,
       Item: todo,
     };
     try {
       await docClient.put(params).promise();
       return todo;
     } catch (err) {
       console.log('DynamoDB error: ', err);
       return null;
     }
   }
   export default addTodo;

   /*
     ./lambda/getTodos.ts
   */
   const AWS = require('aws-sdk');
   const docClient = new AWS.DynamoDB.DocumentClient();
   async function getTodos() {
     const params = {
       TableName: process.env.TODOS_TABLE,
     };
     try {
       const data = await docClient.scan(params).promise();
       return data.Items;
     } catch (err) {
       console.log('DynamoDB error: ', err);
       return null;
     }
   }
   export default getTodos;

   /*
     ./lambda/getTodoById.ts
   */
   const AWS = require('aws-sdk');
   const docClient = new AWS.DynamoDB.DocumentClient();
   async function getTodoById(todoId: string) {
     const params = {
       TableName: process.env.TODOS_TABLE,
       Key: { id: todoId },
     };
     try {
       const { Item } = await docClient.get(params).promise();
       return Item;
     } catch (err) {
       console.log('DynamoDB error: ', err);
       return null;
     }
   }
   export default getTodoById;

   /*
     ./lambda/deleteTodo.ts
   */
   const AWS = require('aws-sdk');
   const docClient = new AWS.DynamoDB.DocumentClient();
   async function deleteTodo(todoId: string) {
     const params = {
       TableName: process.env.TODOS_TABLE,
       Key: {
         id: todoId,
       },
     };
     try {
       await docClient.delete(params).promise();
       return todoId;
     } catch (err) {
       console.log('DynamoDB error: ', err);
       return null;
     }
   }
   export default deleteTodo;

   /*
     ./lambda/updateTodo.ts
   */
   const AWS = require('aws-sdk');
   const docClient = new AWS.DynamoDB.DocumentClient();
   type Params = {
     TableName: string | undefined;
     Key: string | {};
     UpdateExpression: string;
     ExpressionAttributeNames: any;
     ExpressionAttributeValues: any;
     ReturnValues: string;
   };
   async function updateTodo(todo: any) {
     let params: Params = {
       TableName: process.env.TODOS_TABLE,
       Key: {
         id: todo.id,
       },
       UpdateExpression: '',
       ExpressionAttributeNames: {},
       ExpressionAttributeValues: {},
       ReturnValues: 'ALL_NEW',
     };
     let prefix = 'set ';
     let attributes = Object.keys(todo);
     for (let i = 0; i < attributes.length; i++) {
       //{
       let attribute = attributes[i];
       if (attribute !== 'id') {
         params['UpdateExpression'] +=
           prefix + '#' + attribute + ' = :' + attribute;
         params['ExpressionAttributeNames']['#' + attribute] = attribute;
         params['ExpressionAttributeValues'][':' + attribute] = todo[attribute];
         prefix = ', ';
       }
     }
     try {
       const updatedTodo = await docClient.update(params).promise();
       // return updatedTodo;
       return updatedTodo.Attributes;
     } catch (err) {
       console.log('DynamoDB error: ', err);
       return null;
     }
   }
   export default updateTodo;

   /*
     ./lambda/main.ts
   */
   import addTodo from './addTodo';
   import deleteTodo from './deleteTodo';
   import getTodos from './getTodos';
   import updateTodo from './updateTodo';
   import Todo from './Todo';
   import getTodoById from './getTodoById';
   type AppSyncEvent = {
     info: {
       fieldName: string;
     };
     arguments: {
       todoId: string;
       todo: Todo;
     };
   };
   exports.handler = async (event: AppSyncEvent) => {
     switch (event.info.fieldName) {
       case 'addTodo':
         return await addTodo(event.arguments.todo);
       case 'getTodos':
         return await getTodos();
       case 'getTodoById':
         return await getTodoById(event.arguments.todoId);
       case 'deleteTodo':
         return await deleteTodo(event.arguments.todoId);
       case 'updateTodo':
         return await updateTodo(event.arguments.todo);
       default:
         return null;
     }
   };
   ```

9. Build the app using `npm run build`
10. To verify that everything is working correctly, list the stacks using `cdk ls`
11. Synthesize an AWS CloudFormation template for the app using `cdk synth`
12. Deploy the app using `cdk deploy`
13. After deployment test the api from AppSync console and perform multiple queries
14. Delete app using `cdk destroy`
