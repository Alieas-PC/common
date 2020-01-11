const log4js = require('log4js');
const delegate = require('delegates');
const path = require('path');

let instance = null;

const createLogger = projectRoot => {
  const devConfig = {
    appenders: {
      out: { type: 'stdout', layout: { type: 'coloured' } },
      longLogFile: {
        type: 'file',
        filename: path.resolve(projectRoot, 'logs/long.log'),
        // 10MB
        maxLogSize: 1024 * 1024 * 10,
        backups: 5,
        keepFileExt: true,
        layout: { type: 'basic' }
      }
    },
    categories: {
      default: { appenders: ['out'], level: 'debug' },
      long: { appenders: ['longLogFile'], level: 'info' }
    }
  };

  const prdConfig = {
    appenders: {
      defaultLogFile: {
        type: 'file',
        filename: path.resolve(projectRoot, 'logs/app.log'),
        // 10MB
        maxLogSize: 1024 * 1024 * 10,
        backups: 5,
        keepFileExt: true,
        layout: { type: 'basic' }
      },
      longLogFile: {
        type: 'file',
        filename: path.resolve(projectRoot, 'logs/long.log'),
        // 10MB
        maxLogSize: 1024 * 1024 * 10,
        backups: 5,
        keepFileExt: true,
        layout: { type: 'basic' }
      }
    },
    categories: {
      default: {
        appenders: ['defaultLogFile'],
        level: 'info'
      },
      long: { appenders: ['longLogFile'], level: 'info' }
    }
  };

  const config = process.env.NODE_ENV === 'development' ? devConfig : prdConfig;

  log4js.configure(config);

  const logger = log4js.getLogger();

  const longTextLogger = log4js.getLogger('long');

  const logUtil = {
    logger,
    longTextLogger,
    log4js,
    longInfo: text => {
      logger.info(`${text.substr(0, 400)}${text.length > 400 ? '...' : ''}`);

      longTextLogger.info(text);
    }
  };

  delegate(logUtil, 'logger')
    .method('debug')
    .method('info')
    .method('warn')
    .method('error');

  delegate(logUtil, 'log4js').method('getLogger');

  instance = logUtil;

  return logUtil;
};

const getLogger = () => {
  if (instance === null) {
    throw new Error(
      'Logger must be created by invoking createLogger method before use.'
    );
  }
  return instance;
};

module.exports = { createLogger, getLogger };
