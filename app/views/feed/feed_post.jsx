import React from 'react'
import Relay, { createContainer } from 'react-relay'

// Mutations
import LikePostMutation from '~/app/mutations/like_post_mutation'
import UnlikePostMutation from '~/app/mutations/unlike_post_mutation'

class FeedPost extends React.Component {
  static fragments = {
    post: () => Relay.QL`
      fragment on Post {
        ${UnlikePostMutation.getFragment('post')},
        ${LikePostMutation.getFragment('post')},
        first_name,
        last_name,
        timestamp,
        content,
        likes,
        user_likes
      }
    `,
    user: () => Relay.QL`
      fragment on User {
        ${UnlikePostMutation.getFragment('user')},
        ${LikePostMutation.getFragment('user')},
        token
      }
    `
  };

  addLike() {
    const { user, post } = this.props

    Relay.Store.commitUpdate(
      new LikePostMutation({ user, post })
    )
  }

  removeLike() {
    const { user, post } = this.props

    Relay.Store.commitUpdate(
      new UnlikePostMutation({ user, post })
    )
  }

  render() {
    const { user, post } = this.props,
          { first_name, last_name, timestamp, content, likes, user_likes } = post,
          { token } = user

    return (
      <div className='post'>
        <p>{first_name} {last_name} - {timestamp}</p>
        <p>{content}</p>
        <span>{likes}</span>
        { user_likes.includes(token) ?
          <button className="btn btn-default" onClick={::this.removeLike}>Unlike</button> :
        <button className="btn btn-default"  onClick={::this.addLike}>Like</button> }
      </div>
    )
  }
}

export default createContainer(FeedPost, { fragments: FeedPost.fragments })
