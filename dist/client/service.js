"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findList = exports.findById = exports.findOne = exports.findPage = exports.destroy = exports.update = exports.create = void 0;

var _fetchUtil = require("./utils/fetchUtil");

var create = function create(_ref) {
  var modelName = _ref.modelName,
      data = _ref.data;
  return (0, _fetchUtil.post)("/api/".concat(modelName, "/create"), {
    data: data
  });
};

exports.create = create;

var update = function update(_ref2) {
  var modelName = _ref2.modelName,
      data = _ref2.data;
  return (0, _fetchUtil.post)("/api/".concat(modelName, "/update"), {
    data: data
  });
};

exports.update = update;

var destroy = function destroy(_ref3) {
  var modelName = _ref3.modelName,
      data = _ref3.data;
  return (0, _fetchUtil.post)("/api/".concat(modelName, "/destroy"), {
    data: data
  });
};

exports.destroy = destroy;

var findPage = function findPage(_ref4) {
  var modelName = _ref4.modelName,
      data = _ref4.data;
  return (0, _fetchUtil.post)("/api/".concat(modelName, "/find-page"), {
    data: data
  });
};

exports.findPage = findPage;

var findOne = function findOne(_ref5) {
  var modelName = _ref5.modelName,
      data = _ref5.data;
  return (0, _fetchUtil.post)("/api/".concat(modelName, "/find-one"), {
    data: data
  });
};

exports.findOne = findOne;

var findById = function findById(_ref6) {
  var modelName = _ref6.modelName,
      data = _ref6.data;
  return (0, _fetchUtil.post)("/api/".concat(modelName, "/find-by-id"), {
    data: data
  });
};

exports.findById = findById;

var findList = function findList(_ref7) {
  var modelName = _ref7.modelName,
      data = _ref7.data;
  return (0, _fetchUtil.post)("/api/".concat(modelName, "/find-list"), {
    data: data
  });
};

exports.findList = findList;