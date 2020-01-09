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

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var PT = _interopRequireWildcard(require("prop-types"));

var _moment = _interopRequireDefault(require("moment"));

var pad0 = function pad0(num) {
  return num < 10 ? "0".concat(num) : "".concat(num);
};

var Countdown =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(Countdown, _Component);

  function Countdown() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, Countdown);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(Countdown)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      next: null
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "timeout", null);
    return _this;
  }

  (0, _createClass2["default"])(Countdown, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateNextState();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(_ref) {
      var start = _ref.start;

      if (start !== this.props.start) {
        this.setState({
          next: _moment["default"].duration(start)
        }, this.updateNextState.bind(this));
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.timeout);
    }
  }, {
    key: "updateNextState",
    value: function updateNextState() {
      var prev = this.state.next || _moment["default"].duration(this.props.start);

      var secs = prev.asSeconds();

      if (secs - 1 > 0) {
        var next = _moment["default"].duration(secs - 1, 'seconds');

        this.setState({
          next: next
        });
        this.props.onChange(next);
        clearTimeout(this.timeout);
        this.timeout = setTimeout(this.updateNextState.bind(this), 1000);
      } else {
        this.setState({
          next: null
        });
        this.props.onEnd();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var next = this.state.next;
      var format = this.props.format;
      return _react["default"].createElement(_react["default"].Fragment, null, next ? format.replace('ss', pad0(next.seconds())).replace('s', next.seconds()).replace('mm', pad0(next.minutes())).replace('m', next.minutes()).replace('hh', pad0(next.hours())).replace('h', next.hours()) : null);
    }
  }]);
  return Countdown;
}(_react.Component);

Countdown.propTypes = {
  start: PT.string,
  format: PT.string,
  onEnd: PT.func,
  onChange: PT.func
};
Countdown.defaultProps = {
  start: '0:0:60',
  format: 's',
  onEnd: function onEnd() {},
  onChange: function onChange() {}
};
var _default = Countdown;
exports["default"] = _default;
module.exports = exports.default;