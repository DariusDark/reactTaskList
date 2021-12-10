import React from 'react';
import './App.css'
import Taskbox from './components/taskbox/Taskbox.js';
import Tasks from './components/tasks/Tasks.js';

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <Taskbox />
        <Tasks />
      </div>
    </div>
  );
}

export default App;
