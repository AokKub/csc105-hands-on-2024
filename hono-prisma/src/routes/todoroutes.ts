import { Hono } from "hono";
import * as todoController from "../controllers/todocontrollers.ts";

const todoRouter = new Hono();
todoRouter.post("/", todoController.createTodo);
todoRouter.get("/", todoController.getTodo);
todoRouter.patch("/update-todo-status", todoController.updateTodoStatus);
todoRouter.patch("/update-todo-title", todoController.updateTodoTitle);
todoRouter.get("/get-todo-by-userid", todoController.getTodoByUserId);
export { todoRouter };
