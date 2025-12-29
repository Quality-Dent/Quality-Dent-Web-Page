import Link from "next/link";

export default function DentalFooter() {
    return (
        <footer className="border-t bg-[#0B2538] py-12 text-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-10 grid grid-cols-1 gap-8 md:grid-cols-4">
                    <div className="md:col-span-1">
                        <div className="mb-4 flex items-center gap-2">

                            <span className="text-lg font-semibold">Quality Dent</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            Más de 20 años creando sonrisas saludables en San Miguel. Tu
                            clínica dental de confianza.
                        </p>
                    </div>

                    <div>
                        <div className="mb-4 font-semibold">Enlaces Rápidos</div>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            {[
                                ["Inicio", "#inicio"],
                                ["Nosotros", "#nosotros"],
                                ["Servicios", "#servicios"],
                                ["Contacto", "#contacto"],
                            ].map(([label, href]) => (
                                <li key={href}>
                                    <Link className="hover:text-white/50" href={href}>
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <div className="mb-4 font-semibold">Servicios</div>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            {["Implantes Dentales", "Ortodoncia", "Estética Dental"].map(
                                (label) => (
                                    <li key={label}>
                                        <a className="hover:text-white/50" href="#">
                                            {label}
                                        </a>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>

                    <div>
                        <div className="mb-4 font-semibold">Legal</div>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            {["Política de Privacidad", "Términos y Condiciones"].map(
                                (label) => (
                                    <li key={label}>
                                        <a className="hover:text-white/50" href="#">
                                            {label}
                                        </a>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-between gap-2 border-t border-muted-foreground pt-8 text-xs text-muted-foreground md:flex-row">
                    <p>© 2025 Quality Dent. Todos los derechos reservados.</p>
                    <p>Design and Implementation by Neo.</p>
                </div>
            </div>
        </footer>
    );
}