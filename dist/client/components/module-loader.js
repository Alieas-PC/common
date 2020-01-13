"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var ModuleLoader =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(ModuleLoader, _Component);

  function ModuleLoader() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, ModuleLoader);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(ModuleLoader)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      element: _react["default"].createElement("div", null, "Loading...")
    });
    return _this;
  }

  (0, _createClass2["default"])(ModuleLoader, [{
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      var _this2 = this;

      var _this$props = this.props,
          waitFor = _this$props.waitFor,
          props = (0, _objectWithoutProperties2["default"])(_this$props, ["waitFor"]);
      waitFor.then(function (_ref) {
        var Module = _ref["default"];

        _this2.setState({
          element: _react["default"].createElement(Module, props)
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var element = this.state.element;
      return element;
    }
  }]);
  return ModuleLoader;
}(_react.Component);

ModuleLoader.propTypes = {
  waitFor: _propTypes["default"].any.isRequired
};
var _default = ModuleLoader;
exports["default"] = _default;
module.exports = exports.default;