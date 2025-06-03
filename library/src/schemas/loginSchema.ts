import z from "zod/v3";

export const loginSchema = z.strictObject({
  email: z
    .string()
    .email({ message: "Email inválido!" })
    .min(1, { message: "Digite o email!" }),
  password: z.string().min(1, { message: "Digite sua Senha!" }),
  rememberData: z.boolean(),
});

export type loginSchemaData = z.infer<typeof loginSchema>;
