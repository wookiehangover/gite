import React from 'react'
import map from 'lodash/map'

const Line = ({ line }) => {
  const addition = /^\+/.test(line)
  const deletion = /^\-/.test(line)
  let theme = ''
  let textContent = line

  if (addition) {
    theme = 'addition yellow'
    textContent = textContent.replace(/^(\+)/, '')
  }

  if (deletion) {
    theme = 'deletion red'
    textContent = textContent.replace(/^(\-)/, '')
  }

  return (
    <span className={`bg-animate hover-bg-dark-gray db ${theme}`}>
      {textContent}
    </span>
  )
}

const Diff = ({ data = '', changes = '', path = '' }) => {
  const lines = data.split('\n')
  return (
    <div className={`center pv3 ph4`}>

      <style>
      {`
        .addition:before { content: '+ '; color: #444; }
        .deletion:before { content: '- '; color: #444; }
      `}
      </style>

      <h3 className={`fw3 f5 gray`}>
        {path} <small className={`dib f6 pl3 white`}>{changes}</small>
        </h3>

      <pre className={`code lh-copy`} style={{ fontSize: '0.775rem' }}>
        {map(lines, (line, i) =>
          <Line line={line} key={i} />
        )}
      </pre>
    </div>
  )
}

export default Diff
