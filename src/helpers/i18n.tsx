import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'react-native-localize';

// Import your translations
import en from './translations/en.json';
import hi from './translations/hi.json';
import te from './translations/te.json';
import kn from './translations/kn.json';
import ta from './translations/ta.json';
import mr from './translations/mr.json';
import gu from './translations/gu.json';

export const resources = {
  en: { translation: en },
  hi: { translation: hi },
  te: { translation: te },
  kn: { translation: kn },
  ta: { translation: ta },
  mr: { translation: mr },
  gu: { translation: gu },
};

// Configure i18next
i18next
  .use(initReactI18next)
  .init({
    resources,
    compatibilityJSON: 'v3',
    lng: Localization.getLocales()[0]?.languageCode, // Set the default language based on device locale
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;