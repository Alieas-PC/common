"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _base = _interopRequireDefault(require("../../base"));

var _action = require("../../action");

var _toast = _interopRequireDefault(require("../toast"));

var Commons =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2["default"])(Commons, _PureComponent);

  function Commons() {
    (0, _classCallCheck2["default"])(this, Commons);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Commons).apply(this, arguments));
  }

  (0, _createClass2["default"])(Commons, [{
    key: "render",
    value: function render() {
      var _this = this;

      var toastMsg = this.props.toastMsg;
      return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_toast["default"], {
        text: toastMsg,
        open: !!toastMsg,
        onClose: function onClose() {
          _this.props.setCommonState({
            toastMsg: null
          });
        }
      }));
    }
  }]);
  return Commons;
}(_react.PureComponent);

(0, _defineProperty2["default"])(Commons, "mapState", function (state) {
  return {
    toastMsg: state.common.toastMsg
  };
});
(0, _defineProperty2["default"])(Commons, "mapDispatch", {
  setCommonState: _action.setCommonState
});
Commons.propTypes = {
  setCommonState: _propTypes["default"].func,
  toastMsg: _propTypes["default"].any
};
Commons.defaultProps = {
  setCommonState: function setCommonState() {},
  toastMsg: null
};

var _default = (0, _base["default"])(Commons);

exports["default"] = _default;
module.exports = exports.default;