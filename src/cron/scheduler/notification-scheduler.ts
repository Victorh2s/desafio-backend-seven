import * as cron from "node-cron";
import { AppointmentRepository } from "src/shared/config/prisma/database/appointment-repository";
import { AuditLogRepository } from "src/shared/config/prisma/database/audit-log-repository";

export class NotificationScheduler {
  private scheduler!: cron.ScheduledTask;

  constructor(
    private appointmentRepository: AppointmentRepository,
    private auditLogRepository: AuditLogRepository,
  ) {
    this.initializeScheduler();
  }

  private initializeScheduler() {
    // Executa a cada minuto
    this.scheduler = cron.schedule("* * * * *", () => {
      this.checkPendingAppointments().catch(console.error);
    });
  }

  private async checkPendingAppointments() {
    const now = new Date();
    const twentyFourHoursLater = new Date(now.getTime() + 24 * 60 * 60 * 1000);

    try {
      const appointments =
        await this.appointmentRepository.findManyForScheduler(
          now,
          twentyFourHoursLater,
        );

      for (const appointment of appointments) {
        await this.checkAndNotifyAppointment(appointment, now);
      }
    } catch (error) {
      console.error("Error checking pending appointments:", error);
    }
  }

  private async checkAndNotifyAppointment(appointment: any, now: Date) {
    const appointmentTime = new Date(appointment.date);
    const [hours, minutes] = appointment.time.split(":").map(Number);
    appointmentTime.setHours(hours, minutes, 0, 0);

    const timeDiff = appointmentTime.getTime() - now.getTime();
    const twentyFourHoursInMs = 24 * 60 * 60 * 1000;

    if (Math.abs(timeDiff - twentyFourHoursInMs) <= 60000) {
      console.log(`[NOTIFICATION] Appointment reminder for ${appointment.id}`, {
        client: appointment.client.user.name,
        specialist: appointment.specialist.user.name,
        date: appointment.date,
        time: appointment.time,
      });

      try {
        await this.auditLogRepository.createAuditLog({
          userId: appointment.scheduled_by_id,
          appointmentId: appointment.id,
          message: "24-hour notification sent",
        });
      } catch (error) {
        console.error("Error creating audit log:", error);
      }
    }
  }

  public stop() {
    void this.scheduler.stop();
  }
}
