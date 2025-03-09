import React, { useState, useEffect } from 'react'

function Todo({ todoList, deleteTodo, editTodo, toggleComplete }) {
  const [value, setValue] = useState("");
  useEffect(() => {
    setTimeout(() => { setValue(todoList.task) }, 10)
  }, []
  )
  return (
    <div>
      {
        todoList.edit === false ?
          (<input disabled type="text" value={value} onChange={(e) => { setValue(e.target.value) }} />) : (<input type="text" value={value} onChange={(e) => { setValue(e.target.value) }} />
          )

      }
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
