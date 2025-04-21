import { db } from "../index.ts";

const createTodo = async (title: string, userId: number) => {
  const todo = await db.todo.create({
    data: {
      title: title,
      userId: userId,
    },
  });
  return todo;
};
const getTodo = async (id: number) => {
  const todo = await db.todo.findUnique({
    where: {
      id: id,
    },
    include: {
      user: true,
    },
  });
  return todo;
};

const updateTodoStatus = async (id: number, status: boolean) => {
  const updateUserData = await db.todo.update({
    where: { id: Number(id) },
    data: {
      completed: status,
    },
  });

  return updateUserData;
};
const updateTodoTitle = async (id: number, newTitle: any) => {
  const updateUserData = await db.todo.update({
    where: { id: Number(id) },
    data: {
      title: newTitle,
    },
  });

  return updateUserData;
};

const getTodoById = async (id: number) => {
  const updateUserData = await db.todo.findMany({
    where: { userId: Number(id) },
  });
  return updateUserData;
};

const deleteTodo = async (id: number) => {
  const todo = await db.todo.delete({
    where: {
      id: id,
    },
  });
  return todo;
};
export {
  createTodo,
  getTodo,
  updateTodoStatus,
  updateTodoTitle,
  getTodoById,
  deleteTodo,
};
