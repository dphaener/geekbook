// Vendor Libraries
import React from 'react'

export default class Input extends React.Component {
  static propTypes = {
    type: React.PropTypes.string.isRequired,
    className: React.PropTypes.string,
    name: React.PropTypes.string.isRequired,
    required: React.PropTypes.bool
  };

  static defaultProps = {
    className: 'input-group',
    required: false
  };

  render() {
    const { className, ...rest } = this.props

    return (
      <div className={className}>
        <input {...rest} />
      </div>
    )
  }
}
