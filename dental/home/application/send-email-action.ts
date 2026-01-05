"use server";

import {z} from "zod";
import {contactFormSchema} from "@/dental/home/domain/model/contact-form-schema";
import {Resend} from "resend";
import ContactEmail from "@/emails/contact-email";

export async function sendEmailAction(values: z.infer<typeof contactFormSchema>) {

    const resend = new Resend(process.env.RESEND_API_KEY);

    const confirmationEmailPayload = {
        from: 'noreplay@qualitydentperu.com',
        to: 'jcastoncd@gmail.com',
        subject: 'Petición de contacto - Quality Dent',
        react: ContactEmail({name: values.name , email: values.name , phone: values.phone , message: values.message})
    }

    try {
        const {data, error} = await resend.emails.send(confirmationEmailPayload);

        if (error) {
            console.error(error);
            return {message: "Resend error, intente nuevamente " , success: false};
        }

        return {message: `Email enviado correctamente, gracias por contactarnos ${values.name} !` , success: true};
    } catch (error) {
        console.error(error);
        return {message: "Error al enviar email" , success: false};
    }

}