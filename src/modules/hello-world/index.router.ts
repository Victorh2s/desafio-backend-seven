import { Router } from "express";
import { IndexController } from "./index.controller";

export const indexRouter = Router();
const controller = new IndexController();

indexRouter.get("/hello", controller.handle);
