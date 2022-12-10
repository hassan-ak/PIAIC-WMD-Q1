import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as appsync from '@aws-cdk/aws-appsync-alpha';
import { aws_dynamodb as dynamodb } from 'aws-cdk-lib';

export class AppsyncDynamodbDatasourceStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // Create AppSync Api
    const testApi = new appsync.GraphqlApi(this, 'testApi', {
      name: 'Test Api',
      schema: appsync.Schema.fromAsset('schema/schema.graphql'),
    });

    // Create a dynamoDB table
    const todosTable = new dynamodb.Table(this, 'TodosTable', {
      tableName: 'TodosTable',
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
      partitionKey: {
        name: 'id',
        type: dynamodb.AttributeType.STRING,
      },
    });

    // Attach dynamodb as data source to the gql api
    const dataSource = testApi.addDynamoDbDataSource('datasource', todosTable);

    // Create resolvers along with mapping template
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
  }
}
