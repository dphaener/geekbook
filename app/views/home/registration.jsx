// Vendor Libraries
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { routeActions } from 'react-router-redux'
import jwt from 'jsonwebtoken'

// Local Libraries
import TextInput from '~/app/views/shared/text_input'
import EmailInput from '~/app/views/shared/email_input'
import PasswordInput from '~/app/views/shared/password_input'

// Actions
import { updateFormValue, createUser } from '~/app/actions'

class Registration extends React.Component {
  static propTypes = {
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    email_confirm: PropTypes.string.isRequired,
    email_confirm_valid: PropTypes.bool.isRequired,
    password: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
  };

  submitForm(event) {
    event.preventDefault()
    const { email, email_confirm, first_name, last_name, password } = this.props

    if (email === email_confirm) {
      this.props.dispatch(
        createUser(email, first_name, last_name, password)
      ).then(::this.login)
    }
  }

  login(action) {
    localStorage.setItem('geekbook_user', action.result.user)
    let user = jwt.decode(action.result.user)
    this.props.dispatch(routeActions.push(`/${user.user.token}`))
  }

  valueChanged(ev) {
    const { name, value } = ev.target
    this.props.dispatch(updateFormValue(name, value))
  }

  render() {
    const { disabled, email_confirm_valid, first_name, last_name, email, email_confirm, password } = this.props

    return (
      <div className='registration'>
        <form className='registration-form' onSubmit={::this.submitForm}>
          <h1>Sign Up</h1>
          <p>It's free!</p>
          <TextInput
            ref='firstName'
            name='first_name'
            onChange={::this.valueChanged}
            value={first_name}
            className='input-group half'
            placeholder='First Name'
            errorMessage='First name is required'
            required
          />
          <TextInput
            ref='lastName'
            name='last_name'
            value={last_name}
            onChange={::this.valueChanged}
            className='input-group half'
            placeholder='Last Name'
            errorMessage='Last name is required'
            required
          />
          <EmailInput
            ref='email'
            name='email'
            onChange={::this.valueChanged}
            value={email}
            errorMessage='A valid email is required'
            placeholder='Email'
            required
          />
          <EmailInput
            ref='emailConfirm'
            name='email_confirm'
            onChange={::this.valueChanged}
            value={email_confirm}
            validation={() => email === email_confirm}
            errorMessage='Emails must match'
            placeholder='Confirm Email'
            required
          />
          <PasswordInput
            ref='password'
            name='password'
            onChange={::this.valueChanged}
            value={password}
            placeholder='Password'
            errorMessage='Password must be at least 6 characters'
            required
          />
          <button type='submit' disabled={disabled}>Sign Up</button>
        </form>
      </div>
    )
  };
}

export default connect(state => state.registration)(Registration)
