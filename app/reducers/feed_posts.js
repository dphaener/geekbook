const defaultState = {
  posts: [],
}


export default (state = defaultState, action) => {
  switch(action.type) {
    case 'fetchPost':
      let posts = action.result.data.user.posts;
      return Object.assign({}, state, { posts })
    default:
      return state
  }
}
