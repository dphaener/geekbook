import React from 'react'
import { connect } from 'react-redux'
import {removeLike, addLike} from '~/app/actions'


export function FeedPost({content, id, likes, addLike, removeLike, alreadyLiked=false}) {
  return <div>
    <p>{content}</p>
    <span>{likes ? likes.length : null}</span>
    { alreadyLiked ?
      <button className="btn btn-default" onClick={removeLike}>Unlike</button> :
    <button className="btn btn-default"  onClick={addLike}>Like</button> }
  </div>
}

export default connect((state, props) => {
  return {
    alreadyLiked: state.likes[props.id]
  }
}, (dispatch, props) => {
  return {
    removeLike: e => dispatch(removeLike({post_id: props.id, user_id: props.user_id})),
    addLike: e => dispatch(addLike({post_id: props.id, user_id: props.user_id})),
  }
})(FeedPost)
