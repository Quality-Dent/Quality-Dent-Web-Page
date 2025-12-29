import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft02Icon } from "@hugeicons/core-free-icons";

export default function DentalTermsAndConditionsPage() {
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
                    Términos y Condiciones
                </h1>
                <p className="text-gray-600 mb-8">
                    Última actualización: {new Date().getFullYear()}
                </p>

                <div className="space-y-8 text-gray-700">
                    <section>
                        <h2 className="text-xl font-bold text-[var(--primary)] mb-3">
                            1. Aceptación de los Términos
                        </h2>
                        <p className="leading-relaxed">
                            Bienvenido a <strong>Quality Dent</strong>. Al acceder y utilizar este sitio web,
                            así como al agendar citas o contratar nuestros servicios, usted acepta cumplir
                            y estar sujeto a los siguientes términos y condiciones. Si no está de acuerdo
                            con alguna parte de estos términos, le recomendamos no utilizar nuestros servicios.
                        </p>
                    </section>

                    <Separator />

                    <section>
                        <h2 className="text-xl font-bold text-[var(--primary)] mb-3">
                            2. Servicios Odontológicos
                        </h2>
                        <p className="leading-relaxed mb-4">
                            Quality Dent ofrece servicios profesionales de salud dental, incluyendo pero no limitado a:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li>Consultas y Diagnósticos Generales.</li>
                            <li>Ortodoncia (Brackets y alineadores).</li>
                            <li>Implantes Dentales y Prótesis.</li>
                            <li>Limpieza Dental (Profilaxis).</li>
                            <li>Curaciones y Extracciones.</li>
                        </ul>
                        <p className="leading-relaxed">
                            Nos reservamos el derecho de modificar o suspender cualquier servicio sin previo aviso.
                            Los resultados de los tratamientos pueden variar según las características biológicas
                            de cada paciente.
                        </p>
                    </section>

                    <Separator />

                    <section>
                        <h2 className="text-xl font-bold text-[var(--primary)] mb-3">
                            3. Citas y Cancelaciones
                        </h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong>Agendamiento:</strong> Las citas pueden solicitarse vía web, WhatsApp o teléfono
                                y están sujetas a disponibilidad.
                            </li>
                            <li>
                                <strong>Cancelaciones:</strong> Solicitamos notificar cualquier cancelación o reprogramación
                                con al menos 24 horas de anticipación para no perjudicar a otros pacientes.
                            </li>
                            <li>
                                <strong>Puntualidad:</strong> Se otorga una tolerancia máxima de 10 minutos. Pasado este
                                tiempo, la cita podría ser reprogramada.
                            </li>
                        </ul>
                    </section>

                    <Separator />

                    <section>
                        <h2 className="text-xl font-bold text-[var(--primary)] mb-3">
                            4. Responsabilidad del Paciente
                        </h2>
                        <p className="leading-relaxed">
                            Es responsabilidad del paciente proporcionar información veraz y completa sobre su
                            historial médico, alergias y medicamentos actuales. Quality Dent no se hace responsable
                            por complicaciones derivadas de la omisión o falsedad en dicha información.
                        </p>
                    </section>

                    <Separator />

                    <section>
                        <h2 className="text-xl font-bold text-[var(--primary)] mb-3">
                            5. Propiedad Intelectual
                        </h2>
                        <p className="leading-relaxed">
                            Todo el contenido de este sitio web, incluyendo textos, logotipos, imágenes y diseños,
                            es propiedad de Quality Dent o de sus licenciantes y está protegido por las leyes
                            de propiedad intelectual vigentes en Perú.
                        </p>
                    </section>

                    <Separator />

                    <section>
                        <h2 className="text-xl font-bold text-[var(--primary)] mb-3">
                            6. Ley Aplicable
                        </h2>
                        <p className="leading-relaxed">
                            Estos términos se rigen e interpretan de acuerdo con las leyes de la República del Perú.
                            Cualquier disputa relacionada con estos términos estará sujeta a la jurisdicción exclusiva
                            de los tribunales de Lima.
                        </p>
                    </section>

                    <Separator />

                    <section>
                        <h2 className="text-xl font-bold text-[var(--primary)] mb-3">
                            7. Información de Contacto
                        </h2>
                        <p className="leading-relaxed mb-2">
                            Para cualquier consulta sobre estos términos, puede comunicarse con nosotros:
                        </p>
                        <address className="not-italic">
                            <p><strong>Dirección:</strong> Av. Rafael Escardo 201, San Miguel, Lima, Perú.</p>
                            <p><strong>Teléfono:</strong> +51 957 887 918</p>
                            <p><strong>Email:</strong> jcastoncd@yahoo.com</p>
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