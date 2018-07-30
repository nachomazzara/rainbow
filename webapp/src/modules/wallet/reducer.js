import { combineReducers } from 'redux'

import { CONNECT_WALLET } from './actions'

const DATA_INITIAL_STATE = {
  eth: null,
  address: ''
}

function data(state = DATA_INITIAL_STATE, action) {
  const { type, payload } = action
  switch (type) {
    case CONNECT_WALLET.success: {
      return {
        eth: payload.eth,
        address: payload.address
      }
    }
    default:
      return state
  }
}

function loading(state = false, action) {
  switch (action.type) {
    case CONNECT_WALLET.request: {
      return true
    }
    case CONNECT_WALLET.success:
    case CONNECT_WALLET.failure: {
      return false
    }
    default:
      return state
  }
}

function error(state = null, action) {
  const { type, payload } = action
  switch (type) {
    case CONNECT_WALLET.success:
    case CONNECT_WALLET.request: {
      return null
    }
    case CONNECT_WALLET.failure: {
      return payload.error
    }
    default:
      return state
  }
}

export default combineReducers({ data, loading, error })
