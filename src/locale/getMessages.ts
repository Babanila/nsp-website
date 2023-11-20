import messagesEn from '../locales/messages/en.json';
import messagesDe from '../locales/messages/de.json';

export type Locale = 'en' | 'de';

export const getMessages = (locale: Locale) => {
  switch (locale) {
    case 'de':
      return { ...messagesDe };
    default:
      return { ...messagesEn };
  }
};
