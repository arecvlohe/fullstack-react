const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TodosSchema = new Schema({
  title: String
})

module.exports = mongoose.model('Todo', TodosSchema)
