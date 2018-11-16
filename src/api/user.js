export function registerUser(body) {
  return fetch('/api/users/signup', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
  .catch(error => console.log(error));
}

