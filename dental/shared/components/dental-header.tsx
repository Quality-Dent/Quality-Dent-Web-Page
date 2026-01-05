import {HugeiconsIcon} from "@hugeicons/react";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Chatting01Icon, Menu01Icon} from "@hugeicons/core-free-icons";
import Image from "next/image";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
                      ["Inicio", "/#inicio"],
                      ["Nosotros", "/#nosotros"],
                      ["Servicios", "/#servicios"],
                      ["Contacto", "/#contacto"],
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
                      <Link href="https://wa.link/fl2po1" target={`_blank`} className="gap-2 ">
                          <HugeiconsIcon icon={Chatting01Icon} strokeWidth={2} className="size-4" />
                          Pedir Cita WhatsApp
                      </Link>
                  </Button>
              </div>



              <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="md:hidden" aria-label="Abrir menú">
                          <HugeiconsIcon icon={Menu01Icon} strokeWidth={2} className="size-5" />
                      </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="start">

                      <DropdownMenuItem asChild>
                          <Link href="#inicio">Inicio</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                          <Link href="#nosotros">Nosotros</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                          <Link href="#servicios">Servicios</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                          <Link href="#contacto">Contacto</Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem >
                          <Link href="https://wa.link/fl2po1" target={`_blank`}>
                              <div className={`flex gap-2`}>
                                  <HugeiconsIcon icon={Chatting01Icon} strokeWidth={2} className="size-4" />
                                  Pedir Cita WhatsApp
                              </div>
                          </Link>
                      </DropdownMenuItem>
                  </DropdownMenuContent>
              </DropdownMenu>
          </div>
      </header>
  );
}