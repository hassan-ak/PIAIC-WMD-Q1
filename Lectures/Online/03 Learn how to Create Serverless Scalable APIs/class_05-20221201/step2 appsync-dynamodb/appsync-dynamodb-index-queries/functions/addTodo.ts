const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({ apiVersion: '2012-08-10' });
import { Todo } from './types';

async function addTodo(todo: Todo) {
  const params = {
    TableName: process.env.TODOS_TABLE!,
    Item: todo,
  };
  try {
    await docClient.put(params).promise();
    return todo;
  } catch (err) {
    console.log('DynamoDB error: ', err);
    return null;
  }
}

export default addTodo;
