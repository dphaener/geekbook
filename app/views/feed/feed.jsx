import React from 'react'
import { post } from '~/app/services/fetch_service'
import jwt from 'jsonwebtoken'
import {fetchPosts} from '~/app/actions'
import { connect } from 'react-redux'
import FeedPost from './feed_post';

export class Feed extends React.Component {
  constructor(props) {
    super(props)

    this.state = { posts: [] }
  }

  componentWillMount() {
    //this.setState({userId: 'b71c949d-3d8e-4e33-9630-52213a0e50ef'})
    let token = localStorage.geekbook_user
    let user = jwt.decode(token)
    this.setState({ userId: user.user.token })
  }

  componentDidMount() {
    this.props.fetchPosts({user: this.state.userId}).
      then(response => {
        let posts = response.result.data.user.posts;
        this.setState({ posts });
      });
  }

  render() {
    const { posts } = this.state

    return (
      <div>
        { posts.map(post => <FeedPost user_id={this.state.userId} key={post.id} {...post}/>)}
      </div>
    )
  }
}

export default connect(state => state, {fetchPosts})(Feed);
