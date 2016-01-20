import Test from 'legit-tests'
import { expect } from 'chai'

import Home from '~/app/views/home/home'
import Login from '~/app/views/home/login'
import Registration from '~/app/views/home/registration'

describe('Home', () => {
  it('should render the Login component', () => {
    Test(<Home />).
    find(Login).
    test(({ elements }) => {
      expect(elements.login).not.to.be.empty
    })
  })

  it('should render the registration component', () => {
    Test(<Home />).
    find(Registration).
    test(({ elements }) => {
      expect(elements.registration).not.to.be.empty
    })
  })
})
