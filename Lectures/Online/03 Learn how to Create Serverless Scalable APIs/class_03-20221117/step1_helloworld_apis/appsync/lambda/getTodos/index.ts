function getTodos() {
  type Todo = {
    id: String;
    title: string;
    done: boolean;
  };
  const todos: Todo[] = [
    { title: 'todo1', done: false, id: '1' },
    { title: 'todo2', done: true, id: '2' },
  ];
  return todos;
}
export default getTodos;
