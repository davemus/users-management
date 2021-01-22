const initialState = {
  'page': 0,
  'limit': 2,
}

export function setPage(page) {
  return {'type': 'pagination/setPage', 'payload': page}
}

export function setLimit(limit) {
  return {'type': 'pagination/setLimit', 'payload': limit}
}

function paginationReducer(state = initialState, action) {
  switch (action.type) {
  case 'pagination/setLimit': {
    return {...state, 'limit': action.payload}
  }
  case 'pagination/setPage': {
    return {...state, 'page': action.payload}
  }
  default: return state
  }
}

export default paginationReducer
