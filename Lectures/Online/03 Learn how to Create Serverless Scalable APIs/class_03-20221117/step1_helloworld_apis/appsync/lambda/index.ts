import { AppSyncResolverEvent } from 'aws-lambda';
import addTodo from './addTodo';
import getTodos from './getTodos';
import updateTodo from './updateTodo';

export async function handler(event: AppSyncResolverEvent<any>) {
  console.log('Event : ', event);
  switch (event.info.fieldName) {
    case 'getTodos':
      return getTodos();
    case 'addTodo':
      return addTodo(event.arguments.todo);
    case 'updateTodo':
      return updateTodo(event.arguments);
    default:
      return null;
  }
}
