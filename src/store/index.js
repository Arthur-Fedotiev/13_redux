import {createStore} from "redux"
import {devToolsEnhancer} from "redux-devtools-extension"
import reducers from "../reducers"

const store = createStore(reducers, devToolsEnhancer({trace: true}))
window.store = store

export default store
