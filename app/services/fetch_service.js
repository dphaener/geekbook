import 'whatwg-fetch'

const headers = {
  'Content-Type': 'application/json',
  'Accept': '*/*'
}

export function post(url, body) {
  return fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(body)
  }).then(response => response.json())
}
