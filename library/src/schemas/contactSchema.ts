import z from "zod/v3";

export const contactSchema = z.strictObject({
  name: z.string().nonempty({ message: "Digite seu Nome!" }),
  email: z
    .string()
    .nonempty({ message: "Digite seu Email" })
    .email({ message: "Email Inválido!" }),
  doubt: z
    .string()
    .nonempty({ message: "Digite sua Dúvida!" })
    .max(300, { message: "Reduza sua Dúvida!" }),
});

export type contactSchemaData = z.infer<typeof contactSchema>;
