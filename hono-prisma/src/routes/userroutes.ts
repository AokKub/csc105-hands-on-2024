import { Hono } from "hono";
import * as userController from "../controllers/usercontrollers.ts";

const userRouter = new Hono();

userRouter.post("/", userController.createUser);
userRouter.get("/get-all-users", userController.getAllUser);
userRouter.patch("/updateUser", userController.updateUser);

export { userRouter };
