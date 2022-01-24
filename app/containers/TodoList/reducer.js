/*
 *
 * TodoList reducer
 *
 */
import produce from 'immer';
import {
  FETCH_TODOS,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_ERROR,
} from './constants';

export const initialState = {
  todos: {},
  isLoading: true,
  error: null,
};

/* eslint-disable default-case, no-param-reassign */
const todoListReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case FETCH_TODOS:
        return { ...state };

      case FETCH_TODOS_SUCCESS:
        return { ...state, todos: action.todos, isLoading: false };

      case FETCH_TODOS_ERROR:
        return { ...state, todos: null, error: action.error, isLoading: false };

      default:
        return state;
    }
  });

export default todoListReducer;
