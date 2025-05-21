import { Router } from "express";
import { VerifyRoleMiddleware } from "src/modules/auth/middleware/verify-role";
import { SpecialistRepository } from "src/shared/config/prisma/database/specialist-repository";
import { SpecialistService } from "./specialist.service";
import { SpecialistController } from "./specialist.controller";
import { VerifyTokenMiddleware } from "src/modules/auth/middleware/verify-token";
import { AuthRepository } from "src/shared/config/prisma/database/auth-repository";

export const specialistRouter = Router();
const specialistRepository = new SpecialistRepository();
const authRepository = new AuthRepository();
const service = new SpecialistService(specialistRepository, authRepository);
const controller = new SpecialistController(service);

specialistRouter.post(
  "/register-availability",
  VerifyTokenMiddleware,
  VerifyRoleMiddleware("specialist"),
  controller.registerSpecialistAvailability,
);
