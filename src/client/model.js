import { modelActions } from './action';

import { getStore } from './store';

export default context => {
  const store = getStore();

  const modelAccess = {};

  Object.keys(modelActions).forEach(k => {
    modelAccess[k] = (modelName, values) => {
      store.dispatch(
        modelActions[k](modelName, values, {
          onSuccess: context.onSuccess
            ? res => context.onSuccess(res, modelName)
            : undefined,

          onError: context.onError
            ? (e, res) => context.onError(e, res, modelName)
            : undefined
        })
      );
    };
  });

  return modelAccess;
};
