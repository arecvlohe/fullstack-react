const { join, resolve } = require('path')
const express = require('express')
const webpack = require('webpack')
const webpackMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const config = require('../webpack.config.js')
const cors = require('./middleware')
const api = require('./api')

const port = 3000
const app = express()
mongoose.connect('mongodb://arecvlohe:password@ds161121.mlab.com:61121/fullstack-react')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors)
app.use('/api', api)

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
app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, '..', 'dist/index.html'))
})

app.listen(port, '127.0.0.1', err => {
  if (err) console.log(err)
  console.info('listening on port %s', port)
})
