import { PrismaClient } from "prisma/generated";

const prisma = new PrismaClient();

export class AuditLogRepository {
  async createAuditLog(
    userId: string,
    appointmentId: string,
    date: Date,
    time: string,
  ): Promise<void> {
    await prisma.auditLog.create({
      data: {
        user_id: userId,
        action_type: "create",
        entity: "appointment",
        entity_id: appointmentId,
        message: `Appointment created for ${String(date)} at ${time}`,
      },
    });
    return;
  }
}
