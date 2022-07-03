import { createStore, compose, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducers from './reducer'

// use enhancer to add plugin for redux
const enhancer = compose(applyMiddleware(thunkMiddleware))

/*
    - create store for the app
    - only need one store for an app
    - first parameter is the root reducer from another file
    - second parameter is the plugin that we compose with redux compose
*/
const store = createStore(rootReducers, enhancer)

// export the store
export {store}