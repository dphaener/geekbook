import React from 'react'

export default class NewPost extends React.Component {
  static propTypes = {
    createPost: React.PropTypes.func.isRequired
  };

  onSubmit(ev) {
    ev.preventDefault()
    this.props.createPost(ev.target[0].value)
    ev.target[0].value = ''
  }

  render() {
    return (
      <form onSubmit={::this.onSubmit}>
        <textarea required name='content'></textarea>
        <button type='submit'>Post</button>
      </form>
    )
  }
}
