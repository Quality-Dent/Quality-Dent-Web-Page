import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft02Icon } from "@hugeicons/core-free-icons";

export default function DentalPrivacyPolicyPage() {
    return (
        <div className="bg-[var(--surface-light)] min-h-screen py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-3xl shadow-xl p-8 md:p-12">

                {/* Top Return Button */}
                <div className="mb-8">
                    <Link href="/">
                        <Button
                            variant="ghost"
                            className="group pl-0 hover:bg-transparent hover:text-[var(--primary)] text-gray-500 font-medium flex items-center gap-2 transition-colors"
                        >
                            <HugeiconsIcon icon={ArrowLeft02Icon} size={20} className="group-hover:-translate-x-1 transition-transform" />
                            Volver al Inicio
                        </Button>
                    </Link>
                </div>

                <h1 className="text-3xl font-black text-[var(--secondary)] mb-6">
                    Política de Privacidad
                </h1>
                <p className="text-gray-600 mb-8">
                    Última actualización: {new Date().getFullYear()}
                </p>

                <div className="space-y-8 text-gray-700">
                    <section>
                        <h2 className="text-xl font-bold text-[var(--primary)] mb-3">
                            1. Introducción
                        </h2>
                        <p className="leading-relaxed">
                            En <strong>Quality Dent</strong>, estamos comprometidos a proteger
                            la privacidad y la seguridad de la información personal de
                            nuestros pacientes y visitantes. Esta Política de Privacidad
                            explica cómo recopilamos, utilizamos y resguardamos la información
                            que usted nos proporciona a través de nuestro sitio web.
                        </p>
                    </section>

                    <Separator />

                    <section>
                        <h2 className="text-xl font-bold text-[var(--primary)] mb-3">
                            2. Información que Recopilamos
                        </h2>
                        <p className="leading-relaxed mb-4">
                            Recopilamos información personal únicamente cuando usted nos la
                            proporciona voluntariamente a través de nuestro formulario de
                            contacto o enlaces de WhatsApp. Los datos específicos que
                            solicitamos son:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Nombre Completo.</li>
                            <li>Número de Teléfono o WhatsApp.</li>
                            <li>El tipo de servicio dental en el que está interesado.</li>
                            <li>
                                Cualquier información adicional que decida incluir en su mensaje.
                            </li>
                        </ul>
                    </section>

                    <Separator />

                    <section>
                        <h2 className="text-xl font-bold text-[var(--primary)] mb-3">
                            3. Uso de la Información
                        </h2>
                        <p className="leading-relaxed mb-4">
                            Utilizamos la información recopilada exclusivamente para los
                            siguientes propósitos:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong>Gestión de Citas:</strong> Para contactarlo y agendar,
                                confirmar o reprogramar sus visitas a la clínica.
                            </li>
                            <li>
                                <strong>Atención al Cliente:</strong> Para responder a sus
                                consultas, dudas o comentarios enviados a través del formulario.
                            </li>
                            <li>
                                <strong>Comunicación Futura:</strong> Almacenamos su información
                                de contacto para mantenerlo informado sobre recordatorios de
                                salud dental, promociones relevantes o actualizaciones de
                                nuestros servicios.
                            </li>
                        </ul>
                    </section>

                    <Separator />

                    <section>
                        <h2 className="text-xl font-bold text-[var(--primary)] mb-3">
                            4. Protección de Datos
                        </h2>
                        <p className="leading-relaxed">
                            Nos comprometemos a no vender, alquilar ni compartir su
                            información personal con terceros ajenos a nuestra organización,
                            salvo que sea requerido por ley. Tomamos las medidas de seguridad
                            necesarias para proteger sus datos contra el acceso no autorizado
                            o el uso indebido.
                        </p>
                    </section>

                    <Separator />

                    <section>
                        <h2 className="text-xl font-bold text-[var(--primary)] mb-3">
                            5. Sus Derechos
                        </h2>
                        <p className="leading-relaxed">
                            Usted tiene derecho a acceder, corregir o solicitar la eliminación
                            de su información personal de nuestros registros en cualquier
                            momento. Si desea dejar de recibir comunicaciones o eliminar sus
                            datos, por favor contáctenos utilizando la información provista a
                            continuación.
                        </p>
                    </section>

                    <Separator />

                    <section>
                        <h2 className="text-xl font-bold text-[var(--primary)] mb-3">
                            6. Contacto
                        </h2>
                        <p className="leading-relaxed mb-2">
                            Si tiene preguntas sobre esta política o sobre el manejo de sus
                            datos, puede contactarnos en:
                        </p>
                        <address className="not-italic">
                            <p>
                                <strong>Dirección:</strong> Av. Rafael Escardo 201, San Miguel,
                                Lima, Perú.
                            </p>
                            <p>
                                <strong>Teléfono:</strong> +51 998 079 870
                            </p>
                            <p>
                                <strong>Email:</strong> jcastoncd@yahoo.com
                            </p>
                        </address>
                    </section>

                    {/* Bottom Return Button */}
                    <div className="pt-8 flex justify-center">
                        <Link href="/">
                            <Button
                                className="bg-[var(--secondary)] hover:bg-[var(--secondary)]/90 text-white font-bold py-2 px-6 h-auto rounded-lg transition-colors flex items-center gap-2"
                            >
                                <HugeiconsIcon icon={ArrowLeft02Icon} size={20} />
                                Volver al Inicio
                            </Button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
}