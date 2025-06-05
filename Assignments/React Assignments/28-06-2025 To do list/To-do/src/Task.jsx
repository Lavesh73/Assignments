import React, { useState } from "react";

function Task() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null); // Track which item is in edit mode

  function handleInputChange(event) {
    setInput(event.target.value);
  }

  function handleAdd() {
    if (input.trim() === "") return;
    setTodos([...todos, input]);
    setInput("");
  }

  function handleEdit(index) {
    setEditIndex(index); // Mark the clicked item for edit mode
  }

  function deleteTask(index) {
    const filteredTodos = todos.filter((_, i) => i !== index);
    setTodos(filteredTodos);
    setEditIndex(null); // Exit edit mode after delete
  }

  return (
    <div>
      <h1>Simple To-Do List</h1>
      <div>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Enter a to-do item"
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <ul>
        {todos.map((item, index) => (
          <li key={index}>
            {item}{" "}
            <button onClick={() => handleEdit(index)}>Edit</button>
            {editIndex === index && (
              <button onClick={() => deleteTask(index)}>Delete</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Task;
