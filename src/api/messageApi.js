export function getMessages() {
  return fetch('/api/messages', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
    .catch((error) => {
      console.log(error); // eslint-disable no-console
    });
}

export function postMessage() {

}
