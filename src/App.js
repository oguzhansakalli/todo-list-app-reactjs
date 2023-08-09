import React, { useState } from "react";
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todoText) => {
    const newTodo = { text: todoText, completed: false };
    setTodos([...todos, newTodo]);
  };

  const onDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const onToggleComplete = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };
  // Other functions for marking tasks done, deleting tasks, etc.

  return (
    <div className="App">
    <div className="header">Todo List</div>
    <div className="tasks-group">
      <TodoList
        todos={todos}
        onDeleteTodo={onDeleteTodo}
        onToggleComplete={onToggleComplete}
      />
      <AddTodo addTodo={addTodo} />
    </div>
  </div>
  );

}

export default App;
