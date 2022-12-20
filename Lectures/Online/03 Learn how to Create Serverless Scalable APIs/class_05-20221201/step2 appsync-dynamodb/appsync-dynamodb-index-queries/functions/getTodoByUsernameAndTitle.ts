const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({ apiVersion: '2012-08-10' });
import { TodoByUsernameAndTitleInput } from './types';

export const getTodoByUsernameAndTitle = async (
  input: TodoByUsernameAndTitleInput
) => {
  const { title, username } = input;
  const params = {
    TableName: process.env.TODOS_TABLE!,
    KeyConditionExpression:
      '#username = :username and begins_with(#title, :title)',
    ExpressionAttributeNames: {
      '#username': 'username',
      '#title': 'title',
    },
    ExpressionAttributeValues: {
      ':username': username,
      ':title': title,
    },
  };
  try {
    const { Items } = await docClient.query(params).promise();
    return Items;
  } catch (err) {
    console.log('DynamoDB error: ', err);
    return null;
  }
};
