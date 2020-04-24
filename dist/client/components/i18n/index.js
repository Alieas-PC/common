"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "i18n", {
  enumerable: true,
  get: function get() {
    return _i18next["default"];
  }
});
Object.defineProperty(exports, "useTranslation", {
  enumerable: true,
  get: function get() {
    return _reactI18next.useTranslation;
  }
});
Object.defineProperty(exports, "withTranslation", {
  enumerable: true,
  get: function get() {
    return _reactI18next.withTranslation;
  }
});
Object.defineProperty(exports, "I18nextProvider", {
  enumerable: true,
  get: function get() {
    return _reactI18next.I18nextProvider;
  }
});
exports.initI18n = void 0;

var _i18next = _interopRequireDefault(require("i18next"));

var _reactI18next = require("react-i18next");

var _i18nextBrowserLanguagedetector = _interopRequireDefault(require("i18next-browser-languagedetector"));

var initI18n = function initI18n(supportedLanguages, opts) {
  opts = opts || {
    autoDetect: false,
    fallback: 'en-US'
  };

  var instance = _i18next["default"].use(_reactI18next.initReactI18next);

  if (opts.autoDetect) {
    instance.use(_i18nextBrowserLanguagedetector["default"]);
  }

  instance.init({
    debug: false,
    resources: supportedLanguages,
    fallbackLng: opts.fallback || 'en-US'
  });
};

exports.initI18n = initI18n;