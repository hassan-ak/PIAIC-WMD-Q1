# AppSync with DynamoDB data source

## Steps to follow

1. Create a new directory and navigate to it using `mkdir aappsync-dynamodb-datasource` and `cd aappsync-dynamodb-datasource`
2. Create a new cdk app using `cdk init app --language=typescript`

3. Create './schema/schema.graphql' to define the schema for the api

   ```graphql
   type Note {
     id: ID!
     title: String!
   }
   type Query {
     notes: [Note!]
     notesById(id: String!): Note
   }
   type Mutation {
     createNote(title: String!): Note!
     deleteNote(id: String!): Note!
     updateNote(id: String!, title: String!): Note!
   }
   ```

4. Install AppSync in the app using `npm i @aws-cdk/aws-appsync-alpha` and update 'lib/aappsync-dynamodb-datasource-stack.ts' to define a new appsync api

   ```ts
   import * as appsync from '@aws-cdk/aws-appsync-alpha';
   const testApi = new appsync.GraphqlApi(this, 'testApi', {
     name: 'Test Api',
     schema: appsync.Schema.fromAsset('schema/schema.graphql'),
   });
   ```

5. Update 'lib/aappsync-dynamodb-datasource-stack.ts' to create a dynamoDB table and also create a datasource

   ```ts
   const todosTable = new dynamodb.Table(this, 'TodosTable', {
     tableName: 'TodosTable',
     billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
     partitionKey: {
       name: 'id',
       type: dynamodb.AttributeType.STRING,
     },
   });
   const dataSource = testApi.addDynamoDbDataSource('datasource', todosTable);
   ```

6. Update 'lib/aappsync-dynamodb-datasource-stack.ts' to add resolvers and also the mapping template to intract with ddb table

   ```ts
   dataSource.createResolver({
     typeName: 'Query',
     fieldName: 'notes',
     requestMappingTemplate: appsync.MappingTemplate.dynamoDbScanTable(),
     responseMappingTemplate: appsync.MappingTemplate.dynamoDbResultList(),
   });
   dataSource.createResolver({
     typeName: 'Query',
     fieldName: 'notesById',
     requestMappingTemplate: appsync.MappingTemplate.dynamoDbGetItem(
       'id',
       'id'
     ),
     responseMappingTemplate: appsync.MappingTemplate.dynamoDbResultItem(),
   });
   dataSource.createResolver({
     typeName: 'Mutation',
     fieldName: 'createNote',
     requestMappingTemplate: appsync.MappingTemplate.dynamoDbPutItem(
       appsync.PrimaryKey.partition('id').auto(),
       appsync.Values.projecting()
     ),
     responseMappingTemplate: appsync.MappingTemplate.dynamoDbResultItem(),
   });
   dataSource.createResolver({
     typeName: 'Mutation',
     fieldName: 'deleteNote',
     requestMappingTemplate: appsync.MappingTemplate.dynamoDbDeleteItem(
       'id',
       'id'
     ),
     responseMappingTemplate: appsync.MappingTemplate.dynamoDbResultItem(),
   });
   dataSource.createResolver({
     typeName: 'Mutation',
     fieldName: 'updateNote',
     requestMappingTemplate: appsync.MappingTemplate.dynamoDbPutItem(
       appsync.PrimaryKey.partition('id').is('id'),
       appsync.Values.projecting()
     ),
     responseMappingTemplate: appsync.MappingTemplate.dynamoDbResultItem(),
   });
   ```

7. Build the app using `npm run build`
8. To verify that everything is working correctly, list the stacks using `cdk ls`
9. Synthesize an AWS CloudFormation template for the app using `cdk synth`
10. Deploy the app using `cdk deploy`
11. After deployment test the api from AppSync console and perform multiple queries
12. Delete app using `cdk destroy`
