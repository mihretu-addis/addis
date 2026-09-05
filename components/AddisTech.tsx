import { ContactSection } from "./ContactSection";
import { FooterSection } from "./FooterSection";
import { Header } from "./Header";
import { HeroSection } from "./HeroSection";
import { PortfolioSection } from "./PortfolioSection";
import { ServicesSection } from "./ServicesSection";
import { TechStackSection } from "./TechStackSection";
import { WhyPartnerSection } from "./WhyPartnerSection";

export default function AddisTech() {
  return (
    <div
      className="bg-white content-stretch flex flex-col items-start relative w-full min-h-full"
      data-name="Addis Tech"
    >
      <Header />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <WhyPartnerSection />
      <TechStackSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
