import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Reframe from "@/components/Reframe";
import Method from "@/components/Method";
import Offer from "@/components/Offer";
import Transformation from "@/components/Transformation";
import Audience from "@/components/Audience";
import Projects from "@/components/Projects";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
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
        <Reframe />
        <Method />
        <Offer />
        <Transformation />
        <Audience />
        <Projects />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <LeadFormModal />
    </LeadFormProvider>
  );
}
