import {Card, CardContent} from "@/components/ui/card";

export default function StatsSection(){
    return (
        <section className="py-12 bg-white relative z-20 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Card className="bg-white rounded-2xl md:-mt-24 relative shadow-xl border border-gray-100 p-8 md:p-12 ring-0">
                    <CardContent className="p-0">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
                            <div className="flex flex-col items-center justify-center p-4">
                                <h3 className="text-4xl lg:text-5xl font-black text-[var(--secondary)] mb-2 tracking-tight">
                                    20+
                                </h3>
                                <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase">
                                    Años de Experiencia
                                </p>
                            </div>
                            <div className="flex flex-col items-center justify-center p-4">
                                <h3 className="text-4xl lg:text-5xl font-black text-[var(--secondary)] mb-2 tracking-tight">
                                    2k+
                                </h3>
                                <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase">
                                    Pacientes Satisfechos
                                </p>
                            </div>
                            <div className="flex flex-col items-center justify-center p-4">
                                <h3 className="text-4xl lg:text-5xl font-black text-[var(--secondary)] mb-2 tracking-tight">
                                    100%
                                </h3>
                                <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase">
                                    Tecnología Avanzada
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}