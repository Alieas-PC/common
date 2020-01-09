import i18n from 'i18next';
import {
  initReactI18next,
  useTranslation,
  withTranslation,
  I18nextProvider
} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enUS from './en-us';
import zhCN from './zh-cn';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    debug: false,
    resources: {
      'en-US': enUS,
      'zh-CN': zhCN
    },
    fallbackLng: 'en-US'
  });

export { i18n, useTranslation, withTranslation, I18nextProvider };
