"use client";
import { useScroll, useTransform } from "framer-motion";
import { useNavigation } from "@/hooks/use-navigation";

import Footer from "@/components/ui/footer";
import IntroStudiosSection from "../sections/studio/intro-studio-section";
import SectionLayout from "../layouts/section-layout";
import DetailStudiosSection from "../sections/studio/detail-studios-section";
import GetInTouchSection from "../sections/studio/get-in-touch-section";
import IntroAboutSection from "../sections/about/intro-about-section";
import OurOValuesSection from "../sections/about/our-o-value-section";
import TeamSection from "../sections/about/our-team-section";
import OurOriginsSection from "../sections/about/our-origins-section";
import OurInformationTeamSection from "../sections/about/our-information-team-section";

export default function AboutPage() {
  const { activeSection, sections, addToSectionRefs, scrollToSection } = useNavigation();
  const { scrollY } = useScroll();
  const navBackground = useTransform(scrollY, [0, 100], ["rgb(255, 255, 255)", "rgba(255, 251, 251, 0.9)"]);

  return (
    <SectionLayout navBackground={navBackground} activeSection={activeSection} scrollToSection={scrollToSection}>
      <IntroAboutSection/>
      <OurOValuesSection/>
      <OurOriginsSection/>
      <OurInformationTeamSection/>
      <TeamSection/>
      <Footer />
    </SectionLayout>
  );
}


