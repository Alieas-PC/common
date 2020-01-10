const Koa = require('koa');
const serve = require('koa-static');
const bodyParser = require('koa-bodyparser');
const compress = require('koa-compress');
const views = require('koa-views');
const session = require('koa-session');
const compressible = require('compressible');
const createLogger = require('./log');
const mount = require('./middlewares/mount');
const memcache = require('./middlewares/memcache');
const forward = require('./middlewares/forward');
const loadRoutes = require('./routes');
const { loadModels } = require('./model');
const { isPrd } = require('./util');

class AppServer {
  constructor({ keys = ['friday'], assetsDir, projectRoot }) {
    this.assetsDir = assetsDir;
    this.projectRoot = projectRoot;

    this.app = new Koa();
    this.app.proxy = true;
    this.app.keys = keys;

    this.logger = createLogger(projectRoot);

    this.useMiddlewares();
  }

  useMiddlewares() {
    this.use(bodyParser())
      .use(
        compress({
          filter: type => !/event-stream/i.test(type) && compressible(type)
        })
      )
      .use(
        // which directory will be public for app to reference to.
        serve(this.assetsDir, {
          defer: false,
          maxAge: isPrd ? 180000 : 0
        })
      )
      .use(
        // for convenience, mount logger object to ctx.
        mount({ logger: this.logger })
      )
      .use(
        // use ejs as default template engine.
        views(this.assetsDir, {
          map: {
            html: 'ejs'
          },
          options: {
            delimiter: '$',
            cache: isPrd
          }
        })
      )
      .use(
        // use koa session
        session(this.app)
      )
      .use(memcache(this));
  }

  useRoutes(routesDir, prefix = '/api') {
    loadRoutes(routesDir, prefix, this);
  }

  useModels(modelsDir, dbCfg) {
    loadModels(modelsDir, dbCfg, this);
  }

  useForward(prefix, forwardTo) {
    this.use(forward(prefix, forwardTo, this));
  }

  use(m) {
    this.app.use(m);

    return this;
  }

  listen(port = 3000) {
    this.logger.info(`Server is listening at port ${port}`);

    this.app.listen(port);
  }
}

module.exports = AppServer;
