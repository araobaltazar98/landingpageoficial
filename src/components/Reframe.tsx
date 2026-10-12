import Reveal from "@/components/Reveal";
import { reframe } from "@/data/content";
import {
  bodyClass,
  containerClass,
  headingClass,
  sectionClass,
} from "@/components/styles";

export default function Reframe() {
  return (
    <section id="virada" className={`${sectionClass} pt-0 lg:pt-0`}>
      <div className={`${containerClass} border-t border-line pt-24 lg:pt-28`}>
        <Reveal>
          <h2 className={headingClass}>{reframe.heading}</h2>
        </Reveal>

        <div className="mt-8 max-w-2xl space-y-6">
          {reframe.paragraphs.map((paragraph, i) => (
            <Reveal key={paragraph} delay={0.06 + i * 0.06}>
              <p className={bodyClass}>{paragraph}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
