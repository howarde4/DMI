/*
 * Header Messages
 *
 * This contains all the text for the Header component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.components.Header';

export default defineMessages({
  todos: {
    id: `${scope}.header.todosLink`,
    defaultMessage: 'To Dos',
  },
  addTodo: {
    id: `${scope}.header.addTodoLink`,
    defaultMessage: 'Add a To Do',
  },
});
