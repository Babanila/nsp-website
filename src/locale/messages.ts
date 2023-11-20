import { defineMessages } from '@formatjs/intl';

export const errorMessages = defineMessages({
  bug: {
    id: 'errors.bug.text',
    description: "Bug error message shown when something failed because there's a bug",
    defaultMessage: 'Oops! Something went wrong.',
  },
  generic: {
    id: 'errors.generic.text',
    description: 'General error message shown when something failed out of our control',
    defaultMessage: 'Something went wrong. Please reload this page and try again.',
  },
});

export const generalMessages = defineMessages({
  greetings: {
    id: 'message.greetings.text',
    description: 'Greetings using ones name.',
    defaultMessage: 'Hello, {name}',
  },
});
