/**
 *
 * NewTodo
 *
 */

import React from 'react';
import { useDispatch } from 'react-redux';
import { useInjectSaga } from '../../utils/injectSaga';
import { addTodo } from './actions';
import H1 from '../../components/h1';
import TodoForm from './todoForm';
import saga from './saga';

const key = 'addTodoKey';

export default function NewTodo() {
  useInjectSaga({ key, saga });

  const dispatch = useDispatch();

  function add(todo) {
    dispatch(addTodo(todo));
  }

  return (
    <main>
      <H1>New to do!</H1>
      <TodoForm save={add} />
    </main>
  );
}
