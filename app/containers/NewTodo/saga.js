import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { ADD_TODO, ADD_TODO_SUCCESS, ADD_TODO_ERROR } from './constants';
import { postTodo } from './api';

export function* addTodo(todo) {
  try {
    const response = yield call(postTodo, todo);
    if (response.status === 200) {
      yield put({ type: ADD_TODO_SUCCESS, todos: response.data });
      yield put(push('/'));
      window.location.reload();
    }
  } catch (e) {
    yield put({ type: ADD_TODO_ERROR, error: e.message });
  }
}

export default function* createTodoSaga() {
  yield takeLatest(ADD_TODO, addTodo);
}
