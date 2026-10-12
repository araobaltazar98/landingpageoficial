import Reveal from "@/components/Reveal";
import { problem } from "@/data/content";
import {
  bodyClass,
  containerClass,
  headingClass,
  sectionClass,
} from "@/components/styles";

export default function Problem() {
  return (
    <section id="problema" className={sectionClass}>
      <div className={containerClass}>
        <Reveal>
          <h2 className={headingClass}>{problem.heading}</h2>
        </Reveal>

        <div className="mt-8 max-w-2xl space-y-6">
          <Reveal delay={0.06}>
            <p className={bodyClass}>{problem.intro}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className={bodyClass}>{problem.bridge}</p>
          </Reveal>
        </div>

        <ul className="mt-8 max-w-2xl divide-y divide-line border-y border-line">
          {problem.bullets.map((bullet, i) => (
            <Reveal key={bullet} delay={0.12 + i * 0.05}>
              <li className="flex items-start gap-4 py-4 text-ink sm:text-lg">
                <span
                  aria-hidden
                  className="mt-[0.7em] h-px w-4 shrink-0 bg-graphite"
                />
                {bullet}
              </li>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.35}>
          <p className="mt-8 max-w-2xl text-balance font-serif text-2xl font-medium tracking-tight text-ink">
            {problem.closing}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
