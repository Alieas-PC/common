const path = require('path');

const baseDir = process.cwd() + '/node_modules/';

module.exports = {
  env: {
    client: {
      presets: [baseDir + '@babel/preset-env', baseDir + '@babel/preset-react'],
      plugins: [
        baseDir + '@babel/plugin-transform-runtime',
        baseDir + '@babel/plugin-transform-spread',
        baseDir + '@babel/plugin-proposal-class-properties',
        baseDir + '@babel/plugin-proposal-export-default-from',
        baseDir + '@babel/plugin-proposal-export-namespace-from',
        baseDir + '@babel/plugin-syntax-dynamic-import',
        baseDir + 'react-hot-loader/babel'
      ]
    },
    server: {
      presets: [baseDir + '@babel/preset-env', baseDir + '@babel/preset-react'],
      plugins: [
        baseDir + '@babel/plugin-transform-runtime',
        baseDir + '@babel/plugin-transform-spread',
        baseDir + '@babel/plugin-proposal-class-properties',
        baseDir + '@babel/plugin-proposal-export-default-from',
        baseDir + '@babel/plugin-proposal-export-namespace-from',
        baseDir + '@babel/plugin-syntax-dynamic-import',
        baseDir + 'babel-plugin-dynamic-import-node',
        baseDir + 'babel-plugin-add-module-exports',
        [
          baseDir + 'babel-plugin-css-modules-transform',
          {
            generateScopedName: '[local]_[sha1:hash:base64:5]',
            preprocessCss: path.resolve(__dirname, 'build/babel/sass-process'),
            prepend: [baseDir + 'autoprefixer'],
            extensions: ['.scss', '.css']
          }
        ]
      ]
    }
  }
};
