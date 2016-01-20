// Vendor Libraries
import React from 'react'

// Components
import Login from './login'

export default class Home extends React.Component {
  render() {
    return (
      <div className='home'>
        <Login /> 
      </div>
    )
  }
}
