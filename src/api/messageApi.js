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

export async function postMessage(user_id, text) {
    try {
      const response = await fetch('/api/messages', {
        headers: {
          Accept: 'application/json text/plain, */*',
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({ userId: user_id, text: text }),
      });
      return response.json();
    } catch(e){
      console.error(e);
      throw new Error(e);
    }
}

