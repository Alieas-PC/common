"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* eslint-disable no-param-reassign */

/**
 * Form validation
 * v1
 */
function Validator(rules, options) {
  this.rules = rules || {};
  this.options = _objectSpread({}, Validator.globalOptions, {}, options);
}

Validator.globalOptions = {
  defaultInvalidMessageTemplate: '$fname不正确',
  checkThroughAllFields: false,
  verbose: false,
  // rule name <==> validation name
  rulesNameMap: {
    required: 'isNotEmpt',
    phone: 'isValidPhone',
    phoneIgnoreWS: 'isValidPhoneIgnoreWS',
    email: 'isValidEmail',
    idcard: 'isValidIdCard',
    passport: 'isValidPassport',
    regex: 'isRegexMatched',
    repeat: 'isEqualTo',
    len: 'isLenInRange',
    notSame: 'isNotSame',
    numeric: 'isNumeric'
  }
};
Validator.prototype = {
  /* helper */
  options: {},
  curFieldCtx: {},
  messages: [],
  log: function log(t, noPrefix) {
    if (!noPrefix) {
      console.warn("Validation error : ".concat(t));
    } else {
      console.info(t);
    }
  },
  // For debugging
  verbose: function verbose(fname, rule, val, isValid) {
    if (this.options.verbose) {
      this.log("Verbose : [Rule: ".concat(rule, " ,FieldName: ").concat(fname, " ,Value: ").concat(val, " ,isValid: ").concat(isValid, " ]"), true);
    }
  },

  /* helper */

  /* validations */
  isNotEmpt: function isNotEmpt(value) {
    return !!value;
  },
  isValidPhone: function isValidPhone(value) {
    return this.isRegexMatched(value, {
      regex: /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/,
      includeEmptyCheck: true
    });
  },
  isValidPhoneIgnoreWS: function isValidPhoneIgnoreWS(value) {
    var escaped = (value || '').replace(/\s/g, '');
    return this.isValidPhone(escaped);
  },
  isValidEmail: function isValidEmail(value) {
    return this.isRegexMatched(value, {
      regex: /^[A-Za-z0-9\u4e00-\u9fa5-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
      includeEmptyCheck: true
    });
  },
  isValidPassport: function isValidPassport(value) {
    return this.isRegexMatched(value, {
      regex: /^[a-zA-Z]{5,17}$/,
      includeEmptyCheck: true
    });
  },
  isValidIdCard: function isValidIdCard(value) {
    return this.isRegexMatched(value, {
      regex: /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|[xX])$/,
      includeEmptyCheck: true
    });
  },
  isRegexMatched: function isRegexMatched(value, _ref) {
    var regex = _ref.regex,
        includeEmptyCheck = _ref.includeEmptyCheck;
    return includeEmptyCheck ? this.isNotEmpt(value) && regex.test(value) : regex.test(value);
  },
  isEqualTo: function isEqualTo(value, _ref2) {
    var field = _ref2.field,
        v = _ref2.value;

    if (field) {
      return value === this.values[field];
    } else if (v) {
      return value === v;
    }

    this.log('need `field` or `value` to check field, check the rules you passed in.');
    return false;
  },
  isLenInRange: function isLenInRange(value, _ref3) {
    var max = _ref3.max,
        min = _ref3.min;
    value = value || '';

    if (typeof max === 'number' || typeof min === 'number') {
      var valid;

      if (typeof min === 'number') {
        valid = value.length >= min;
      }

      if (typeof max === 'number') {
        valid = value.length <= max && valid;
      }

      return valid;
    }

    this.log('need `max` or `min` to check field, check the rules you passed in.');
    return false;
  },
  isNotSame: function isNotSame(value, _ref4) {
    var field = _ref4.field,
        v = _ref4.value;

    if (field) {
      return value !== this.values[field];
    } else if (v) {
      return value !== v;
    }

    this.log('need `field` or `value` to check field, check the rules you passed in.');
    return false;
  },
  isNumeric: function isNumeric(value) {
    return !(!Number.isNaN(parseFloat(value)) && Number.isFinite(value));
  },
  reValidate: function reValidate(keys) {
    var _this = this;

    if (!keys) {
      keys = Object.keys(this.rules);
    }

    return function (values) {
      var errors = {};
      keys.forEach(function (k) {
        var msgs = _this.validate(values, [k]);

        if (msgs.length) {
          // eslint-disable-next-line prefer-destructuring
          errors[k] = msgs[0];
        }
      });
      return errors;
    };
  },

  /* validations */
  validate: function validate() {
    var _this2 = this;

    var values = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var fieldsNeedCheck = arguments.length > 1 ? arguments[1] : undefined;
    var checkThroughAllFields = arguments.length > 2 ? arguments[2] : undefined;

    if (typeof fieldsNeedCheck === 'boolean') {
      checkThroughAllFields = fieldsNeedCheck;
      fieldsNeedCheck = Object.keys(values);
    } // overwrite default global option


    if (typeof checkThroughAllFields === 'boolean') {
      this.options.checkThroughAllFields = checkThroughAllFields;
    } // save values for checking method


    this.values = values; // clear messages array

    this.messages = []; // validate each field that is in the fields list to be validate.

    fieldsNeedCheck.forEach(function (fname) {
      // pick up the rule for the field
      var rule = _this2.rules[fname]; // pick up the value for the field

      var val = values[fname];

      if (!rule) {
        _this2.log("Missing validation rule for field [".concat(fname, "]"));
      } else if (
      /* IF NEED VALIDATING THROUGH ALL FIELDS */
      _this2.checkMoveOnValidating()) {
        _this2.validateField(fname, val, rule);
      }
    });
    return this.messages;
  },

  /* validating single field */
  validateField: function validateField(fname, val, rule) {
    var _this3 = this;

    var rules = [];
    var rulesParams = [];
    var messageTemplates = [];

    if (rule instanceof String) {
      messageTemplates = [this.options.defaultInvalidMessageTemplate.replace(/\$fname/g, fname)];
      rules = [rule];
    } else if (rule instanceof Array) {
      messageTemplates = rule.map(function () {
        return _this3.options.defaultInvalidMessageTemplate.replace(/\$fname/g, fname);
      });
      rules = (0, _toConsumableArray2["default"])(rule);
    } else {
      messageTemplates = Object.values(rule).map(function (e) {
        var tmpl = e;
        var params = {};

        if (typeof e !== 'string') {
          var msg = e.msg,
              other = (0, _objectWithoutProperties2["default"])(e, ["msg"]);
          tmpl = e.msg;
          params = other;
        }

        rulesParams.push(params);
        return tmpl.replace(/\$fname/g, fname);
      });
      rules = Object.keys(rule);
    } // check each rule for each field


    rules.forEach(function (r, i) {
      var invalidFieldMessage = messageTemplates[i];
      _this3.curFieldCtx = {
        invalidFieldMessage: invalidFieldMessage
      };

      if (_this3.checkMoveOnValidating()) {
        // save validation error message if it exists.
        var message = _this3.validateFieldForRule(val, r, rulesParams[i]);

        _this3.verbose(fname, r, val, !message);

        if (message) {
          _this3.messages.push(message);
        }
      }
    });
  },

  /* validating single field for specified rule */
  validateFieldForRule: function validateFieldForRule(val, rule, params) {
    var message = null;
    var checkFnName = this.options.rulesNameMap[rule];

    if (!checkFnName) {
      this.log("Rule named [".concat(rule, "] dosen't exist."));
      return message;
    }

    var checkFn = this[checkFnName];

    if (!checkFn || typeof checkFn !== 'function') {
      this.log("CheckFn named [".concat(checkFnName, "] dosen't exist."));
      return message;
    }

    message = checkFn.apply(this, [val, params]) ? null : this.curFieldCtx.invalidFieldMessage;
    return message;
  },
  checkMoveOnValidating: function checkMoveOnValidating() {
    // any invalid messages & checkThroughAllFields equal to true
    if (!this.options.checkThroughAllFields && this.messages.length) {
      return false;
    }

    return true;
  },
  keys: function keys() {
    return Object.keys(this.rules);
  }
};
var _default = Validator;
exports["default"] = _default;
module.exports = exports.default;