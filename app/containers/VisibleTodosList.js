import React from 'react'
import { connect } from 'react-redux'

const VisibleTodosList = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_ACTIVE':
      return todos.filter((t) => t.completed)
    case 'SHOW_COMPLETED':
      return todos.filter((t) => !t.completed)
    default:
      return todos
  }
}

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => dispatch(toggleTodo(id))
  }
}

const VisibleTodosList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodosList)

export default VisibleTodosList