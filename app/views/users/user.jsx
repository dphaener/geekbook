import React from 'react'
import Gravatar from 'react-gravatar'

export default function User({email, first_name, last_name}) {
  return (
    <div>
      <span>{first_name} {last_name}</span>
      <Gravatar email={email} />
    </div>
  )
}
