const defaultState = {
  first_name: '',
  last_name: '',
  email: '',
  email_confirm: '',
  password: '',
  email_confirm_valid: true,
  disabled: false
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case 'updateFormValue':
      return Object.assign({}, state, { [action.name]: action.value })
    case 'updateConfirmValid':
      return Object.assign({}, state, { email_confirm_valid: action.valid })
    case 'createUser_REQUEST':
      return Object.assign({}, state, { disabled: true })
    case 'createUser':
    default:
      return state
  }
}
