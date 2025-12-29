"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import validator from "validator";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import { toast } from "sonner";
import {Textarea} from "@/components/ui/textarea";
import {HugeiconsIcon} from "@hugeicons/react";
import {SentIcon} from "@hugeicons/core-free-icons";

const contactFormSchema = z.object({
    name: z.string().min(2).max(50),
    phone: z.string().max(15).refine(validator.isMobilePhone),
    email: z.string().email(),
    message: z.string()
});


export default function ContactForm() {

    const form = useForm<z.infer<typeof contactFormSchema>>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: "",
            phone: "",
            email: "",
            message: ""
        },
    });

    function onSubmit(values: z.infer<typeof contactFormSchema>) {
        console.log(values);
        toast.success("Event has been created");
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
                    className="w-full bg-[var(--secondary)] hover:bg-[var(--secondary)]/90 text-white font-bold py-4 h-auto rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                    Enviar Solicitud
                    <HugeiconsIcon icon={SentIcon} size={20} />
                </Button>
            </form>
        </Form>
    );
}