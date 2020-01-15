"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _action = require("./action");

var _store = require("./store");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _default = function _default(context) {
  var store = (0, _store.getStore)();
  var modelAccess = {};
  Object.keys(_action.modelActions).forEach(function (k) {
    modelAccess[k] = function (modelName, values, opts) {
      store.dispatch(_action.modelActions[k](modelName, values, _objectSpread({
        onSuccess: function onSuccess(res) {
          var callbackFn = "".concat(k, "Success");

          if (typeof context[callbackFn] === 'function') {
            context[callbackFn](res, modelName);
          }
        },
        onError: function onError(e, res) {
          var callbackFn = "".concat(k, "Error");

          if (typeof callbackFn === 'function') {
            context[callbackFn](e, res, modelName);
          }
        }
      }, opts)));
    };
  });
  return modelAccess;
};

exports["default"] = _default;
module.exports = exports.default;