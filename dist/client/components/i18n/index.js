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

var _i18next = _interopRequireDefault(require("i18next"));

var _reactI18next = require("react-i18next");

var _i18nextBrowserLanguagedetector = _interopRequireDefault(require("i18next-browser-languagedetector"));

var _enUs = _interopRequireDefault(require("./en-us"));

var _zhCn = _interopRequireDefault(require("./zh-cn"));

_i18next["default"].use(_reactI18next.initReactI18next).use(_i18nextBrowserLanguagedetector["default"]).init({
  debug: false,
  resources: {
    'en-US': _enUs["default"],
    'zh-CN': _zhCn["default"]
  },
  fallbackLng: 'en-US'
});