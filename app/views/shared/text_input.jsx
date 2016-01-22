// Vendor Libraries
import React from 'react'

// Local Libraries
import Input from './input'

export default class TextInput extends Input {
  static defaultProps = Object.assign({ type: 'text' }, Input.defaultProps);

  validate = (event) => {
    if (!this.props.required) return true
    this.setState({ valid: event.target.value != '' })
  };
}

