// jshint ignore: start
import React, { PropTypes } from 'react'

import Todo from './Todo'

const TodoList = ({ todos, onTodoClick }) =>
  <ul>
    {todos.map((todo) => {
      <Todo key={todo.id}
        {...todo}
        onClick={onTodoClick} />
    })}
  </ul>

const propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      onClick: PropTypes.func.isRequired
    }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default Object.assign(TodoList, propTypes)
