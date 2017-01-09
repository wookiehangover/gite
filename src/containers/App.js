import { connect } from 'react-redux'
import App from '../components/App'
import get from 'lodash/get'

export default connect(state => {
  return {
    repo: get(state, 'repo', {})
  }
})(App)
