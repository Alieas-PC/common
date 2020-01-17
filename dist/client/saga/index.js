"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _callee;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _effects = require("redux-saga/effects");

var _connectedReactRouter = require("connected-react-router");

var _utils = require("../utils");

var action = _interopRequireWildcard(require("../action"));

var _model = require("./model");

var _marked =
/*#__PURE__*/
_regenerator["default"].mark(navTo),
    _marked2 =
/*#__PURE__*/
_regenerator["default"].mark(_callee);

function navTo(_ref) {
  var _ref$payload, path, useReplace, option;

  return _regenerator["default"].wrap(function navTo$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _ref$payload = _ref.payload, path = _ref$payload.path, useReplace = _ref$payload.useReplace, option = _ref$payload.option;

          if (!useReplace) {
            _context.next = 6;
            break;
          }

          _context.next = 4;
          return (0, _effects.put)((0, _connectedReactRouter.replace)(path, option));

        case 4:
          _context.next = 8;
          break;

        case 6:
          _context.next = 8;
          return (0, _effects.put)((0, _connectedReactRouter.push)(path, option));

        case 8:
          (0, _utils.scrollTop)(0);

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

function _callee() {
  return _regenerator["default"].wrap(function _callee$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _effects.all)([(0, _effects.takeLatest)(action.NAV_TO, navTo), // model crud
          (0, _effects.takeEvery)(action.MODEL_CREATE.REQUEST, _model.create), (0, _effects.takeEvery)(action.MODEL_UPDATE.REQUEST, _model.update), (0, _effects.takeEvery)(action.MODEL_DESTROY.REQUEST, _model.destroy), (0, _effects.takeEvery)(action.MODEL_FIND_BY_ID.REQUEST, _model.findById), (0, _effects.takeEvery)(action.MODEL_FIND_LIST.REQUEST, _model.findList), (0, _effects.takeEvery)(action.MODEL_FIND_ONE.REQUEST, _model.findOne), (0, _effects.takeEvery)(action.MODEL_FIND_PAGE.REQUEST, _model.findPage)]);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}

module.exports = exports.default;