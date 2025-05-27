"use client";
import { useScroll, useTransform } from "framer-motion";
import { useNavigation } from "@/hooks/use-navigation";
import MainLayout from "@/components/layouts/main-layout";
import Footer from "@/components/ui/footer";
import IntroPortfolioSection from "../sections/portfolio/intro-portfolio-section";
import ServiceSection from "../sections/service-seaction";
import DetailPortfolioSection from "../sections/portfolio/detail-portfolio-section";

export default function PortfolioPage() {
  const { activeSection, sections, addToSectionRefs, scrollToSection } = useNavigation();
  const { scrollY } = useScroll();
  const navBackground = useTransform(scrollY, [0, 100], ["rgb(255, 255, 255)", "rgba(255, 251, 251, 0.9)"]);

  return (
    <MainLayout navBackground={navBackground} activeSection={activeSection} scrollToSection={scrollToSection}>
      <IntroPortfolioSection/>
      <DetailPortfolioSection/>
      <ServiceSection/>
      <Footer />
    </MainLayout>
  );
}