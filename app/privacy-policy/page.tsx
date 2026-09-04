import type { Metadata } from "next";
import DentalPrivacyPolicyPage from "@/dental/home/presentation/pages/dental-privacy-policy-page";

export const metadata: Metadata = {
    title: "Política de Privacidad",
};

export default function PrivacyPolicyPage() {
  return <DentalPrivacyPolicyPage/>
}