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

  async findAppointmentBySpecialististId(
    specialististId: string,
    dateTime: Date,
  ) {
    const existingAppointment = await prisma.appointment.findFirst({
      where: {
        specialist_id: specialististId,
        date: dateTime,
        status: { notIn: ["cancelled", "expired"] },
      },
    });

    return existingAppointment;
  }

  async createAppointment(
    clientId: string,
    specialistId: string,
    scheduledById: string,
    appointmentDateTime: Date,
    time: string,
  ) {
    const appointment = await prisma.appointment.create({
      data: {
        client_id: clientId,
        specialist_id: specialistId,
        scheduled_by_id: scheduledById,
        date: appointmentDateTime,
        time,
        status: "pending",
      },
    });
    return appointment;
  }
}
