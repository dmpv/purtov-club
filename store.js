
export default {
  get,
  init,
}

const store = {}

function get () {
  return store
}

function init (initialStore) {
  Object.assign(store, initialStore)
}
