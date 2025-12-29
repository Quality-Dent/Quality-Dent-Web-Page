import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { Home01Icon } from "@hugeicons/core-free-icons";

export default function NotFoundPage() {
    return (
        <div className=" bg-gray-50 flex flex-col items-center justify-center px-4">
            <div className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
                <h1 className="text-8xl font-black text-[var(--primary)] mb-4">404</h1>
                <h2 className="text-2xl md:text-3xl font-bold text-[var(--secondary)] mb-4">
                    Página no encontrada
                </h2>
                <p className="text-gray-600 mb-8">
                    Lo sentimos, la página que buscas no existe o ha sido movida.
                    Verifica la URL o regresa a la página principal.
                </p>
                <Link href="/">
                    <Button className="bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-bold px-6 py-3 h-auto rounded-lg transition-colors flex items-center gap-2 mx-auto cursor-pointer">
                        <HugeiconsIcon icon={Home01Icon} size={20} />
                        Volver al Inicio
                    </Button>
                </Link>
            </div>
        </div>
    );
}