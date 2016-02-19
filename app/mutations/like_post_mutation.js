import Relay from 'react-relay'

export default class LikePostMutation extends Relay.Mutation {
  static fragments = {
    user: () => Relay.QL`
      fragment on User {
        token,
        id
      }
    `,
    post: () => Relay.QL`
      fragment on Post {
        id
      }
    `
  };

  getMutation() {
    return Relay.QL`mutation { likePost }`
  }

  getVariables() {
    return {
      user_id: this.props.user.token,
      post_id: this.props.post.id
    }
  }

  getFatQuery() {
    return Relay.QL`
      fragment on LikePostPayload {
        user,
        post
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
}
