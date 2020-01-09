"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _increment = 0;
var _subscribers = {};

var subscribe = function subscribe(delegate) {
  var id = ++_increment;
  _subscribers[id] = delegate;
  return id;
};

var unsubscribe = function unsubscribe(id) {
  delete _subscribers[id];
};

var triggerSomeWhereClick = function triggerSomeWhereClick(e, srcId) {
  Object.keys(_subscribers).filter(function (id) {
    return id !== srcId.toString();
  }).forEach(function (id) {
    var delegate = _subscribers[id];

    if (delegate.onSomeWhereClick instanceof Function) {
      delegate.onSomeWhereClick(e);
    }
  });
};

var eventHandlers = {
  onClick: function onClick(e) {
    Object.values(_subscribers).forEach(function (delegate) {
      if (delegate.onSomeWhereClick instanceof Function) {
        delegate.onSomeWhereClick(e);
      }
    });
  }
};
var _default = {
  subscribe: subscribe,
  unsubscribe: unsubscribe,
  triggerSomeWhereClick: triggerSomeWhereClick,
  eventHandlers: eventHandlers
};
exports["default"] = _default;
module.exports = exports.default;