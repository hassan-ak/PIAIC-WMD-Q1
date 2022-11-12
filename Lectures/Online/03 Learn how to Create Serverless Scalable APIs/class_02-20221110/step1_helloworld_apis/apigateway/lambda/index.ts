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
