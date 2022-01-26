/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import TodoList from '../TodoList/index';
import H1 from '../../components/H1';
import messages from './messages';

export default function HomePage() {
  return (
    <main>
      <H1>
        <FormattedMessage {...messages.home} />
      </H1>
      <TodoList />
    </main>
  );
}
