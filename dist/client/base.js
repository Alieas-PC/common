"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _reactRouterDom = require("react-router-dom");

var _reduxForm = require("redux-form");

var utils = _interopRequireWildcard(require("./utils"));

var _i18n = require("./components/i18n");

var _model = _interopRequireDefault(require("./model"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var proxyHook = function proxyHook(WrapperComponent, staticProps) {
  var _temp;

  return _temp =
  /*#__PURE__*/
  function (_WrapperComponent) {
    (0, _inherits2["default"])(BASE_HOC, _WrapperComponent);

    function BASE_HOC(props) {
      var _this;

      (0, _classCallCheck2["default"])(this, BASE_HOC);
      _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(BASE_HOC).call(this, props)); // inject utilities from util/index.js to instances

      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "setTitle", function (title) {
        if (utils.isClient()) {
          document.title = title;
        }
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "listenLangChange", function (key) {
        _this.setTitle(_this.t(key));
      });
      _this.$utils = utils; // models access

      _this.model = (0, _model["default"])((0, _assertThisInitialized2["default"])(_this));
      return _this;
    }

    (0, _createClass2["default"])(BASE_HOC, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        // proxy the cdm function of containers then we can modify dom title
        var title = staticProps.title,
            i18nTitleKey = staticProps.i18nTitleKey;

        if (i18nTitleKey) {
          this.setTitle(this.t(i18nTitleKey));

          _i18n.i18n.on('languageChanged', function () {
            return _this2.listenLangChange(i18nTitleKey);
          });
        } else if (title) {
          document.title = title;
        }

        if ((0, _get2["default"])((0, _getPrototypeOf2["default"])(BASE_HOC.prototype), "componentDidMount", this)) {
          (0, _get2["default"])((0, _getPrototypeOf2["default"])(BASE_HOC.prototype), "componentDidMount", this).call(this);
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        _i18n.i18n.off('languageChanged', this.listenLangChange);

        if ((0, _get2["default"])((0, _getPrototypeOf2["default"])(BASE_HOC.prototype), "componentWillUnmount", this)) {
          (0, _get2["default"])((0, _getPrototypeOf2["default"])(BASE_HOC.prototype), "componentWillUnmount", this).call(this);
        }
      }
    }]);
    return BASE_HOC;
  }(WrapperComponent), _temp;
};
/**
 * wrap components with this magic HOC function
 * for some more useful functionalities
 */


function connect(Component) {
  var staticProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var fetchInitData = staticProps.fetchInitData,
      mapState = staticProps.mapState,
      mapDispatch = staticProps.mapDispatch,
      form = staticProps.form,
      formProps = staticProps.formProps;
  var oriCom = Component;
  Component = proxyHook(Component, staticProps); // supply this.props.location... etc.

  var WrapperComponent = (0, _i18n.withTranslation)()((0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapState || function () {
    return {};
  }, mapDispatch)(Component))); // if form prop of the container exists, we wrap the container with reduxForm for using `redux-form` functionalities.

  if (form) {
    WrapperComponent = (0, _reduxForm.reduxForm)(_objectSpread({
      form: form
    }, formProps))(WrapperComponent);
    var selector = (0, _reduxForm.formValueSelector)(form);
    /* eslint-disable no-param-reassign */

    oriCom.getFormValues = function getFormValues(state) {
      var names = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      if (!names.length) {
        return {};
      } else if (names.length === 1) {
        var first = names[0];
        return (0, _defineProperty2["default"])({}, first, selector(state, first));
      }

      return selector.apply(void 0, [state].concat((0, _toConsumableArray2["default"])(names)));
    };
  }

  WrapperComponent.fetchInitData = fetchInitData;
  return WrapperComponent;
}

var _default = connect;
exports["default"] = _default;
module.exports = exports.default;