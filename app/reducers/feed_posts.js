import { fromJS } from 'immutable'

const defaultState = fromJS({
  posts: [],
})

export default (state = defaultState, action) => {
  switch(action.type) {
    case 'fetchPosts':
      let posts = action.result.data.user.posts;
      return state.set('posts', fromJS(posts))
    case 'createPost':
      let post = fromJS(action.result.data.createPost)
      return state.updateIn(['posts'], posts => (
        posts.unshift(post)
      ))
    default:
      return state
  }
}
