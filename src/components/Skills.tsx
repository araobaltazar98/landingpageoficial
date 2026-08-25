import Reveal from "@/components/Reveal";
import Badge from "@/components/Badge";
import { skillGroups } from "@/data/content";

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-28 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Badge>Skills</Badge>
          <h2 className="mt-4 text-balance text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            Ferramentas e competências
          </h2>
          <p className="mt-4 max-w-xl text-balance text-muted-foreground">
            O arsenal técnico por trás dos resultados: aquisição paga,
            mensuração de dados e automação, tudo operando junto.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const isLast = i === skillGroups.length - 1;
            return (
              <Reveal
                key={group.category}
                delay={i * 0.06}
                className={`bg-surface p-8 transition-all duration-300 hover:bg-[#10141b] hover:shadow-[inset_0_0_0_1px_rgba(59,130,246,0.35)] ${isLast ? "sm:col-span-2 lg:col-span-1" : ""}`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">
                    {group.category}
                  </h3>
                </div>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  {group.subtitle}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border px-3 py-1 text-xs text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
