import Container from "@/components/container";
import HeroSection from "@/components/hero-section/hero-section";
import ProjectSection from "@/components/project-section/project-section";
import AboutMeSection from "@/components/about-section/about-me-section";
import SkillsSection from "@/components/skills-section/skills-section";
import ContactsSection from "@/components/contacts-section/contacts-section";
import CertificatesSection from "@/components/certificates-section/certificates-section";

export default function Home() {
  return (
    <Container className="flex flex-col gap-20  ">
      <HeroSection />
      <ProjectSection />
      <AboutMeSection />
      <SkillsSection />
      <CertificatesSection />
      <ContactsSection />
    </Container>
  );
}

