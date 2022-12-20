import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as appSync from '@aws-cdk/aws-appsync-alpha';
import { aws_dynamodb as dynamodb, RemovalPolicy } from 'aws-cdk-lib';
import { aws_lambda as lambda } from 'aws-cdk-lib';
import { DynamoEventSource } from 'aws-cdk-lib/aws-lambda-event-sources';

export class AppsyncDynamodbIndexQueriesStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // AppSync API
    const appsyncApi = new appSync.GraphqlApi(this, 'api', {
      name: 'appsync-dynodb-query-api',
      schema: appSync.SchemaFile.fromAsset('schema/schema.graphql'),
    });

    // DynamoDb table
    const todosTable = new dynamodb.Table(this, 'TodosTable', {
      // partion key
      partitionKey: {
        name: 'username',
        type: dynamodb.AttributeType.STRING,
      },
      // sort key
      sortKey: {
        name: 'title',
        type: dynamodb.AttributeType.STRING,
      },
      // billing mode
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
      // stream service
      stream: dynamodb.StreamViewType.NEW_IMAGE,
      // delete on destory
      removalPolicy: RemovalPolicy.DESTROY,
    });

    // Secondry ndexed on dynamoDB table
    // local index
    todosTable.addLocalSecondaryIndex({
      indexName: 'Todos-Year-Index',
      sortKey: {
        name: 'year',
        type: dynamodb.AttributeType.NUMBER,
      },
    });
    // Global index
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

    // Lambda handler for stream
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
    // add stream evnt to the lambda function
    // add new source with table and starting position
    TableStreamHandler.addEventSource(
      new DynamoEventSource(todosTable, {
        startingPosition: lambda.StartingPosition.LATEST,
      })
    );

    // todos lambda function
    const todosLambda = new lambda.Function(this, 'AppsyncTodoHandler', {
      runtime: lambda.Runtime.NODEJS_16_X,
      handler: 'main.handler',
      code: lambda.Code.fromAsset('functions'),
      memorySize: 1024,
    });
    // grant eccessa nd add data source
    todosTable.grantFullAccess(todosLambda);
    todosLambda.addEnvironment('TODOS_TABLE', todosTable.tableName);
    todosLambda.addEnvironment(
      'TODOS_TITLE_YEAR_INDEX',
      'Todos-Title-Year-Index'
    );
    todosLambda.addEnvironment('TODOS_YEAR_INDEX', 'Todos-Year-Index');
    // Add lambda as data source
    const lambdaDs = appsyncApi.addLambdaDataSource(
      'lambdaDatasource',
      todosLambda
    );

    // Resolvers
    lambdaDs.createResolver('getTodosQuery', {
      typeName: 'Query',
      fieldName: 'getTodos',
    });
    lambdaDs.createResolver('getTodoByUsernameQuery', {
      typeName: 'Query',
      fieldName: 'getTodoByUsername',
    });
    lambdaDs.createResolver('getTodoByUsernameAndTitleQuery', {
      typeName: 'Query',
      fieldName: 'getTodoByUsernameAndTitle',
    });
    lambdaDs.createResolver('getTodoByUsernameAndIdQuery', {
      typeName: 'Query',
      fieldName: 'getTodoByUsernameAndId',
    });
    lambdaDs.createResolver('getTodosByUsernameAndYearQuery', {
      typeName: 'Query',
      fieldName: 'getTodosByUsernameAndYear',
    });
    lambdaDs.createResolver('getTodosByYearAndTitleQuery', {
      typeName: 'Query',
      fieldName: 'getTodosByYearAndTitle',
    });
    lambdaDs.createResolver('addTodoMutation', {
      typeName: 'Mutation',
      fieldName: 'addTodo',
    });
    lambdaDs.createResolver('updateTodoMutation', {
      typeName: 'Mutation',
      fieldName: 'updateTodo',
    });
    lambdaDs.createResolver('deleteTodoMutation', {
      typeName: 'Mutation',
      fieldName: 'deleteTodo',
    });
  }
}
