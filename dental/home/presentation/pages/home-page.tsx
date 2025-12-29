import HeroSection from "@/dental/home/presentation/components/hero-section";
import StatsSection from "@/dental/home/presentation/components/stats-section";
import AboutUsSection from "@/dental/home/presentation/components/about-us-section";
import ServicesSection from "@/dental/home/presentation/components/services-section";
import TestimonialSection from "@/dental/home/presentation/components/testimonial-section";
import ContactSection from "@/dental/home/presentation/components/contact-section";
import FloatingButton from "@/dental/home/presentation/components/floating-button";

export default function HomePage() {
  return (
      <div className="bg-white font-sans text-[var(--secondary)] antialiased scroll-smooth">
          <HeroSection/>
          <StatsSection/>
          <AboutUsSection/>
          <ServicesSection/>
          <TestimonialSection/>
          <ContactSection/>
          <FloatingButton/>
      </div>
  );
}