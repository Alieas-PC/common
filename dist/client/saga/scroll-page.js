"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _effects = require("redux-saga/effects");

var _marked =
/*#__PURE__*/
_regenerator["default"].mark(scrollPage);

function scrollPage(_ref) {
  var page, get, set, reset, prevPage, rows, count, allRows, setAction, _setAction;

  return _regenerator["default"].wrap(function scrollPage$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          page = _ref.page, get = _ref.get, set = _ref.set, reset = _ref.reset;
          console.log('scroll page - get state');

          if (!reset) {
            _context.next = 6;
            break;
          }

          _context.t0 = null;
          _context.next = 9;
          break;

        case 6:
          _context.next = 8;
          return (0, _effects.select)(get);

        case 8:
          _context.t0 = _context.sent;

        case 9:
          prevPage = _context.t0;
          rows = page.rows, count = page.count;

          if (!prevPage) {
            _context.next = 21;
            break;
          }

          allRows = prevPage.rows.concat(rows);
          console.log('scroll page - before set');
          setAction = set({
            rows: allRows,
            count: count
          });
          console.log('scroll page - set state', setAction);

          if (!setAction) {
            _context.next = 19;
            break;
          }

          _context.next = 19;
          return (0, _effects.put)(setAction);

        case 19:
          _context.next = 27;
          break;

        case 21:
          console.log('scroll page - before set');
          _setAction = set({
            rows: rows,
            count: count
          });
          console.log('scroll page - set state', _setAction);

          if (!_setAction) {
            _context.next = 27;
            break;
          }

          _context.next = 27;
          return (0, _effects.put)(_setAction);

        case 27:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

var _default = scrollPage;
exports["default"] = _default;
module.exports = exports.default;