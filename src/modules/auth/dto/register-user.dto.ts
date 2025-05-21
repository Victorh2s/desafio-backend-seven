import { z } from "zod";

export const RegisterUserDto = z.object({
  name: z
    .string()
    .min(3, "Nome deve ter no mínimo 3 caracteres")
    .max(100, "Nome muito longo"),
  email: z.string().email("E-mail inválido").max(100, "E-mail muito longo"),
  password: z
    .string()
    .min(6, "Senha deve ter no mínimo 6 caracteres")
    .max(50, "Senhadeve ter no máximo 50 caracteres")
    .regex(/[A-Z]/, "Deve conter pelo menos 1 letra maiúscula")
    .regex(/[0-9]/, "Deve conter pelo menos 1 número")
    .regex(/[^a-zA-Z0-9]/, "Deve conter pelo menos 1 caractere especial"),

  role: z.enum(["client", "specialist", "admin", "scheduler"], {
    required_error: "Tipo de usuário é obrigatório",
    invalid_type_error: "Tipo de usuário inválido",
  }),

  priority: z.boolean().default(false).optional(),
  active: z.boolean().default(true).optional(),
});

export type RegisterDto = z.infer<typeof RegisterUserDto>;
