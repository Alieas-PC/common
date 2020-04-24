import { makeActionCreator, createRequestTypes } from './utils/reduxUtil';

/** Contants */
export const PREFIX = 'COMMON';

export const NAV_TO = `${PREFIX}_NAV_TO`;

export const REDIRECT_TO = `${PREFIX}_REDIRECT_TO`;

export const SHOW_TOAST = `${PREFIX}_SHOW_TOAST`;

export const INIT_APP = `${PREFIX}_INIT_APP`;

export const SET_COMMON_STATE = `${PREFIX}_SET_COMMON_STATE`;

export const SET_LOADING_STATE = `${PREFIX}_SET_LOADING_STATE`;

// model crud
export const MODEL_CREATE = createRequestTypes(`${PREFIX}_MODEL_CREATE`);

export const MODEL_DESTROY = createRequestTypes(`${PREFIX}_MODEL_DESTROY`);

export const MODEL_UPDATE = createRequestTypes(`${PREFIX}_MODEL_UPDATE`);

export const MODEL_FIND_PAGE = createRequestTypes(`${PREFIX}_MODEL_FIND_PAGE`);

export const MODEL_FIND_ONE = createRequestTypes(`${PREFIX}_MODEL_FIND_ONE`);

export const MODEL_FIND_BY_ID = createRequestTypes(
  `${PREFIX}_MODEL_FIND_BY_ID`
);

export const MODEL_FIND_LIST = createRequestTypes(`${PREFIX}_MODEL_FIND_LIST`);

export const SCROLL_PAGE = `${PREFIX}_SCROLL_PAGE`;

export const CHANGE_LANG = `${PREFIX}_CHANGE_LANG`;

/** Actions */

export const navTo = makeActionCreator(NAV_TO);

export const redirectTo = makeActionCreator(REDIRECT_TO);

export const showToast = makeActionCreator(SHOW_TOAST);

export const initApp = makeActionCreator(INIT_APP);

export const setCommonState = makeActionCreator(SET_COMMON_STATE);

export const setLoadingState = makeActionCreator(SET_LOADING_STATE);

export const moduleStateActionCreator = (moduleName = 'UNKNOW') => {
  const SET_MODULE_STATE = `SET_${moduleName}_MODULE_STATE`;

  return {
    SET_MODULE_STATE,
    setModuleState: makeActionCreator(SET_MODULE_STATE)
  };
};

// model crud
export const modelActionCreator = asyncActionTypes => (
  modelName,
  values,
  opts
) => ({
  type: asyncActionTypes.REQUEST,
  payload: { modelName, values, opts, asyncActionTypes }
});

export const modelActions = {
  create: modelActionCreator(MODEL_CREATE),
  destroy: modelActionCreator(MODEL_DESTROY),
  update: modelActionCreator(MODEL_UPDATE),
  findPage: modelActionCreator(MODEL_FIND_PAGE),
  findOne: modelActionCreator(MODEL_FIND_ONE),
  findById: modelActionCreator(MODEL_FIND_BY_ID),
  findList: modelActionCreator(MODEL_FIND_LIST)
};

export const scrollPage = makeActionCreator(SCROLL_PAGE);

export const changeLang = makeActionCreator(CHANGE_LANG);
