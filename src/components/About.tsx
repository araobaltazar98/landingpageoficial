import Image from "next/image";
import Reveal from "@/components/Reveal";
import { about, profile } from "@/data/content";
import {
  bodyClass,
  containerClass,
  headingClass,
  sectionClass,
} from "@/components/styles";

export default function About() {
  return (
    <section id="sobre" className={`${sectionClass} pt-0 lg:pt-0`}>
      <div className={`${containerClass} border-t border-line pt-24 lg:pt-28`}>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[320px_1fr] lg:items-start lg:gap-16">
          <Reveal>
            <div className="mx-auto max-w-[320px] overflow-hidden rounded-lg border border-line lg:sticky lg:top-28">
              <Image
                src={profile.photo}
                alt={`Foto de ${profile.name}`}
                width={320}
                height={434}
                className="block h-auto w-full object-cover"
              />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <h2 className={headingClass}>{about.heading}</h2>
            </Reveal>
            <div className="mt-8 max-w-2xl space-y-6">
              {about.paragraphs.map((paragraph, i) => (
                <Reveal key={paragraph} delay={0.06 + i * 0.06}>
                  <p className={bodyClass}>{paragraph}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
