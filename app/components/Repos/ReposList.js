import React from 'react';
import PropTypes from 'prop-types';
import Spinner from './Loading';
import List from './List';
import Item from './Item';
import Todo from './Todo';

const ReposList = ({ loading, error, items }) => {
  if (loading) {
    return <List component={Spinner} />;
  }

  if (error) {
    const ErrorComponent = () => (
      <Item item="Something went wrong, please try again!" />
    );
    return <List component={ErrorComponent} />;
  }

  if (items.length === 0) {
    const ItemComponent = () => <Item item="Add a to do!" />;
    return <List component={ItemComponent} />;
  }

  return <List items={items} component={Todo} />;
};

ReposList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  items: PropTypes.array,
};

export default ReposList;
