// Vendor Libraries
import React from 'react'

// Local Libraries
import User from './user'

export default function UserList({friends, user_list}) {
  return (
    <div className='user-list'>
      { user_list.map(user => <User current_user_friends={friends} key={user.token} {...user} />) }
    </div>
  )
}
