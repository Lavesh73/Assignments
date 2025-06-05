import React from "react";
function TaskItem({ task, onDelete, onToggle }) {
  return (
    <div
      style={{
        marginBottom: "10px",
        borderBottom: "1px solid #444",
        padding: "5px",
      }}
    >
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        style={{ marginRight: "10px" }}
      />
      <strong>{task.todo}</strong> (User: {task.userId})
      <button onClick={() => onDelete(task.id)} style={{ marginLeft: "10px" }}>
        Delete
      </button>
    </div>
  );
}
export default TaskItem;
