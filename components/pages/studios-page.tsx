"use client";
import { useScroll, useTransform } from "framer-motion";
import { useNavigation } from "@/hooks/use-navigation";

import Footer from "@/components/ui/footer";
import IntroStudiosSection from "../sections/studio/intro-studio-section";
import SectionLayout from "../layouts/section-layout";
import DetailStudiosSection from "../sections/studio/detail-studios-section";
import GetInTouchSection from "../sections/studio/get-in-touch-section";
import OurServicesSection from "../sections/studio/our-services-section";

export default function StudioPage() {
  const { activeSection, sections, addToSectionRefs, scrollToSection } = useNavigation();
  const { scrollY } = useScroll();
  const navBackground = useTransform(scrollY, [0, 100], ["rgb(255, 255, 255)", "rgba(255, 251, 251, 0.9)"]);

  return (
    <SectionLayout navBackground={navBackground} activeSection={activeSection} scrollToSection={scrollToSection}>
      <IntroStudiosSection/>
      <DetailStudiosSection/>
      <OurServicesSection/>
      <GetInTouchSection/>
      <Footer />
    </SectionLayout>
  );
}


