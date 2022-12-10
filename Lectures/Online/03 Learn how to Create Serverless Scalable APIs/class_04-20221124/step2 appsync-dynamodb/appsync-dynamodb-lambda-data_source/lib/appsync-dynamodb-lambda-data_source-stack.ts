import { Construct } from 'constructs';
import * as appsync from '@aws-cdk/aws-appsync-alpha';
import {
  Stack,
  StackProps,
  aws_lambda as lambda,
  aws_dynamodb as dynamodb,
} from 'aws-cdk-lib';

export class AppsyncDynamodbLambdaDataSourceStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // AppSync API
    const testGqlApi = new appsync.GraphqlApi(this, 'testApi', {
      name: 'appsync-dynmodb-lambda-api',
      schema: appsync.Schema.fromAsset('schema/schema.graphql'),
    });

    // Lambda function
    const testLambda = new lambda.Function(this, 'testLambda', {
      functionName: 'testLambda',
      runtime: lambda.Runtime.NODEJS_14_X,
      handler: 'main.handler',
      code: lambda.Code.fromAsset('lambda'),
      memorySize: 1024,
    });

    // Add lambda as dataSource to api
    const lambdaDs = testGqlApi.addLambdaDataSource(
      'lambdaDatasource',
      testLambda
    );

    // Create Resolvers
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

    //     // Create a DynamoDB tabe
    const todosTable = new dynamodb.Table(this, 'TodosTable', {
      partitionKey: {
        name: 'id',
        type: dynamodb.AttributeType.STRING,
      },
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
    });

    // Grant access to lambda function
    todosTable.grantFullAccess(testLambda);

    // Set environemt variable
    testLambda.addEnvironment('TODOS_TABLE', todosTable.tableName);
  }
}
