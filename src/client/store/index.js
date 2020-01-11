import { END } from 'redux-saga';

import { initApp } from '../action';

import _createStore from './configure';

let _store = null;

export const createStore = (rootReducer, rootSaga, preloadedState, history) => {
  const store = _createStore(rootReducer, rootSaga, preloadedState, history);

  store.initApp = ctx => {
    store.dispatch(initApp(ctx));
  };

  store.end = async () => {
    store.dispatch(END);

    await store.asyncTask;
  };

  _store = store;

  return store;
};

export const getStore = () => _store;
