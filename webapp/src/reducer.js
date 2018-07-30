import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'

import wallet from './modules/wallet/reducer'
import colors from './modules/color/reducers'

export const rootReducer = combineReducers({
  router,
  wallet,
  colors
})
