// Vendor Libraries
import React from 'react'
import Relay, { createContainer } from 'react-relay'

// Local Libraries
import User from './user'

class UserList extends React.Component {
  static propTypes = {
    user: React.PropTypes.object.isRequired
  };

  static fragments = {
    user: () => Relay.QL`
      fragment on User {
        ${User.getFragment('current_user')},
        user_list(first: 10000) {
          edges {
            node {
              ${User.getFragment('user')}
            }
          }
        }
      }
    `
  };

  render() {
    const { user } = this.props,
          { edges: user_list } = user.user_list

    return (
      <div className='user-list' style={{ height: '450px' }}>
        { user_list.map(edge => (
            <User key={edge.node.token} current_user={user} user={edge.node} />
          ))
        }
      </div>
    )
  }
}

export default createContainer(UserList, { fragments: UserList.fragments })
