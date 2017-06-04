import * as types from './types'

function todos (state = { isFetching: false, todos: [], error: {} }, action) {
  switch (action.type) {
    case types.FETCH_TODOS_REQUEST || types.ADD_TODO_REQUEST || types.ADD_TODO_SUCCESS: {
      return {...state, isFetching: true}
    }
    case types.FETCH_TODOS_SUCCESS: {
      return {...state, isFetching: false, todos: action.payload}
    }
    case types.FETCH_TODOS_FAILURE || types.ADD_TODO_FAILURE: {
      return {...state, isFetching: false, error: action.payload}
    }
    default: {
      return state
    }
  }
}

export default todos
