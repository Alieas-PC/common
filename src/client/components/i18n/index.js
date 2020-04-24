import i18n from 'i18next';
import {
  initReactI18next,
  useTranslation,
  withTranslation,
  I18nextProvider
} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const initI18n = (supportedLanguages, opts) => {
  opts = opts || { autoDetect: false, fallback: 'en-US' };

  const instance = i18n.use(initReactI18next);

  if (opts.autoDetect) {
    instance.use(LanguageDetector);
  }

  instance.init({
    debug: false,
    resources: supportedLanguages,
    fallbackLng: opts.fallback || 'en-US'
  });
};

export { i18n, useTranslation, withTranslation, I18nextProvider, initI18n };
