import { modelActions } from './action';

import { getStore } from './store';

export default context => {
  const store = getStore();

  const modelAccess = {};

  Object.keys(modelActions).forEach(k => {
    modelAccess[k] = (modelName, values, opts) => {
      store.dispatch(
        modelActions[k](modelName, values, {
          onSuccess: res => {
            const callbackFn = `${k}Success`;

            if (typeof context[callbackFn] === 'function') {
              return context[callbackFn](res, modelName);
            }

            return null;
          },
          onError: (e, res) => {
            const callbackFn = `${k}Error`;

            if (typeof context[callbackFn] === 'function') {
              return context[callbackFn](e, res, modelName);
            }

            return null;
          },
          ...opts
        })
      );
    };
  });

  return modelAccess;
};
