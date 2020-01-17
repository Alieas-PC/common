"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scrollPage = exports.modelActions = exports.modelActionCreator = exports.moduleStateActionCreator = exports.setLoadingState = exports.setCommonState = exports.initApp = exports.showToast = exports.redirectTo = exports.navTo = exports.SCROLL_PAGE = exports.MODEL_FIND_LIST = exports.MODEL_FIND_BY_ID = exports.MODEL_FIND_ONE = exports.MODEL_FIND_PAGE = exports.MODEL_UPDATE = exports.MODEL_DESTROY = exports.MODEL_CREATE = exports.SET_LOADING_STATE = exports.SET_COMMON_STATE = exports.INIT_APP = exports.SHOW_TOAST = exports.REDIRECT_TO = exports.NAV_TO = exports.PREFIX = void 0;

var _reduxUtil = require("./utils/reduxUtil");

/** Contants */
var PREFIX = 'COMMON';
exports.PREFIX = PREFIX;
var NAV_TO = "".concat(PREFIX, "_NAV_TO");
exports.NAV_TO = NAV_TO;
var REDIRECT_TO = "".concat(PREFIX, "_REDIRECT_TO");
exports.REDIRECT_TO = REDIRECT_TO;
var SHOW_TOAST = "".concat(PREFIX, "_SHOW_TOAST");
exports.SHOW_TOAST = SHOW_TOAST;
var INIT_APP = "".concat(PREFIX, "_INIT_APP");
exports.INIT_APP = INIT_APP;
var SET_COMMON_STATE = "".concat(PREFIX, "_SET_COMMON_STATE");
exports.SET_COMMON_STATE = SET_COMMON_STATE;
var SET_LOADING_STATE = "".concat(PREFIX, "_SET_LOADING_STATE"); // model crud

exports.SET_LOADING_STATE = SET_LOADING_STATE;
var MODEL_CREATE = (0, _reduxUtil.createRequestTypes)("".concat(PREFIX, "_MODEL_CREATE"));
exports.MODEL_CREATE = MODEL_CREATE;
var MODEL_DESTROY = (0, _reduxUtil.createRequestTypes)("".concat(PREFIX, "_MODEL_DESTROY"));
exports.MODEL_DESTROY = MODEL_DESTROY;
var MODEL_UPDATE = (0, _reduxUtil.createRequestTypes)("".concat(PREFIX, "_MODEL_UPDATE"));
exports.MODEL_UPDATE = MODEL_UPDATE;
var MODEL_FIND_PAGE = (0, _reduxUtil.createRequestTypes)("".concat(PREFIX, "_MODEL_FIND_PAGE"));
exports.MODEL_FIND_PAGE = MODEL_FIND_PAGE;
var MODEL_FIND_ONE = (0, _reduxUtil.createRequestTypes)("".concat(PREFIX, "_MODEL_FIND_ONE"));
exports.MODEL_FIND_ONE = MODEL_FIND_ONE;
var MODEL_FIND_BY_ID = (0, _reduxUtil.createRequestTypes)("".concat(PREFIX, "_MODEL_FIND_BY_ID"));
exports.MODEL_FIND_BY_ID = MODEL_FIND_BY_ID;
var MODEL_FIND_LIST = (0, _reduxUtil.createRequestTypes)("".concat(PREFIX, "_MODEL_FIND_LIST"));
exports.MODEL_FIND_LIST = MODEL_FIND_LIST;
var SCROLL_PAGE = "".concat(PREFIX, "_SCROLL_PAGE");
/** Actions */

exports.SCROLL_PAGE = SCROLL_PAGE;
var navTo = (0, _reduxUtil.makeActionCreator)(NAV_TO);
exports.navTo = navTo;
var redirectTo = (0, _reduxUtil.makeActionCreator)(REDIRECT_TO);
exports.redirectTo = redirectTo;
var showToast = (0, _reduxUtil.makeActionCreator)(SHOW_TOAST);
exports.showToast = showToast;
var initApp = (0, _reduxUtil.makeActionCreator)(INIT_APP);
exports.initApp = initApp;
var setCommonState = (0, _reduxUtil.makeActionCreator)(SET_COMMON_STATE);
exports.setCommonState = setCommonState;
var setLoadingState = (0, _reduxUtil.makeActionCreator)(SET_LOADING_STATE);
exports.setLoadingState = setLoadingState;

var moduleStateActionCreator = function moduleStateActionCreator() {
  var moduleName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'UNKNOW';
  var SET_MODULE_STATE = "SET_".concat(moduleName, "_MODULE_STATE");
  return {
    SET_MODULE_STATE: SET_MODULE_STATE,
    setModuleState: (0, _reduxUtil.makeActionCreator)(SET_MODULE_STATE)
  };
}; // model crud


exports.moduleStateActionCreator = moduleStateActionCreator;

var modelActionCreator = function modelActionCreator(asyncActionTypes) {
  return function (modelName, values, opts) {
    return {
      type: asyncActionTypes.REQUEST,
      payload: {
        modelName: modelName,
        values: values,
        opts: opts,
        asyncActionTypes: asyncActionTypes
      }
    };
  };
};

exports.modelActionCreator = modelActionCreator;
var modelActions = {
  create: modelActionCreator(MODEL_CREATE),
  destroy: modelActionCreator(MODEL_DESTROY),
  update: modelActionCreator(MODEL_UPDATE),
  findPage: modelActionCreator(MODEL_FIND_PAGE),
  findOne: modelActionCreator(MODEL_FIND_ONE),
  findById: modelActionCreator(MODEL_FIND_BY_ID),
  findList: modelActionCreator(MODEL_FIND_LIST)
};
exports.modelActions = modelActions;
var scrollPage = (0, _reduxUtil.makeActionCreator)(SCROLL_PAGE);
exports.scrollPage = scrollPage;