import React from 'react'
import map from 'lodash/map'

const Line = ({ line }) => {
  const addition = /^\+/.test(line)
  const deletion = /^\-/.test(line)
  let theme = ''
  let textContent = line || '  '

  if (addition) {
    theme = 'addition yellow'
    textContent = textContent.replace(/^(\+)/, '')
  }

  if (deletion) {
    theme = 'deletion red'
    textContent = textContent.replace(/^(\-)/, '')
  }

  return (
    <span className={`bg-animate hover-bg-dark-gray db w-100 ${theme}`}>
      {textContent}
    </span>
  )
}

const Diff = ({ data = [], changes = [], path = '' }) => {
  const chunks = data
  return (
    <div className={`pv3 ph4 flex flex-column h-100`}>
      <style>
      {`
        .addition:before { content: '+ '; color: #444; }
        .deletion:before { content: '- '; color: #444; }
      `}
      </style>

      <h3 className={`fw3 f5 gray`}>
        {path}
      </h3>

      {chunks.length === 0 ?
        (<h1 className={`fw3 tc pa3 ba b--gray br3 dib gray ph5 o-60`} style={{ margin: 'auto' }}>No changes</h1>) :
        <pre className={`code lh-copy ma0`} style={{ fontSize: '0.775rem' }}>
          {map(chunks, (chunk, i) => {
            const lines = chunk.split('\n')
            const changeset = changes[i]
            return (
              <div className={`bb b--dark-gray pb2 mb2`}>
                <span className={`white db bb b--dark-blue mv2 pb2`}>{changeset}</span>
                {lines.map((line, i) =>
                  <Line line={line} key={i} />
                )}
              </div>
            )
          })}
        </pre>
      }
    </div>
  )
}

export default Diff
