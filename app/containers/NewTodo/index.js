/**
 *
 * NewTodo
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch } from 'react-redux';
import { useInjectSaga } from '../../utils/injectSaga';
import { addTodo } from './actions';
import H1 from '../../components/H1';
import messages from './messsages';
import TodoForm from '../Form/index';
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
      <H1>
        <FormattedMessage {...messages.newTodo} />
      </H1>
      <TodoForm save={add} />
    </main>
  );
}
