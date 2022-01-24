/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import NewTodo from '../NewTodo/index';
import Button from '../../components/button';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <header>
        <nav className="nav">
          <NavLink className="nav-link" exact to="/">
            <Button>To Dos</Button>
          </NavLink>
          <NavLink className="nav-link" exact to="/new">
            <Button primary>Add a To Do</Button>
          </NavLink>
        </nav>
      </header>

      <Switch>
        <Route exact path="/new" component={NewTodo} />
        <Route exact path="/" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
