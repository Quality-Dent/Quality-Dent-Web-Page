import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {HugeiconsIcon} from "@hugeicons/react";
import {Calendar03Icon} from "@hugeicons/core-free-icons";

export default function HeroSection() {
    return (
        <section className="relative" id="inicio">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--secondary)]/90 to-[var(--secondary)]/40 z-10"></div>
                <div
                    className="h-full w-full bg-cover bg-center"
                    style={{
                        backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBQzG1qZZ0NXa5TFw0bswoIONZszBvA7CN56xLK2-pWiM4bWw53tsyrEedVhVOieF8sQPSPkmvFxC0xoyBV32gPVFMetjJJglvT8GLC4W2-et_YuZoKJChlkHbnn-dL7jYcxW6b82qoTHSPSKpwjkc5P530kNxznHE0lGF8u1IYsIQPS2j9x-ujjYZj_QlY1jSn1YLZvK00WjGG9YeUl1n7T0EapINQ4NZoKUpZCV34X4HZKuV-OGidJYMnFxNxJXpoCgJQNVAw')`,
                    }}
                ></div>
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
                <div className="max-w-2xl">
                    <Badge className="h-auto px-3 py-1 bg-[var(--primary)]/20 text-white backdrop-blur-sm border border-white/20 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                        Más de 20 años de experiencia
                    </Badge>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-6">
                        Sonrisas que transforman vidas
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed font-light">
                        Especialistas en Implantes Dentales y Ortodoncia en San Miguel.
                        Recupera tu confianza y salud dental con tecnología de vanguardia
                        y atención personalizada.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button className="flex items-center justify-center gap-2 bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white px-8 py-4 h-auto rounded-lg font-bold text-base transition-all shadow-lg shadow-[var(--primary)]/30">
                            <HugeiconsIcon icon={Calendar03Icon} size={20} />
                            Agendar Cita
                        </Button>
                        <Button className="flex items-center justify-center gap-2 bg-white text-[var(--secondary)] hover:bg-gray-50 px-8 py-4 h-auto rounded-lg font-bold text-base transition-all">
                            Nuestros Servicios
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}