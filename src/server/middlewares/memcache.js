/**
 * Simple map cache, not recommend for production use
 */

class Cache {
  constructor(logger) {
    this.cache = {};

    this.clearInvalidCache();

    this.logger = logger;
  }

  get(key) {
    const found = this.cache[key];

    if (found) {
      found.active = new Date().getTime();

      this.logger.info(
        `Found cache with key ${key}, and update active field to ${found.active}`
      );

      return found.value;
    }

    this.logger.info(`Cannot found cache with key ${key}`);

    return null;
  }

  set(key, value, expires = 600000) {
    this.logger.info(
      `Set new cache with key ${key} expires ${expires} value ${
        typeof value === 'object' ? JSON.stringify(value) : value
      }.`
    );

    this.cache[key] = { value, active: new Date().getTime(), expires };
  }

  clearInvalidCache() {
    /* eslint-disable no-restricted-syntax */
    /* eslint-disable guard-for-in */
    try {
      const now = new Date().getTime();

      for (const e in this.cache) {
        const next = this.cache[e];

        if (now - next.active >= next.expires) {
          delete this.cache[e];
          this.logger.info(`delete expired cache with key => ${e}`);
        }
      }
    } catch (e) {
      this.logger.info(`Clear cache error ${e.message}`);
    } finally {
      setTimeout(this.clearInvalidCache.bind(this), 1000);
    }
  }
}

module.exports = app => {
  const cache = new Cache(app.logger);

  return async (ctx, next) => {
    ctx.cache = cache;

    return next();
  };
};
