import { Hono } from "hono";
import { PrismaClient } from "./generated/prisma/index.js";
import { mainRouter } from "./routes/indexroutes.js";
const app = new Hono();
export const db = new PrismaClient();
app.route("", mainRouter);
export default app;
