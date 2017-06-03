const express = require('express')

const api = express.Router()
api.get('/', (req, res) => {
  res.json({ message: 'API ready!' })
})

module.exports = api
