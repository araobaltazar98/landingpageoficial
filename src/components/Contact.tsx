import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import LeadFormButton from "@/components/LeadFormButton";
import { finalCta } from "@/data/content";
import { buttonPrimary } from "@/components/styles";

export default function Contact() {
  return (
    <section id="contato" className="px-6 pb-24 lg:px-8 lg:pb-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="rounded-lg border border-line px-6 py-16 text-center sm:px-16">
            <h2 className="mx-auto max-w-2xl text-balance font-serif text-3xl font-medium tracking-tight text-ink sm:text-4xl">
              {finalCta.heading}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-balance leading-relaxed text-graphite sm:text-lg">
              {finalCta.text}
            </p>

            <div className="mt-10 flex justify-center">
              <LeadFormButton
                location="contact"
                className={`group ${buttonPrimary}`}
              >
                {finalCta.ctaLabel}
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </LeadFormButton>
            </div>

            <p className="mt-4 text-sm text-graphite">{finalCta.responseNote}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
