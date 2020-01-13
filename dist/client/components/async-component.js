"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var AsyncComponent = function AsyncComponent(_ref) {
  var waitFor = _ref.waitFor,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["waitFor"]);
  var com = (0, _react.useState)('Loading...');
  (0, _react.useEffect)(function () {
    waitFor.then(function (_ref2) {
      var Component = _ref2["default"];
      (0, _react.useState)(_react["default"].createElement(Component, props));
    });
  }, []);
  return com;
};

AsyncComponent.propTypes = {
  waitFor: _propTypes["default"].any.isRequired
};
var _default = AsyncComponent;
exports["default"] = _default;
module.exports = exports.default;