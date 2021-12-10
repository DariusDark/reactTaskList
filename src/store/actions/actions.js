export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const TASK_COMPLETE = 'TASK_COMPLETE';
export const EDIT_TASK_VALUE = 'EDIT_TASK_VALUE';
export const TOGGLE_DIALOG_SCREEN = 'TOGGLE_DIALOG_SCREEN';
export const REMOVE_DIALOG_SCREEN = 'REMOVE_DIALOG_SCREEN';

export const addTask = (content) => {
    return {
        type: ADD_TASK,
        payload: { content }
    }
}

export const deleteTask = (id) => {
    return {
        type: DELETE_TASK,
        payload: { id }
    }
}

export const editTask = (id) => {
    return {
        type: EDIT_TASK,
        payload: { id }
    }
}

export const editTaskValue = (value) => {
    return {
        type: EDIT_TASK_VALUE,
        payload: { value }
    }
}

export const taskComplete = (id) => {
    return {
        type: TASK_COMPLETE,
        payload: { id }
    }
}

export const toggleDialogScreen = (id) => {
    return {
        type: TOGGLE_DIALOG_SCREEN,
        payload: { id }
    }
}

export const removeDialogScreen = () => {
    return {
        type: REMOVE_DIALOG_SCREEN,
        payload: {}
    }
}