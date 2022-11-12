import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class ApigatewayStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create a Lambda function
    const lambdaFnRestApi = new cdk.aws_lambda.Function(this, 'restApiLambda', {
      functionName: 'restApiLambda',
      runtime: cdk.aws_lambda.Runtime.NODEJS_14_X,
      code: cdk.aws_lambda.Code.fromAsset('lambda'),
      handler: 'index.handler',
    });

    // Rest Api suing Api Gateway
    const api = new cdk.aws_apigateway.LambdaRestApi(this, 'restApi', {
      handler: lambdaFnRestApi,
      proxy: false,
    });

    // Add resources and methods to the api
    const items = api.root.addResource('items');
    items.addMethod('GET');
    items.addMethod('POST');

    // Add resources and methods to a resource
    const item = items.addResource('{item}');
    item.addMethod('GET');
  }
}
