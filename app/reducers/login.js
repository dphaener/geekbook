const defaultState = {
  disabled: false
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case 'loginUser_REQUEST':
      return Object.assign({}, state, { disabled: true })
    case 'loginUser_FAILURE':
      return Object.assign({}, state, { disabled: false })
    case 'loginUser':
      return Object.assign({}, state, { disabled: false })
    default:
      return state
  }
}
