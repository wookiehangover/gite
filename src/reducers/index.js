import { combineReducers } from 'redux'
import filter from 'lodash/filter'

import {
  ADD_SUCCESS,
  RECEIVE_FILE_DIFF,
  RECEIVE_STATUS
} from '../actions'

const repo = (state={}, action) => {
  const { type, payload } = action

  switch(type) {
    case ADD_SUCCESS:
      return Object.assign({}, state, {
        lastStaged: payload
      })

    case RECEIVE_FILE_DIFF:
      let diff = [ payload ]
      let changes = []
      let parts = payload.split(/@(@.+@)@/)
      if (parts.length >= 2) {
        diff = parts.slice(1).filter(line => !/@/.test(line))
        changes = parts.slice(1).filter(line => /@/.test(line))
      }
      return Object.assign({}, state, {
        diff,
        changes,
        path: action.path
      })

    case RECEIVE_STATUS:
      return Object.assign({}, state, {
        status: payload,
        dirty: filter(payload.files, file => !/M|A/.test(file.index)),
        staged: filter(payload.files, file => /M|A/.test(file.index))
      })

    default:
      return state
  }
}

export default combineReducers({
  repo
})
