import React, { PropTypes, Component } from 'react'
import { post } from '~/app/services/fetch_service'
import jwt from 'jsonwebtoken'
import { fetchPosts, createPost } from '~/app/actions'
import { connect } from 'react-redux'
import FeedPost from './feed_post';
import NewPost from '~/app/views/posts/new_post'

export class Feed extends Component {
  static propTypes = {
    posts: PropTypes.array.isRequired
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

  createPost(ev) {
    ev.preventDefault()

    const content = ev.target[0].value,
          user_id = this.state.userId

    this.props.createPost({ user_id, content })
  }

  render() {
    const { posts } = this.props

    return (
      <div>
        <NewPost onSubmit={::this.createPost} />
        { posts.map(post => <FeedPost user_id={this.state.userId} key={post.id} {...post}/>)}
      </div>
    )
  }
}

export default connect(state => state.feed_posts.toJS(), {fetchPosts, createPost})(Feed);
