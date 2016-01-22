// Vendor Libraries
import React from 'react'

export default class Login extends React.Component {
  login(ev) {
    ev.preventDefault()
  }

  render() {
    return (
      <nav className='login-nav'>
        <h1 className='logo'>geekbook</h1>
        <form onSubmit={this.login} className='login-form'>
          <div className='input-group login'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className='input-group login'>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button type='submit'>Log In</button>
        </form>
      </nav>
    )
  }
}
