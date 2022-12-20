const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({ apiVersion: '2012-08-10' });
import { deleteTodoInput } from './types';

async function deleteTodo(input: deleteTodoInput) {
  const { title, username } = input;
  const params = {
    TableName: process.env.TODOS_TABLE!,
    Key: {
      username: username,
      title: title,
    },
  };
  try {
    await docClient.delete(params).promise();
    return 'deleted';
  } catch (err) {
    console.log('DynamoDB error: ', err);
    return null;
  }
}

export default deleteTodo;
