import * as types from './types'
import axios from 'axios'

const fetchTodosRequest = (payload) => {
  return {
    type: types.FETCH_TODOS_REQUEST
  }
}

const fetchTodosSuccess = (payload) => {
  return {
    type: types.FETCH_TODOS_SUCCESS,
    payload
  }
}

const fetchTodosFailure = (payload) => {
  return {
    type: types.FETCH_TODOS_FAILURE,
    payload
  }
}

export const getTodos = () => (dispatch) => {
  dispatch(fetchTodosRequest)
  return axios.get('http://localhost:3000/api/todos')
    .then(res => dispatch(fetchTodosSuccess(res.data)))
    .catch(e => dispatch(fetchTodosFailure(e)))
}

const addTodoRequest = () => {
  return {
    type: types.ADD_TODO_REQUEST
  }
}

const addTodoSuccess = () => {
  return {
    type: types.ADD_TODO_SUCCESS,
  }
}

const addTodoFailure = (payload) => {
  return {
    type: types.ADD_TODO_SUCCESS,
    payload
  }
}

export const addTodo = (payload) => (dispatch) => {
  dispatch(addTodoRequest())
  axios.post('http://localhost:3000/api/todos', { title: payload }).then(res => {
    dispatch(addTodoSuccess())
    dispatch(getTodos())  
  })
  .catch(e => dispatch(addTodoFailure(e)))
}

