import {initReactI18next} from 'react-i18next';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import ar from './ar/translation.json';
import en from './en/translation.json';

export const resources = {
  en: {translation: en},
  ko: {translation: ar},
};

export const defaultNS = 'translation';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    returnNull: false,
    fallbackLng: 'en',
    debug: true,
    supportedLngs: ['en', 'ar'],
    ns: ['translation'],
    defaultNS,
    load: 'languageOnly',
    nonExplicitSupportedLngs: true,
    interpolation: {
      escapeValue: false,
    },
    resources,
  });

export default i18n;
