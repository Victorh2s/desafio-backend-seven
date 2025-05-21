import { PrismaClient } from "prisma/generated";

const prisma = new PrismaClient();

export class AppointmentRepository {
  async findManyExistingAppointments(specialist_id: string, date: string) {
    const dateObj = new Date(date);
    const existingAppointments = await prisma.appointment.findMany({
      where: {
        specialist_id,
        date: dateObj,
        status: { in: ["pending", "confirmed"] },
      },
      select: {
        time: true,
      },
    });
    return existingAppointments;
  }
}
