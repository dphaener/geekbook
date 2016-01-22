import Test from 'legit-tests'
import { expect } from 'chai'

import TextInput from '~/app/views/shared/text_input'

describe('TextInput', () => {
  describe('validate', () => {
    context('when the value is empty', () => {
      it('should return false', () => {
        let event = { target: { value: '' } }

        Test(<TextInput required name='foo' />).
        test(({ instance }) => {
          instance.validate(event)
          expect(instance.state.valid).to.be.false
        })
      })
    })

    context('when the value is not empty', () => {
      it('should return true', () => {
        let event = { target: { value: 'foo' } }

        Test(<TextInput required name='foo' />).
        test(({ instance }) => {
          instance.validate(event)
          expect(instance.state.valid).to.be.true
        })
      })
    })

    context('when the value is not required', () => {
      it('should return true', () => {
        let input = new TextInput({}),
            event = { target: { value: '' } }

        expect(input.validate(event)).to.be.true
      })
    })
  })
})

