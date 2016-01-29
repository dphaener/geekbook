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
