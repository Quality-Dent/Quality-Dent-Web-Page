import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import DentalFooter from "@/dental/shared/components/dental-footer";
import DentalHeader from "@/dental/shared/components/dental-header";
import React from "react";
import ReactLenis from "lenis/react";
import {Toaster} from "@/components/ui/sonner";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Quality Dent",
    description: "Clínica dental en San Miguel - Odontología integral",
    keywords: [
        "Quality Dent",
        "Odontologo",
        "Dentista" ,
        "Dentista en San Miguel",
        "Odontologo en San Miguel" ,
        "Clinica Dental",
        "Implantes Dentales"
    ],
    openGraph: {
        images: "/logo-white.png"
    },
    ...(process.env.NEXT_PUBLIC_SITE_URL && {
        metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL),
    }),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable} suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className={`grid min-h-dvh grid-rows-[auto_1fr_auto]`}>
            <DentalHeader/>
            <main>
                {children}
            </main>
            <DentalFooter/>
        </div>
        <Toaster richColors/>
        <ReactLenis root />
      </body>
    </html>
  );
}
