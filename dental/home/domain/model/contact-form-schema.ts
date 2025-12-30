import validator from "validator";
import { z } from "zod";

export const contactFormSchema = z.object({
    name: z.string().min(2,{message: "El nombre debe de ser de al menos 2 caracteres"})
        .max(50,{message: "El nombre no debe exceder los 50 caracteres"}),
    phone: z.string().max(15,{message:"El número no debe de exceder los 15 caracteres"})
        .refine(validator.isMobilePhone,{message:"Ingresar un número de teléfono valido"}),
    email: z.string().email({message: "Ingresar un email valido"}),
    message: z.string()
});