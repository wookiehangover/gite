import React from 'react'
import map from 'lodash/map'

const Diff = ({ data='' }) => {
  const lines = data.split('\n')
  return (
    <div className={`center pa4`}>
    <style>
      {`.addition:before { content: '+ '; color: #444; }
        .deletion:before { content: '- '; color: #444; }
      `}
    </style>
      <pre className={`code lh-copy`} style={{ fontSize: '0.775rem' }}>
        {map(lines, line => {
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
        })}
      </pre>
    </div>
  )
}

export default Diff
