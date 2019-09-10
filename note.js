
export default {
  makeEmpty
}

function makeEmpty (id = null) {
  id = id || generateUniqueId()
  return {
    id,
    text: ''
  }
}

function generateUniqueId () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}
