import React from 'react';
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import Button from '../Button';
import messages from './messages';

const Header = () => {
  const todoBtn = <FormattedMessage {...messages.todos} />;
  const addTodoBtn = <FormattedMessage {...messages.addTodo} />;
  return (
    <header>
      <nav className="nav">
        <NavLink className="nav-link" exact to="/">
          <Button btnType="button" msg={todoBtn} />
        </NavLink>
        <NavLink className="nav-link" exact to="/new">
          <Button btnType="button" msg={addTodoBtn} primary="true" />
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
