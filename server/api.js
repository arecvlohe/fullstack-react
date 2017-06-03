const express = require('express')
const Todo = require('./model/todos')

const api = express.Router()
api.get('/', (req, res) => {
  res.json({ message: 'API ready!' })
})

api.route('/todos')
  .get((req, res) => {
    Todo.find((err, todos) => {
      if (err) res.send(err)
      res.json(todos)
    })
  })
  .post((req, res) => {
    const todo = new Todo()
    todo.title = req.body.title
    todo.save((err) => {
      if (err) res.send(err)
      res.json({ message: 'Comment was successfully added.' })
    })
  })

module.exports = api
