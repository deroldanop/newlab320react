import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, dispatch }) => {
  return (
    <div className="todo-list">
      {todos.map((todo, index) => (
        <TodoItem key={index} index={index} todo={todo} dispatch={dispatch} />
      ))}
    </div>
  );
};

export default TodoList;