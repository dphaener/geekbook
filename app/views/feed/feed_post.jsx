import React from 'react'
import { connect } from 'react-redux'
import {removeLike, addLike} from '~/app/actions'

export function FeedPost({user_id, user_likes, content, id, likes, addLike, removeLike}) {
  return <div>
    <p>{content}</p>
    <span>{likes}</span>
    { user_likes.includes(user_id) ?
      <button className="btn btn-default" onClick={removeLike}>Unlike</button> :
    <button className="btn btn-default"  onClick={addLike}>Like</button> }
  </div>
}

export default connect(null, (dispatch, props) => {
  return {
    removeLike: e => dispatch(removeLike({post_id: props.id, user_id: props.user_id})),
    addLike: e => dispatch(addLike({post_id: props.id, user_id: props.user_id})),
  }
})(FeedPost)
