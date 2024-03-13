import React, { useState } from 'react';

const TodoItem = ({ todo, index, dispatch }) => {
  const [editing, setEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleInputChange = (event) => {
    setNewText(event.target.value);
  };

  const handleSave = () => {
    dispatch({ type: 'EDIT_TODO', payload: { index, newText } });
    setEditing(false);
  };

  return (
    <div className="todo-item">
      {!editing ? (
        <>
          <input
            type="checkbox"
            checked={todo.isComplete}
            onChange={() => dispatch({ type: 'TOGGLE_TODO', payload: index })}
          />
          <span className={todo.isComplete ? 'complete' : ''}>{todo.text}</span>
          <button onClick={() => setEditing(true)} disabled={todo.isComplete}>
            Edit
          </button>
          <button onClick={() => dispatch({ type: 'DELETE_TODO', payload: index })} disabled={!todo.isComplete}>
            Delete
          </button>
        </>
      ) : (
        <>
          <input type="text" value={newText} onChange={handleInputChange} />
          <button onClick={handleSave}>Save</button>
        </>
      )}
    </div>
  );
};

export default TodoItem;