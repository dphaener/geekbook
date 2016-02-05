import { post, runQuery } from '~/app/services/fetch_service'

export function updateFormValue(name, value) {
  return {
    type: 'updateFormValue',
    name,
    value
  }
}

export function createUser(email, first_name, last_name, password) {
  return {
    type: 'createUser',
    promise: post(
      'https://geekbook-be.herokuapp.com/new_user',
      { email, first_name, last_name, password }
    )
  }
}

export function loginUser(email, password) {
  return {
    type: 'loginUser',
    promise: post(
      'https://geekbook-be.herokuapp.com/login',
      { email, password }
    )
  }
}

export function fetchPosts({user}) {
  let query = `
    query {
      user(token: "${user}") {
        posts(first: 10) {
          content,
          id,
          likes,
          user_likes
        }
      }
    }
  `;

  return {
    type: 'fetchPosts',
    promise: runQuery({query})
  };
}

export function addLike({post_id, user_id}) {
  let query = `
    mutation {
      likePost(id: ${post_id}, user_id: "${user_id}") {
        likes,
        id,
        content,
        user_likes
      }
    }
  `

  return {
    type: 'addLike',
    promise: runQuery({query})
  }
}

export function removeLike({post_id, user_id}) {
  return {
    type: 'removeLike',
    post_id, user_id,
  }
}

export function createPost({user_id, content}) {
  let query = `
    mutation {
      createPost(user_id: "${user_id}", content: "${content}") {
        id,
        content,
        likes
      }
    }
  `
  return {
    type: 'createPost',
    promise: runQuery({query})
  }
}
