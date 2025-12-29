import {Card, CardContent, CardDescription, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";

export default function ServicesSection() {
    return (
        <section className="py-24 bg-white" id="servicios">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
						<span className="text-[var(--primary)] font-bold tracking-wider text-sm uppercase mb-2 block">
							Nuestros Servicios
						</span>
                    <h2 className="text-3xl md:text-4xl font-black text-[var(--secondary)] mb-4">
                        Soluciones Dentales Integrales
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Ofrecemos una gama completa de tratamientos para mantener tu
                        sonrisa saludable y radiante.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Featured Service Card */}
                    <Card className="col-span-1 md:col-span-2 bg-gradient-to-br from-[var(--secondary)] to-[#004e8a] rounded-2xl p-8 text-white relative overflow-hidden group ring-0 border-0">
                        <div className="absolute right-0 top-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
                        <CardContent className="relative z-10 p-0">
                            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-6 backdrop-blur-sm">
									<span className="material-symbols-outlined text-3xl">
										medical_services
									</span>
                            </div>
                            <CardTitle className="text-2xl font-bold mb-3 text-white">
                                Implantes Dentales
                            </CardTitle>
                            <CardDescription className="text-gray-200 mb-6 leading-relaxed">
                                Recupera la funcionalidad y estética de tu boca con nuestros
                                implantes de titanio de alta gama. La solución permanente para
                                dientes perdidos.
                            </CardDescription>
                            <Button className="inline-flex items-center gap-2 text-white font-bold text-sm bg-white/20 hover:bg-white/30 px-4 py-2 h-auto rounded-lg transition-colors border-0">
                                Consultar Ahora
                                <span className="material-symbols-outlined text-sm">
										arrow_forward
									</span>
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Service Cards */}
                    <Card className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow border border-gray-100 group ring-0">
                        <CardContent className="p-0">
                            <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-lg flex items-center justify-center mb-6 text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white transition-colors">
									<span className="material-symbols-outlined text-3xl">
										sentiment_satisfied
									</span>
                            </div>
                            <CardTitle className="text-xl font-bold text-[var(--secondary)] mb-2">
                                Ortodoncia
                            </CardTitle>
                            <CardDescription className="text-gray-500 text-sm leading-relaxed mb-4">
                                Brackets metálicos, estéticos e invisibles para alinear tu
                                sonrisa perfectamente.
                            </CardDescription>
                            <a
                                className="text-[var(--primary)] font-bold text-sm hover:underline"
                                href="#contacto"
                            >
                                Saber más
                            </a>
                        </CardContent>
                    </Card>

                    <Card className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow border border-gray-100 group ring-0">
                        <CardContent className="p-0">
                            <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-lg flex items-center justify-center mb-6 text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white transition-colors">
									<span className="material-symbols-outlined text-3xl">
										diagnosis
									</span>
                            </div>
                            <CardTitle className="text-xl font-bold text-[var(--secondary)] mb-2">
                                Consulta y Diagnóstico
                            </CardTitle>
                            <CardDescription className="text-gray-500 text-sm leading-relaxed mb-4">
                                Evaluación completa con cámara intraoral y radiografías
                                digitales.
                            </CardDescription>
                            <a
                                className="text-[var(--primary)] font-bold text-sm hover:underline"
                                href="#contacto"
                            >
                                Saber más
                            </a>
                        </CardContent>
                    </Card>

                    <Card className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow border border-gray-100 group ring-0">
                        <CardContent className="p-0">
                            <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-lg flex items-center justify-center mb-6 text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white transition-colors">
									<span className="material-symbols-outlined text-3xl">
										dentistry
									</span>
                            </div>
                            <CardTitle className="text-xl font-bold text-[var(--secondary)] mb-2">
                                Limpieza Dental
                            </CardTitle>
                            <CardDescription className="text-gray-500 text-sm leading-relaxed mb-4">
                                Profilaxis profunda para eliminar sarro y prevenir enfermedades
                                gingivales.
                            </CardDescription>
                            <a
                                className="text-[var(--primary)] font-bold text-sm hover:underline"
                                href="#contacto"
                            >
                                Saber más
                            </a>
                        </CardContent>
                    </Card>

                    <Card className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow border border-gray-100 group ring-0">
                        <CardContent className="p-0">
                            <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-lg flex items-center justify-center mb-6 text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white transition-colors">
									<span className="material-symbols-outlined text-3xl">
										grid_view
									</span>
                            </div>
                            <CardTitle className="text-xl font-bold text-[var(--secondary)] mb-2">
                                Prótesis
                            </CardTitle>
                            <CardDescription className="text-gray-500 text-sm leading-relaxed mb-4">
                                prótesis fijas y removibles diseñadas para verse y sentirse
                                naturales.
                            </CardDescription>
                            <a
                                className="text-[var(--primary)] font-bold text-sm hover:underline"
                                href="#contacto"
                            >
                                Saber más
                            </a>
                        </CardContent>
                    </Card>

                    <Card className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow border border-gray-100 group ring-0">
                        <CardContent className="p-0">
                            <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-lg flex items-center justify-center mb-6 text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white transition-colors">
									<span className="material-symbols-outlined text-3xl">
										healing
									</span>
                            </div>
                            <CardTitle className="text-xl font-bold text-[var(--secondary)] mb-2">
                                Curaciones
                            </CardTitle>
                            <CardDescription className="text-gray-500 text-sm leading-relaxed mb-4">
                                Restauraciones estéticas con resina para tratar caries y
                                fracturas.
                            </CardDescription>
                            <a
                                className="text-[var(--primary)] font-bold text-sm hover:underline"
                                href="#contacto"
                            >
                                Saber más
                            </a>
                        </CardContent>
                    </Card>

                    <Card className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow border border-gray-100 group ring-0">
                        <CardContent className="p-0">
                            <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-lg flex items-center justify-center mb-6 text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white transition-colors">
									<span className="material-symbols-outlined text-3xl">
										content_cut
									</span>
                            </div>
                            <CardTitle className="text-xl font-bold text-[var(--secondary)] mb-2">
                                Extracciones
                            </CardTitle>
                            <CardDescription className="text-gray-500 text-sm leading-relaxed mb-4">
                                Cirugías simples y complejas, incluyendo muelas del juicio, sin
                                dolor.
                            </CardDescription>
                            <a
                                className="text-[var(--primary)] font-bold text-sm hover:underline"
                                href="#contacto"
                            >
                                Saber más
                            </a>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}