import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoBUtton';
import './App.css';
import React from 'react';

const defaultTodos = [
  { text: "Tomar Curso Basico de React", completed: false},
  { text: "Cortar Cebolla", completed: true},
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter
        completed={3}
        total={7}
      />
      <TodoSearch/>

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem 
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton/>
    </React.Fragment>
  );
}

export default App;
