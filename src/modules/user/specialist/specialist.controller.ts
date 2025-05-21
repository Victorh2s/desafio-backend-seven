import { Request, Response } from "express";
import { RegisterSpecialistAvailabilityDto } from "./dto/register-specialist-availability";
import { SpecialistService } from "./specialist.service";
import { SpecialistHandleErrors } from "./errors/specialist-handle.erros";

export class SpecialistController {
  constructor(private readonly specialistService: SpecialistService) {}

  registerSpecialistAvailability = async (req: Request, res: Response) => {
    try {
      const user = req.auth_routes;

      const result = RegisterSpecialistAvailabilityDto.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ errors: result.error.flatten() });
      }

      await this.specialistService.registerSpecialistAvailability(
        user.userId,
        result.data,
      );
      return res.status(201).json();
    } catch (error) {
      SpecialistHandleErrors(res, error);
    }
  };
}
