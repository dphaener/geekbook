// Vendor Libraries
import React from 'react'
import { connect } from 'react-redux'

// Actions
import { loginUser } from '~/app/actions'

class Login extends React.Component {
  static propTypes = {
    dispatch: React.PropTypes.func
  };

  login(ev) {
    ev.preventDefault()

    const email = this.refs.email.value,
          password= this.refs.password.value

    this.props.dispatch(
      loginUser(email, password)
    ).then(result => console.log(result)).
      catch(ex => console.log(ex))
  }

  render() {
    return (
      <nav className='login-nav'>
        <h1 className='logo'>geekbook</h1>
        <form onSubmit={::this.login} className='login-form'>
          <div className='input-group login'>
            <label htmlFor='email'>Email</label>
            <input ref='email' type='email' id='email' />
          </div>
          <div className='input-group login'>
            <label htmlFor='password'>Password</label>
            <input ref='password' type='password' id='password' />
          </div>
          <button type='submit'>Log In</button>
        </form>
      </nav>
    )
  }
}

export default connect()(Login)
