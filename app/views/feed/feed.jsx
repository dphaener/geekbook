import React, { PropTypes, Component } from 'react'
import { post } from '~/app/services/fetch_service'
import jwt from 'jsonwebtoken'
import { fetchPosts, createPost } from '~/app/actions'
import { connect } from 'react-redux'
import ReactList from 'react-list'
import FeedPost from './feed_post';
import NewPost from '~/app/views/posts/new_post'
import UserList from '~/app/views/users/list'

export class Feed extends Component {
  static propTypes = {
    posts: PropTypes.array.isRequired,
    user_list: PropTypes.array.isRequired,
    friends: PropTypes.array.isRequired
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
    let post = this.props.posts[index]
    return (
      <div key={post.id}>
        <FeedPost user_id={this.state.userId} key={post.id} {...post} />
      </div>
    )
  }

  render() {
    const { posts, user_list } = this.props

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
        <UserList user_list={user_list} />
      </div>
    )
  }
}

export default connect(state => state.feed_posts.toJS(), {fetchPosts, createPost})(Feed);
