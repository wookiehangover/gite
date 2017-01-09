import React from 'react'

const CommitEditor = React.createClass({
  getInitialState () {
    return {
      message: ''
    }
  },
  onSubmit (event) {
    event.preventDefault()
    this.props.commit(this.state.message)
  },
  onChange (event) {
    this.setState({ message: event.target.value })
  },
  render () {
    return (
      <form className={`w-third flex flex-column justify-between`} onSubmit={this.onSubmit}>
        <textarea className={`input-reset w-100 h-100 flex-auto bn code outline-0 pa3 f6`} onChange={this.onChange} value={this.state.message} />
        <div className={`pa1`}>
          <button type="submit" className={`fr`}>Commit</button>
        </div>
      </form>
    )
  }
})

export default CommitEditor
