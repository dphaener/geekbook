import React from 'react'
import Gravatar from 'react-gravatar'

export default function User({current_user_friends, token, email, first_name, last_name, friendUser, unfriendUser}) {
  return (
    <div>
      <Gravatar email={email} />
      <span>{first_name} {last_name}</span>
      { current_user_friends.includes(token) ?
        <button onClick={() => friendUser(token) } style={{ float: 'right' }}>Unfriend</button> :
        <button onClick={() => unfriendUser(token) } style={{ float: 'right' }}>Friend</button>
      }
    </div>
  )
}
