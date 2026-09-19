import { Check } from "lucide-react";
import Reveal from "@/components/Reveal";
import Badge from "@/components/Badge";
import LeadFormButton from "@/components/LeadFormButton";
import { offer } from "@/data/content";

export default function Offer() {
  return (
    <section id="oferta" className="px-6 py-28 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Badge>{offer.kicker}</Badge>
          <h2 className="mt-4 max-w-2xl text-balance text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            {offer.heading}
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {offer.deliverables.map((item, i) => (
            <Reveal key={item} delay={0.04 + i * 0.04}>
              <div className="flex items-start gap-3 rounded-xl border border-border bg-surface p-4">
                <Check
                  size={18}
                  className="mt-0.5 shrink-0 text-accent"
                />
                <span className="text-sm leading-relaxed text-foreground">
                  {item}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.5}>
          <div className="mt-10">
            <LeadFormButton
              location="offer"
              className="group relative inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-all duration-300 hover:scale-[1.06] hover:shadow-lg hover:shadow-accent/40"
            >
              {offer.ctaLabel}
            </LeadFormButton>
            <p className="mt-4 max-w-md text-balance text-sm text-muted-foreground">
              {offer.ctaMicrocopy}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
