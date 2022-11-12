# Rest API using api gateway

## Steps to follow

1. Create a new directory and navigate to it using `mkdir apigateway` and `cd apigateway`
2. Create a new cdk app using `cdk init app --language=typescript`
3. Update '.lib/apigateway-stack.ts' to define a new lambda function.

   ```ts
   const lambdaFnRestApi = new cdk.aws_lambda.Function(this, 'restApiLambda', {
     functionName: 'restApiLambda',
     runtime: cdk.aws_lambda.Runtime.NODEJS_14_X,
     code: cdk.aws_lambda.Code.fromAsset('lambda'),
     handler: 'index.handler',
   });
   ```

4. Update '.lib/apigateway-stack.ts' to define a new api using api gateway.

   ```ts
   const api = new cdk.aws_apigateway.LambdaRestApi(this, 'restApi', {
     handler: lambdaFnRestApi,
     proxy: false,
   });
   ```

5. Create './lambda/index.ts' to define a lambda handler code. before doing so we need to add lambda and its types thus use `npm install -D aws-lambda` and `npm install -D @types/aws-lambda`

   ```ts
   import {
     APIGatewayProxyEvent,
     Context,
     APIGatewayProxyResult,
   } from 'aws-lambda';

   export async function handler(
     event: APIGatewayProxyEvent,
     context: Context
   ): Promise<APIGatewayProxyResult> {
     console.log('===> Event : ', event);
     console.log('===> Context : ', context);

     return {
       statusCode: 200,
       headers: { 'Content-Type': 'test/plain' },
       body: `Hello, Hassan! You have hit ${event.path}`,
     };
   }
   ```

6. Build the app using `npm run build`
7. To verify that everything is working correctly, list the stacks using `cdk ls`
8. Synthesize an AWS CloudFormation template for the app using `cdk synth`
9. Need to bootstrap if deploying for the first time so use `cdk bootstrap aws://ACCOUNT-NUMBER/REGION`, this will create a stack in the cloudformation section on AWS console
10. Deploy the app using `cdk deploy`
11. Deployed stack is available in cloudformation section, lambda function in lambda section and rest api in api gateway section
12. API URL will be available when deployement is complete, use it to test the API
13. Add resources and methods to the api by updating '.lib/apigateway-stack.ts'

    ```ts
    const items = api.root.addResource('items');
    items.addMethod('GET');
    items.addMethod('POST');

    const item = items.addResource('{item}');
    item.addMethod('GET');
    ```

14. Re-deploy by using step 6 to step 10
15. Destroy app using `cdk destroy`
