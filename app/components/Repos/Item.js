import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ item }) => (
  <div className="card-body">
    <h5 className="card-text">{item}</h5>
  </div>
);

Item.propTypes = {
  item: PropTypes.string,
};

export default Item;
