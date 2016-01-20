import Test from 'legit-tests'
import { expect } from 'chai'
import sinon from 'sinon'

import Login from '~/app/views/home/login'

describe('Login', () => {
  it('should call the login function', () => {
    let spy = sinon.spy(Login.prototype, 'login')

    Test(<Login />).
    find('form').
    simulate({ method: 'submit', element: 'form' }).
    test(({ instance }) => {
      expect(spy.called).to.be.true
    })
  })
})
