import Reveal from "@/components/Reveal";
import { process } from "@/data/content";
import { containerClass, headingClass, sectionClass } from "@/components/styles";

export default function Process() {
  return (
    <section id="como-funciona" className={`${sectionClass} pt-0 lg:pt-0`}>
      <div className={`${containerClass} border-t border-line pt-24 lg:pt-28`}>
        <Reveal>
          <h2 className={headingClass}>{process.heading}</h2>
        </Reveal>

        <ol className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {process.steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.06}>
              <li className="h-full border-t-2 border-ink pt-5">
                <span className="text-sm font-semibold text-graphite tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-serif text-xl font-medium tracking-tight text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 leading-relaxed text-graphite">
                  {step.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
