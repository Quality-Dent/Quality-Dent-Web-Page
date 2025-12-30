"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import {Textarea} from "@/components/ui/textarea";
import {HugeiconsIcon} from "@hugeicons/react";
import {Loading02Icon, SentIcon} from "@hugeicons/core-free-icons";
import { useState } from 'react';
import { contactFormSchema } from  "@/dental/home/domain/model/contact-form-schema";
import {sendEmailAction} from "@/dental/home/application/send-email-action";




export default function ContactForm() {

    const [loading, setLoading] = useState(false);

    const form = useForm<z.infer<typeof contactFormSchema>>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: "",
            phone: "",
            email: "",
            message: ""
        },
    });

    async function onSubmit(values: z.infer<typeof contactFormSchema>) {
        setLoading(true);

        const {message ,success} = await sendEmailAction(values);

        if (success) {
            toast.success(message);
            form.reset();
        } else {
            toast.error(message);
        }

        setLoading(false);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="col-span-1">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Nombre</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Juan Perez"
                                            className="w-full rounded-lg border-gray-200 focus:border-[var(--primary)] focus:ring-[var(--primary)] bg-gray-50 p-3 text-[var(--secondary)] h-12"
                                            {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="col-span-1">
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Teléfono</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="999000000"
                                            className="w-full rounded-lg border-gray-200 focus:border-[var(--primary)] focus:ring-[var(--primary)] bg-gray-50 p-3 text-[var(--secondary)] h-12"
                                            {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                </div>
                <div>
                    <FormField
                        control={form.control}
                        name="email"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="example@anymail.com"
                                        className="w-full rounded-lg border-gray-200 focus:border-[var(--primary)] focus:ring-[var(--primary)] bg-gray-50 p-3 text-[var(--secondary)] h-12"
                                        {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div>
                    <FormField
                        control={form.control}
                        name="message"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Mensaje (Opcional)</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="¿Tienes alguna duda específica?"
                                        rows={4}
                                        className="w-full rounded-lg border-gray-200 focus:border-[var(--primary)] focus:ring-[var(--primary)] bg-gray-50 p-3 text-[var(--secondary)]"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[var(--secondary)] hover:bg-[var(--secondary)]/90 text-white font-bold py-4 h-auto rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                    Enviar Solicitud
                    {
                        loading ? <HugeiconsIcon icon={Loading02Icon} size={22} className="animate-spin" /> : <HugeiconsIcon icon={SentIcon} size={20} />
                    }

                </Button>
            </form>
        </Form>
    );
}