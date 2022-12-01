import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as appsync_alpha from '@aws-cdk/aws-appsync-alpha';
import { aws_iam as iam } from 'aws-cdk-lib';

export class AppsyncStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create an appSync API
    const appsyncApi = new appsync_alpha.GraphqlApi(this, 'api', {
      name: 'test Api',
      schema: appsync_alpha.Schema.fromAsset('schema/schema.graphql'),
    });

    // Create a new lambda function
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
    // Define role for datasource
    const role = new iam.Role(this, 'Role', {
      assumedBy: new iam.ServicePrincipal('appsync.amazonaws.com'),
    });

    // Add lambda as data source
    const lambdaDs = new appsync_alpha.LambdaDataSource(
      this,
      'MyLambdaDataSource',
      {
        api: appsyncApi,
        lambdaFunction: lambdaFnAppsync,
        serviceRole: role,
      }
    );

    // Add resolvers
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
  }
}
