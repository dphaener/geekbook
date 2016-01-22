// Vendor Libraries
import React from 'react'

// Local Libraries
import Input from './input'

export default class EmailInput extends Input {
  static defaultProps = Object.assign({ type: 'email' }, Input.defaultProps);

  validate = (event) => {
    if (!this.props.required) return true
    this.setState({ valid: event.target.value.match(/^[^@]+@[^@]+\.[^@]+$/) })
  };
}
