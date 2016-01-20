import Test from 'legit-tests'
import { expect } from 'chai'
import sinon from 'sinon'

import Login from '~/app/views/home/login'

describe('Login', () => {
  it('should call the login function', () => {
    Test(<Login />).
    find('form').
    simulate({ method: 'submit', element: 'form' }).
    test(({ instance }) => {
      expect(instance.state.submitted).to.be.true
    })
  })
})
