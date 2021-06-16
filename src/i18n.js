import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { DateTime } from 'luxon';
import ru from './locales/ru/translation.json'
import en from './locales/en/translation.json'
import de from './locales/de/translation.json'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
      format: (value, format, lng, options) => {
        if (value instanceof Date) {
          return DateTime.fromJSDate(value).setLocale(lng).toLocaleString(DateTime[format])
        }
        return value;
      }
    },
    detection: {
      lookupLocalStorage: 'myI18next'
    },
    resources: {
      ru,
      en,
      de,
    }
  }).then(() => console.log('init i18n'))

export default i18n;