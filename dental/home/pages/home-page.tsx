import HeroSection from "@/dental/home/components/hero-section";
import StatsSection from "@/dental/home/components/stats-section";
import AboutUsSection from "@/dental/home/components/about-us-section";
import ServicesSection from "@/dental/home/components/services-section";
import TestimonialSection from "@/dental/home/components/testimonial-section";
import ContactSection from "@/dental/home/components/contact-section";
import FloatingButton from "@/dental/home/components/floating-button";

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