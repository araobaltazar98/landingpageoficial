import { WhatsappIcon } from "@/components/icons";
import Reveal from "@/components/Reveal";
import LeadFormButton from "@/components/LeadFormButton";
import Badge from "@/components/Badge";
import { finalCta } from "@/data/content";

export default function Contact() {
  return (
    <section id="contato" className="px-6 py-28 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-surface px-8 py-16 text-center sm:px-16">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-10"
              style={{
                background:
                  "radial-gradient(500px circle at 50% 0%, rgba(59,130,246,0.1), transparent 70%)",
              }}
            />
            <Badge>{finalCta.kicker}</Badge>
            <h2 className="mx-auto mt-4 max-w-2xl text-balance text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
              {finalCta.heading}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-balance text-muted-foreground">
              {finalCta.text}
            </p>

            <div className="mt-10 flex justify-center">
              <span className="relative inline-flex">
                <span
                  aria-hidden
                  className="absolute -inset-1 animate-ping rounded-full bg-accent/40"
                  style={{ animationDuration: "2.2s" }}
                />
                <LeadFormButton
                  location="contact"
                  className="group relative inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-all duration-300 hover:scale-[1.06] hover:shadow-lg hover:shadow-accent/40"
                >
                  <span className="transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110">
                    <WhatsappIcon size={16} />
                  </span>
                  {finalCta.ctaLabel}
                </LeadFormButton>
              </span>
            </div>

            <p className="mt-5 text-sm text-muted-foreground">
              {finalCta.privacyMicrocopy}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
