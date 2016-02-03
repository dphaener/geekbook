import { post } from '~/app/services/fetch_service'

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
          likes
        }
      }
    }
  `;

  return {
    type: 'fetchPosts',
    promise: post('http://geekbook-be.herokuapp.com/queries', {query})
  };
}

export function addLike({post_id, user_id}) {
  console.log("addLike", post_id, user_id)
  return {
    type: 'addLike',
    post_id, user_id,
  }
}

export function removeLike({post_id, user_id}) {
  return {
    type: 'removeLike',
    post_id, user_id,
  }
}
