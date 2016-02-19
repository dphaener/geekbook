import Relay from 'react-relay'

export default class FriendUserMutation extends Relay.Mutation {
  static fragments = {
    user: () => Relay.QL`
      fragment on User {
        token,
        id
      }
    `,
    current_user: () => Relay.QL`
      fragment on User {
        id,
        token
      }
    `
  };

  getMutation() {
    return Relay.QL`mutation { addFriend }`
  }

  getVariables() {
    return {
      liker_id: this.props.current_user.token,
      likee_id: this.props.user.token
    }
  }

  getFatQuery() {
    return Relay.QL`
      fragment on LikePostPayload {
        user,
        post {
          user_likes,
          likes
        }
      }
    `;
  }

  getConfigs() {
    return [{
      type: 'FIELDS_CHANGE',
      fieldIDs: {
        post: this.props.post.id,
        user: this.props.user.id
      }
    }];
  }

  getOptimisticResponse() {
    return {
      post: {
        id: this.props.post.id,
        user_likes: this.props.post.user_likes.concat(this.props.user.token),
        likes: this.props.post.likes + 1
      }
    }
  }
}
