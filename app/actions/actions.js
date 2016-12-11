import uuid from 'uuid'
//  Can't implicitly return objects because the syntax is the same.
/*
Conventions:
Returns are all caps w/ underscores
Type is returned, payload is also returned.
'text' return evaluates to text: text

Spread operator (...) returns everything in whatever successes the operator

*/
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: uuid.v4(),
    text
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}