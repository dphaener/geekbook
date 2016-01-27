// Vendor Libraries
import React from 'react'

// Local Libraries
import Input from './input'

export default class EmailInput extends Input {
  static defaultProps = Object.assign({ type: 'email' }, Input.defaultProps);

  validate = (event) => {
    if (!this.props.required) return true

    let valid

    if (this.props.validation) {
      valid = this.props.validation()
    } else {
      valid = !!event.target.value.match(/^[^@]+@[^@]+\.[^@]+$/)
    }

    this.setState({ valid: valid })
  };
}
