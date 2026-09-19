import Reveal from "@/components/Reveal";
import Badge from "@/components/Badge";
import { faq } from "@/data/content";

export default function FAQ() {
  return (
    <section id="faq" className="px-6 py-28 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Badge>{faq.kicker}</Badge>
          <h2 className="mt-4 max-w-2xl text-balance text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            {faq.heading}
          </h2>
        </Reveal>

        <div className="mt-12 max-w-3xl divide-y divide-border border-t border-border">
          {faq.items.map((item, i) => (
            <Reveal key={item.question} delay={i * 0.06}>
              <div className="py-6">
                <h3 className="text-base font-medium text-foreground sm:text-lg">
                  {item.question}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {item.answer}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
