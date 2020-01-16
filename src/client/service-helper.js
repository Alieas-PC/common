import { call, put } from 'redux-saga/effects';

import { setLoadingState } from './action';

function* callService(service, args, actionTypes, opts = {}) {
  const { onSuccess = () => {}, onError = () => {}, loadingKey } = opts;

  let resData = null;

  if (loadingKey) {
    yield put(setLoadingState({ loading: true, key: loadingKey }));
  }

  try {
    resData = yield call(service, args);

    const action = yield* onSuccess(resData);

    yield put({
      type: actionTypes.SUCCESS,
      payload: resData
    });

    console.log('returned action', action);

    if (action) {
      yield put(action);
    }
  } catch (e) {
    yield put({
      type: actionTypes.FAILURE,
      payload: { e, res: resData }
    });

    const action = yield* onError(e, resData);

    console.log('returned action', action);

    if (action) {
      yield put(action);
    }
  } finally {
    if (loadingKey) {
      yield put(setLoadingState({ loading: false, key: loadingKey }));
    }
  }
}

export default callService;
