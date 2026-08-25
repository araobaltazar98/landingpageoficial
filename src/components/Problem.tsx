import Reveal from "@/components/Reveal";
import Badge from "@/components/Badge";
import { problem } from "@/data/content";

export default function Problem() {
  return (
    <section id="problema" className="px-6 py-28 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Badge>{problem.kicker}</Badge>
          <h2 className="mt-4 max-w-2xl text-balance text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            {problem.heading}
          </h2>
        </Reveal>

        <ul className="mt-10 max-w-2xl space-y-4">
          {problem.bullets.map((bullet, i) => (
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

        <Reveal delay={0.3}>
          <p className="mt-8 max-w-2xl text-balance text-xl font-medium tracking-tight text-foreground">
            {problem.resultLine}
          </p>
        </Reveal>

        <Reveal delay={0.36}>
          <p className="mt-6 max-w-2xl text-balance leading-relaxed text-muted-foreground">
            {problem.bridgeLine}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
