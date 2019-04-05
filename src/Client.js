function getAllHolograms() {
  return fetch(`https://us-central1-harshal-playground.cloudfunctions.net/app/hologram`, {
    accept: "application/json"
  })
    .then(checkStatus)
    .then(parseJSON)
}
function getHologramById(id) {
  return fetch(`https://us-central1-harshal-playground.cloudfunctions.net/app/hologram/${id}`, {
    accept: "application/json"
  })
    .then(checkStatus)
    .then(parseJSON)
}
function addHologram(hologram) {
  return fetch(`https://us-central1-harshal-playground.cloudfunctions.net/app/hologram`, {
    method:'POST',
    // mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body:  JSON.stringify({...hologram})
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(result => console.log('add',  JSON.stringify(result, null, 2)))
}
function deleteHologram(id) {
  return fetch(`https://us-central1-harshal-playground.cloudfunctions.net/app/hologram/${id}`, {
    method:'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(checkStatus)
    .then(parseJSON)
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(`HTTP Error ${response.statusText}`);
  error.status = response.statusText;
  error.response = response
  console.log(error) // eslint-disable-line no-console
  throw error
}

function parseJSON(response) {
  return response.json()
}

const Client = { getAllHolograms, addHologram, getHologramById, deleteHologram }
export default Client
