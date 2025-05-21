import { Request, Response } from "express";
import { getAvailableSlotsDto } from "./dto/get-available-slots.dto";
import { AppointmentService } from "./appointment.service";
import { AppointmentHandleErrors } from "./errors/appointment-handle.errors";

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
}
