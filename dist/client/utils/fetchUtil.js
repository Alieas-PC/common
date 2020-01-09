"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postFormData = exports.get = exports.post = exports.request = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _index = require("./index");

// json数据转换URL参数
var parseParam = function parseParam(param, key) {
  var paramStr = '';

  if (['string', 'number', 'boolean'].indexOf((0, _typeof2["default"])(param)) !== -1) {
    // paramStr += "&" + key + "=" + encodeURIComponent(param);
    paramStr += "&".concat(key, "=").concat(param);
  } else {
    /* eslint-disable no-restricted-syntax */

    /* eslint-disable no-prototype-builtins */
    for (var i in param) {
      if (param.hasOwnProperty(i)) {
        var element = param[i];
        var k = key == null ? i : key + (param instanceof Array ? "[".concat(i, "]") : ".".concat(i));
        paramStr += "&".concat(parseParam(element, k));
      }
    }
  }

  return paramStr.substr(1);
};

var request =
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(url, _ref) {
    var data, method, contentType, headers, domain, res, resText;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            data = _ref.data, method = _ref.method, contentType = _ref.contentType, headers = _ref.headers;
            domain = typeof window === 'undefined' ? process.env.domain : window.location.origin;

            if (typeof FormData === 'undefined' || !(data instanceof FormData)) {
              if (contentType.indexOf('application/x-www-form-urlencoded') > -1) {
                data = (0, _index.queryStringify)(data);
              } else {
                data = data ? JSON.stringify(data) : null;
              }
            }

            if (contentType) {
              headers['content-type'] = contentType;
            }

            _context.next = 6;
            return fetch("".concat(domain).concat(url), {
              headers: headers,
              cache: 'no-cache',
              body: data,
              method: method,
              credentials: 'same-origin'
            });

          case 6:
            res = _context.sent;
            _context.next = 9;
            return res.text();

          case 9:
            resText = _context.sent;
            _context.prev = 10;
            return _context.abrupt("return", JSON.parse(resText));

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](10);
            console.error("FetchUtil parse text to json failed, response text => ".concat(resText));
            throw _context.t0;

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[10, 14]]);
  }));

  return function request(_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}();

exports.request = request;

var post = function post(url, opts) {
  var _ref3 = opts || {},
      _ref3$data = _ref3.data,
      data = _ref3$data === void 0 ? {} : _ref3$data,
      _ref3$contentType = _ref3.contentType,
      contentType = _ref3$contentType === void 0 ? 'application/json' : _ref3$contentType,
      _ref3$headers = _ref3.headers,
      headers = _ref3$headers === void 0 ? {} : _ref3$headers;

  return request(url, {
    data: data,
    method: 'post',
    contentType: contentType,
    headers: headers
  });
};

exports.post = post;

var postFormData = function postFormData(url, opts) {
  var _ref4 = opts || {},
      _ref4$data = _ref4.data,
      data = _ref4$data === void 0 ? new FormData() : _ref4$data,
      _ref4$contentType = _ref4.contentType,
      contentType = _ref4$contentType === void 0 ? '' : _ref4$contentType,
      _ref4$headers = _ref4.headers,
      headers = _ref4$headers === void 0 ? {} : _ref4$headers;

  request(url, {
    data: data,
    method: 'post',
    contentType: contentType,
    headers: headers
  });
};

exports.postFormData = postFormData;

var get = function get(url, opts) {
  var _ref5 = opts || {},
      _ref5$data = _ref5.data,
      params = _ref5$data === void 0 ? {} : _ref5$data,
      _ref5$contentType = _ref5.contentType,
      contentType = _ref5$contentType === void 0 ? 'application/json' : _ref5$contentType,
      _ref5$headers = _ref5.headers,
      headers = _ref5$headers === void 0 ? {} : _ref5$headers;

  if (url.indexOf('?') !== -1) {
    // eslint-disable-next-line no-param-reassign
    url += "&".concat(parseParam(params));
  } else if (Object.keys(params).length > 0) {
    // eslint-disable-next-line no-param-reassign
    url += "?".concat(parseParam(params));
  }

  return request(url, {
    data: null,
    method: 'get',
    contentType: contentType,
    headers: headers
  });
};

exports.get = get;