import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import About from "@/components/About";
import Audience from "@/components/Audience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { LeadFormProvider } from "@/components/LeadFormContext";
import LeadFormModal from "@/components/LeadFormModal";
import NetworkField from "@/components/NetworkField";

export default function Home() {
  return (
    <LeadFormProvider>
      <NetworkField />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Problem />
        <About />
        <Audience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <LeadFormModal />
    </LeadFormProvider>
  );
}
