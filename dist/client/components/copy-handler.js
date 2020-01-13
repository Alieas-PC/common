"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clipboard = _interopRequireDefault(require("clipboard"));

var CopyHanlder = function CopyHanlder() {
  (0, _react.useEffect)(function () {
    new _clipboard["default"]('.copy').on('success', function () {
      console.log('copied');
    });
  }, []);
  return null;
};

CopyHanlder.propTypes = {};
var _default = CopyHanlder;
exports["default"] = _default;
module.exports = exports.default;