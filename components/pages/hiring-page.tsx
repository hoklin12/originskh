"use client";
import { useScroll, useTransform } from "framer-motion";
import { useNavigation } from "@/hooks/use-navigation";

import Footer from "@/components/ui/footer";
import IntroStudiosSection from "../sections/studio/intro-studio-section";
import SectionLayout from "../layouts/section-layout";
import IntroHiringSection from "../sections/hiring/intro-hiring-section";
import OurServiceHiringSection from "../sections/hiring/our-service-hiring-section";
import FindUrJobSection from "../sections/hiring/find-ur-job-section";
import OurNewsSection from "../sections/hiring/our-news-section";
import VideoSection from "../video-section";

export default function HiringPage() {
  const { activeSection, sections, addToSectionRefs, scrollToSection } = useNavigation();
  const { scrollY } = useScroll();
  const navBackground = useTransform(scrollY, [0, 100], ["rgb(255, 255, 255)", "rgba(255, 251, 251, 0.9)"]);

  return (
    <SectionLayout navBackground={navBackground} activeSection={activeSection} scrollToSection={scrollToSection}>
      <IntroHiringSection/>
      <OurServiceHiringSection/>
      <FindUrJobSection/>
      <OurNewsSection/>
      <Footer />
    </SectionLayout>
  );
}


