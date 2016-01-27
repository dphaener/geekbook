// Vendor Libraries
import React from 'react'

// Components
import Login from './login'
import Registration from './registration'

export default class Home extends React.Component {
  render() {
    const { history } = this.props

    return (
      <div className='home'>
        <Login />
        <div className='main-content'>
          <div className='copy'>
            <h1>Connect with other geeks!</h1>
            <p>Check out their code!</p>
            <p>Do other cool stuff!</p>
          </div>
          <Registration history={history} />
        </div>
      </div>
    )
  }
}
