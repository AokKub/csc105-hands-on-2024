import { Hono } from "hono";
import { userRouter } from "./userroutes.ts";
import { todoRouter } from "./todoroutes.ts"; //-------->add this

const mainRouter = new Hono();

mainRouter.route("/users", userRouter);
mainRouter.route("/todos", todoRouter); //--------->add this

export { mainRouter };
