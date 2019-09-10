
export default {
  saveStore,
  loadStore
}

function saveStore (store) {
  localStorage.setItem('store', JSON.stringify(store))
}

function loadStore () {
  return JSON.parse(localStorage.getItem('store'))
}
