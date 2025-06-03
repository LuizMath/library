import z from "zod/v3";

export const registerSchema = z.strictObject({
  name: z.string().nonempty({ message: "Digite seu Nome!" }),
  lastName: z.string().nonempty({ message: "Digite seu Último Nome!" }),
  email: z
    .string()
    .email({ message: "Email Inválido!" })
    .nonempty({ message: "Digite seu Email" }),
  password: z.string().nonempty({ message: "Digite sua Senha!" }),
  country: z
    .string()
    .refine((value) => value.includes("DEFAULT") !== true, {
      message: "Selecione seu País!",
    }),
});

export type registerSchemaData = z.infer<typeof registerSchema>;
