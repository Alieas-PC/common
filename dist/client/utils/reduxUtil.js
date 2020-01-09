"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeAsyncActionCreator = exports.createRequestTypes = exports.createReducer = exports.makeActionCreator = void 0;

var makeActionCreator = function makeActionCreator(type) {
  return function (payload) {
    var action = {
      type: type,
      payload: payload
    };
    return action;
  };
};

exports.makeActionCreator = makeActionCreator;

var createReducer = function createReducer(initialState, handlers) {
  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments.length > 1 ? arguments[1] : undefined;

    if (action.type in handlers) {
      return handlers[action.type](state, action);
    }

    return state;
  };
};

exports.createReducer = createReducer;

var createRequestTypes = function createRequestTypes(actionType) {
  return {
    REQUEST: "".concat(actionType, "_REQUEST"),
    SUCCESS: "".concat(actionType, "_SUCCESS"),
    FAILURE: "".concat(actionType, "_FAILURE")
  };
};

exports.createRequestTypes = createRequestTypes;

var makeAsyncActionCreator = function makeAsyncActionCreator(_ref) {
  var REQUEST = _ref.REQUEST,
      SUCCESS = _ref.SUCCESS,
      FAILURE = _ref.FAILURE;
  return {
    request: function request(payload) {
      return {
        type: REQUEST,
        payload: payload
      };
    },
    success: function success(payload) {
      return {
        type: SUCCESS,
        payload: payload
      };
    },
    failure: function failure(payload) {
      return {
        type: FAILURE,
        payload: payload
      };
    }
  };
};

exports.makeAsyncActionCreator = makeAsyncActionCreator;