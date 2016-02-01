import jwt from 'jsonwebtoken'

export default function(component) {
  var token = localStorage.geekbook_user
  var user = jwt.decode(token)

  if (user) {
    component.prototype.userId = user.user.token
  }

  return component
}
