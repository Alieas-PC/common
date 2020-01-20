const { Op } = require('sequelize');
const { uuidv4 } = require('../utils');
const Router = require('koa-router');

const isModelExisted = (modelName, ctx) => {
  if (modelName in ctx.models) {
    return true;
  }

  ctx.logger.warn('No model named', modelName, 'could be found');

  return false;
};

const parseOperators = where => {
  if (!where) {
    return where;
  }

  const parsedWhere = Object.keys(where).reduce((prev, key) => {
    const value = where[key];

    if (!(value instanceof Object)) {
      prev[key] = value;
    } else {
      prev[key] = Object.keys(value).reduce((conditions, opStr) => {
        const operator = Op[opStr];

        if (operator) {
          conditions[operator] = value[opStr];
        }
        return conditions;
      }, {});
    }

    return prev;
  }, {});

  return parsedWhere;
};

module.exports = (modelName, includeApi) => {
  const router = new Router({ prefix: `/${modelName}` });

  if (!includeApi || includeApi.includes('create'))
    router.post('/create', async ctx => {
      if (isModelExisted(modelName, ctx)) {
        const newModel = { id: uuidv4(), ...ctx.request.body };

        const model = await ctx.models[modelName].create(newModel);

        ctx.body = model;
      }
    });

  if (!includeApi || includeApi.includes('find-page'))
    router.post('/find-page', async ctx => {
      if (isModelExisted(modelName, ctx)) {
        const { where, limit = 10, offset = 0, order } = ctx.request.body;

        const data = await ctx.models[modelName].findPage({
          where: parseOperators(where),
          limit,
          offset,
          order
        });

        ctx.body = data;
      }
    });

  if (!includeApi || includeApi.includes('find-one')) {
    router.post('/find-one', async ctx => {
      if (isModelExisted(modelName, ctx)) {
        const where = ctx.request.body;

        const model = await ctx.models[modelName].findOne({
          where: parseOperators(where)
        });

        ctx.body = model;
      }
    });
  }

  if (!includeApi || includeApi.includes('find-by-id')) {
    router.post('/find-by-id', async ctx => {
      const { id } = ctx.request.body;

      if (isModelExisted(modelName, ctx)) {
        const model = await ctx.models[modelName].findById(id);

        ctx.body = model;
      }
    });
  }

  if (!includeApi || includeApi.includes('find-list')) {
    router.post('/find-list', async ctx => {
      if (isModelExisted(modelName, ctx)) {
        const { where, order } = ctx.request.body;

        const data = await ctx.models[modelName].findList({
          where: parseOperators(where),
          order
        });

        ctx.body = data;
      }
    });
  }

  if (!includeApi || includeApi.includes('destroy')) {
    router.post('/destroy', async ctx => {
      if (isModelExisted(modelName, ctx)) {
        const where = ctx.request.body;

        const num = await ctx.models[modelName].destroy({
          where: parseOperators(where)
        });

        ctx.body = num;
      }
    });
  }

  if (!includeApi || includeApi.includes('update')) {
    router.post('/update', async ctx => {
      if (isModelExisted(modelName, ctx)) {
        const { where, values, fields } = ctx.request.body;

        const data = await ctx.models[modelName].update(values, {
          where: parseOperators(where),
          fields
        });

        ctx.body = data;
      }
    });
  }

  if (!includeApi || includeApi.includes('count')) {
    router.post('/count', async ctx => {
      if (isModelExisted(modelName, ctx)) {
        const where = ctx.request.body;

        const data = await ctx.models[modelName].count({
          where: parseOperators(where)
        });

        ctx.body = data;
      }
    });
  }
  return router;
};
