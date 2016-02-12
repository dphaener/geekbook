import React from 'react'
import Gravatar from 'react-gravatar'
import { connect } from 'react-redux'
import { friendUser, unfriendUser } from '~/app/actions'

function User({current_user_token, current_user_friends, token, email, first_name, last_name, friendUser, unfriendUser}) {
  return (
    <div>
      <Gravatar email={email} />
      <span>{first_name} {last_name}</span>
      { current_user_friends.includes(token) ?
        <button onClick={() => unfriendUser({liker_id: current_user_token, likee_id: token})} style={{ float: 'right' }}>Unfriend</button> :
        <button onClick={() => friendUser({liker_id: current_user_token, likee_id: token})} style={{ float: 'right' }}>Friend</button>
      }
    </div>
  )
}

function mapStateToProps(state) {
  let { token, friends } = state.feed_posts.toJS()

  return {
    current_user_token: token,
    current_user_friends: friends
  }
}

export default connect(mapStateToProps, (dispatch) => {
  return {
    friendUser: ({liker_id, likee_id}) => dispatch(friendUser({liker_id, likee_id})),
    unfriendUser: ({liker_id, likee_id}) => dispatch(unfriendUser({liker_id, likee_id}))
  }
})(User)
