import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";

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
                        <p className="text-gray-600 mb-8">
                            Déjanos tus datos y nos pondremos en contacto contigo a la
                            brevedad para confirmar tu visita.
                        </p>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="col-span-1">
                                    <Label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        Nombre Completo
                                    </Label>
                                    <Input
                                        id="name"
                                        placeholder="Juan Pérez"
                                        type="text"
                                        className="w-full rounded-lg border-gray-200 focus:border-[var(--primary)] focus:ring-[var(--primary)] bg-gray-50 p-3 text-[var(--secondary)] h-12"
                                    />
                                </div>
                                <div className="col-span-1">
                                    <Label
                                        htmlFor="phone"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        Teléfono / WhatsApp
                                    </Label>
                                    <Input
                                        id="phone"
                                        placeholder="999 000 000"
                                        type="tel"
                                        className="w-full rounded-lg border-gray-200 focus:border-[var(--primary)] focus:ring-[var(--primary)] bg-gray-50 p-3 text-[var(--secondary)] h-12"
                                    />
                                </div>
                            </div>
                            <div>
                                <Label
                                    htmlFor="service"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    Servicio de Interés
                                </Label>
                                <Select>
                                    <SelectTrigger className="w-full rounded-lg border-gray-200 focus:border-[var(--primary)] focus:ring-[var(--primary)] bg-gray-50 p-3 text-[var(--secondary)] h-12">
                                        <SelectValue placeholder="Selecciona un servicio" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="consulta">
                                            Consulta General
                                        </SelectItem>
                                        <SelectItem value="implantes">
                                            Implantes Dentales
                                        </SelectItem>
                                        <SelectItem value="ortodoncia">
                                            Ortodoncia
                                        </SelectItem>
                                        <SelectItem value="limpieza">
                                            Limpieza
                                        </SelectItem>
                                        <SelectItem value="otro">Otro</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <Label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    Mensaje (Opcional)
                                </Label>
                                <Textarea
                                    id="message"
                                    placeholder="¿Tienes alguna duda específica?"
                                    rows={4}
                                    className="w-full rounded-lg border-gray-200 focus:border-[var(--primary)] focus:ring-[var(--primary)] bg-gray-50 p-3 text-[var(--secondary)]"
                                />
                            </div>
                            <Button
                                type="button"
                                className="w-full bg-[var(--secondary)] hover:bg-[var(--secondary)]/90 text-white font-bold py-4 h-auto rounded-lg transition-colors flex items-center justify-center gap-2"
                            >
                                Enviar Solicitud
                                <span className="material-symbols-outlined">send</span>
                            </Button>
                        </form>
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
										<span className="material-symbols-outlined">
											location_on
										</span>
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
                                    <span className="material-symbols-outlined">schedule</span>
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
                                    <span className="material-symbols-outlined">call</span>
                                    Contacto Directo
                                </h3>
                                <p className="text-gray-300 text-lg hover:text-[var(--primary)] transition-colors cursor-pointer">
                                    +51 999 000 000
                                </p>
                                <p className="text-gray-300 text-sm mt-1">
                                    contacto@qualitydent.com
                                </p>
                            </div>
                        </div>
                        <div className="relative mt-8 h-48 w-full rounded-xl overflow-hidden border-2 border-white/20 group cursor-pointer">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                style={{
                                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCiriuq79hmsmyIqQiBbUIkIuVwfnbXWic-FMLlSzEXQcoD-g-h7OyRNTXSRs2_cYWUS3brOB2-47Y9EfwQFmSyw59PlZDCZV-0leFkP__HmgQ_vZZ8wdHXznHdyn-MOjZZM49PQOD5X8HlZ3IKm15LUHYXAIY1WEVjhYmoTpbx3GHcn67biGHLKPDampVdxP__2LvKY2Z7hDS_1LZaLt854yQWeFKthVHkpiwBOzrzLJgdJ5drPuWdLhEBQYoUc7lJLmQD4IVn')`,
                                }}
                            ></div>
                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                                <Button className="bg-white text-[var(--secondary)] px-4 py-2 h-auto rounded-lg font-bold text-sm flex items-center gap-2 shadow-lg hover:bg-gray-50">
										<span className="material-symbols-outlined text-[var(--primary)]">
											map
										</span>
                                    Ver en Google Maps
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}