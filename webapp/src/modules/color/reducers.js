import { combineReducers } from 'redux'

import { FETCH_COLORS, CREATE_COLOR } from './actions'

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
    case CREATE_COLOR.success: {
      return {
        colors: [...state.colors, payload.color]
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

function loadingTx(state = false, action) {
  switch (action.type) {
    case CREATE_COLOR.request: {
      return true
    }
    case CREATE_COLOR.success:
    case CREATE_COLOR.failure: {
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

export default combineReducers({ data, loading, loadingTx, error })
