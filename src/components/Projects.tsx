import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import Badge from "@/components/Badge";
import { projects } from "@/data/content";

export default function Projects() {
  return (
    <section id="resultados" className="px-6 py-28 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Badge>Resultados</Badge>
          <h2 className="mt-4 text-balance text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            Resultados que já entreguei
          </h2>
        </Reveal>

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
