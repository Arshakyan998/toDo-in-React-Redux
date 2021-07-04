import { combineReducers,createStore } from 'redux'

import {addToDo} from './reducers/index'

const root=combineReducers({
        addToDo,
})


const store=createStore(root, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

window.store=store

export default store