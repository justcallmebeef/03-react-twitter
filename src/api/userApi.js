export function login(handle, password) {
  return fetch('/api/users/login', {
    method: 'POST',
    body: JSON.stringify({ handle: handle, password: password }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(res => res.json());
}
