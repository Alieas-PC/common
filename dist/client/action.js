"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.moduleStateActionCreator = exports.setLoadingState = exports.setCommonState = exports.initApp = exports.showToast = exports.redirectTo = exports.navTo = exports.SET_LOADING_STATE = exports.SET_COMMON_STATE = exports.INIT_APP = exports.SHOW_TOAST = exports.REDIRECT_TO = exports.NAV_TO = exports.PREFIX = void 0;

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
var SET_LOADING_STATE = "".concat(PREFIX, "_SET_LOADING_STATE");
/** Actions */

exports.SET_LOADING_STATE = SET_LOADING_STATE;
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
};

exports.moduleStateActionCreator = moduleStateActionCreator;