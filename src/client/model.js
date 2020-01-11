import { modelActions } from './action';

import { getStore } from './store';

export default context => {
  const store = getStore();

  const modelAccess = {};

  Object.keys(modelActions).forEach(k => {
    modelAccess[k] = (modelName, values) => {
      store.dispatch(
        modelActions[k](modelName, values, {
          onSuccess: context.onSuccess ? context.onSuccess : null,

          onError: context.onError ? context.onError : null
        })
      );
    };
  });

  return modelAccess;
};
