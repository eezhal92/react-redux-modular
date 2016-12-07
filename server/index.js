const express = require('express');
const { resolve, join } = require('path');
const app = express();

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../webpack.config');
const compiler = webpack(webpackConfig);

app.use(express.static(resolve(__dirname, '../dist')));
app.use(webpackDevMiddleware(compiler, {
  hot: true,
  inline: true,
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
}));
app.use(webpackHotMiddleware(compiler));

app.get('*', (req, res) => {
  res.sendFile(join(__dirname, '../dist/index.html'));
});

const PORT = 9000;

app.listen(PORT, () => console.log(`Listening on port : ${PORT}`));

module.exports = app;
