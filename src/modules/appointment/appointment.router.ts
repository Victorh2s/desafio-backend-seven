import { Router } from "express";
import { SpecialistRepository } from "src/shared/config/prisma/database/specialist-repository";
import { VerifyTokenMiddleware } from "src/modules/auth/middleware/verify-token";
import { AppointmentController } from "./appointment.controller";
import { AppointmentService } from "./appointment.service";
import { AppointmentRepository } from "src/shared/config/prisma/database/appointment-repository";
import { VerifyRoleMiddleware } from "../auth/middleware/verify-role";

export const appointmentRouter = Router();
const specialistRepository = new SpecialistRepository();
const appointmentRepository = new AppointmentRepository();
const service = new AppointmentService(
  specialistRepository,
  appointmentRepository,
);
const controller = new AppointmentController(service);

appointmentRouter.get(
  "/slots",
  VerifyTokenMiddleware,
  VerifyRoleMiddleware("client"),
  controller.getAvailableSlots,
);
