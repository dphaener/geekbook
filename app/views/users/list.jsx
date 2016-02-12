// Vendor Libraries
import React from 'react'

// Local Libraries
import User from './user'

export default function UserList({user_list}) {
  return (
    <div className='user-list'>
      { user_list.map(user => <User key={user.token} {...user} />) }
    </div>
  )
}
