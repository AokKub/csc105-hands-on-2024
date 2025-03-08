import React from 'react'

function Todo({ todoList, deleteTodo, editTodo, toggleComplete }) {



  return (
    <div>
      <div>
        <p></p>
      </div>
      <div></div>
      <div></div>
      <input type="text" value={todoList.task} />
      {todoList.completed === true ? (
        <button onClick={() => toggleComplete(todoList.id)}>Completed</button>
      ) : <button onClick={() => toggleComplete(todoList.id)}>Pending</button>
      }
      <button onClick={() => editTodo(todoList.id)}>Edit</button>
      <button onClick={() => deleteTodo(todoList.id)}>Delete</button>
    </div>

  )
}

export default Todo
