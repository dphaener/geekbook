// Vendor Libraries
import React from 'react'

// Local Libraries
import Input from '~/app/views/shared/input'
import TextInput from '~/app/views/shared/text_input'

export default class Registration extends React.Component {
  render() {
    return (
      <div className='registration'>
        <form className='registration-form'>
          <h1>Sign Up</h1>
          <p>It's free!</p>
          <TextInput
            name='first_name'
            className='input-group half'
            placeholder='First Name'
          />
          <Input
            name='last_name'
            className='input-group half'
            placeholder='Last Name'
          />
          <Input
            name='email'
            type='email'
            placeholder='Email'
          />
          <Input
            name='email_confirm'
            type='email'
            placeholder='Confirm Email'
          />
          <Input
            name='password'
            type='password'
            placeholder='Password'
          />
          <button type='submit'>Sign Up</button>
        </form>
      </div>
    )
  };
}
