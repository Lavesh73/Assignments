import React from 'react';
import { useState } from 'react'
import Todo from './Todo';
import './App.css';
import ToDoList from './Simple-to-do'
export default function App() {
  return (
    <div className="App">
      {/* <Todo /> */}
       <ToDoList />
    </div>
  );
}