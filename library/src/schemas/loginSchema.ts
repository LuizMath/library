import z from "zod/v3";

export const loginSchema = z.strictObject({
  email: z
    .string()
    .email({ message: "Email Inválido!" })
    .nonempty({ message: "Digite o Email!" }),
  password: z.string().nonempty({ message: "Digite sua Senha!" }),
  rememberData: z.boolean(),
});

export type loginSchemaData = z.infer<typeof loginSchema>;
