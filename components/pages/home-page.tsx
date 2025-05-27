"use client";
import { useScroll, useTransform } from "framer-motion";
import { useNavigation } from "@/hooks/use-navigation";
import MainLayout from "@/components/layouts/main-layout";
import IntroSection from "@/components/sections/home/intro-home-section";
import Footer from "@/components/ui/footer";
import OurClientsSection from "@/components/sections/home/our-clients-section";
import IntroHomeSection from "@/components/sections/home/intro-home-section";
import OurWorkSection from "../sections/home/our-work-section";
import OurStudiosSection from "../sections/home/our-studios-section";
import ServiceSection from "../sections/service-seaction";
import RelatedReading from "../sections/related-reading-section";

export default function HomePage() {
  const { activeSection, sections, addToSectionRefs, scrollToSection } = useNavigation();
  const { scrollY } = useScroll();
  const navBackground = useTransform(scrollY, [0, 100], ["rgb(255, 255, 255)", "rgba(255, 251, 251, 0.9)"]);

  return (
    <MainLayout navBackground={navBackground} activeSection={activeSection} scrollToSection={scrollToSection}>
      <IntroHomeSection/>
      <OurWorkSection/>
      <OurStudiosSection/>
      <OurClientsSection/>
      <RelatedReading/>
      <Footer />
    </MainLayout>
  );
}

