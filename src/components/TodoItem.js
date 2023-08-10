import React from 'react';
import './TodoItem.css';

function TodoItem({ text, onDelete, onToggleComplete, completed }) {
    return (
        <li className={completed ? 'completed' : ''}>
          <img
            src="images/quest-icon.png"
            alt="Quest"
            className="icon"
          />
          <span className={`task-text ${completed ? 'completed' : ''}`}>{text}</span>
          <button className="icon-button" onClick={onToggleComplete}>
            <img
              src={completed ? 'images/undo-icon.png' : 'images/complete-icon.png'}
              alt={completed ? 'Undo' : 'Complete'}
            />
          </button>
          <button className="icon-button" onClick={onDelete}>
            <img src="images/delete-icon.png" alt="Delete"/>
          </button>
        </li>
      );
  }
  

export default TodoItem;
