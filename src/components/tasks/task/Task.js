import React from 'react';
import './Task.css';
import { useDispatch } from 'react-redux';
import { taskComplete, editTask, deleteTask, toggleDialogScreen } from '../../../store/actions/actions.js';

function Task({ task }) {
    const dispatch = useDispatch();
    
    const handleClick = () => {
        dispatch(toggleDialogScreen(task.id));
    }
    function handleComplete() {
        dispatch(taskComplete(task.id));
    };
    function handleEdit() {
        dispatch(editTask(task.id));
    };
    function handleDelete() {
        dispatch(deleteTask(task.id));
    };
    return (
        <div className={`task__container ${task.completed ? 'completed' : ''}`}>
            <div className="task__number">#{task.id}</div>
            <div className="task__text">{task?.content}</div>
            <div className="task__options" id="options" onClick={handleClick}>
                <div className="task__dots" id="taskDots">
                    <span className="task__dot"></span>
                    <span className="task__dot"></span>
                    <span className="task__dot"></span>
                </div>
                <div className={`task__dialogscreen ${task.dialogScreen ? 'active' : ''}`} id="dialogScreen">
                    <button className="btn btn__complete" id="complete" onClick={handleComplete}>Complete</button>
                    <button className="btn btn__edit" id="edit" onClick={handleEdit}>Edit</button>
                    <button className="btn btn__delete" id="delete" onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default Task