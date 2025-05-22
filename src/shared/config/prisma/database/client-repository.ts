import { PrismaClient } from "prisma/generated";

const prisma = new PrismaClient();

export class ClientRepository {
  async findClientByUserId(userId: string) {
    const client = await prisma.client.findUnique({
      where: { user_id: userId },
      include: {
        user: {
          omit: {
            password: true,
          },
        },
        appointments: true,
      },
    });

    return client;
  }
}
