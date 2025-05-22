import { AppointmentRepository } from "src/shared/config/prisma/database/appointment-repository";
import { NotificationScheduler } from "./notification-scheduler";
import { AuditLogRepository } from "src/shared/config/prisma/database/audit-log-repository";

const appointmentRepository = new AppointmentRepository();
const auditLogRepository = new AuditLogRepository();

export const notificationScheduler = new NotificationScheduler(
  appointmentRepository,
  auditLogRepository,
);
