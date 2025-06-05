import React, { useState } from 'react';

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() === '') return; 
    setTasks([...tasks, newTask]);
    setNewTask('');
  };
  return (
    <div>
      <h2>To-Do List</h2>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
          placeholder="Add a task..."
        />
        <button onClick={addTask}>Add</button>
      </div>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span>{task}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;