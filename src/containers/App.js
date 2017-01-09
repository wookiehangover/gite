import { connect } from 'react-redux'
import { commit } from '../actions'
import App from '../components/App'
import get from 'lodash/get'

const mapStateToProps = state => {
  return {
    repo: get(state, 'repo', {})
  }
}

const mapDispatchToProps = dispatch => {
  return {
    commit (message) {
      dispatch(commit(message))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
