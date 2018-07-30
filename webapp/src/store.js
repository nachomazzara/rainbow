import { routerMiddleware } from 'react-router-redux'
import { applyMiddleware, compose, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import createHistory from 'history/createBrowserHistory'
import createSagasMiddleware from 'redux-saga'

import { rootReducer } from './reducer'
import { rootSaga } from './sagas'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const isDevelopment =
  !process.env.NODE_ENV || process.env.NODE_ENV === 'development'

const history = createHistory()

const historyMiddleware = routerMiddleware(history)
const sagasMiddleware = createSagasMiddleware()
const loggerMiddleware = createLogger({
  collapsed: () => true,
  predicate: (_, action) => isDevelopment || action.type.includes('Failure')
})

const middleware = applyMiddleware(
  historyMiddleware,
  sagasMiddleware,
  loggerMiddleware
)
const enhancer = composeEnhancers(middleware)
const store = createStore(rootReducer, enhancer)

sagasMiddleware.run(rootSaga)

if (isDevelopment) {
  window.getState = store.getState
}

export { history, store }
