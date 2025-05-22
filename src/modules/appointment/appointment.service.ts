/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { SpecialistRepository } from "src/shared/config/prisma/database/specialist-repository";
import { AppointmentRepository } from "src/shared/config/prisma/database/appointment-repository";
import { InvalidDataError } from "./errors/invalid-data.error";
import { NotPossibleQueryPastDatesError } from "./errors/not-possible-query-paste.error";
import { NotFoundSpecialistsBySpecialtyError } from "./errors/not-found-specialists-by-specialty.error";
import { ClientRepository } from "src/shared/config/prisma/database/client-repository";
import { NotFoundClientError } from "./errors/not-found-client.error";
import { NotFoundSpecialistError } from "./errors/not-found-specialist.error";
import { SlotNotAvailableError } from "./errors/slot-not-available.error";
import { AuditLogRepository } from "src/shared/config/prisma/database/audit-log-repository";
import { NotFoundAppointmentError } from "./errors/not-found-appointment.error copy";
import { LateCancellationError } from "./errors/late-cancellation.error";

export class AppointmentService {
  constructor(
    private specialistRepository: SpecialistRepository,
    private clientRepository: ClientRepository,
    private appointmentRepository: AppointmentRepository,
    private auditLogRepository: AuditLogRepository,
  ) {}

  async createAppointment(
    userId: string,
    specialistId: string,
    date: string,
    time: string,
    scheduledById: string,
  ) {
    const foundClientByUserId =
      await this.clientRepository.findClientByUserId(userId);
    if (!foundClientByUserId) {
      throw new NotFoundClientError();
    }

    const clientId = foundClientByUserId.id;

    const specialist =
      await this.specialistRepository.findSpecialistsByID(specialistId);

    if (!specialist) {
      throw new NotFoundSpecialistError();
    }

    const appointmentDateTime = new Date(`${date}T${time}`);
    const isAvailable = await this.checkAvailability(
      specialistId,
      appointmentDateTime,
    );

    if (!isAvailable) {
      throw new SlotNotAvailableError();
    }

    const appointment = await this.appointmentRepository.createAppointment(
      clientId,
      specialistId,
      scheduledById,
      appointmentDateTime,
      time,
    );

    await this.auditLogRepository.createAuditLog({
      userId,
      appointmentId: appointment.id,
      date: appointmentDateTime,
      time,
    });

    return;
  }

  async checkAvailability(specialistId: string, dateTime: Date) {
    const existingAppointment =
      await this.appointmentRepository.findAppointmentBySpecialististId(
        specialistId,
        dateTime,
      );

    if (existingAppointment) {
      return false;
    }

    const specialist =
      await this.specialistRepository.findSpecialistsByID(specialistId);

    if (!specialist) return false;

    const availability = specialist.availability as Record<string, string[]>;
    const dayOfWeek = dateTime
      .toLocaleString("en-US", { weekday: "long" })
      .toLowerCase();
    const availableTimes = availability[dayOfWeek] || [];

    const timeStr = dateTime.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

    return availableTimes.includes(timeStr);
  }

  async getSpecialistAppointments(userId: string) {
    const specialist =
      await this.specialistRepository.findSpecialistsByUserId(userId);

    if (!specialist) {
      throw new NotFoundSpecialistError();
    }

    return specialist.appointments;
  }

  async getClientAppointments(userId: string) {
    const client = await this.clientRepository.findClientByUserId(userId);

    if (!client) {
      throw new NotFoundClientError();
    }

    return client.appointments;
  }

  async cancelAppointment(appointmentId: string, userId: string) {
    const appointment =
      await this.appointmentRepository.findAppointmentById(appointmentId);

    if (!appointment) {
      throw new NotFoundAppointmentError();
    }

    const localDateStr = appointment.date.toLocaleDateString("en-CA");
    const appointmentDateTime = new Date(`${localDateStr}T${appointment.time}`);

    const sixHoursInMs = 6 * 60 * 60 * 1000;
    if (appointmentDateTime.getTime() - sixHoursInMs < Date.now()) {
      throw new LateCancellationError();
    }

    await this.appointmentRepository.updateAppointmentForCancelled(
      appointmentId,
    );

    await this.auditLogRepository.createAuditLog({
      userId,
      appointmentId,
      message: "Appointment cancelled",
    });
  }

  async getAvailableSlots(date: string, specialty: string) {
    const inputDate = new Date(date + "T00:00:00");
    const now = new Date();

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (isNaN(inputDate.getTime())) {
      throw new InvalidDataError();
    }

    if (inputDate < today) {
      throw new NotPossibleQueryPastDatesError();
    }

    const isToday = inputDate.getTime() === today.getTime();

    const specialists =
      await this.specialistRepository.findManySpecialistsBySpecialty(specialty);

    if (specialists.length === 0) {
      throw new NotFoundSpecialistsBySpecialtyError();
    }

    const availableSlots = await Promise.all(
      specialists.map(async (specialist) => {
        const dayOfWeek = this.getDayOfWeek(date).toLowerCase();
        const availability =
          typeof specialist.availability === "string"
            ? JSON.parse(specialist.availability)
            : specialist.availability;

        const existingAppointments =
          await this.appointmentRepository.findManyExistingAppointments(
            specialist.id,
            date,
          );

        const bookedTimes = existingAppointments.map((a) => a.time);
        let specialistSlots = availability[dayOfWeek] || [];

        if (isToday) {
          const currentTime = now.getHours() * 60 + now.getMinutes();
          specialistSlots = specialistSlots.filter((slot: any) => {
            const [slotHour, slotMinute] = slot.split(":").map(Number);
            const slotTime = slotHour * 60 + slotMinute;
            return slotTime > currentTime;
          });
        }

        const availableTimes = specialistSlots.filter(
          (time: any) =>
            !bookedTimes.includes(time) &&
            this.isWithinIntervalLimits(
              time,
              specialist.min_interval_minutes,
              bookedTimes,
            ),
        );

        return {
          specialistId: specialist.id,
          specialistName: specialist.user.name,
          availableTimes,
          dailyLimit: specialist.daily_limit,
          day: dayOfWeek,
          date: date,
          bookedAppointments: existingAppointments.length,
        };
      }),
    );

    return availableSlots.filter((slot) => slot.availableTimes.length > 0);
  }

  private getDayOfWeek(date: string): string {
    const days = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
    ];

    const dayIndex = new Date(date).getUTCDay();

    return days[dayIndex];
  }

  private isWithinIntervalLimits(
    time: string,
    minInterval: number,
    bookedTimes: string[],
  ): boolean {
    if (minInterval <= 0) return true;

    const [hours, minutes] = time.split(":").map(Number);
    const slotTime = new Date();
    slotTime.setHours(hours, minutes, 0, 0);

    const beforeTime = new Date(slotTime.getTime() - minInterval * 60000);
    const beforeSlot = this.formatTime(beforeTime);

    const afterTime = new Date(slotTime.getTime() + minInterval * 60000);
    const afterSlot = this.formatTime(afterTime);

    return !bookedTimes.some((bookedTime) => {
      return bookedTime === beforeSlot || bookedTime === afterSlot;
    });
  }

  private formatTime(date: Date): string {
    return `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
  }
}
