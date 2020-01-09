"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNumeric = isNumeric;
exports.scrollTop = scrollTop;
exports.scrollLeft = scrollLeft;
exports.formatCurrency = exports.maskPhoneNo = exports.sleep = exports.isClient = exports.createCalculator = exports.loadThirdPartyScript = exports.parseQueryStr = exports.queryStringify = exports.setCookie = exports.getCookie = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _raf = _interopRequireDefault(require("raf"));

var _decimal = require("decimal.js");

/* eslint-disable no-restricted-globals */

/* eslint-disable no-multi-assign */

/**
 * 根据传入的cookie获取指定cookie的值
 * @param {*} key
 * @param {*} cookie
 */
var getCookie = function getCookie(key, cookie) {
  if (!cookie && typeof window === 'undefined') {
    return '';
  }

  var matched = (cookie || window.document.cookie).match(new RegExp("(?:^|;)\\s?".concat(key, "=(.*?)(?:;|$)")));
  return matched ? matched[1] || '' : '';
};
/**
 * 设置cookie
 * @param {*} key
 * @param {*} value
 * @param {*} cookie
 */


exports.getCookie = getCookie;

var setCookie = function setCookie(key, value, maxAge, cookie) {
  if (typeof window === 'undefined') {
    /* eslint-disable no-param-reassign */
    cookie.set(key, value, {
      maxAge: maxAge
    });
  } else {
    window.document.cookie = "".concat(key, "=").concat(value, "; expires=").concat(new Date(new Date().valueOf() + maxAge).toGMTString());
  }
};
/**
 * 创建js精确计数字计算器
 * @param {*} precision
 * @param {*} rounding
 */


exports.setCookie = setCookie;

var createCalculator = function createCalculator(precision, rounding) {
  var D = _decimal.Decimal.clone({
    defaults: true,
    precision: precision,
    rounding: rounding
  });
  /*
    ROUND_UP          0      Rounds away from zero
    ROUND_DOWN        1      Rounds towards zero
    ROUND_CEIL        2      Rounds towards Infinity
    ROUND_FLOOR       3      Rounds towards -Infinity
    ROUND_HALF_UP     4      Rounds towards nearest neighbour.
                             If equidistant, rounds away from zero
    ROUND_HALF_DOWN   5      Rounds towards nearest neighbour.
                             If equidistant, rounds towards zero
    ROUND_HALF_EVEN   6      Rounds towards nearest neighbour.
                             If equidistant, rounds towards even neighbour
    ROUND_HALF_CEIL   7      Rounds towards nearest neighbour.
                             If equidistant, rounds towards Infinity
    ROUND_HALF_FLOOR  8      Rounds towards nearest neighbour.
                             If equidistant, rounds towards -Infinity
  */


  return {
    sum: function sum(num1, num2) {
      return new D(num1).plus(new D(num2)).toNumber();
    },
    minus: function minus(num1, num2) {
      return new D(num1).minus(new D(num2)).toNumber();
    },
    divide: function divide(num1, num2) {
      return new D(num1).dividedBy(new D(num2)).toNumber();
    },
    multiply: function multiply(num1, num2) {
      return new D(num1).times(new D(num2)).toNumber();
    },
    D: D,
    toDP: function toDP(num) {
      var dp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : precision;
      var rm = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : rounding;
      return new D(num).toDecimalPlaces(dp, rm).toNumber();
    }
  };
};
/**
 * 是否数字
 * @param {*} n
 */


exports.createCalculator = createCalculator;

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
/**
 * 平滑滚动
 * @param {*} scrollFn
 * @param {*} nowAt
 * @param {*} target
 * @param {*} speed
 * @param {*} isForward
 */


