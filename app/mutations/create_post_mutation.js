import Relay from 'react-relay'

export default class CreatePostMutation extends Relay.Mutation {
  static fragments = {
    user: () => Relay.QL`
      fragment on User {
        token,
        id
      }
    `
  };

  getMutation() {
    return Relay.QL`mutation { createPost }`
  }

  getVariables() {
    return {
      user_id: this.props.user.token,
      content: this.props.content
    }
  }

  getFatQuery() {
    return Relay.QL`
      fragment on CreatePostPayload {
        user,
        postEdge
      }
    `;
  }

  getConfigs() {
    return [{
      type: 'RANGE_ADD',
      parentName: 'user',
      parentID: this.props.user.id,
      connectionName: 'posts',
      edgeName: 'postEdge',
      rangeBehaviors: {
        '': 'prepend'
      }
    }];
  }

  getOptimisticResponse() {
    return {
      user: this.props.user,
      postEdge: {
        content: this.props.content
      }
    }
  }
}
