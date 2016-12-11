import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
  let input
  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      if(!input.value.trim()) {
        return
      }
      dispatch(addTodo(input.value))
      input.value = ''
    }}>
        <input ref={(node) => {
            input = node
          }}
          placeholder='Add Todo'
          type='text'
        />
        <input type='submit' value='Add Todo'        
        />
    </form>
  )
}
  
// Dispatchers - something that dispatches an action

AddTodo = connect()(AddTodo) // Iffy - immediately invoked function expression

const AddTodo 

export default AddTodo