import Image from "next/image";
import Navigation from "./components/navbar";
import HeroSection from "./components/Hero";
import Footer from "./components/Footer";
import AboutSection from "./components/Aboutme";
import SkillsSection from "./components/Skills";
import ExperienceTimeline from "./components/Experience";
import ProjectsGrid from "./components/Projects";
import EducationSection from "./components/Education";
import CertificationsSection from "./components/Certificates";
import ContactSection from "./components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <SkillsSection />
      <ExperienceTimeline />
      <ProjectsGrid />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
