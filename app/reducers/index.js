const defaultState = {
  first_name: '',
  last_name: '',
  email: '',
  email_confirm: '',
  password: ''
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case 'updateFormValue':
      return Object.assign({}, state, { [action.name]: action.value })
    default:
      return state
  }
}
