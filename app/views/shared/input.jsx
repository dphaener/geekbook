// Vendor Libraries
import React from 'react'

export default class Input extends React.Component {
  static propTypes = {
    type: React.PropTypes.string.isRequired,
    className: React.PropTypes.string,
    name: React.PropTypes.string.isRequired,
    required: React.PropTypes.bool,
  };

  static defaultProps = {
    className: 'input-group',
    required: false,
    errorMessage: 'This is required',
  };

  constructor(props) {
    super(props)

    this.state = { valid: true }
  }

  render() {
    const { className, errorMessage, ...rest } = this.props,
          { valid } = this.state

    return (
      <div className={className}>
        <input ref='input' onBlur={this.validate} {...rest} />
        { valid ? null : <div>{errorMessage}</div> }
      </div>
    )
  }
}
