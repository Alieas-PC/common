"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _action = require("./action");

var _store = require("./store");

var _default = function _default(context) {
  var store = (0, _store.getStore)();
  var modelAccess = {};
  Object.keys(_action.modelActions).forEach(function (k) {
    modelAccess[k] = function (modelName, values) {
      store.dispatch(_action.modelActions[k](modelName, values, {
        onSuccess: context.onSuccess ? context.onSuccess : null,
        onError: context.onError ? context.onError : null
      }));
    };
  });
  return modelAccess;
};

exports["default"] = _default;
module.exports = exports.default;