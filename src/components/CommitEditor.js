import React from 'react'

const styles = {
  container: `w-third flex flex-column justify-between bg-black-80`,
  textarea: `input-reset w-100 h-100 flex-auto bn code outline-0 pa3 f6 bg-transparent white`,
  controls: `pa1`,
  button: `fr f6 ph4 pv1 ba b--gray br1 pointer bg-transparent blue`
}

const CommitEditor = React.createClass({
  getInitialState () {
    return {
      message: ''
    }
  },
  onSubmit (event) {
    event.preventDefault()
    this.props.commit(this.state.message)
    this.setState({ message: '' })
  },
  onChange (event) {
    this.setState({ message: event.target.value })
  },
  render () {
    return (
      <form className={styles.container} onSubmit={this.onSubmit}>
        <textarea className={styles.textarea} onChange={this.onChange} value={this.state.message} style={{ resize: 'none' }}/>
        <div className={styles.controls}>
          <button type="submit" className={styles.button}>Commit</button>
        </div>
      </form>
    )
  }
})

export default CommitEditor
