import { $Enums, PrismaClient } from "prisma/generated";
import { RegisterDto } from "src/modules/auth/dto/register-user.dto";

const prisma = new PrismaClient();

export class AuthRepository {
  async registerUser(data: RegisterDto): Promise<void> {
    await prisma.user.create({
      data,
    });
    return;
  }

  async findUserByEmail(email: string): Promise<{
    name: string;
    email: string;
    password: string;
    role: $Enums.Role;
    priority: boolean;
    active: boolean;
    id: string;
    created_at: Date;
    updated_at: Date;
  } | null> {
    const foundUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    return foundUser;
  }
}
