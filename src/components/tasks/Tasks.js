import React from 'react';
import './Tasks.css';
import Task from './task/Task.js';
import { useSelector } from 'react-redux';


function Tasks() {
    const tasks = useSelector(state => state.tasks);
    return (
        <div className="tasks__container">

            {tasks.map((item) => <Task
                task={item}
                key={item.uniqueId}
            />)}
        </div>
    )
}

export default Tasks
