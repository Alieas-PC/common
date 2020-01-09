"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _reduxUtil = require("./utils/reduxUtil");

var _action = require("./action");

var _createReducer;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var commonReducer = (0, _reduxUtil.createReducer)({
  loadings: new Set()
}, (_createReducer = {}, (0, _defineProperty2["default"])(_createReducer, _action.REDIRECT_TO, function (state, _ref) {
  var path = _ref.payload;
  return _objectSpread({}, state, {
    redirectTo: path
  });
}), (0, _defineProperty2["default"])(_createReducer, _action.SET_LOADING_STATE, function (state, _ref2) {
  var _ref2$payload = _ref2.payload,
      loading = _ref2$payload.loading,
      key = _ref2$payload.key;
  var loadings = new Set(state.loadings);

  if (loading) {
    loadings.add(key);
  } else {
    loadings["delete"](key);
  }

  return _objectSpread({}, state, {
    loadings: loadings
  });
}), (0, _defineProperty2["default"])(_createReducer, _action.SET_COMMON_STATE, function (state, _ref3) {
  var payload = _ref3.payload;
  return _objectSpread({}, state, {}, payload);
}), (0, _defineProperty2["default"])(_createReducer, _action.SHOW_TOAST, function (state, _ref4) {
  var toastMsg = _ref4.payload.msg;
  return _objectSpread({}, state, {
    toastMsg: toastMsg
  });
}), _createReducer));
var _default = commonReducer;
exports["default"] = _default;
module.exports = exports.default;