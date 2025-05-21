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
  phone: z
    .string()
    .min(10, "Telefone deve ter no mínimo 10 dígitos")
    .max(15, "Telefone deve ter no máximo 15 dígitos")
    .regex(
      /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})-?(\d{4}))$/,
      "Formato de telefone inválido. Use (DD) 9XXXX-XXXX ou similar",
    ),
  cpf: z
    .string()
    .regex(
      /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
      "Formato de CPF inválido. Use XXX.XXX.XXX-XX",
    )
    .optional(),
  priority: z.boolean().default(false).optional(),
  active: z.boolean().default(true).optional(),
});

export type RegisterDto = z.infer<typeof RegisterUserDto>;
