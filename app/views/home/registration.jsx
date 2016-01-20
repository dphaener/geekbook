// Vendor Libraries
import React from 'react'

export default class Registration extends React.Component {
  render() {
    return (
      <div className='registration'>
        <form className='registration-form'>
          <div className='input-group half'>
            <input type='text' name='first_name' placeholder='First Name' />
          </div>
          <div className='input-group half'>
            <input type='text' name='last_name' placeholder='Last Name' />
          </div>
          <div className='input-group'>
            <input type='email' name='email' placeholder='Email' />
          </div>
          <div className='input-group'>
            <input type='email' name='email_confirm' placeholder='Confirm Email' />
          </div>
          <div className='input-group'>
            <input type='password' name='password' placeholder='Password' />
          </div>
          <button type='submit'>Sign Up</button>
        </form>
      </div>
    )
  };
}
