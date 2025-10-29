import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import ApproachSection from "./components/ApproachSection";
import ServicesSection from "./components/ServicesSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <HomeSection />
      <AboutSection />
      <ServicesSection />
      <ApproachSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
