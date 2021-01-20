import { createStore, combineReducers } from 'redux'

import filterReducer from './filter'
import usersReducer from './users'

const store = createStore(
  combineReducers({'filter': filterReducer, 'users': usersReducer}),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
