import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import NeonCard from "@/components/NeonCard";
import AnimatedStat from "@/components/AnimatedStat";
import Badge from "@/components/Badge";
import { projects, proof, stats, experienceHighlights } from "@/data/content";

export default function Projects() {
  return (
    <section id="prova" className="px-6 py-28 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Badge>{proof.kicker}</Badge>
          <h2 className="mt-4 text-balance text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            {proof.heading}
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={0.05 + i * 0.06}>
              <NeonCard className="p-8 text-center sm:p-10" glowColor="blue">
                <div className="text-4xl font-medium tracking-tight text-accent sm:text-5xl mb-3">
                  <AnimatedStat value={stat.value} />
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </NeonCard>
            </Reveal>
          ))}
          {experienceHighlights.map((text, i) => (
            <Reveal key={text} delay={0.11 + i * 0.06}>
              <NeonCard
                className="flex h-full flex-col items-center justify-center p-8 text-center sm:p-10"
                glowColor="blue"
              >
                <p className="text-sm leading-relaxed text-foreground">
                  {text}
                </p>
              </NeonCard>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, i) => {
            const cardClass =
              "group block h-full rounded-2xl border border-border bg-surface p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/10";
            const cardContent = (
              <>
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-medium tracking-tight text-foreground">
                    {project.title}
                  </h3>
                  {project.link && (
                    <ArrowUpRight
                      size={20}
                      className="shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
                    />
                  )}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              </>
            );

            return (
              <Reveal key={project.title} delay={i * 0.08}>
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cardClass}
                  >
                    {cardContent}
                  </a>
                ) : (
                  <div className={cardClass}>{cardContent}</div>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
