"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";
import {
  Bot,
  ChartLine,
  Check,
  Megaphone,
  MousePointerClick,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import { layers } from "@/data/content";
import { containerClass, headingClass, sectionClass } from "@/components/styles";

// Mesma ordem de `layers.items`.
const icons: LucideIcon[] = [Megaphone, MousePointerClick, UsersRound, ChartLine, Bot];

/**
 * Linha do tempo das cinco camadas: o trilho se preenche em Sinal conforme a
 * rolagem e cada camada "acende" ao chegar ao centro da tela. No desktop, um
 * painel fixo ao lado mostra o sistema empilhado, do clique à cadeira.
 * Só transform/opacity são animados, para manter a página leve.
 */
export default function Method() {
  const listRef = useRef<HTMLOListElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 65%", "end 55%"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section id="sistema" className={`${sectionClass} pt-0 lg:pt-0`}>
      <div className={`${containerClass} border-t border-line pt-24 lg:pt-28`}>
        <Reveal>
          <h2 className={headingClass}>{layers.heading}</h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-16 lg:grid-cols-[minmax(0,1fr)_20rem]">
          <ol ref={listRef} className="relative">
            {/* Trilho base e progresso */}
            <span
              aria-hidden
              className="absolute bottom-6 left-6 top-6 w-px -translate-x-1/2 bg-line"
            />
            <motion.span
              aria-hidden
              style={{ scaleY: progress }}
              className="absolute bottom-6 left-6 top-6 w-0.5 origin-top -translate-x-1/2 bg-signal"
            />

            {layers.items.map((layer, i) => (
              <LayerItem
                key={layer.title}
                index={i}
                title={layer.title}
                description={layer.description}
                Icon={icons[i]}
                reached={i <= active}
                onActive={setActive}
              />
            ))}
          </ol>

          <SystemPanel active={active} />
        </div>
      </div>
    </section>
  );
}

function LayerItem({
  index,
  title,
  description,
  Icon,
  reached,
  onActive,
}: {
  index: number;
  title: string;
  description: string;
  Icon: LucideIcon;
  reached: boolean;
  onActive: (index: number) => void;
}) {
  const ref = useRef<HTMLLIElement>(null);
  const inView = useInView(ref, { margin: "-45% 0px -50% 0px" });

  useEffect(() => {
    if (inView) onActive(index);
  }, [inView, index, onActive]);

  return (
    <li
      ref={ref}
      className="relative grid grid-cols-[3rem_1fr] gap-x-6 pb-14 last:pb-0 sm:gap-x-8"
    >
      <span
        aria-hidden
        className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full border transition-colors duration-500 ${
          reached
            ? "border-ink bg-ink text-paper"
            : "border-line bg-paper text-graphite"
        }`}
      >
        <Icon size={20} strokeWidth={1.75} />
      </span>

      <Reveal>
        <span className="text-sm font-semibold text-signal tabular-nums">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="mt-1 font-serif text-2xl font-medium tracking-tight text-ink">
          {title}
        </h3>
        <p className="mt-3 max-w-xl leading-relaxed text-graphite sm:text-lg">
          {description}
        </p>
      </Reveal>
    </li>
  );
}

function SystemPanel({ active }: { active: number }) {
  const reduceMotion = useReducedMotion();

  return (
    <aside aria-hidden className="hidden lg:block">
      <div className="sticky top-28 rounded-lg border border-line bg-white/40 p-6">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-graphite">
          Do clique à cadeira
        </p>

        <div className="relative mt-6 pl-6">
          {/* Fluxo contínuo: um ponto percorre o sistema de cima a baixo */}
          <span className="absolute bottom-2 left-[5px] top-2 w-px bg-line" />
          {!reduceMotion && (
            <motion.span
              className="absolute left-[2px] h-[7px] w-[7px] rounded-full bg-signal"
              initial={{ top: "0%", opacity: 0 }}
              animate={{ top: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
              transition={{ duration: 3.2, ease: "easeInOut", repeat: Infinity }}
            />
          )}

          <ul className="space-y-2">
            {layers.items.map((layer, i) => {
              const Icon = icons[i];
              const isActive = i === active;
              return (
                <li
                  key={layer.title}
                  className={`flex items-center gap-3 rounded-md border px-4 py-3 text-sm transition-all duration-500 ${
                    isActive
                      ? "translate-x-1 border-ink bg-ink text-paper"
                      : i < active
                        ? "border-line bg-paper text-ink"
                        : "border-line bg-paper text-graphite"
                  }`}
                >
                  <Icon size={16} strokeWidth={1.75} className="shrink-0" />
                  <span className="font-medium">{layer.title}</span>
                  <span
                    className={`ml-auto text-xs tabular-nums ${
                      isActive ? "text-signal-light" : "text-graphite"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </li>
              );
            })}
          </ul>

          <div className="mt-4 flex items-center gap-3 border-t border-line pt-4 text-sm font-medium text-ink">
            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-ink">
              <Check size={14} strokeWidth={2.25} />
            </span>
            Paciente rastreado até o faturamento
          </div>
        </div>
      </div>
    </aside>
  );
}
