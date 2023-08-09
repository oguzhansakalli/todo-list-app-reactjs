import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

function TodoList({ todos, onDeleteTodo, onToggleComplete }) {
    return (
      <ul>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            text={todo.text}
            completed={todo.completed}
            onDelete={() => onDeleteTodo(index)}
            onToggleComplete={() => onToggleComplete(index)}
          />
        ))}
      </ul>
    );
  }

export default TodoList;
