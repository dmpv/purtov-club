
"use strict"

import { $, $$ } from '/dollars.js'
import store from '/store.js'
import actions from '/appActions.js'
import persistentStorage from '/persistentStorage.js'
import note from '/note.js'

const defaultStore = {
  notes: makeRange(5).map(note.makeEmpty)
}

store.init(persistentStorage.loadStore() || defaultStore)
persistentStorage.saveStore(store.get())
render()

function onAddClick () {
  actions.addNote()
  render()
}

function onDeleteClick (id) {
  actions.deleteNote(id)
  render()
}

function onTextChange (e, id) {
  const textArea = e.currentTarget
  textArea.style.height = 0
  textArea.style.height = `${textArea.scrollHeight}px`
  actions.editNote(id, e.currentTarget.value)
}

function render() {
  /// TODO:  add content__note modificator
  $('.content__noteCollection').innerHTML = store.get().notes.map(renderNote).join('')
  $$('textarea').forEach(e => e.style.height = `${e.scrollHeight}px`)
}

Object.assign(window, {
  onAddClick,
  onDeleteClick,
  onTextChange
})

function makeRange (length) {
  return Array.from(new Array(length))
}

function renderNote (note) {
  return `
    <div class="note content__note">
      <div class="note__body">
        <textarea class="note__text" oninput="onTextChange(event, '${note.id}')">${note.text}</textarea>
      </div>
      <div class="button button_delete" onclick="onDeleteClick('${note.id}')">delete</div>
      <div class="note__debugInfo">${note.id}</div>
    </div>
  `
}
