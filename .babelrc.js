module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-transform-spread',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-syntax-dynamic-import',
    'babel-plugin-dynamic-import-node',
    'babel-plugin-add-module-exports',
    [
      'babel-plugin-css-modules-transform',
      {
        generateScopedName: '[local]_[sha1:hash:base64:5]',
        preprocessCss: 'build/babel/sass-process',
        prepend: ['autoprefixer'],
        extensions: ['.scss', '.css']
      }
    ]
  ]
};
