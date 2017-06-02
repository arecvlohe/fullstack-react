const { join } = require('path')
const express = require('express')
const webpack = require('webpack')
const webpackMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const config = require('./webpack.config.js')

const port = 3000
const app = express()

const compiler = webpack(config)
const middleware = webpackMiddleware(compiler, {
  filename: 'bundle.js',
  hot: true,
  noInfo: true,
  publicPath: config.output.publicPath
})

app.use(middleware)
app.use(webpackHotMiddleware(compiler, {
  log: console.log,
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000
}))
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'dist/index.html'))
})

app.listen(port, '127.0.0.1', err => {
  if (err) console.log(err)
  console.info('listening on port %s', port)
})
