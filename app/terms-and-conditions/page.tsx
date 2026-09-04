import type { Metadata } from "next";
import DentalTermsAndConditionsPage from "@/dental/home/presentation/pages/dental-terms-and-conditions-page";

export const metadata: Metadata = {
    title: "Términos y Condiciones",
};

export default function TermsAndConditionsPage() {
  return <DentalTermsAndConditionsPage/>
}