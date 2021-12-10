import React from 'react';
import './Taskbox.css';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, editTaskValue } from '../../store/actions/actions';
function Taskbox() {
    const dispatch = useDispatch();
    const edited = useSelector(state => state.edited);
    function handleChange(event) {
        const value = event.target.value;
        dispatch(editTaskValue(value));
    }

    function mouseMoveHandler(event) {
        const submitBtn = document.getElementById('submitBtn');
        const x = event.pageX - submitBtn.offsetLeft;
        const y = event.pageY - submitBtn.offsetTop;

        submitBtn.style.setProperty('--y', y + 'px');
        submitBtn.style.setProperty('--x', x + 'px');
    }
    function clickHandler(event) {
        event.preventDefault();
        const trimedValue = edited.content.trim();
        
        if (trimedValue !== '') {
            dispatch(addTask());
        }
    }
    return (
        <div className="taskbox__container">
            <div className="taskbox__input-body">
                <input
                    className="taskbox__input"
                    name="tasktext"
                    type="text"
                    placeholder="Enter new task"
                    autoComplete="off"
                    required
                    onInput={handleChange}
                    value={edited.content}
                />
            </div>
            <div className="taskbox__button-body">
                <button onMouseMove={mouseMoveHandler} onClick={clickHandler} className="taskbox__button" id="submitBtn" type="submit">
                    <span className="taskbox__button-text">
                        Submit
                    </span>
                </button>
            </div>
        </div>
    )
}

export default Taskbox
