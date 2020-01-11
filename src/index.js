const AppServer = require('./server/app');

const { createLogger, getLogger } = require('./server/log');

module.exports = { AppServer, createLogger, getLogger };
