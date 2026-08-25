import { Check, X } from "lucide-react";
import Reveal from "@/components/Reveal";
import Badge from "@/components/Badge";
import { audience } from "@/data/content";

export default function Audience() {
  return (
    <section id="para-quem" className="px-6 py-28 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Badge>{audience.kicker}</Badge>
          <h2 className="mt-4 max-w-2xl text-balance text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            {audience.heading}
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          <Reveal delay={0.05}>
            <div className="group h-full rounded-2xl border border-border bg-surface p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/10">
              <h3 className="text-sm font-medium tracking-wide text-accent">
                Para quem é
              </h3>
              <ul className="mt-5 space-y-4">
                {audience.fitFor.map((item, i) => (
                  <Reveal key={item} delay={0.15 + i * 0.08}>
                    <li className="flex items-start gap-3">
                      <Check
                        size={18}
                        className="mt-0.5 shrink-0 text-accent transition-transform duration-300 group-hover:scale-110"
                      />
                      <span className="text-sm leading-relaxed text-foreground sm:text-base">
                        {item}
                      </span>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="group h-full rounded-2xl border border-border bg-surface p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-muted hover:shadow-2xl hover:shadow-black/20">
              <h3 className="text-sm font-medium tracking-wide text-muted-foreground">
                Para quem não é
              </h3>
              <ul className="mt-5 space-y-4">
                {audience.notFor.map((item, i) => (
                  <Reveal key={item} delay={0.2 + i * 0.08}>
                    <li className="flex items-start gap-3">
                      <X
                        size={18}
                        className="mt-0.5 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:scale-110"
                      />
                      <span className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                        {item}
                      </span>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
