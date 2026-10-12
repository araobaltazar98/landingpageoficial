import { Check, X } from "lucide-react";
import Reveal from "@/components/Reveal";
import { audience } from "@/data/content";
import { containerClass, headingClass, sectionClass } from "@/components/styles";

export default function Audience() {
  return (
    <section id="para-quem" className={sectionClass}>
      <div className={containerClass}>
        <Reveal>
          <h2 className={headingClass}>{audience.heading}</h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          <Reveal delay={0.05}>
            <div className="h-full rounded-lg border border-line bg-white/40 p-8">
              <h3 className="font-serif text-xl font-medium text-ink">
                É para você se:
              </h3>
              <ul className="mt-6 space-y-4">
                {audience.fitFor.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check size={18} className="mt-1 shrink-0 text-graphite" />
                    <span className="leading-relaxed text-ink">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="h-full rounded-lg border border-line p-8">
              <h3 className="font-serif text-xl font-medium text-ink">
                Não é para você se:
              </h3>
              <ul className="mt-6 space-y-4">
                {audience.notFor.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <X size={18} className="mt-1 shrink-0 text-graphite" />
                    <span className="leading-relaxed text-graphite">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <p className="mt-8 max-w-3xl leading-relaxed text-graphite">
            <span className="font-medium text-ink">Especialidades: </span>
            {audience.specialties}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
