const { AppServer } = require('./src');

const app = new AppServer({
  projectRoot: __dirname,
  assetsDir: __dirname
});

app.listen(3000);
