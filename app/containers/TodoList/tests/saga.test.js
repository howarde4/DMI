/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { takeLatest, call, put } from 'redux-saga/effects';
import todoListSaga, {getTodosSaga} from '../saga';
import fetchTodos from '../api';
import * as api from '../api';
import { FETCH_TODOS } from '../constants';
import getTodos from '../actions';
import { runSaga } from '@redux-saga/core';


const generator = todoListSaga();

describe('todoListSaga Saga', () => {
  it('It should wait for latest FETCH_TODOS action and call api', async () => {
    const dummyTodos = {todo: 'testing'};
    const requestTodos = jest.spyOn(api, 'fetchTodos').mockImplementation(() => Promise.resolve(dummyTodos));
    const dispatched = [];
    const result = await runSaga({
      dispatch: (action) => dispatched.push(action),
    }, getTodosSaga);

    expect(requestTodos).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([getTodos(dummyTodos)]);
    requestTodos.mockClear();
  });

});
