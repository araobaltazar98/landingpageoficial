import Reveal from "@/components/Reveal";
import Badge from "@/components/Badge";
import { method } from "@/data/content";

export default function Method() {
  return (
    <section id="metodo" className="px-6 py-28 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Badge>{method.kicker}</Badge>
          <h2 className="mt-4 max-w-2xl text-balance text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            {method.heading}
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {method.steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08}>
              <div className="group h-full rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/10">
                <span className="text-xs font-medium tracking-wide text-accent">
                  Etapa {i + 1}
                </span>
                <h3 className="mt-2 text-lg font-medium tracking-tight text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
