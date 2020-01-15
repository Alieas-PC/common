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
      }));
    };
  });
  return modelAccess;
};

exports["default"] = _default;
module.exports = exports.default;