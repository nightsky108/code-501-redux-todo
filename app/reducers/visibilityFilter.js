const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type):
    case 'SET_VISIBILITY_FILTER':
      return action.filter  //Being SHOW ALL, etc.
    default:
      return state
}

export default visibilityFilter