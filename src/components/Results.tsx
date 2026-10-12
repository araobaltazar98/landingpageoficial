import Reveal from "@/components/Reveal";
import { results } from "@/data/content";

/** Única faixa em fundo Tinta da página: o ponto de contraste no meio da leitura. */
export default function Results() {
  return (
    <section id="resultados" className="bg-ink px-6 py-24 text-paper lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="max-w-3xl text-balance font-serif text-3xl font-medium tracking-tight text-paper sm:text-4xl">
            {results.heading}
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {results.cases.map((item, i) => (
            <Reveal key={item.client} delay={0.08 + i * 0.08}>
              <article className="border-t border-paper/20 pt-6">
                <h3 className="text-sm font-medium tracking-wide text-paper/80">
                  {item.client}
                </h3>
                <dl className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  {item.stats.map((stat) => (
                    <div key={stat.label}>
                      <dt className="sr-only">{stat.label}</dt>
                      <dd>
                        <span className="block whitespace-nowrap font-sans text-4xl font-semibold tracking-tight text-signal-light tabular-nums">
                          {stat.value}
                        </span>
                        <span className="mt-2 block leading-relaxed text-paper">
                          {stat.label}
                        </span>
                      </dd>
                    </div>
                  ))}
                </dl>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
