import React, { PropTypes } from 'react'

const Todo = ({ text, completed, onClick }) =>
  <li
    className={completed ? 'completedTask' : 'incompleteTask'}
    onClick={onClick}
  >
    {text}
  </li>

const propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Object.assign(Todo, propTypes)
