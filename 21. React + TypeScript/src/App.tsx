import { useState } from 'react';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  function addTodoHandler(text: string) {
    const newTodo = new Todo(text);
    setTodos(oldTodos => {
      return oldTodos.concat(newTodo);
    });
  }

  function removeTodoHandler(id: string) {
    setTodos((prevState) => {
      return prevState.filter(todo => todo.id !== id);
    })
  }

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos onRemoveTodo={removeTodoHandler} items={todos} />
    </div>
  );
}

export default App;
