import React, { useState } from "react";
import "./AddTodo.css";

function AddTodo({ addTodo }) {
  const [showInput, setShowInput] = useState(false);
  const [newTask, setNewTask] = useState("");

  const handleInputToggle = () => {
    setShowInput(!showInput);
    setNewTask("");
  };

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleInputSubmit = (event) => {
    if (event.key === "Enter" && newTask.trim() !== "") {
      addTodo(newTask);
      setNewTask("");
      setShowInput(false); // Hide the input after adding a task
    }
  };

  return (
    <div className="add-task">
      {!showInput ? (
        <button className="add-button" onClick={handleInputToggle}>
          <img src="images/new-task.png" alt="Add New Task" />
        </button>
      ) : (
        <div>
          <img src="images/quest-icon.png" alt="Quest" className="icon" />
          <input
            type="text"
            className="task-input"
            placeholder="Enter a new task"
            value={newTask}
            onChange={handleInputChange}
            onKeyPress={handleInputSubmit}
            autoFocus
          />
        </div>
      )}
    </div>
  );
}

export default AddTodo;
