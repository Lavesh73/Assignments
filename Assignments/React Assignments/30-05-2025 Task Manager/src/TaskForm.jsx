import React, { useState } from "react";
function TaskForm({ onAdd }) {
  const [todo, setTodo] = useState("");
  const [userId, setUserId] = useState("");
  function handleAddClick() {
    if (todo.trim() === "" || userId.trim() === "") return;
    const newTask = {
      id: Date.now(),
      todo: todo.trim(),
      userId: parseInt(userId),
      completed: false,
    };
    onAdd(newTask);
    setTodo("");
    setUserId("");
  }
  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Enter task"
        value={todo}
        onChange={(x) => setTodo(x.target.value)}
        style={{ marginRight: "10px" }}
      />
      <input
        type="number"
        placeholder="User ID"
        value={userId}
        onChange={(x) => setUserId(x.target.value)}
        style={{ marginRight: "10px" }}
      />
      <button onClick={handleAddClick}>Add Task</button>
    </div>
  );
}
export default TaskForm;
