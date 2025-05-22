import { AppointmentStatus } from "prisma/generated";
import { z } from "zod";

export const updateAppointmentStatusDto = z.object({
  params: z.object({
    appointmentId: z.string().uuid({
      message: "ID do agendamento deve ser um UUID válido",
    }),
  }),
  body: z.object({
    status: z.nativeEnum(AppointmentStatus, {
      errorMap: () => {
        const validStatuses = Object.values(AppointmentStatus).join(", ");
        return {
          message: `Status inválido. Valores permitidos: ${validStatuses}`,
        };
      },
    }),
  }),
  auth: z.object({
    userId: z.string().uuid(),
    role: z.enum(["admin", "specialist", "scheduler"]),
  }),
});

// Tipagem TypeScript derivada do schema
export type UpdateAppointmentStatusDto = z.infer<
  typeof updateAppointmentStatusDto
>;
