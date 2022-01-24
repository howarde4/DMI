/*
 *
 * TodoList actions
 *
 */

import { FETCH_TODOS, FETCH_TODOS_SUCCESS } from './constants';

export function getTodos() {
  return {
    type: FETCH_TODOS,
  };
}

export function getTodosSuccess({ data }) {
  return {
    type: FETCH_TODOS_SUCCESS,
    todos: { data },
  };
}
