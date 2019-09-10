
import note from '/note.js'

export default {
  addNote (store) {
    store.notes.unshift(note.makeEmpty())
  },

  deleteNote (store, id) {
    const idx = store.notes.findIndex(n => n.id === id)
    store.notes.splice(idx, 1)
  },

  editNote (store, id, text) {
    const note = store.notes.find(n => n.id === id)
    note.text = text
  }
}
