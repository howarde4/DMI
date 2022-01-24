/*
 * TodoList Messages
 *
 * This contains all the text for the TodoList container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.TodoList';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the TodoList container!',
  },
});
