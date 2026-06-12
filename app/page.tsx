import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Experience from "@/components/Experience";
import CertificationsAwards from "@/components/CertificationsAwards";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <main className="min-h-screen antialiased overflow-x-hidden relative">
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Experience />
      <CertificationsAwards />
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
