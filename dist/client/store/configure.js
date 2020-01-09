"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _redux = require("redux");

var _reduxLogger = require("redux-logger");

var _reduxSaga = _interopRequireDefault(require("redux-saga"));

var _connectedReactRouter = require("connected-react-router");

/* eslint-disable no-underscore-dangle */
var isPrd = !(process.env.NODE_ENV === 'development');
/** support redux-devtool browser plugin */

var composeEnhancers = (typeof window === "undefined" ? "undefined" : (0, _typeof2["default"])(window)) === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : _redux.compose;

var _default = function _default(rootReducer, rootSaga, preloadedState, history) {
  /** support redux logger which will track any actions and log it to the browser console  */
  var logger = (0, _reduxLogger.createLogger)({
    collapsed: true,
    duration: true
  });
  /** support saga middleware for async flow */

  var sagaMiddleware = (0, _reduxSaga["default"])();
  /** support router middleware */

  var routeMiddleware = (0, _connectedReactRouter.routerMiddleware)(history);
  var store = (0, _redux.createStore)(rootReducer, preloadedState, !isPrd ? composeEnhancers((0, _redux.applyMiddleware)(logger, sagaMiddleware, routeMiddleware)) : (0, _redux.compose)((0, _redux.applyMiddleware)(sagaMiddleware, routeMiddleware))); // return saga task promise

  store.asyncTask = sagaMiddleware.run(rootSaga).done;
  return store;
};

exports["default"] = _default;
module.exports = exports.default;