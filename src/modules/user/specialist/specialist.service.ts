import { SpecialistRepository } from "src/shared/config/prisma/database/specialist-repository";
import { RegisterSpecialistAvailabilityDto } from "./dto/register-specialist-availability";
import { AuthRepository } from "src/shared/config/prisma/database/auth-repository";
import { UserNotFoundError } from "../../../shared/errors/user-not-found.error";

export class SpecialistService {
  constructor(
    private specialistRepository: SpecialistRepository,
    private authRepository: AuthRepository,
  ) {}

  async registerSpecialistAvailability(
    userId: string,
    data: RegisterSpecialistAvailabilityDto,
  ) {
    const foundUser = await this.authRepository.findUserById(userId);

    if (!foundUser) throw new UserNotFoundError();

    return await this.specialistRepository.registerAvailability(userId, data);
  }
}
