const path = require('path');
const fs = require('fs');

const findModules = (dir, callback, app) => {
  /** find routes under the same directory, then load it. */
  fs.readdir(dir, (err, files) => {
    if (err) throw err;
    files.forEach(file => {
      // skip index.js and hidden files which start with `.`.
      if (file.startsWith('.')) return;

      app.logger.info(`Load a module from [${file}]`);

      /* eslint-disable import/no-dynamic-require */
      /* eslint-disable global-require */
      const mod = require(path.resolve(dir, file));

      if (callback) {
        callback(mod);
      }
    });
  });
};

const isPrd = !(process.env.NODE_ENV === 'development');

const uuidv4 = () =>
  'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    let r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
module.exports = { uuidv4 };

module.exports = { findModules, isPrd, uuidv4 };
