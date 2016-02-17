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
      '/new_user',
      { email, first_name, last_name, password }
    )
  }
}

export function loginUser(email, password) {
  return {
    type: 'loginUser',
    promise: post(
      '/login',
      { email, password }
    )
  }
}

export function fetchPosts({user}) {
  let query = `
    query {
      user(token: "${user}") {
        user_list {
          first_name,
          last_name,
          email,
          token
        },
        posts(first: 10) { ${post_fields} },
        friends,
        token
      }
    }
  `;

  return {
    type: 'fetchPosts',
    promise: runQuery({query})
  };
}

export function addLike({post, user_id}) {
  let query = `
    mutation {
      likePost(id: ${post.id}, user_id: "${user_id}") {
        ${post_fields}
      }
    }
  `

  return {
    type: 'addLike',
    promise: runQuery({query}),
    user_id, post
  }
}

export function removeLike({post, user_id}) {
  let query = `
    mutation {
      unlikePost(id: ${post.id}, user_id: "${user_id}") {
        ${post_fields}
      }
    }
  `

  return {
    type: 'removeLike',
    promise: runQuery({query}),
    user_id, post
  }
}

export function createPost({user_id, content}) {
  let query = `
    mutation {
      createPost(user_id: "${user_id}", content: "${content}") {
        ${post_fields}
      }
    }
  `
  return {
    type: 'createPost',
    promise: runQuery({query})
  }
}

export function friendUser({liker_id, likee_id}) {
  let query = `
    mutation {
      addFriend(likee_id: "${likee_id}", liker_id: "${liker_id}") {
        friends,
        posts(first: 10) {
          ${post_fields}
        }
      }
    }
  `
  return {
    type: 'friendUser',
    promise: runQuery({query})
  }
}

export function unfriendUser({liker_id, likee_id}) {
  let query = `
    mutation {
      removeFriend(likee_id: "${likee_id}", liker_id: "${liker_id}") {
        friends,
        posts(first: 10) {
          ${post_fields}
        }
      }
    }
  `
  return {
    type: 'unfriendUser',
    promise: runQuery({query})
  }
}
