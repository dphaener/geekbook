import React from 'react'
import Relay, { createContainer } from 'react-relay'
import { removeLike, addLike } from '~/app/actions'

class FeedPost extends React.Component {
  static fragments = {
    post: () => Relay.QL`
      fragment on Post {
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
        token
      }
    `
  };

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
          <button className="btn btn-default" onClick={removeLike}>Unlike</button> :
        <button className="btn btn-default"  onClick={addLike}>Like</button> }
      </div>
    )
  }
}

export default createContainer(FeedPost, { fragments: FeedPost.fragments })
