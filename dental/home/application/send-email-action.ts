"use server";

import { z } from "zod";
import {contactFormSchema} from "@/dental/home/domain/model/contact-form-schema";
import {Resend} from "resend";

export async function sendEmailAction(values: z.infer<typeof contactFormSchema>) {

    const resend = new Resend(process.env.RESEND_API_KEY);

    const confirmationEmailPayload = {
        from: 'delivered@resend.dev',
        to: values.email,
        subject: 'Confirmación de contacto - Quality Dent',
        html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
    }

    const contactEmailPayload = {
        from: 'delivered@resend.dev',
        to: 'defneorise@gmail.com',
        subject: 'Petition de contacto - Quality Dent Web',
        html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
    }

    try {
        const {data, error} = await resend.emails.send(confirmationEmailPayload);

        if (error) {
            console.error(error);
            return {message: "Resend error" , success: false};
        }

        return {message: `Email enviado correctamente, gracias por contactarnos ${values.name} !` , success: true};
    } catch (error) {
        console.error(error);
        return {message: "Error al enviar email" , success: false};
    }

}