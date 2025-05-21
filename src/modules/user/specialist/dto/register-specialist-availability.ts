import { z } from "zod";

const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;

export const RegisterSpecialistAvailabilityDto = z.object({
  specialty: z.string(),
  daily_limit: z.number().int().min(1, "daily_limit deve ser no mínimo 1"),
  min_interval_minutes: z
    .number()
    .int()
    .min(1, "min_interval_minutes deve ser no mínimo 1"),
  availability: z.record(
    z
      .string()
      .toLowerCase()
      .refine(
        (day) =>
          [
            "monday",
            "tuesday",
            "wednesday",
            "thursday",
            "friday",
            "saturday",
            "sunday",
          ].includes(day),
        { message: "Invalid day of the week." },
      ),
    z.array(z.string().regex(timeRegex, "Formato de hora inválido (HH:mm)")),
  ),
});

export type RegisterSpecialistAvailabilityDto = z.infer<
  typeof RegisterSpecialistAvailabilityDto
>;
