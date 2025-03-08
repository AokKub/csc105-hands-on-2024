import React, {useState} from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'
import {v4 as uuidv4} from "uuid"


function TodoWrapper() {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        console.log("add to do "+todo)
        setTodos([
            ...todos,
            {id: uuidv4(), task: todo, completed: false},
        ])
    }

    const delTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const togTodo = (id) => {
        setTodos(
            todos.map((todo) => todo.id === id ? {...todo, completed: !todo.completed}: todo)
        )
    }


  return (

    <div>
        <TodoForm
        addTodo={addTodo}
        />
        {todos.map((todo) => (
            <Todo
            key={todo.id}
            todoList={todo}
            deleteTodo={delTodo}
            toggleComplete={togTodo}
            editTodo={togTodo}
            />
        ))}
    </div>
  )
}

export default TodoWrapper
