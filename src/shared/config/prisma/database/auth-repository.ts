import { $Enums, PrismaClient } from "prisma/generated";
import { RegisterDto } from "src/modules/auth/dto/register-user.dto";

const prisma = new PrismaClient();

export class AuthRepository {
  async registerUser(data: RegisterDto): Promise<void> {
    await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
        role: data.role,
        priority: data.priority,
        active: data.active,
        client: {
          create: {
            phone: data.phone,
            cpf: data.cpf || "",
          },
        },
      },
    });
    return;
  }

  async findUserByEmail(email: string): Promise<{
    name: string;
    email: string;
    role: $Enums.Role;
    priority: boolean;
    active: boolean;
    password: string;
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

  async findUserById(id: string): Promise<{
    name: string;
    email: string;
    role: $Enums.Role;
    priority: boolean;
    active: boolean;
    id: string;
    created_at: Date;
    updated_at: Date;
  } | null> {
    const foundUser = await prisma.user.findUnique({
      where: {
        id,
      },
      omit: {
        password: true,
      },
    });

    return foundUser;
  }
}
