"use client";
import { useScroll, useTransform } from "framer-motion";
import { useNavigation } from "@/hooks/use-navigation";

import Footer from "@/components/ui/footer";
import SectionLayout from "../layouts/section-layout";
import IntroContactSection from "../sections/contact/intro-contact-section";

export default function ContactPage() {
  const { activeSection, sections, addToSectionRefs, scrollToSection } = useNavigation();
  const { scrollY } = useScroll();
  const navBackground = useTransform(scrollY, [0, 100], ["rgb(255, 255, 255)", "rgba(255, 251, 251, 0.9)"]);

  return (
    <SectionLayout navBackground={navBackground} activeSection={activeSection} scrollToSection={scrollToSection}>
      <IntroContactSection/>
      <Footer />
    </SectionLayout>
  );
}
