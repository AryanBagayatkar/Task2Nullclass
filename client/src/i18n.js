import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import EN from './locals/en/translation.json';
import ES from './locals/es/translation.json';
import HI from './locals/hi/translation.json';
import PT from './locals/pt/translation.json';
import ZH from './locals/zh/translation.json';
import FR from './locals/fr/translation.json';


const resources = {
  en: { translation: EN },
  es: { translation: ES },
  hi: { translation: HI },
  pt: { translation: PT },
  zh: { translation: ZH },
  fr: { translation: FR }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n
