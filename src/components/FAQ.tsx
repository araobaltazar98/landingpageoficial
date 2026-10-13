import { Plus } from "lucide-react";
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

        <div className="mt-12 max-w-3xl divide-y divide-line border-y border-line">
          {faq.items.map((item, i) => (
            <Reveal key={item.question} delay={i * 0.05}>
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-serif text-lg font-medium text-ink transition-colors hover:text-graphite sm:text-xl [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <Plus
                    size={20}
                    aria-hidden
                    className="shrink-0 text-graphite transition-transform duration-200 group-open:rotate-45"
                  />
                </summary>
                <p className="-mt-2 pb-6 pr-10 leading-relaxed text-graphite sm:text-lg">
                  {item.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
