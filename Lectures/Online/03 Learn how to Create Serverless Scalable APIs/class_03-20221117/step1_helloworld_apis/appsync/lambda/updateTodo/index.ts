type Todo = {
  id: string;
  title: string;
  done: boolean;
};
function updateTodo(todo: Todo): Todo {
  console.log('update mutation started');
  return todo;
}
export default updateTodo;
