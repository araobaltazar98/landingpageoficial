import Reveal from "@/components/Reveal";
import { layers } from "@/data/content";
import { containerClass, headingClass, sectionClass } from "@/components/styles";

export default function Method() {
  return (
    <section id="sistema" className={`${sectionClass} pt-0 lg:pt-0`}>
      <div className={`${containerClass} border-t border-line pt-24 lg:pt-28`}>
        <Reveal>
          <h2 className={headingClass}>{layers.heading}</h2>
        </Reveal>

        <ol className="mt-12 border-t border-line">
          {layers.items.map((layer, i) => (
            <Reveal key={layer.title} delay={i * 0.06}>
              <li className="grid grid-cols-[3rem_1fr] gap-x-4 border-b border-line py-8 sm:grid-cols-[5rem_16rem_1fr] sm:gap-x-8">
                <span className="font-sans text-2xl font-semibold text-signal tabular-nums sm:text-3xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-xl font-medium tracking-tight text-ink sm:text-2xl">
                  {layer.title}
                </h3>
                <p className="col-start-2 mt-2 leading-relaxed text-graphite sm:col-start-3 sm:mt-0 sm:text-lg">
                  {layer.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
