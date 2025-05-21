import { PrismaClient } from "prisma/generated";
import { RegisterSpecialistAvailabilityDto } from "src/modules/user/specialist/dto/register-specialist-availability";

const prisma = new PrismaClient();

export class SpecialistRepository {
  async registerAvailability(
    userId: string,
    {
      specialty,
      daily_limit,
      min_interval_minutes,
      availability,
    }: RegisterSpecialistAvailabilityDto,
  ): Promise<void> {
    await prisma.specialist.create({
      data: {
        user_id: userId,
        specialty,
        daily_limit,
        min_interval_minutes,
        availability,
      },
    });
    return;
  }

  async findManySpecialistsBySpecialty(specialty: string) {
    const specialists = await prisma.specialist.findMany({
      where: { specialty },
      include: { user: true },
    });

    return specialists;
  }
}
