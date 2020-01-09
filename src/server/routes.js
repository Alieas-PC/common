const path = require('path');
const fs = require('fs');
const Router = require('koa-router');
const logger = require('./log');

const loadRoutes = (dirPath, prefix) => {
  const router = new Router({ prefix });

  /** find routes under the same directory, then load it. */
  fs.readdir(dirPath, (err, files) => {
    if (err) throw err;
    files.forEach(file => {
      // skip index.js and hidden files which start with `.`.
      if (file.startsWith('.') || path.basename(__filename) === file) return;
      logger.info(`Load router [${file}]`);

      /* eslint-disable import/no-dynamic-require */
      /* eslint-disable global-require */
      const subRouter = require(path.resolve(dirPath, file));

      router.use(subRouter.routes());

      router.use(subRouter.allowedMethods());
    });
  });
};

module.exports = loadRoutes;
