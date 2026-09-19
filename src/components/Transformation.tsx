import Reveal from "@/components/Reveal";
import Badge from "@/components/Badge";
import { transformation } from "@/data/content";

export default function Transformation() {
  return (
    <section id="transformacao" className="px-6 py-28 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Badge>{transformation.kicker}</Badge>
          <h2 className="mt-4 max-w-2xl text-balance text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            {transformation.heading}
          </h2>
          <p className="mt-4 max-w-xl text-balance text-muted-foreground">
            {transformation.intro}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap gap-2">
            {transformation.indicators.map((indicator) => (
              <span
                key={indicator}
                className="rounded-full border border-border bg-surface px-4 py-2 text-sm text-foreground"
              >
                {indicator}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-8 max-w-2xl text-balance leading-relaxed text-muted-foreground">
            {transformation.closing}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
