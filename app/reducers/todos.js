//const todo = (state = {}, action) => {
//  switch (action.type) {
//    case 'ADD_TODO':
//      return {
//        text: action.text,
//        completed: false,
//        id: action.id
//      }
//    case 'TOGGLE_TODO':
//      // Object.assign takes an object prototype and assigns it a combination of state and the completion. AKA, we're creating a new object, extending it to state, and returning the state plus our changes. This prevents state from being directly mutated.
//      if (state.id !== action.id) {
//        return state
//      } else {
//        return Object.assign({}, state, {
//          completed: !completed
//        })
//      }
//    default:
//      return state
//  }
//}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
        
      ]
    case 'TOGGLE_TODO':
      return state.map((t) => todo(t, action))
    default:
      return state
  }
}

export default todos
