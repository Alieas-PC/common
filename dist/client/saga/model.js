"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = create;
exports.update = update;
exports.destroy = destroy;
exports.findPage = findPage;
exports.findOne = findOne;
exports.findById = findById;
exports.findList = findList;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _serviceHelper = _interopRequireDefault(require("../service-helper"));

var modelService = _interopRequireWildcard(require("../service"));

var _marked =
/*#__PURE__*/
_regenerator["default"].mark(create),
    _marked2 =
/*#__PURE__*/
_regenerator["default"].mark(update),
    _marked3 =
/*#__PURE__*/
_regenerator["default"].mark(destroy),
    _marked4 =
/*#__PURE__*/
_regenerator["default"].mark(findPage),
    _marked5 =
/*#__PURE__*/
_regenerator["default"].mark(findOne),
    _marked6 =
/*#__PURE__*/
_regenerator["default"].mark(findById),
    _marked7 =
/*#__PURE__*/
_regenerator["default"].mark(findList);

function create(_ref) {
  var _ref$payload, modelName, values, opts, asyncActionTypes;

  return _regenerator["default"].wrap(function create$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _ref$payload = _ref.payload, modelName = _ref$payload.modelName, values = _ref$payload.values, opts = _ref$payload.opts, asyncActionTypes = _ref$payload.asyncActionTypes;
          return _context.delegateYield((0, _serviceHelper["default"])(modelService.create, {
            modelName: modelName,
            data: values
          }, asyncActionTypes, opts), "t0", 2);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

function update(_ref2) {
  var _ref2$payload, modelName, values, opts, asyncActionTypes;

  return _regenerator["default"].wrap(function update$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _ref2$payload = _ref2.payload, modelName = _ref2$payload.modelName, values = _ref2$payload.values, opts = _ref2$payload.opts, asyncActionTypes = _ref2$payload.asyncActionTypes;
          return _context2.delegateYield((0, _serviceHelper["default"])(modelService.update, {
            modelName: modelName,
            data: values
          }, asyncActionTypes, opts), "t0", 2);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}

function destroy(_ref3) {
  var _ref3$payload, modelName, values, opts, asyncActionTypes;

  return _regenerator["default"].wrap(function destroy$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _ref3$payload = _ref3.payload, modelName = _ref3$payload.modelName, values = _ref3$payload.values, opts = _ref3$payload.opts, asyncActionTypes = _ref3$payload.asyncActionTypes;
          return _context3.delegateYield((0, _serviceHelper["default"])(modelService.destroy, {
            modelName: modelName,
            data: values
          }, asyncActionTypes, opts), "t0", 2);

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}

function findPage(_ref4) {
  var _ref4$payload, modelName, values, opts, asyncActionTypes;

  return _regenerator["default"].wrap(function findPage$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _ref4$payload = _ref4.payload, modelName = _ref4$payload.modelName, values = _ref4$payload.values, opts = _ref4$payload.opts, asyncActionTypes = _ref4$payload.asyncActionTypes;
          return _context4.delegateYield((0, _serviceHelper["default"])(modelService.findPage, {
            modelName: modelName,
            data: values
          }, asyncActionTypes, opts), "t0", 2);

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}

function findOne(_ref5) {
  var _ref5$payload, modelName, values, opts, asyncActionTypes;

  return _regenerator["default"].wrap(function findOne$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _ref5$payload = _ref5.payload, modelName = _ref5$payload.modelName, values = _ref5$payload.values, opts = _ref5$payload.opts, asyncActionTypes = _ref5$payload.asyncActionTypes;
          return _context5.delegateYield((0, _serviceHelper["default"])(modelService.findOne, {
            modelName: modelName,
            data: values
          }, asyncActionTypes, opts), "t0", 2);

        case 2:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5);
}

function findById(_ref6) {
  var _ref6$payload, modelName, values, opts, asyncActionTypes;

  return _regenerator["default"].wrap(function findById$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _ref6$payload = _ref6.payload, modelName = _ref6$payload.modelName, values = _ref6$payload.values, opts = _ref6$payload.opts, asyncActionTypes = _ref6$payload.asyncActionTypes;
          return _context6.delegateYield((0, _serviceHelper["default"])(modelService.findById, {
            modelName: modelName,
            data: values
          }, asyncActionTypes, opts), "t0", 2);

        case 2:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6);
}

function findList(_ref7) {
  var _ref7$payload, modelName, values, opts, asyncActionTypes;

  return _regenerator["default"].wrap(function findList$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _ref7$payload = _ref7.payload, modelName = _ref7$payload.modelName, values = _ref7$payload.values, opts = _ref7$payload.opts, asyncActionTypes = _ref7$payload.asyncActionTypes;
          return _context7.delegateYield((0, _serviceHelper["default"])(modelService.findList, {
            modelName: modelName,
            data: values
          }, asyncActionTypes, opts), "t0", 2);

        case 2:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7);
}