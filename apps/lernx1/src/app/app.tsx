import React, { useState } from 'react';
import { Todo } from '@myorg/data';
import { Todos } from '@myorg/ui';

export const App = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { title: 'Todo 4' },
    { title: 'Todo 6' },
  ]);

  function addTodo() {
    setTodos([
      ...todos,
      {
        title: `New todo ${Math.floor(Math.random() * 1000)}`,
      },
    ]);
  }

  return (
    <>
      <h1>Todos1</h1>
      <Todos todos={todos} />
      <button id={'add-todo'} onClick={addTodo}>
        Add Todo
      </button>
    </>
  );
};

export default App;