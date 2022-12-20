import { Todo } from './types';
import addTodo from './addTodo';
import getTodos from './getTodos';
import deleteTodo from './deleteTodo';
import updateTodo from './updateTodo';
import { getTodoByUsername } from './getTodoByUsername';
import { getTodoByUsernameAndId } from './getTodoByUsernameAndId';
import { getTodosByYearAndTitle } from './getTodosByYearAndTitle';
import { getTodoByUsernameAndTitle } from './getTodoByUsernameAndTitle';
import { getTodosByUsernameAndYear } from './getTodosByUsernameAndYear';

type AppSyncEvent = {
  info: {
    fieldName: string;
  };
  arguments: {
    todo: Todo;
    username: string;
    input: any;
  };
};

exports.handler = async (event: AppSyncEvent) => {
  switch (event.info.fieldName) {
    case 'addTodo':
      return await addTodo(event.arguments.todo);
    case 'getTodos':
      return await getTodos();
    case 'getTodoByUsername':
      return await getTodoByUsername(event.arguments.username);
    case 'getTodoByUsernameAndTitle':
      return await getTodoByUsernameAndTitle(event.arguments.input);
    case 'getTodoByUsernameAndId':
      return await getTodoByUsernameAndId(event.arguments.input);
    case 'getTodosByUsernameAndYear':
      return await getTodosByUsernameAndYear(event.arguments.input);
    case 'getTodosByYearAndTitle':
      return await getTodosByYearAndTitle(event.arguments.input);
    case 'deleteTodo':
      return await deleteTodo(event.arguments.input);
    case 'updateTodo':
      return await updateTodo(event.arguments.todo);
    default:
      return null;
  }
};
