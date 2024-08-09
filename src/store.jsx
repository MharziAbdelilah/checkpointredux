import { createStore } from 'redux';

// Initial State
const initialState = {
  tasks: []
};

// Actions
const ADD_TASK = 'ADD_TASK';
const EDIT_TASK = 'EDIT_TASK';
const TOGGLE_TASK = 'TOGGLE_TASK';

// Action Creators
export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task
});

export const editTask = (id, description) => ({
  type: EDIT_TASK,
  payload: { id, description }
});

export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  payload: id
});

// Reducer
const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      };
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id ? { ...task, description: action.payload.description } : task
        )
      };
    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload ? { ...task, isDone: !task.isDone } : task
        )
      };
    default:
      return state;
  }
};

// Create Store
const store = createStore(taskReducer);

export default store;
