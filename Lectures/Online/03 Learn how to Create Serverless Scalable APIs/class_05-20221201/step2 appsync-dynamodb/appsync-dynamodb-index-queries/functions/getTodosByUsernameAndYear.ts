const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({ apiVersion: '2012-08-10' });
import { TodosByUsernameAndYearInput } from './types';

export const getTodosByUsernameAndYear = async (
  input: TodosByUsernameAndYearInput
) => {
  const { year, username } = input;
  const params = {
    TableName: process.env.TODOS_TABLE!,
    IndexName: process.env.TODOS_YEAR_INDEX!,
    KeyConditionExpression: '#username = :username and #year = :year',
    ExpressionAttributeNames: {
      '#username': 'username',
      '#year': 'year',
    },
    ExpressionAttributeValues: {
      ':username': username,
      ':year': year,
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
