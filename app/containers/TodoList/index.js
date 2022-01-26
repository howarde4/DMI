/**
 *
 * TodoList
 *
 */

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useInjectSaga } from 'utils/injectSaga';
import ReposList from '../../components/Repos/ReposList';
import { getTodos } from './actions';
import saga from './saga';

export default function TodoList() {
  useInjectSaga({ key: 'todoList', saga });

  const dispatch = useDispatch();
  const todos = useSelector(state => state.todoListReducer.todos);
  const isLoading = useSelector(state => state.todoListReducer.isLoading);
  const errors = useSelector(state => state.todoListReducer.error);

  useEffect(() => {
    function fetchTodo() {
      dispatch(getTodos());
    }
    if (isLoading) {
      fetchTodo();
    }
  }, [dispatch, isLoading]);

  return <ReposList loading={isLoading} error={errors} items={todos} />;
}
