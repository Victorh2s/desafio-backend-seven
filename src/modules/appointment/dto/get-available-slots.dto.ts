import { z } from "zod";

export const getAvailableSlotsDto = z.object({
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  specialty: z.string().min(3),
});

export type getAvailableSlotsDto = z.infer<typeof getAvailableSlotsDto>;
