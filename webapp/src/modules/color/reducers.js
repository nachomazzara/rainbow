import { combineReducers } from 'redux'

import { FETCH_COLORS } from './actions'

const DATA_INITIAL_STATE = {
  colors: []
}

function data(state = DATA_INITIAL_STATE, action) {
  const { type, payload } = action
  switch (type) {
    case FETCH_COLORS.success: {
      return {
        colors: payload.colors
      }
    }
    default:
      return state
  }
}

function loading(state = false, action) {
  switch (action.type) {
    case FETCH_COLORS.request: {
      return true
    }
    case FETCH_COLORS.success:
    case FETCH_COLORS.failure: {
      return false
    }
    default:
      return state
  }
}

function error(state = null, action) {
  const { type, payload } = action
  switch (type) {
    case FETCH_COLORS.success:
    case FETCH_COLORS.request: {
      return null
    }
    case FETCH_COLORS.failure: {
      return payload.error
    }
    default:
      return state
  }
}

export default combineReducers({ data, loading, error })
