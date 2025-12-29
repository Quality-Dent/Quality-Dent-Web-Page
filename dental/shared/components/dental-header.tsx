import {HugeiconsIcon} from "@hugeicons/react";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Chatting01Icon, Menu01Icon} from "@hugeicons/core-free-icons";
import Image from "next/image";

export default function DentalHeader() {
  return (
      <header className="absolute top-0 sticky z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
              <Link href="#inicio" className="flex items-center gap-3">
                  <Image src="/logo.webp"
                         alt="Quality Dent Logo"
                         width={150}
                         height={50}
                         quality={100}
                         className=" object-contain"
                  />


              </Link>

              <nav className="hidden items-center gap-8 md:flex">
                  {[
                      ["Inicio", "#inicio"],
                      ["Nosotros", "#nosotros"],
                      ["Servicios", "#servicios"],
                      ["Contacto", "#contacto"],
                  ].map(([label, href]) => (
                      <Link
                          key={href}
                          href={href}
                          className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                      >
                          {label}
                      </Link>
                  ))}
              </nav>

              <div className="hidden md:flex">
                  <Button asChild className="rounded-full bg-green-500 hover:bg-green-600">
                      <Link href="#contacto" className="gap-2 ">
                          <HugeiconsIcon icon={Chatting01Icon} strokeWidth={2} className="size-4" />
                          Pedir Cita WhatsApp
                      </Link>
                  </Button>
              </div>

              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Abrir menú">
                  <HugeiconsIcon icon={Menu01Icon} strokeWidth={2} className="size-5" />
              </Button>
          </div>
      </header>
  );
}