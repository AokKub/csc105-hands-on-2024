import { Context } from "hono";
import * as Models from "../models/model";

type createTodoBody = {
  title: string;
};

const getAllTodo = async (c: Context) => {
  try {
    const allTodo = await Models.getAllTodo();
    return c.json({
      success: true,
      allTodo,
    });
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `${e}`,
      },
      500,
    );
  }
};

const createTodo = async (c: Context) => {
  try {
    const body = await c.req.json<createTodoBody>();
    if (!body.title) {
      return c.json({
        success: false,
        data: "",
      });
    }

    const newTodo = await Models.createTodo(body.title);
    return c.json({
      success: true,
      data: newTodo,
    });
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `${e}`,
      },
      500,
    );
  }
};

type editTodoBody = {
  id: number;
  title: string;
};
const editTodo = async (c: Context) => {
  try {
    const body = await c.req.json<editTodoBody>();
    if (!body.id || !body.title) {
      return c.json({
        success: false,
        data: "",
      });
    }

    const editedTodo = await Models.editTitle(body.id, body.title);
    console.log(editedTodo);
    return c.json({
      success: true,
      data: editedTodo,
    });
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `${e}`,
      },
      500,
    );
  }
};

type toggleBody = {
  todoId: number;
  status: number;
};

const toggleTodoStatus = async (c: Context) => {
  try {
    const body = await c.req.json<toggleBody>();
    console.log(body.todoId + " " + body.status);
    if (!body.todoId || !(body.status == 0 || body.status == 1)) {
      return c.json({
        success: false,
        data: "",
      });
    }

    const editedTodo = await Models.toggleTodo(
      body.todoId,
      Boolean(body.status),
    );
    console.log(editedTodo);
    return c.json({
      success: true,
      data: editedTodo,
    });
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `${e}`,
      },
      500,
    );
  }
};

type deleteTodoBody = {
  data: number;
};

const deleteTodo = async (c: Context) => {
  try {
    const body = await c.req.json<deleteTodoBody>();
    console.log("del" + body);
    const delId = body;
    if (!body) {
      return c.json({
        success: false,
        data: "",
      });
    }

    const deletedTodo = await Models.deleteTodo(Number(delId));
    return c.json({
      success: true,
      data: deletedTodo,
    });
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `${e}`,
      },
      500,
    );
  }
};

export { createTodo, editTodo, toggleTodoStatus, deleteTodo, getAllTodo };
