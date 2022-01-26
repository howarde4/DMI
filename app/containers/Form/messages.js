import { defineMessages } from 'react-intl';

export const scope = 'app.components.Form';

export default defineMessages({
  save: {
    id: `${scope}.header.saveBtn`,
    defaultMessage: 'Save',
  },
  back: {
    id: `${scope}.header.backBtn`,
    defaultMessage: 'Back',
  },
  label: {
    id: `${scope}.header.label`,
    defaultMessage: 'Task:',
  },
});
