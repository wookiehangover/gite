import React, { PropTypes } from 'react'
import FileLink from './FileLink'

const styles = {
  container: `overflow-y-scroll bg-near-white`,
  list: `list w-100 pa0 ma0 f6 mv2`,
  listItem: `bb b--light-gray bg-animate hover-bg-moon-gray`,
  link: `mv1 ph2 link blue db code`
}

const FileList = ({ files=[], className='', onClick, onDoubleClick }) =>
  <div className={`${styles.container} ${className}`}>
    <ul className={styles.list}>
      {files.map((file, i) =>
        <FileLink file={file} onClick={onClick} onDoubleClick={onDoubleClick} styles={styles} key={i} />
      )}
    </ul>
  </div>

FileList.propTypes = {
  files: PropTypes.array,
  className: PropTypes.string,
  dirty: PropTypes.bool
}

export default FileList
