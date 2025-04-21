import type { Context } from "hono";
import * as todoModel from "../models/todomodels.ts";

type createTodoBody = {
  title: string;
  userId: number;
};

const createTodo = async (c: Context) => {
  try {
    const body = await c.req.json<createTodoBody>();
    if (!body.title || !body.userId)
      return c.json(
        {
          success: false,
          data: null,
          msg: "Missing required fields",
        },
        400,
      );
    const newTodo = await todoModel.createTodo(body.title, body.userId);
    return c.json({
      success: true,
      data: newTodo,
      msg: "Created new Todo!",
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
const getTodo = async (c: Context) => {
  try {
    const param = c.req.query("id");
    if (param !== undefined && param !== null) {
      const data = await todoModel.getTodo(parseInt(param));
      return c.json(data, 200);
    }

    return c.json(
      {
        success: false,
        data: null,
        msg: "Missing required fields",
      },
      400,
    );
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

const updateTodoTitle = async (c: Context) => {
  try {
    const todoId = c.req.query("id");
    const title = c.req.query("title"); // true or false
    console.log(todoId);

    const userData = await todoModel.updateTodoTitle(Number(todoId), title);
    return c.json({ data: userData });
  } catch (e) {
    return c.json("Fail to send req", 400);
  }
};

const getTodoByUserId = async (c: Context) => {
  try {
    const userId = c.req.query("userid");

    const userData = await todoModel.getTodoById(Number(userId));
    return c.json({ data: userData });
  } catch (e) {
    return c.json({ erorr: e });
  }
};

const updateTodoStatus = async (c: Context) => {
  try {
    const todoId = c.req.query("id");
    const status = c.req.query("status"); // true or false
    console.log(todoId);
    if (status !== "false" && status !== "true") {
      return c.json("Wrong status assign");
    }
    const complete: boolean = status === "true" ? true : false;
    const userData = await todoModel.updateTodoStatus(Number(todoId), complete);
    return c.json({ data: userData });
  } catch (e) {
    return c.json("Fail to send req", 400);
  }
};
const deleteTodo = async (c: Context) => {
  try {
    const query = c.req.query("id");
    if (query !== undefined && query !== null) {
      const data = await todoModel.deleteTodo(parseInt(query));
      return c.json(data, 200);
    }
    return c.json(
      {
        success: false,
        data: null,
        msg: "Missing required fields",
      },
      400,
    );
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
export {
  createTodo,
  getTodo,
  updateTodoStatus,
  updateTodoTitle,
  getTodoByUserId,
  deleteTodo,
};
