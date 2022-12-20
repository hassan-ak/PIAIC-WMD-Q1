import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { aws_lambda as lambda } from 'aws-cdk-lib';
import * as appsync from '@aws-cdk/aws-appsync-alpha';
import { AuthorizationType } from '@aws-cdk/aws-appsync-alpha';
import { aws_dynamodb as dynamodb, RemovalPolicy } from 'aws-cdk-lib';

export class LambdaAuthorizorStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Lambda authorizer function
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

    // AppSync APi
    // Create an appSync API
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

    // Todos Lambda
    const todosLambda = new lambda.Function(this, 'AppsyncTodoHandler', {
      runtime: lambda.Runtime.NODEJS_16_X,
      handler: 'main.handler',
      code: lambda.Code.fromAsset('functions'),
      memorySize: 1024,
    });

    // Add table
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

    // Add resolvers
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
  }
}
