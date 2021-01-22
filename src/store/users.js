const users = [
  {
    'id': 1,
    'email': 'sonya.hohlovskaia@gmail.com',
    'username': 'supersofa',
    'firstname': 'Sonia',
    'lastname': 'Hohlovskaia'
  },
  {
    'id': 2,
    'email': 'viktoria.simpleyarova@gmail.com',
    'username': 'vivi',
    'firstname': 'Viktoria',
    'lastname': 'Simpleyarova'
  },
  {
    'id': 3,
    'email': 'dmitriy.gordovitiy@yandex.com',
    'username': 'dimon',
    'firstname': 'Dmitriy',
    'lastname': 'Gordovitiy'
  },
]

const initialState = {
  'users': users,
  'lastUsedId': 3,
}

export function createUser(user) {
  return { 'type': 'users/create', 'payload': user }
}

export function updateUser(user) {
  return { 'type': 'users/update', 'payload': user }
}

export function deleteUser(user) {
  return { 'type': 'users/delete', 'payload': user }
}

function usersReducer(state = initialState, action) {
  switch (action.type) {
  case 'users/create': {
    const newLastUsedId = state['lastUsedId'] + 1
    return {
      'users': [...state.users].concat([{ ...action.payload, 'id': newLastUsedId }]),
      'lastUsedId': newLastUsedId,
    }
  }
  case 'users/delete': {
    const idToDelete = action.payload.id
    if (!idToDelete) return state
    return {
      'users': [...state.users.filter((user) => user.id !== idToDelete)],
      'lastUsedId': state.lastUsedId,
    }
  }
  case 'users/update': {
    const idToUpdate = action.payload.id
    if (!idToUpdate) return state
    return {
      'users': [...state.users.filter((user) => user.id !== idToUpdate)]
        .concat([action.payload]),
      'lastUsedId': state.lastUsedId,
    }
  }
  default: return state
  }
}

export default usersReducer
