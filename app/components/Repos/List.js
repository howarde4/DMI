import React from 'react';
import PropTypes from 'prop-types';

const List = ({ items, component }) => {
  const ComponentToRender = component;
  let content = <div />;

  if (items) {
    content = items.map(todo => (
      <ComponentToRender id={todo.id} key={todo.id} task={todo.todo} />
    ));
  } else {
    content = <ComponentToRender />;
  }
  return (
    <div className="card" style={{ width: '22rem', margin: '2rem' }}>
      <div className="card-body">
        <h5 className="card-text">{content}</h5>
      </div>
    </div>
  );
};

List.propTypes = {
  items: PropTypes.array,
  component: PropTypes.elementType,
};

export default List;
