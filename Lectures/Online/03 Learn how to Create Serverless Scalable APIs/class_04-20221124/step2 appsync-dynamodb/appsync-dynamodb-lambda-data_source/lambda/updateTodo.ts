const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

type Params = {
  TableName: string | undefined;
  Key: string | {};
  UpdateExpression: string;
  ExpressionAttributeNames: any;
  ExpressionAttributeValues: any;
  ReturnValues: string;
};

async function updateTodo(todo: any) {
  let params: Params = {
    TableName: process.env.TODOS_TABLE,
    Key: {
      id: todo.id,
    },
    UpdateExpression: '',
    ExpressionAttributeNames: {},
    ExpressionAttributeValues: {},
    ReturnValues: 'ALL_NEW',
  };
  let prefix = 'set ';
  let attributes = Object.keys(todo);

  for (let i = 0; i < attributes.length; i++) {
    //{
    let attribute = attributes[i];
    if (attribute !== 'id') {
      params['UpdateExpression'] +=
        prefix + '#' + attribute + ' = :' + attribute;
      params['ExpressionAttributeNames']['#' + attribute] = attribute;
      params['ExpressionAttributeValues'][':' + attribute] = todo[attribute];
      prefix = ', ';
    }
  }

  try {
    const updatedTodo = await docClient.update(params).promise();
    // return updatedTodo;
    return updatedTodo.Attributes;
  } catch (err) {
    console.log('DynamoDB error: ', err);
    return null;
  }
}

export default updateTodo;
