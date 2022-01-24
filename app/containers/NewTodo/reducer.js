/*
 *
 * NewTodo reducer
 *
 */

import { ADD_TODO, ADD_TODO_SUCCESS, ADD_TODO_ERROR } from './constants';

export const initialState = {
  todos: [],
  error: null,
};

/* eslint-disable default-case, no-param-reassign */
const addTodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todo: action.todo };

    case ADD_TODO_SUCCESS:
      return { ...state };

    case ADD_TODO_ERROR:
      return { ...state, error: action.error };

    default:
      return state;
  }
};

export default addTodoReducer;
