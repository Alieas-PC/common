"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var Toast = function Toast(_ref) {
  var text = _ref.text,
      open = _ref.open,
      onClose = _ref.onClose,
      duration = _ref.duration;

  var _useState = (0, _react.useState)(null),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      handle = _useState2[0],
      setHandle = _useState2[1];

  (0, _react.useEffect)(function () {
    if (open) {
      clearTimeout(handle);
      setHandle(setTimeout(function () {
        onClose();
      }, duration));
    }
  }, [open]);
  return _react["default"].createElement("div", {
    style: {
      display: open ? 'block' : 'none',
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 999
    }
  }, _react["default"].createElement("div", {
    style: {
      position: 'fixed',
      padding: '8px 16px',
      transform: 'translate(-50%,-50%)',
      top: '50%',
      left: '50%',
      background: 'rgba(0,0,0,0.8)',
      color: 'rgba(255,255,255,0.8)',
      borderRadius: 4
    }
  }, text));
};

Toast.propTypes = {
  text: _propTypes["default"].string,
  duration: _propTypes["default"].number,
  open: _propTypes["default"].bool,
  onClose: _propTypes["default"].func
};
Toast.defaultProps = {
  text: '',
  duration: 2000,
  open: false,
  onClose: function onClose() {}
};
var _default = Toast;
exports["default"] = _default;
module.exports = exports.default;