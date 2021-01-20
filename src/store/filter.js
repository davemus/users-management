const initialState = {
  'search': '',
  'searchField': 'email',
};

export function unsetFilter() {
  return { 'type': 'filter/unset' }
}

export function setFilter(search, searchField) {
  return {
    'type': 'filter/set',
    'payload': { 'search': search, 'searchField': searchField }
  }
}

function filterReducer(state = initialState, action) {
  switch (action.type) {
    case "filter/unset": {
      return { ...initialState }
    }
    case "filter/set": {
      return { ...action.payload }
    }
    default: return state
  }
}

export default filterReducer;
