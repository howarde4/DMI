/**
 *
 * TodoList
 *
 */

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useInjectSaga } from 'utils/injectSaga';
import { getTodos } from './actions';
import saga from './saga';

export default function TodoList() {
  useInjectSaga({ key: 'todoList', saga });

  const dispatch = useDispatch();
  const todos = useSelector(state => state.todoListReducer.todos);
  const isLoading = useSelector(state => state.todoListReducer.isLoading);

  useEffect(() => {
    function fetchTodo() {
      dispatch(getTodos());
    }
    if (isLoading) {
      fetchTodo();
    }
  }, [dispatch, isLoading]);

  if (isLoading) return <b>Loading...</b>;

  return (
    <div className="card" style={{ width: '22rem', margin: '2rem' }}>
      <div className="card-body">
        <h5 className="card-text">
          {todos &&
            todos.length > 0 &&
            todos.map(todo => (
              <ul key={todo.id}>
                <li>{todo.todo}</li>
              </ul>
            ))}
        </h5>
      </div>
    </div>
  );
}