function smoothlyScroll(scrollFn, nowAt, target, speed, isForward) {
  (0, _raf["default"])(function () {
    var isNotEnded = isForward ? nowAt < target : nowAt > target;
    var totalDistance = Math.abs(nowAt - target); // 是否最后一步

    if (isForward) {
      if (totalDistance < speed) {
        speed = totalDistance;
      }
    } else if (totalDistance < Math.abs(speed)) {
      speed = -totalDistance;
    }

    if (isNotEnded) {
      scrollFn(nowAt + speed, false);
      smoothlyScroll(scrollFn, nowAt + speed, target, speed, isForward);
    }
  });
}
/**
 * 获取或设置scrollTop
 * @param {*} top
 */


function scrollTop(top, smoothly) {
  var inMillisecs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
  var scrollTopVal = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;

  if (isNumeric(top)) {
    if (smoothly) {
      var fps = inMillisecs / 16;
      var distance = Math.abs(scrollTopVal - top);
      var speed = distance / fps;
      smoothlyScroll(scrollTop, scrollTopVal, top, top > scrollTopVal ? speed : -speed, top > scrollTopVal);
    }

    document.documentElement.scrollTop = window.pkageYOffset = document.body.scrollTop = top;
  }

  return top || scrollTopVal;
}
/**
 * 获取或设置scrollLeft
 * @param {*} top
 */


function scrollLeft(left, smoothly) {
  var inMillisecs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
  var scrollLeftVal = document.documentElement.scrollLeft || window.pageXOffset || document.body.scrollLeft;

  if (isNumeric(left)) {
    if (smoothly) {
      var fps = inMillisecs / 16;
      var distance = Math.abs(scrollLeftVal - left);
      var speed = distance / fps;
      smoothlyScroll(scrollLeft, scrollLeftVal, left, left > scrollLeftVal ? speed : -speed, left > scrollLeftVal);
    }

    document.documentElement.scrollLeft = window.pageXOffset = document.body.scrollLeft = left;
  }

  return left || scrollLeftVal;
}
/**
 * 加载script文件
 * @param {*} src
 */


var loadThirdPartyScript = function loadThirdPartyScript(src) {
  return new Promise(function (resolve, reject) {
    var script = document.createElement('script');
    script.onload = resolve;
    script.onerror = reject;
    script.src = src;
    document.head.appendChild(script);
  });
};
/**
 * 拼接参数为查询字符串
 * @param {*} obj
 * @param {*} isSearchStr
 */


exports.loadThirdPartyScript = loadThirdPartyScript;

var queryStringify = function queryStringify() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var isSearchStr = arguments.length > 1 ? arguments[1] : undefined;
  var entries = Object.entries(obj);
  var querystring = entries.map(function (_ref) {
    var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    return "".concat(key, "=").concat(value || '');
  }).join('&');
  return entries.length && isSearchStr ? "?".concat(querystring) : querystring;
};
/**
 * 解析查询字符串为object
 * @param {*} str
 */


exports.queryStringify = queryStringify;

var parseQueryStr = function parseQueryStr() {
  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var s = str;

  if (str.indexOf('?') === 0) {
    s = str.substr(1);
  }

  return s.split('&').reduce(function (prev, e) {
    var temp = prev;

    var _e$split = e.split('='),
        _e$split2 = (0, _slicedToArray2["default"])(_e$split, 2),
        key = _e$split2[0],
        value = _e$split2[1];

    temp[key] = value;
    return temp;
  }, {});
};

exports.parseQueryStr = parseQueryStr;

var isClient = function isClient() {
  return typeof window !== 'undefined';
};

exports.isClient = isClient;

var sleep = function sleep(ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
};

exports.sleep = sleep;

var maskPhoneNo = function maskPhoneNo(account) {
  return account ? "".concat(account.substr(0, 3), "****").concat(account.substr(7, 4)) : '';
};

exports.maskPhoneNo = maskPhoneNo;

var formatCurrency = function formatCurrency(num, dp) {
  var formatter = new Intl.NumberFormat('en-US');

  if (typeof num !== 'number' && typeof num !== 'string') {
    return num;
  }

  var _createCalculator = createCalculator(dp, 4),
      toDP = _createCalculator.toDP;

  return formatter.format(toDP(num, dp));
};

exports.formatCurrency = formatCurrency;