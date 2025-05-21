import { z } from "zod";

export const createAppointmentDto = z.object({
  specialistId: z.string().uuid(),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  time: z.string().regex(/^\d{2}:\d{2}$/),
});

export type createAppointmentDto = z.infer<typeof createAppointmentDto>;
