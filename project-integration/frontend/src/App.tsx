import { useState, useEffect } from "react";

import {
  getAllTodo,
  createTodo,
  editTodo,
  toggleTodoStatus,
  deleteTodo,
} from "./axios/controllers";
type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodoName, setNewTodoName] = useState("");
  // Fetch all todos on component mount
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const fetchedTodos = await getAllTodo();
        console.log(fetchedTodos);
        setTodos(fetchedTodos);
      } catch (error) {
        console.error("Failed to fetch todos", error);
      }
    };

    fetchTodos();
  }, []);

  const handleAdd = async () => {
    try {
      const createBody = {
        title: newTodoName,
      };

      console.log("App: " + createBody.title);
      const createdTodo = await createTodo(createBody);
      setTodos((prevTodos) => [...prevTodos, createdTodo]);
    } catch (error) {
      console.error("Failed to create todo", error);
    }
  };
  const handleEditName = async (todoId: number) => {
    try {
      const newName = prompt("Enter new name:");
      if (!newName) {
        console.log("No name entered, aborting edit.");
        return; // If user cancels or provides an empty string
      }
      const editBody = {
        id: todoId,
        title: newName,
      };
      const editedTodo = await editTodo(editBody);
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === editedTodo.id ? editedTodo : todo,
        ),
      );
    } catch (error) {
      console.error("Failed to edit todo", error);
    }
  };

  // function handleEditName(id: number) {
  //   const newName = prompt("Enter new name:");
  //   if (newName) {
  //     setTodos(
  //       todos.map((todo) =>
  //         todo.id === id ? { ...todo, name: newName } : todo,
  //       ),
  //     );
  //   }
  // }
  //

  const handleSuccess = async (todoId: number) => {
    try {
      // Find the current todo from the state
      const currentTodo = todos.find((todo) => todo.id === todoId);

      if (!currentTodo) {
        console.error("Todo not found");
        return; // Handle the case when the todo is not found
      }

      // Get the current status (completed) of the todo
      const currentStatus = currentTodo.completed;

      // Prepare the body for updating the todo status
      const todoBody = {
        todoId: todoId,
        status: currentStatus, // Toggle the status
      };

      // Call the API to toggle the status
      const updatedTodo = await toggleTodoStatus(todoBody);

      // Update the todos state
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === updatedTodo.id ? updatedTodo : todo,
        ),
      );
    } catch (error) {
      console.error("Failed to toggle todo status", error);
    }
  };
  const handleDelete = async (todoId: number) => {
    try {
      await deleteTodo(todoId);
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
    } catch (error) {
      console.error("Failed to delete todo", error);
    }
  };

  return (
    //Type newTodo
    <div className="w-screen h-screen bg-gray-800 shadow-2xl flex flex-col items-center justify-center p-10 gap-10">
      <div className="flex gap-4">
        <input
          type="text"
          value={newTodoName}
          onChange={(e) => setNewTodoName(e.target.value)}
          placeholder="Enter new todo"
          className="p-2 rounded-lg border bg-white"
        />
        <button
          onClick={handleAdd}
          className="bg-green-400 text-white rounded-lg px-4 py-2"
        >
          Add Todo
        </button>
      </div>

      {/* function edit delete complete */}

      <div className="flex flex-col gap-10">
        {todos.map((todo) => (
          <div key={todo.id} className="flex gap-4 bg-white rounded-2xl p-10">
            <h1 className="mt-2 text-lg font-medium pr-2">{todo.title}</h1>

            {/* Show status based on completed field */}
            <h2 className="mt-2 text-sm pr-2">
              {todo.completed ? "Done" : "Not Done"}
            </h2>

            <div className="flex gap-2">
              <button
                onClick={() => handleEditName(todo.id)}
                className="bg-blue-400 text-white rounded-lg px-4 py-2"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(todo.id)}
                className="bg-red-400 text-white rounded-lg px-4 py-2"
              >
                Delete
              </button>
              <button
                onClick={() => handleSuccess(todo.id)}
                className="bg-yellow-400 text-white rounded-lg px-4 py-2"
              >
                {todo.completed ? "Completed" : "On going"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
