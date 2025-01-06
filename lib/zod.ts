import { object, string } from "zod";

export const signInSchema = object({
  email: string({ required_error: "Email es requerido" })
    .min(1, "Email es requerido")
    .email("Email inválido"),
  password: string({ required_error: "Contraseña es requerido" })
    .min(1, "Contraseña es requerido")
    .min(6, "Contraseña debe tener más de 6 caracteres")
    .max(32, "Contraseña debe tener menos de 32 caracteres."),
});
