
import React, { PropTypes } from 'react'
import FileList from '../containers/FileList'
import Diff from './Diff'

const styles = {
  container: `flex flex-column justify-between h-100`,
  diff: `w-100 h5 light-green bg-near-black overflow-y-scroll flex-auto`,
  commit: `w-100 h-50 h-25-m bottom-0 bt flex pb1 bt b--light-gray overflow-hidden`,
  editor: `input-reset w-100 mw-100 h-100 bn code outline-0 pa3 f6`
}

const App = ({ repo }) =>
  <div className={styles.container}>
    <section className={styles.diff} style={{ resize: 'vertical' }}>
      <Diff data={repo.diff} />
    </section>

    <section className={styles.commit}>
      <FileList files={repo.dirty} dirty={true} className={`w-third br b--light-gray`}/>

      <div className={`w-third`}>
        <textarea className={styles.editor}></textarea>
      </div>

      <FileList files={repo.staged} className={`w-third bl b--light-gray`} />
    </section>
  </div>

App.propTypes = {
  repo: PropTypes.object
}

export default App
