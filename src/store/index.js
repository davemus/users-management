import { createStore, combineReducers } from 'redux'

import filterReducer from './filter'
import usersReducer from './users'
import paginationReducer from './pagination'

const store = createStore(
  combineReducers(
    {'filter': filterReducer, 'users': usersReducer, 'pagination': paginationReducer}
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
