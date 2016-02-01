// Vendor Libraries
import React from 'react'
import { connect } from 'react-redux'
import { routeActions } from 'react-router-redux'
import jwt from 'jsonwebtoken'

// Actions
import { loginUser } from '~/app/actions'

class Login extends React.Component {
  static propTypes = {
    dispatch: React.PropTypes.func
  };

  constructor(props) {
    super(props)
    this.state = { authMessage: '' }
  }

  login(ev) {
    ev.preventDefault()

    const email = this.refs.email.value,
          password= this.refs.password.value

    this.props.dispatch(loginUser(email, password)).
    then(::this.redirectLogin).
    catch(ex => {
      this.setState({ authMessage: 'Username/Password incorrect' })
    })
  }

  redirectLogin(action) {
    localStorage.setItem('geekbook_user', action.result.user)
    let user = jwt.decode(action.result.user)
    this.props.dispatch(routeActions.push(`/${user.user.token}`))
  }

  render() {
    const { disabled } = this.props

    return (
      <nav className='login-nav'>
        <h1 className='logo'>geekbook</h1>
        <div className='auth-failed'>{this.state.authMessage}</div>
        <form onSubmit={::this.login} className='login-form'>
          <div className='input-group login'>
            <label htmlFor='email'>Email</label>
            <input ref='email' type='email' id='email' />
          </div>
          <div className='input-group login'>
            <label htmlFor='password'>Password</label>
            <input ref='password' type='password' id='password' />
          </div>
          <button type='submit' disabled={disabled}>Log In</button>
        </form>
      </nav>
    )
  }
}

export default connect(state => state.login)(Login)
