import { Router } from "express";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { AuthRepository } from "src/shared/config/prisma/database/auth-repository";

export const authRouter = Router();
const repository = new AuthRepository();
const service = new AuthService(repository);
const controller = new AuthController(service);

authRouter.post("/register", controller.registerUser);
