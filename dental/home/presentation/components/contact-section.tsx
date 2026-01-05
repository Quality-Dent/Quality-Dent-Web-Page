import {Button} from "@/components/ui/button";
import {HugeiconsIcon} from "@hugeicons/react";
import {SentIcon, Location01Icon, Clock01Icon, Call02Icon, MapsIcon, WhatsappIcon} from "@hugeicons/core-free-icons";
import Link from "next/link";
import ContactForm from "@/dental/home/presentation/components/contact-form";

export default function ContactSection() {
    return (
        <section className="py-24 bg-[var(--surface-light)]" id="contacto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-3xl shadow-xl overflow-hidden">
                    {/* Contact Form */}
                    <div className="p-8 md:p-12 lg:p-16">
							<span className="text-[var(--primary)] font-bold tracking-wider text-sm uppercase mb-2 block">
								Contacto
							</span>
                        <h2 className="text-3xl font-black text-[var(--secondary)] mb-6">
                            Agenda tu cita hoy
                        </h2>
                        <p className="text-gray-600 mb-4">
                            Déjanos tus datos y nos pondremos en contacto contigo a la
                            brevedad para confirmar tu visita.
                        </p>

                        {/* WhatsApp Contact Option */}
                        <div className="mb-8 p-4 bg-green-50 rounded-xl border border-green-100">
                            <p className="text-gray-700 text-sm mb-3">
                                ¿Prefieres una respuesta inmediata? Escríbenos por WhatsApp:
                            </p>
                            <Link href="https://wa.link/fl2po1" target="_blank">
                                <Button
                                    type="button"
                                    className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold py-3 h-auto rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
                                >
                                    <HugeiconsIcon icon={WhatsappIcon} size={22} />
                                    Contactar por WhatsApp
                                </Button>
                            </Link>
                        </div>

                        <div className="relative flex items-center mb-8">
                            <div className="flex-grow border-t border-gray-200"></div>
                            <span className="flex-shrink mx-4 text-gray-400 text-sm">o completa el formulario</span>
                            <div className="flex-grow border-t border-gray-200"></div>
                        </div>

                        <ContactForm/>

                        
                    </div>

                    {/* Contact Info */}
                    <div className="bg-[var(--secondary)] text-white p-8 md:p-12 lg:p-16 flex flex-col justify-between relative">
                        <div
                            className="absolute inset-0 opacity-10 pointer-events-none"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
                            }}
                        ></div>
                        <div className="relative z-10 space-y-8">
                            <div>
                                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                    <HugeiconsIcon icon={Location01Icon} size={24} />
                                    Ubicación
                                </h3>
                                <p className="text-gray-300 leading-relaxed">
                                    Av. Rafael Escardo 201,
                                    <br />
                                    San Miguel, Lima, Perú.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                    <HugeiconsIcon icon={Clock01Icon} size={24} />
                                    Horario de Atención
                                </h3>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex justify-between border-b border-white/10 pb-2">
                                        <span>Lunes - Viernes</span>
                                        <span>9:00 AM - 8:00 PM</span>
                                    </li>
                                    <li className="flex justify-between border-b border-white/10 pb-2">
                                        <span>Sábados</span>
                                        <span>9:00 AM - 6:00 PM</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span>Domingos</span>
                                        <span>Cerrado</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                    <HugeiconsIcon icon={Call02Icon} size={24} />
                                    Contacto Directo
                                </h3>
                                <p className="text-gray-300 text-lg ">
                                    +51 957 887 918
                                </p>
                                <p className="text-gray-300 text-sm mt-1">
                                    jcastoncd@yahoo.com
                                </p>
                            </div>
                        </div>
                        <div className="relative mt-8 h-58 w-full rounded-xl overflow-hidden border-2 border-white/20 group cursor-pointer">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                style={{
                                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCiriuq79hmsmyIqQiBbUIkIuVwfnbXWic-FMLlSzEXQcoD-g-h7OyRNTXSRs2_cYWUS3brOB2-47Y9EfwQFmSyw59PlZDCZV-0leFkP__HmgQ_vZZ8wdHXznHdyn-MOjZZM49PQOD5X8HlZ3IKm15LUHYXAIY1WEVjhYmoTpbx3GHcn67biGHLKPDampVdxP__2LvKY2Z7hDS_1LZaLt854yQWeFKthVHkpiwBOzrzLJgdJ5drPuWdLhEBQYoUc7lJLmQD4IVn')`,
                                }}
                            ></div>
                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                                <Link href={`https://maps.app.goo.gl/6LXPUEw8Lf1pHhP26`} target={`_blank`}>
                                    <Button className="bg-white text-[var(--secondary)] px-4 py-2 h-auto rounded-lg font-bold text-sm flex items-center gap-2 shadow-lg hover:bg-gray-50 cursor-pointer">
                                        <HugeiconsIcon icon={MapsIcon} size={20} className="text-[var(--primary)]" />
                                        Ver en Google Maps
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}