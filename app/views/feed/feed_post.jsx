import React from 'react'
import { connect } from 'react-redux'
import {removeLike, addLike} from '~/app/actions'

export function FeedPost({user_id, user_likes, content, likes, addLike, removeLike}) {
  return (
    <div className='post'>
      <p>{content}</p>
      <span>{likes}</span>
      { user_likes.includes(user_id) ?
        <button className="btn btn-default" onClick={removeLike}>Unlike</button> :
      <button className="btn btn-default"  onClick={addLike}>Like</button> }
    </div>
  )
}

export default connect(null, (dispatch, props) => {
  let { user_id, ...post } = props

  return {
    removeLike: e => dispatch(removeLike({post, user_id: props.user_id})),
    addLike: e => dispatch(addLike({post, user_id: props.user_id})),
  }
})(FeedPost)
