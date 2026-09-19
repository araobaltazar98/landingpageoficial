import Reveal from "@/components/Reveal";
import Badge from "@/components/Badge";
import { reframe } from "@/data/content";

export default function Reframe() {
  return (
    <section id="virada" className="px-6 py-28 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Badge>{reframe.kicker}</Badge>
          <h2 className="mt-4 max-w-2xl text-balance text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            {reframe.heading}
          </h2>
        </Reveal>

        <Reveal delay={0.06}>
          <p className="mt-6 max-w-2xl text-balance leading-relaxed text-muted-foreground">
            {reframe.intro}
          </p>
        </Reveal>

        <ul className="mt-6 max-w-2xl space-y-4">
          {reframe.bullets.map((bullet, i) => (
            <Reveal key={bullet} delay={0.06 + i * 0.06}>
              <li className="flex items-start gap-3 text-balance text-muted-foreground sm:text-lg">
                <span className="relative mt-2.5 flex h-1.5 w-1.5 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                </span>
                {bullet}
              </li>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.42}>
          <p className="mt-8 max-w-2xl text-balance text-xl font-medium tracking-tight text-foreground">
            {reframe.closing}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
