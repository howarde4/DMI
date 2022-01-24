/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import TodoList from '../TodoList/index';
import H1 from '../../components/h1';

export default function HomePage() {
  return (
    <main>
      <H1>To Do List!</H1>
      <TodoList />
    </main>
  );
}
