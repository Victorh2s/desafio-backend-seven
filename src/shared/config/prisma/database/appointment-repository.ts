import { AppointmentStatus, PrismaClient } from "prisma/generated";

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

  async findAppointmentById(appointmentId: string) {
    const appointment = await prisma.appointment.findUnique({
      where: {
        id: appointmentId,
        status: { notIn: ["cancelled", "expired"] },
      },
      include: {
        client: true,
        specialist: true,
      },
    });

    return appointment;
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

  async updateAppointmentForCancelled(appointmentId: string) {
    const appointment = await prisma.appointment.update({
      where: { id: appointmentId },
      data: { status: "cancelled" },
    });

    return appointment;
  }

  async updateAppointmentStatus(
    appointmentId: string,
    status: AppointmentStatus,
  ) {
    const appointment = await prisma.appointment.update({
      where: { id: appointmentId },
      data: { status },
    });

    return appointment;
  }

  async findAppointmentsForNotification(startDate: Date, endDate: Date) {
    const appointment = prisma.appointment.findMany({
      where: {
        status: "pending",
        date: {
          gte: startDate,
          lte: endDate,
        },
      },
      include: {
        client: {
          include: {
            user: {
              select: {
                name: true,
                email: true,
              },
            },
          },
        },
        specialist: {
          include: {
            user: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });

    return appointment;
  }

  async findManyForScheduler(now: Date, twentyFourHoursLater: Date) {
    const appointments = await prisma.appointment.findMany({
      where: {
        status: "pending",
        date: {
          gte: now,
          lte: twentyFourHoursLater,
        },
      },
      include: {
        client: { include: { user: true } },
        specialist: { include: { user: true } },
      },
    });

    return appointments;
  }
}
