import Reveal from "@/components/Reveal";
import NeonCard from "@/components/NeonCard";
import NeonImage from "@/components/NeonImage";
import Badge from "@/components/Badge";
import AnimatedStat from "@/components/AnimatedStat";
import LeadFormButton from "@/components/LeadFormButton";
import { profile, stats } from "@/data/content";

export default function About() {
  return (
    <section id="sobre" className="px-6 py-28 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Badge>Sobre</Badge>
        </Reveal>

        {/* Layout com Foto + Texto */}
        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[320px_1fr] lg:items-start lg:gap-14">
          {/* Foto com efeito neon */}
          <Reveal delay={0.05}>
            <div className="flex items-center justify-center lg:sticky lg:top-28 lg:justify-start">
              <NeonImage
                src={profile.photo}
                alt={profile.name}
                width={320}
                height={434}
                glowColor="blue"
              />
            </div>
          </Reveal>

          {/* Texto em card neon */}
          <Reveal delay={0.1}>
            <NeonCard className="group flex flex-col p-8 sm:p-10">
              {/* Ícone decorativo no topo */}
              <div className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-accent/30 bg-accent/5 group-hover:bg-accent/10 group-hover:border-accent/50 transition-all duration-300">
                <div className="h-5 w-5 rounded-full bg-gradient-to-br from-accent to-accent/60" />
              </div>

              {/* Título */}
              <h3 className="text-xl font-medium text-foreground sm:text-2xl mb-4">
                Minha Trajetória
              </h3>

              {/* Bio com melhor tipografia */}
              <div className="space-y-4">
                {profile.bio.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-balance leading-relaxed text-muted-foreground sm:text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Divisor visual */}
              <div className="my-6 h-px bg-gradient-to-r from-accent/20 via-accent/50 to-transparent" />

              {/* Call-to-action */}
              <LeadFormButton className="group/cta flex items-center gap-2 text-sm text-accent transition-colors duration-300 hover:text-accent/80">
                <span>Conheça o Protocolo Agenda Cirúrgica</span>
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </LeadFormButton>
            </NeonCard>
          </Reveal>
        </div>

        {/* Stats com layout melhorado */}
        <div className="mt-20 border-t border-border pt-16">
          <Reveal delay={0.15}>
            <Badge>Números que Falam</Badge>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={0.2 + i * 0.08}>
                {/* Card neon para cada stat */}
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
          </div>
        </div>
      </div>
    </section>
  );
}
