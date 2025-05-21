import { z } from "zod";

export const LoginDto = z.object({
  email: z.string().email("E-mail inválido"),
  password: z.string(),
});
export type LoginDto = z.infer<typeof LoginDto>;
