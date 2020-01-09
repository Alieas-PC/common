import { END } from 'redux-saga';

import { initApp } from '../action';

import createStore from './configure';

export default (rootReducer, rootSaga, preloadedState, history) => {
  const store = createStore(rootReducer, rootSaga, preloadedState, history);

  store.initApp = ctx => {
    store.dispatch(initApp(ctx));
  };

  store.end = async () => {
    store.dispatch(END);

    await store.asyncTask;
  };

  return store;
};
