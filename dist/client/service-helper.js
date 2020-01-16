"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _effects = require("redux-saga/effects");

var _action2 = require("./action");

var _marked =
/*#__PURE__*/
_regenerator["default"].mark(callService);

function callService(service, args, actionTypes) {
  var opts,
      _opts$onSuccess,
      onSuccess,
      _opts$onError,
      onError,
      loadingKey,
      resData,
      action,
      _action,
      _args = arguments;

  return _regenerator["default"].wrap(function callService$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          opts = _args.length > 3 && _args[3] !== undefined ? _args[3] : {};
          _opts$onSuccess = opts.onSuccess, onSuccess = _opts$onSuccess === void 0 ? function () {} : _opts$onSuccess, _opts$onError = opts.onError, onError = _opts$onError === void 0 ? function () {} : _opts$onError, loadingKey = opts.loadingKey;
          resData = null;

          if (!loadingKey) {
            _context.next = 6;
            break;
          }

          _context.next = 6;
          return (0, _effects.put)((0, _action2.setLoadingState)({
            loading: true,
            key: loadingKey
          }));

        case 6:
          _context.prev = 6;
          _context.next = 9;
          return (0, _effects.call)(service, args);

        case 9:
          resData = _context.sent;
          return _context.delegateYield(onSuccess(resData), "t0", 11);

        case 11:
          action = _context.t0;
          _context.next = 14;
          return (0, _effects.put)({
            type: actionTypes.SUCCESS,
            payload: resData
          });

        case 14:
          console.log('returned action', action);

          if (!action) {
            _context.next = 18;
            break;
          }

          _context.next = 18;
          return (0, _effects.put)(action);

        case 18:
          _context.next = 30;
          break;

        case 20:
          _context.prev = 20;
          _context.t1 = _context["catch"](6);
          _context.next = 24;
          return (0, _effects.put)({
            type: actionTypes.FAILURE,
            payload: {
              e: _context.t1,
              res: resData
            }
          });

        case 24:
          return _context.delegateYield(onError(_context.t1, resData), "t2", 25);

        case 25:
          _action = _context.t2;
          console.log('returned action', _action);

          if (!_action) {
            _context.next = 30;
            break;
          }

          _context.next = 30;
          return (0, _effects.put)(_action);

        case 30:
          _context.prev = 30;

          if (!loadingKey) {
            _context.next = 34;
            break;
          }

          _context.next = 34;
          return (0, _effects.put)((0, _action2.setLoadingState)({
            loading: false,
            key: loadingKey
          }));

        case 34:
          return _context.finish(30);

        case 35:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[6, 20, 30, 35]]);
}

var _default = callService;
exports["default"] = _default;
module.exports = exports.default;