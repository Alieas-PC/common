"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var pubKey = process.env.RSA_PUB_KEY;
var instance = null;

function encrypt(data) {
  if (instance) {
    return instance.encrypt(data);
  }

  return null;
}

function decrypt(data) {
  if (instance) {
    return instance.decrypt(data);
  }

  return null;
}

if (typeof window !== 'undefined') {
  /* eslint-disable global-require */
  var _require = require('jsencrypt'),
      JSEncrypt = _require.JSEncrypt;

  instance = new JSEncrypt();
  instance.setPublicKey(pubKey);
}

var _default = {
  encrypt: encrypt,
  decrypt: decrypt
};
exports["default"] = _default;
module.exports = exports.default;