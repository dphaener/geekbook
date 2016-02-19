import React from 'react'
import Relay, { createContainer } from 'react-relay'
import Gravatar from 'react-gravatar'
import { connect } from 'react-redux'

class User extends React.Component {
  static propTypes = {
    user: React.PropTypes.object.isRequired,
    current_user: React.PropTypes.object.isRequired
  };

  static fragments = {
    user: () => Relay.QL`
      fragment on User {
        token,
        email,
        first_name,
        last_name
      }
    `,
    current_user: () => Relay.QL`
      fragment on User {
        token,
        friends
      }
    `
  };

  unfriendUser() {

  }

  friendUser() {

  }

  render() {
    const { email, first_name, last_name, token } = this.props.user,
          { friends: current_user_friends, token: current_user_token } = this.props.current_user

    return (
      <div>
        <Gravatar email={email} />
        <span>{first_name} {last_name}</span>
        { current_user_friends.includes(token) ?
          <button onClick={::this.unfriendUser} style={{ float: 'right' }}>Unfriend</button> :
          <button onClick={::this.friendUser} style={{ float: 'right' }}>Friend</button>
        }
      </div>
    )
  }
}

export default createContainer(User, { fragments: User.fragments })
