type Todo = {
  id: string;
  title: string;
  done: boolean;
};
function addTodo(todo: Todo): Todo {
  console.log('add mutation started');
  return todo;
}
export default addTodo;
