import { Router } from "express";
import { SpecialistRepository } from "src/shared/config/prisma/database/specialist-repository";
import { VerifyTokenMiddleware } from "src/modules/auth/middleware/verify-token";
import { AppointmentController } from "./appointment.controller";
import { AppointmentService } from "./appointment.service";
import { AppointmentRepository } from "src/shared/config/prisma/database/appointment-repository";
import { VerifyRoleMiddleware } from "../auth/middleware/verify-role";
import { ClientRepository } from "src/shared/config/prisma/database/client-repository";
import { AuditLogRepository } from "src/shared/config/prisma/database/audit-log-repository";

export const appointmentRouter = Router();
const specialistRepository = new SpecialistRepository();
const clientRepository = new ClientRepository();
const appointmentRepository = new AppointmentRepository();
const auditLogRepository = new AuditLogRepository();

const service = new AppointmentService(
  specialistRepository,
  clientRepository,
  appointmentRepository,
  auditLogRepository,
);
const controller = new AppointmentController(service);

appointmentRouter.get(
  "/slots",
  VerifyTokenMiddleware,
  VerifyRoleMiddleware("client"),
  controller.getAvailableSlots,
);

appointmentRouter.post(
  "/create",
  VerifyTokenMiddleware,
  VerifyRoleMiddleware("client"),
  controller.createAppointment,
);

appointmentRouter.get(
  "/specialist",
  VerifyTokenMiddleware,
  VerifyRoleMiddleware("specialist"),
  controller.getAppointmentsBySpecialist,
);

appointmentRouter.get(
  "/client",
  VerifyTokenMiddleware,
  VerifyRoleMiddleware("client"),
  controller.getClientAppointments,
);
