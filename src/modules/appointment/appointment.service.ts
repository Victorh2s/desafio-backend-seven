/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { SpecialistRepository } from "src/shared/config/prisma/database/specialist-repository";
import { AppointmentRepository } from "src/shared/config/prisma/database/appointment-repository";
import { InvalidDataError } from "./errors/invalid-data.error";
import { NotPossibleQueryPastDatesError } from "./errors/not-possible-query-paste.error";
import { NotFoundSpecialistsError } from "./errors/not-found-specialists.error";

export class AppointmentService {
  constructor(
    private specialistRepository: SpecialistRepository,
    private appointmentRepository: AppointmentRepository,
  ) {}

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
      throw new NotFoundSpecialistsError();
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
