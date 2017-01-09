import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import promise from 'redux-promise'
import { createStore, applyMiddleware } from 'redux'
import reducers from '../reducers'
import { fetchStatus } from '../actions'

export default function () {
  const logger = createLogger()

  const store = createStore(
    reducers,
    applyMiddleware(thunk, promise, logger)
  )

  store.dispatch(
    fetchStatus()
  )

  return store
}
