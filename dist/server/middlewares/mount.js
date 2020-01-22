module.exports = props => async (ctx, next) => {
  Object.keys(props).forEach(k => {
    ctx[k] = props[k];
  });

  return next();
};
