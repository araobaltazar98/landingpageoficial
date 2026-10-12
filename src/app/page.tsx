import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import Problem from "@/components/Problem";
import Reframe from "@/components/Reframe";
import Method from "@/components/Method";
import Results from "@/components/Results";
import Audience from "@/components/Audience";
import Process from "@/components/Process";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { LeadFormProvider } from "@/components/LeadFormContext";
import LeadFormModal from "@/components/LeadFormModal";

export default function Home() {
  return (
    <LeadFormProvider>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ClientLogos />
        <Problem />
        <Reframe />
        <Method />
        <Results />
        <Audience />
        <Process />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <LeadFormModal />
    </LeadFormProvider>
  );
}
