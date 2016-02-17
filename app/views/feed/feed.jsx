import React, { PropTypes, Component } from 'react'
import Relay, { createContainer } from 'react-relay'
import { post } from '~/app/services/fetch_service'
import jwt from 'jsonwebtoken'
import { fetchPosts, createPost } from '~/app/actions'
import { connect } from 'react-redux'
import ReactList from 'react-list'

import FeedPost from './feed_post'
import NewPost from '~/app/views/posts/new_post'
import UserList from '~/app/views/users/list'

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
        ${FeedPost.getFragment('user')},
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

  componentDidMount() {
    this.props.fetchPosts({user: this.state.userId})
  }

  createPost(content) {
    const user_id = this.state.userId
    this.props.createPost({ user_id, content })
  }

  renderPost(index, key) {
    const { posts } = this.props.user,
          post = posts.edges[index].node

    return (
      <div key={post.__dataID__}>
        <FeedPost user={this.props.user} post={post} />
      </div>
    )
  }

  render() {
    const { posts } = this.props.user

    return (
      <div className='feed-container'>
        <div className='feed'>
          <NewPost createPost={::this.createPost} />
          <br />
          <div style={{ maxHeight: '325px', overflow: 'auto' }}>
            <ReactList
              itemRenderer={::this.renderPost}
              length={posts.length}
              type='variable'
            />
          </div>
        </div>
      </div>
    )
  }
}

export default createContainer(Feed, { fragments: Feed.fragments })
