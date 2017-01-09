import fs from 'fs'

const cwd = process.cwd()
const git = require('simple-git')(cwd)

export const ADD_SUCCESS = 'ADD_SUCCESS'
function addSuccess (path, result) {
  return {
    type: ADD_SUCCESS,
    payload: result
  }
}

export const RECEIVE_FILE_DIFF = 'RECEIVE_FILE_DIFF'
function receiveFileDiff (path, diff) {
  return {
    type: RECEIVE_FILE_DIFF,
    payload: diff,
    path
  }
}

export const RECEIVE_STATUS = 'RECEIVE_STATUS'
function receiveStatus (status) {
  return {
    type: RECEIVE_STATUS,
    payload: status
  }
}

export const addFile = (path) => {
  return dispatch => {
    git.add(path, (err, result) => {
      if (err) {
        console.log(err)
      } else {
        dispatch(addSuccess(result))
        dispatch(fetchStatus())
      }
    })
  }
}

export const commit = (message) => {
  return dispatch => {
    git.commit(message, (err, result) => {
      if (err) {
        console.log(err)
      } else {
        dispatch(fetchStatus())
      }
    })
  }
}

export const fetchDiff = (path, index) => {
  return dispatch => {
    const options = [ path ]
    if (index === 'M') {
      options.unshift('--cached')
    } else if (index === '?' || index === 'A') {
      return fs.readFile(path, 'utf8', (err, data) => {
        dispatch(receiveFileDiff(path, data))
      })
    }

    git.diff(options, (err, summary) => {
      if (err) {
        console.log(err)
        fs.readFile(path, 'utf8', (err, data) => {
          dispatch(receiveFileDiff(path, data))
        })
      } else {
        dispatch(receiveFileDiff(path, summary))
      }
    })
  }
}

export const fetchStatus = () => {
  return dispatch => {
    git.status((err, status) => {
      if (err) {
        // dispatch()
      } else {
        dispatch(receiveStatus(status))
      }
    })
  }
}

export const unstageFile = (path, index) => {
  return dispatch => {
    const options = [ path ]
    console.log(index)
    git.reset(options, (err, summary) => {
      if (err) {
        console.log(err)
      } else {
        dispatch(fetchStatus())
      }
    })
  }
}
