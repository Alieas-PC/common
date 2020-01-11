const Router = require('koa-router');

const { findModules } = require('./utils');

const loadRoutes = (dir, prefix, app) => {
  const router = new Router({ prefix });
  app.apiRouter = router;

  app.use(router.routes());
  app.use(router.allowedMethods());

  findModules(
    dir,
    subRouter => {
      router.use(subRouter.routes());

      router.use(subRouter.allowedMethods());
    },
    app
  );
};

module.exports = loadRoutes;
