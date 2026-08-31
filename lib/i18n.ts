import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { resources } from './translations';

if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .init({
      resources,
      lng: 'en', // default language
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false, // react already safes from xss
      },
      react: {
        useSuspense: false, // disable suspense for SSR compatibility
      },
    });
}

export default i18n;
