"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var ModuleLoader = function ModuleLoader(_ref) {
  var waitFor = _ref.waitFor,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["waitFor"]);

  var _useState = (0, _react.useState)(_react["default"].createElement("div", null, "Loading...")),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      element = _useState2[0],
      setElement = _useState2[1];

  (0, _react.useEffect)(function () {
    waitFor.then(function (_ref2) {
      var Component = _ref2["default"];
      setElement(_react["default"].createElement(Component, props));
    });
  }, []);
  return element;
};

ModuleLoader.propTypes = {
  waitFor: _propTypes["default"].any.isRequired
};
var _default = ModuleLoader;
exports["default"] = _default;
module.exports = exports.default;