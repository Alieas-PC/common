const Sequelize = require('sequelize');
const { findModules } = require('../utils');
const createModelRouter = require('./modelRouter');
const BaseModel = require('./base');

const { getLogger } = require('../log');

const logger = getLogger();

module.exports = (dir, { username, password, database, host, pool }, app) => {
  const sequelize = new Sequelize(database, username, password, {
    host,
    pool,
    dialect: 'mysql',
    logging: sql => {
      logger.info(sql);
    },
    hooks: {
      beforeSync: () => {
        logger.info('Sync to db...');
      },
      afterSync: () => {
        logger.info('DB syncing finished.');
      }
    }
  });

  const models = {};

  findModules(dir, mod => {
    const { name, model, routes } = mod(sequelize);

    model.sync();

    models[name] = new BaseModel({
      model
    });

    if (routes && routes.length) {
      const modelRouter = createModelRouter(name, routes);
      app.apiRouter.use(modelRouter.routes());
      app.apiRouter.use(modelRouter.allowedMethods());
    }
  });

  app.use((ctx, next) => {
    ctx.models = models;
    return next();
  });

  sequelize.sync({
    logging: sql => {
      logger.info(sql);
    },
    hooks: true
  });
};
