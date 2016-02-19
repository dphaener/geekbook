import React, { PropTypes, Component } from 'react'
import Relay, { createContainer } from 'react-relay'
import { post } from '~/app/services/fetch_service'
import jwt from 'jsonwebtoken'
import { fetchPosts, createPost } from '~/app/actions'
import { connect } from 'react-redux'
import ReactList from 'react-list'

// Components
import FeedPost from './feed_post'
import NewPost from '~/app/views/posts/new_post'
import UserList from '~/app/views/users/list'

// Mutations
import CreatePostMutation from '~/app/mutations/create_post_mutation'

// Queries
export const FeedQueries = {
  user: () => Relay.QL`query { user(token: $token) }`
}

export class Feed extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired
  };

  static fragments = {
    user: () => Relay.QL`
      fragment on User {
        ${CreatePostMutation.getFragment('user')},
        ${FeedPost.getFragment('user')},
        ${UserList.getFragment('user')},
        posts(first: 10) {
          edges {
            node {
              ${FeedPost.getFragment('post')}
            }
          }
        }
      }
    `
  };

  constructor(props) {
    super(props)

    this.state = {}
  }

  componentWillMount() {
    let token = localStorage.geekbook_user
    let user = jwt.decode(token)
    this.setState({ userId: user.user.token })
  }

  createPost(content) {
    Relay.Store.commitUpdate(
      new CreatePostMutation({ user: this.props.user, content })
    )
  }

  renderPosts() {
    const { posts } = this.props.user

    return posts.edges.map(edge => (
      <div key={edge.node.__dataID__}>
        <FeedPost user={this.props.user} post={edge.node} />
      </div>
    ))
  }

  render() {
    const { user } = this.props,
          { posts } = user

    return (
      <div className='feed-container'>
        <div className='feed'>
          <NewPost createPost={::this.createPost} />
          <br />
          <div style={{ maxHeight: '325px', overflow: 'auto' }}>
            {::this.renderPosts()}
          </div>
        </div>
        <UserList user={user} />
      </div>
    )
  }
}

export default createContainer(Feed, { fragments: Feed.fragments })
