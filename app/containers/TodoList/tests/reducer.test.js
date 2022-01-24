// import produce from 'immer';
import todoListReducer, { initialState } from '../reducer';
import { FETCH_TODOS, FETCH_TODOS_SUCCESS } from '../constants';

/* eslint-disable default-case, no-param-reassign */
describe('todoListReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      todos: {},
      isLoading: true,
      error: null,
    };
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(todoListReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the FETCH_TODOS action', () => {
    const action = { type: FETCH_TODOS };
    const expectedResult = { ...initialState, isLoading: true };
    expect(todoListReducer(initialState, action)).toEqual(expectedResult);
  });

  it('should handle the FETCH_TODOS_SUCCESS action', () => {
    const todo = 'testing';
    const action = {
      type: FETCH_TODOS_SUCCESS,
      todos: todo,
    };
    const expectedResult = { ...initialState, todos: todo, isLoading: false };
    expect(todoListReducer(initialState, action)).toEqual(expectedResult);
  });

  /**
   * Example state change comparison
   *
   * it('should handle the someAction action correctly', () => {
   *   const expectedResult = produce(state, draft => {
   *     draft.loading = true;
   *     draft.error = false;
   *     draft.userData.nested = false;
   *   });
   *
   *   expect(appReducer(state, someAction())).toEqual(expectedResult);
   * });
   */
});
