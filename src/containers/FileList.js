import { connect } from 'react-redux'
import { addFile, fetchDiff, unstageFile } from '../actions'
import FileList from '../components/FileList'

const mapStateToProps = state => state

const mapDispatchToProps = (dispatch, ownProps) => {
  const action = ownProps.dirty ? addFile : unstageFile
  return {
    onDoubleClick (path, index) {
      dispatch(action(path, index))
    },
    onClick (path, index) {
      dispatch(fetchDiff(path, index))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FileList)
