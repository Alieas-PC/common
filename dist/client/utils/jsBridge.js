"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = require("./index");

var createJsBridge = function createJsBridge() {
  if (!(0, _index.isClient)()) {
    return null;
  }

  var isIos = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
  var handler = null;

  if (isIos && window.webkit && window.webkit.messageHandlers) {
    // ios
    handler = window.webkit.messageHandlers;
  } else if (window.jsBridge) {
    // android
    handler = window.jsBridge;
  }

  return {
    invoke: function invoke(methodName) {
      if (handler && handler[methodName]) {
        var _handler$methodName, _handler;

        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        console.log('Invoke jsBride.', methodName, ' data passed =>', args);
        return isIos ? (_handler$methodName = handler[methodName]).postMessage.apply(_handler$methodName, args) : (_handler = handler)[methodName].apply(_handler, args);
      }

      throw new Error('Could not get invocation handler of this env.');
    }
  };
};

var _default = createJsBridge();

exports["default"] = _default;
module.exports = exports.default;