/* eslint-disable no-param-reassign */
import { takeLatest, all, put, takeEvery } from 'redux-saga/effects';

import { push, replace } from 'connected-react-router';

import { scrollTop } from '../utils';

import * as action from '../action';

import {
  create,
  update,
  destroy,
  findPage,
  findOne,
  findById,
  findList
} from './model';

function* navTo({ payload: { path, useReplace, option } }) {
  if (useReplace) {
    yield put(replace(path, option));
  } else {
    yield put(push(path, option));
  }

  scrollTop(0);
}

export default function*() {
  yield all([
    takeLatest(action.NAV_TO, navTo),
    // model crud
    takeEvery(action.MODEL_CREATE.REQUEST, create),
    takeEvery(action.MODEL_UPDATE.REQUEST, update),
    takeEvery(action.MODEL_DESTROY.REQUEST, destroy),
    takeEvery(action.MODEL_FIND_BY_ID.REQUEST, findById),
    takeEvery(action.MODEL_FIND_LIST.REQUEST, findList),
    takeEvery(action.MODEL_FIND_ONE.REQUEST, findOne),
    takeEvery(action.MODEL_FIND_PAGE.REQUEST, findPage)
  ]);
}
