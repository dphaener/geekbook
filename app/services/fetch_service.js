import 'whatwg-fetch'

const headers = {
  'Content-Type': 'application/json',
  'Accept': '*/*'
}

const prodPrefix = 'https://geekbook-be.herokuapp.com'
const devPrefix = 'http://geekbook-be.dev'

export function post(url, body) {
  return fetch(`${prodPrefix}${url}`, {
    method: 'POST',
    headers,
    body: JSON.stringify(body)
  }).then(response => {
    if (response.status >= 200 && response.status < 300) {
      return response.json()
    } else {
      return response.json().then(result => {
        let error = result.errors[0].message
        throw new Error(error)
      })
    }
  })
}

export function runQuery(body) {
  return post('/queries', body)
}
