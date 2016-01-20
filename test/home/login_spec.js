import Test from 'legit-tests'
import { expect } from 'chai'

import Login from '~/app/views/home/login'

describe('Login', () => {
  it('should call the login function', (next) => {
    Test(<Login />).
    find('button').
    simulate({ method: 'click', element: 'button' }).
    test(({ instance }) => {

    })
  })
})
