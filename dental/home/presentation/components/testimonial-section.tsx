import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {HugeiconsIcon} from "@hugeicons/react";
import {QuoteDownIcon} from "@hugeicons/core-free-icons";

export default function TestimonialSection() {
    return (
        <section className="py-20 bg-[var(--secondary)] relative overflow-hidden">
            <div
                className="absolute top-0 right-0 w-full h-full opacity-10"
                style={{
                    backgroundImage: `radial-gradient(#3eb4e0 1px, transparent 1px)`,
                    backgroundSize: "24px 24px",
                }}
            ></div>
            <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
                <HugeiconsIcon icon={QuoteDownIcon} size={60} className="text-[var(--primary)] mb-6 opacity-50 mx-auto" />
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8 leading-snug">
                    &ldquo;La atención en Quality Dent superó mis expectativas. El tratamiento
                    de implantes fue indoloro y el resultado es increíble. Totalmente
                    recomendados.&rdquo;
                </h2>
                <div className="flex items-center justify-center gap-4">
                    <img
                        alt="Testimonial User"
                        className="w-14 h-14 rounded-full border-2 border-[var(--primary)]"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAk63fOm8yRSBsiab2V7wvWLWJrbxeoXu0tsU8A0omj1GcYE1k4oDQfRNw5OziHti-3icZxJ48GdKsp0Pzl-GW4dmrgK9b9mQA9E2h4AWTKTTqXkHaolCVWmrE8Oll2ONK08gaDYcpu9v056N0TGZHlYq1WlrJltbvuTxKxcEN-I3HzX_yiWpWYflqe4qlE5AJkbszHtxkJr9G0KjW_aJ4po0cs5hqp0b2h5i0fNIh7ynBB6W6bqoEl4jGE79YaRzVDjenkK-6K"
                    />
                    <div className="text-left">
                        <p className="text-white font-bold">María Rodríguez</p>
                        <p className="text-[var(--primary)] text-sm">
                            Paciente de Implantes
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}