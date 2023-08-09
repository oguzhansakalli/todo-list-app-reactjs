import React from 'react';
import './TodoItem.css';

function TodoItem({ text, onDelete, onToggleComplete, completed }) {
    const iconSize = "50px";
    return (
        <li className={completed ? 'completed' : ''}>
          <img
            src="images/quest-icon.png"
            alt="Quest"
            className="icon"
            style={{ width: iconSize, height: iconSize }}
          />
          <span className={`task-text ${completed ? 'completed' : ''}`}>{text}</span>
          <button className="icon-button" onClick={onToggleComplete}>
            <img
              src={completed ? 'images/undo-icon.png' : 'images/complete-icon.png'}
              alt={completed ? 'Undo' : 'Complete'}
              style={{ width: iconSize, height: iconSize }}
            />
          </button>
          <button className="icon-button" onClick={onDelete}>
            <img src="images/delete-icon.png" alt="Delete" style={{ width: iconSize, height: iconSize }} />
          </button>
        </li>
      );
  }
  

export default TodoItem;
