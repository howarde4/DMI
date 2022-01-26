import { takeLatest, call, put } from 'redux-saga/effects';
import {
  FETCH_TODOS,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_ERROR,
} from './constants';
import { fetchTodos } from './api';

export function* getTodosSaga() {
  try {
    const response = yield call(fetchTodos);
    yield put({ type: FETCH_TODOS_SUCCESS, todos: response.data });
  } catch (e) {
    yield put({ type: FETCH_TODOS_ERROR, error: e.message });
  }
}

export default function* todoSaga() {
  yield takeLatest(FETCH_TODOS, getTodosSaga);
}
