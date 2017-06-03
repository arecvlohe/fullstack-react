import React, { Component } from 'react'
import axios from 'axios'

const enhance = WrappedComponent => class extends Component {
  constructor () {
    super()
    this.state = {
      todos: [],
      input: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount () {
    axios.get('http://localhost:3000/api/todos').then(({ data }) => {
      this.setState({ todos: data })
    })
  }

  handleSubmit (e) {
    e.preventDefault()
    axios.post('http://localhost:3000/api/todos', { title: this.state.input }).then(res => {
      axios.get('http://localhost:3000/api/todos').then(res => {
        this.setState({ todos: res.data, input: '' })
      })
    })
  }

  handleInputChange (e) {
    this.setState({ input: e.target.value })
  }

  render () {
    return (
      <WrappedComponent
        {...this.state}
        {...this.props}
        handleInputChange={this.handleInputChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}


export default enhance
