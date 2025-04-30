import { db } from "../index";

const getAllTodo = async () => {
  const allTodo = await db.todo.findMany({});
  return {
    Todos: allTodo,
  };
};

const createTodo = async (title: string) => {
  const addedTodo = await db.todo.create({
    data: {
      title: title,
    },
  });
  return {
    newTodo: addedTodo,
  };
};

const editTitle = async (todoId: number, title: string) => {
  const editedTodo = await db.todo.update({
    where: {
      id: todoId,
    },
    data: {
      title: title,
    },
  });
  return editedTodo;
};

const toggleTodo = async (todoId: number, status: boolean) => {
  const editedTodo = await db.todo.update({
    where: {
      id: todoId,
    },
    data: {
      completed: !status,
    },
  });

  return editedTodo;
};

const deleteTodo = async (todoId: number) => {
  const deletedTodo = await db.todo.delete({
    where: {
      id: todoId,
    },
  });

  return deletedTodo;
};

export { createTodo, editTitle, toggleTodo, deleteTodo, getAllTodo };
