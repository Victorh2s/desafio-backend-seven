import { PrismaClient } from "prisma/generated";

const prisma = new PrismaClient();

interface ICreateAuditLog {
  userId: string;
  appointmentId: string;
  date?: Date;
  time?: string;
  message?: string;
}

export class AuditLogRepository {
  async createAuditLog({
    userId,
    appointmentId,
    date,
    time,
    message,
  }: ICreateAuditLog): Promise<void> {
    await prisma.auditLog.create({
      data: {
        user_id: userId,
        action_type: "create",
        entity: "appointment",
        entity_id: appointmentId,
        message:
          message || `Appointment created for ${String(date)} at ${time}`,
      },
    });
    return;
  }
}
