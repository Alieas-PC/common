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

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRedux = require("react-redux");

var _action = require("../../action");

var _toast = _interopRequireDefault(require("../toast"));

var _copyHandler = _interopRequireDefault(require("../copy-handler"));

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

      var _this$props = this.props,
          toastMsg = _this$props.toastMsg,
          includes = _this$props.includes;
      return _react["default"].createElement(_react["default"].Fragment, null, includes.includes(Commons.Types.Toast) && _react["default"].createElement(_toast["default"], {
        text: toastMsg,
        open: !!toastMsg,
        onClose: function onClose() {
          _this.props.setCommonState({
            toastMsg: null
          });
        }
      }), includes.includes(Commons.Types.Copy) && _react["default"].createElement(_copyHandler["default"], null));
    }
  }]);
  return Commons;
}(_react.PureComponent);

Commons.propTypes = {
  setCommonState: _propTypes["default"].func,
  toastMsg: _propTypes["default"].any,
  includes: _propTypes["default"].array
};
Commons.defaultProps = {
  setCommonState: function setCommonState() {},
  toastMsg: null,
  includes: []
};
Commons.Types = {
  Toast: 'Toast',
  Copy: 'Copy'
};

var _default = (0, _reactRedux.connect)(function (state) {
  return {
    toastMsg: state.common.toastMsg
  };
}, {
  setCommonState: _action.setCommonState
})(Commons);

exports["default"] = _default;
module.exports = exports.default;