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
      return Object.assign({}, state, {
        diff: payload
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
