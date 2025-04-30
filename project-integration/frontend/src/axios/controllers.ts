// src/controllers/todoController.js
import axiosInstance from "./axiosInstance";

export const getAllTodo = async () => {
  try {
    const response = await axiosInstance.get("/todos");
    return response.data.allTodo.Todos;
  } catch (error) {
    console.error("Error fetching todos:", error);
    throw error;
  }
};

type createBody = {
  title: string;
};
export const createTodo = async (todoData: createBody) => {
  try {
    const response = await axiosInstance.post("/create", todoData);
    console.log(response.data);
    return response.data.data.newTodo;
  } catch (error) {
    console.error("Error creating todo:", error);
    throw error;
  }
};
type editBody = {
  id: number;
  title: string;
};

export const editTodo = async (todoData: editBody) => {
  try {
    const response = await axiosInstance.patch("/edit", todoData);
    return response.data.data;
  } catch (error) {
    console.error("Error editing todo:", error);
    throw error;
  }
};
type todoBody = {
  todoId: number;
  status: boolean; // Toggle the status
};
export const toggleTodoStatus = async (todoId: todoBody) => {
  try {
    const response = await axiosInstance.patch("/toggleStatus", todoId);
    console.log(response.data.data.id);
    return response.data.data;
  } catch (error) {
    console.error("Error toggling todo status:", error);
    throw error;
  }
};

export const deleteTodo = async (todoId: number) => {
  try {
    const response = await axiosInstance.delete("/delete", {
      data: todoId,
    });
    console.log(response);
    return response.data.data.deletedTodo;
  } catch (error) {
    console.error("Error deleting todo:", error);
    throw error;
  }
};
