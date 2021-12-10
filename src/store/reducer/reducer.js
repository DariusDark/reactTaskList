import {
    ADD_TASK,
    DELETE_TASK,
    EDIT_TASK,
    TASK_COMPLETE,
    EDIT_TASK_VALUE,
    TOGGLE_DIALOG_SCREEN,
    REMOVE_DIALOG_SCREEN
} from '../actions/actions.js';
const empty = {
    id: 0,
    content: '',
};

const defaultState = {
    tasks: [
        {
            uniqueId: '128h212',
            id: 1,
            content: 'Hello World',
            completed: false,
            dialogScreen: false,
        }
    ],
    edited: empty,
};

export const taskReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return addTask(state, action)
        case EDIT_TASK:
            return editTask(state, action)
        case DELETE_TASK:
            return deleteTask(state, action)
        case TASK_COMPLETE:
            return completeTask(state, action)
        case EDIT_TASK_VALUE:
            return editTaskValue(state, action)
        case TOGGLE_DIALOG_SCREEN:
            return toggleDialogScreen(state, action);
        case REMOVE_DIALOG_SCREEN: 
            return removeDialogScreen(state, action);
        default:
            return state
    }
};

const removeDialogScreen = (state, action) => {
    const { tasks } = state;
    tasks.map(item => item.dialogScreen = false);
    console.log(tasks);
    return {
        ...state,
        tasks: [...tasks]
    };
}

const toggleDialogScreen = (state, action) => {
    const { tasks } = state;
    return {
        ...state,
        tasks: tasks.map((item) => {
            if (item.id !== action.payload.id) {
                return item;
            }
            item.dialogScreen = !item.dialogScreen
            return item
        })
    };
}

const addTask = (state, action) => {
    const { edited, tasks } = state;

    const task = {
        ...edited,
        id: tasks.length + 1,
        uniqueId: Date.now(),
        completed: false,
        dialogScreen: false,
    }

    if (edited?.id === 0) {
        return {
            ...state,
            tasks: [...tasks, { ...task }],
            edited: empty
        }
    } else {
        return {
            ...state,
            tasks: tasks.map(item => {
                if (item.id !== edited.id) {
                    return item;
                }
                return { ...edited };
            }),
            edited: empty
        }
    }
}

const editTaskValue = (state, action) => {
    const { edited } = state;
    const { payload: { value } } = action;
    return {
        ...state,
        edited: { ...edited, content: value }
    }
}
const editTask = (state, action) => {
    const { tasks } = state;
    const currTask = tasks.filter(item => item.id === action.payload.id);
    return {
        ...state,
        edited: { ...currTask[0] }
    };
}
const deleteTask = (state, action) => {
    const { tasks } = state;
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === action.payload.id) {
            tasks.splice(i, 1);
            return {
                ...state,
                tasks: [...tasks],
                edited: empty
            };
        }
    }
}
const completeTask = (state, action) => {
    const { tasks } = state;

    for (let item of tasks) {
        if (item.id === action.payload.id) {
            item.completed = true;
            return {
                ...state,
                tasks: [...tasks]
            };
        }
    }
}