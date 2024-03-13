import React, { useState, useReducer } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { todoReducer } from './components/TodoReducer';

function App() {
  const [todos, dispatch] = useReducer(todoReducer, []);

  return (
    <div className="app">
      <h1>Todo List</h1>
      <TodoForm dispatch={dispatch} />
      <TodoList todos={todos} dispatch={dispatch} />
    </div>
  );
}

export default App;
