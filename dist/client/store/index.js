"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = exports.createStore = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _reduxSaga = require("redux-saga");

var _action = require("../action");

var _configure = _interopRequireDefault(require("./configure"));

var _store = null;

var createStore = function createStore(rootReducer, rootSaga, preloadedState, history) {
  var store = (0, _configure["default"])(rootReducer, rootSaga, preloadedState, history);

  store.initApp = function (ctx) {
    store.dispatch((0, _action.initApp)(ctx));
  };

  store.end =
  /*#__PURE__*/
  (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            store.dispatch(_reduxSaga.END);
            _context.next = 3;
            return store.asyncTask;

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  _store = store;
  return store;
};

exports.createStore = createStore;
var store = _store;
exports.store = store;