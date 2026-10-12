import Reveal from "@/components/Reveal";
import { faq } from "@/data/content";
import { containerClass, headingClass, sectionClass } from "@/components/styles";

export default function FAQ() {
  return (
    <section id="faq" className={`${sectionClass} pt-0 lg:pt-0`}>
      <div className={`${containerClass} border-t border-line pt-24 lg:pt-28`}>
        <Reveal>
          <h2 className={headingClass}>{faq.heading}</h2>
        </Reveal>

        <dl className="mt-12 max-w-3xl divide-y divide-line border-y border-line">
          {faq.items.map((item, i) => (
            <Reveal key={item.question} delay={i * 0.05}>
              <div className="py-6">
                <dt className="font-serif text-lg font-medium text-ink sm:text-xl">
                  {item.question}
                </dt>
                <dd className="mt-2 leading-relaxed text-graphite sm:text-lg">
                  {item.answer}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
