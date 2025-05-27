"use client";
import { useScroll, useTransform } from "framer-motion";
import { useNavigation } from "@/hooks/use-navigation";
import MainLayout from "@/components/layouts/main-layout";
import Footer from "@/components/ui/footer";
import IntroNewsSection from "../sections/news/intro-new-section";

export default function NewsPage() {
  const { activeSection, sections, addToSectionRefs, scrollToSection } = useNavigation();
  const { scrollY } = useScroll();
  const navBackground = useTransform(scrollY, [0, 100], ["rgb(255, 255, 255)", "rgba(255, 251, 251, 0.9)"]);

  return (
    <MainLayout navBackground={navBackground} activeSection={activeSection} scrollToSection={scrollToSection}>
      <IntroNewsSection/>

      {/* <ManifestoSection/>
      <JourneySection/>
      <GlobalPresenceSection/> */}
      <Footer />
    </MainLayout>
  );
}


