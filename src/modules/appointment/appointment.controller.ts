import { Request, Response } from "express";
import { getAvailableSlotsDto } from "./dto/get-available-slots.dto";
import { AppointmentService } from "./appointment.service";
import { AppointmentHandleErrors } from "./errors/appointment-handle.errors";
import { createAppointmentDto } from "./dto/create-appointment.dto";

export class AppointmentController {
  constructor(private readonly appointmentService: AppointmentService) {}

  getAvailableSlots = async (req: Request, res: Response) => {
    try {
      const { date, specialty } = getAvailableSlotsDto.parse(req.query);

      const service = await this.appointmentService.getAvailableSlots(
        date,
        specialty,
      );
      return res.status(201).json(service);
    } catch (error) {
      AppointmentHandleErrors(res, error);
    }
  };

  createAppointment = async (req: Request, res: Response) => {
    try {
      const { specialistId, date, time } = createAppointmentDto.parse(req.body);

      const { userId } = req.auth_routes;
      const scheduledById = userId;
      const appointment = await this.appointmentService.createAppointment(
        userId,
        specialistId,
        date,
        time,
        scheduledById,
      );
      return res.status(201).json(appointment);
    } catch (error) {
      AppointmentHandleErrors(res, error);
    }
  };

  getAppointmentsBySpecialist = async (req: Request, res: Response) => {
    try {
      const { userId } = req.auth_routes;
      const appointments =
        await this.appointmentService.getSpecialistAppointments(userId);
      return res.status(200).json(appointments);
    } catch (error) {
      AppointmentHandleErrors(res, error);
    }
  };

  getClientAppointments = async (req: Request, res: Response) => {
    try {
      const { userId } = req.auth_routes;
      const appointments =
        await this.appointmentService.getClientAppointments(userId);
      return res.status(200).json(appointments);
    } catch (error) {
      AppointmentHandleErrors(res, error);
    }
  };

  cancelAppointment = async (req: Request, res: Response) => {
    try {
      const { userId } = req.auth_routes;
      const { appointmentId } = req.params;
      const appointments = await this.appointmentService.cancelAppointment(
        appointmentId,
        userId,
      );
      return res.status(200).json(appointments);
    } catch (error) {
      AppointmentHandleErrors(res, error);
    }
  };
}
