const defaultState = {
  // {post_id: true/false}
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case 'addLike':
      return Object.assign({}, state, { [action.post_id]: true })
    case 'removeLike':
      return Object.assign({}, state, { [action.post_id]: false })
    default:
      return state
  }
}
