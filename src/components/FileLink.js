import React, { PropTypes } from 'react'

const FileLink = ({ file, onClick, onDoubleClick, styles }) =>
  <li className={styles.listItem}>
    <a href="#"
      className={styles.link}
      style={{ fontSize: '0.775rem' }}
      onClick={event => {
        event.preventDefault()
        onClick(file.path, file.index)
      }}
      onDoubleClick={event => {
        event.preventDefault()
        onDoubleClick(file.path, file.index)
      }}>
      {file.path}
    </a>
  </li>

FileLink.propTypes = {
  file: PropTypes.object,
  onClick: PropTypes.func,
  onDoubleClick: PropTypes.func,
  styles: PropTypes.object
}

export default FileLink
