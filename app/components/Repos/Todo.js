import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ id, task }) => (
  <ul key={id}>
    <li>{task}</li>
  </ul>
);

Todo.propTypes = {
  id: PropTypes.number,
  task: PropTypes.string,
};

export default Todo;
