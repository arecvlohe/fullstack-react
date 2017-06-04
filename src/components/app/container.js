import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { compose } from 'recompose'

import * as selectors from './store/selectors'
import * as actions from './store/actions'

const mapStateToProps = state => {
  return {
    todos: selectors.getTodos(state)
  }
}

const mapDispatchToProps = dispatch => {
  const { getTodos, addTodo } = actions
  return bindActionCreators({ getTodos, addTodo }, dispatch)
}

const enhance = WrappedComponent => class extends Component {
  constructor () {
    super()
    this.state = {
      input: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount () {
    this.props.getTodos()
  }

  handleSubmit (e) {
    e.preventDefault()
    this.props.addTodo(this.state.input)
    this.setState({ input: '' })
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


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  enhance
)
