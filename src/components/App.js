
import React, { PropTypes } from 'react'
import FileList from '../containers/FileList'
import CommitEditor from './CommitEditor'
import Diff from './Diff'

const styles = {
  container: `flex flex-column justify-between h-100`,
  diff: `w-100 h5 light-green bg-near-black overflow-y-scroll flex-auto`,
  commit: `w-100 h-50 h-25-m bottom-0 bt flex pb1 bt b--light-gray overflow-hidden`
}

const App = ({ repo, commit }) =>
  <div className={styles.container}>
    <section className={styles.diff} style={{ resize: 'vertical' }}>
      <Diff data={repo.diff} />
    </section>

    <section className={styles.commit}>
      <FileList files={repo.dirty} dirty={true} className={`w-third br b--light-gray`}/>

      <CommitEditor commit={commit} />

      <FileList files={repo.staged} className={`w-third bl b--light-gray`} />
    </section>
  </div>

App.propTypes = {
  repo: PropTypes.object
}

export default App
