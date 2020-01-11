const requester = require('../request');

module.exports = (prefix, forwardTo) => {
  return async ctx => {
    if (
      ctx.path.startsWith(`/api/${prefix}/`) ||
      ctx.path === `/api/${prefix}`
    ) {
      const url = `${forwardTo}${ctx.path.replace(`/api/${prefix}`, '')}`;

      try {
        const { method } = ctx;

        ctx.logger.info(`${method} data from/to remote server`);

        ctx.logger.info(`Forward to => ${url}`);

        const data = Object.keys(ctx.request.body).length
          ? ctx.request.body
          : ctx.query;

        ctx.logger.info(
          `Forward request Query => ${JSON.stringify(ctx.query)}`
        );

        ctx.logger.info(
          `Forward request Body => ${JSON.stringify(ctx.request.body)}`
        );

        let { ip } = ctx;

        if (ctx.ips.length) {
          [ip] = ctx.ips;
        }

        if (ip) {
          ip = ip.substr(ip.lastIndexOf(':') + 1);
        }

        const res = await requester[method.toLowerCase()](
          url,
          data,
          ctx.request.type,
          {
            sessid: ctx.header.sessid,
            ip
          }
        );

        ctx.logger.longInfo(
          `Response data from remote server => ${JSON.stringify(res)}`
        );

        ctx.body = res;

        ctx.status = 200;
      } catch (e) {
        ctx.status = 500;
        ctx.logger.error(`Error occurred, ${e.message}`);
      }
    }
  };
};
