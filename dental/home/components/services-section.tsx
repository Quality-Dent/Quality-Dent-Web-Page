import {Card, CardContent, CardDescription, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {HugeiconsIcon} from "@hugeicons/react";
import {
    MedicalFileIcon, ArrowRight01Icon, SmileIcon, Stethoscope02Icon, GridViewIcon, FirstAidKitIcon, ScissorIcon,CleanIcon,
    ArrowRight02Icon
} from "@hugeicons/core-free-icons";


const services = [
    {
        icon: SmileIcon,
        title: "Ortodoncia",
        description: "Brackets metálicos, estéticos e invisibles para alinear tu sonrisa perfectamente."
    },
    {
        icon: Stethoscope02Icon,
        title: "Consulta y Diagnóstico",
        description: "Evaluación completa con cámara intraoral y radiografías digitales."
    },
    {
        icon: CleanIcon,
        title: "Limpieza Dental",
        description: "Profilaxis profunda para eliminar sarro y prevenir enfermedades gingivales."
    },
    {
        icon: GridViewIcon,
        title: "Prótesis",
        description: "Prótesis fijas y removibles diseñadas para verse y sentirse naturales."
    },
    {
        icon: FirstAidKitIcon,
        title: "Curaciones",
        description: "Restauraciones estéticas con resina para tratar caries y fracturas."
    },
    {
        icon: ScissorIcon,
        title: "Extracciones",
        description: "Cirugías simples y complejas, incluyendo muelas del juicio, sin dolor."
    }
];

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
                    <Card className=" col-span-1 md:col-span-2 bg-gradient-to-br from-[var(--secondary)] to-[#004e8a] rounded-2xl p-8 text-white relative overflow-hidden group ring-0 border-0">
                        <div className="absolute right-0 top-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
                        <CardContent className="relative z-10 p-0">
                            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-6 backdrop-blur-sm">
                                <HugeiconsIcon icon={MedicalFileIcon} size={28} />
                            </div>
                            <CardTitle className="text-2xl font-bold mb-3 text-white">
                                Implantes Dentales
                            </CardTitle>
                            <CardDescription className="text-gray-200 mb-6 leading-relaxed">
                                Recupera la funcionalidad y estética de tu boca con nuestros
                                implantes de titanio de alta gama. La solución permanente para
                                dientes perdidos.
                            </CardDescription>
                            <a href={`#contacto`} >
                                <Button className="group inline-flex cursor-pointer items-center gap-2 text-white font-bold text-sm bg-white/20 transition-all hover:bg-white/30 px-4 py-2 h-auto rounded-lg  border-0">
                                    Consultar Ahora
                                    <HugeiconsIcon icon={ArrowRight01Icon} size={16} className={`group-hover:translate-x-1 transition-transform`} />
                                </Button>
                            </a>
                        </CardContent>
                    </Card>

                    {/* Service Cards */}
                    {
                        services.map((service, index) => (
                            <Card key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow border border-gray-100 group ring-0">
                                <CardContent className="p-0">
                                    <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-lg flex items-center justify-center mb-6 text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white transition-colors">
                                        <HugeiconsIcon icon={service.icon} size={28} />
                                    </div>
                                    <CardTitle className="text-xl font-bold text-[var(--secondary)] mb-2">
                                        {service.title}
                                    </CardTitle>
                                    <CardDescription className="text-gray-500 text-sm leading-relaxed mb-4">
                                        {service.description}

                                    </CardDescription>
                                    <a
                                        className="text-[var(--primary)] group font-bold text-sm flex gap-2 justify-end transition-transform hover:translate-x-1 hover:underline"
                                        href="#contacto"
                                    >
                                        Saber mas
                                        <HugeiconsIcon icon={ArrowRight02Icon} size={20} />
                                    </a>

                                </CardContent>
                            </Card>
                        ))
                    }


                </div>
            </div>
        </section>
    );
}