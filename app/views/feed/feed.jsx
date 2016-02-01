import React from 'react'
import { post } from '~/app/services/fetch_service'
import jwt from 'jsonwebtoken'

export default class Feed extends React.Component {
  constructor(props) {
    super(props)

    this.state = { posts: [] }
  }

  componentWillMount() {
    let token = localStorage.geekbook_user
    let user = jwt.decode(token)
    this.setState({ userId: user.user.token })
  }

  componentDidMount() {
    console.log(this.postsQuery())
    post('http://geekbook-be.herokuapp.com/queries', this.postsQuery()).
    then(result => this.setState({ posts: result.data.user.posts }))
  }

  postsQuery() {
    return {
      query: `
        query {
          user(token: "${this.state.userId}") {
            posts(first: 10) {
              content
            }
          }
        }
      `
    }
  };

  render() {
    const { posts } = this.state

    return (
      <div>
        <ul>
          { posts.map(post => <li key={post.id}>{post.content}</li>) }
        </ul>
      </div>
    )
  }
}
