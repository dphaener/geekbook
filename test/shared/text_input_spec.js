import Test from 'legit-tests'
import { expect } from 'chai'

import TextInput from '~/app/views/shared/text_input'

describe('TextInput', () => {
  describe('validate', () => {
    context('when the value is empty', () => {
      it('should return false', () => {
        let input = new TextInput({ required: true }),
            event = { target: { value: '' } }

        expect(input.validate(event)).to.be.false
      })
    })

    context('when the value is not empty', () => {
      it('should return true', () => {
        let input = new TextInput({ required: true }),
            event = { target: { value: 'foo' } }

        expect(input.validate(event)).to.be.true
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

