/*
 * NewTodo Messages
 *
 * This contains all the text for the NewTodo container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.NewTodo';

export default defineMessages({
  newTodo: {
    id: `${scope}.header`,
    defaultMessage: 'New to do!',
  },
});
