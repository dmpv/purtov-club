
import store from '/store.js'
import actions from '/actions.js'
import persistentStorage from '/persistentStorage.js'

const appActions = {}

for (const actionName in actions) {
  appActions[actionName] = (...args) => {
    const result = actions[actionName](store.get(), ...args)
    console.log(actionName)
    persistentStorage.saveStore(store.get())
    return result
  }
}

export default appActions
