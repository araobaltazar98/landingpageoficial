"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
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

const STEP_MS = 5000;

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * As cinco camadas em formato compacto: lista vertical em que só a camada
 * ativa mostra a descrição. Avança sozinha enquanto a seção está na tela
 * (pausa ao passar o mouse ou depois de um clique). No desktop, um painel ao
 * lado ilustra a posição da camada no caminho do clique à cadeira.
 */
export default function Method() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { margin: "-20% 0px -20% 0px" });
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [userPicked, setUserPicked] = useState(false);

  const autoplay = inView && !hovering && !userPicked && !reduceMotion;

  useEffect(() => {
    if (!autoplay) return;
    const id = window.setTimeout(
      () => setActive((i) => (i + 1) % layers.items.length),
      STEP_MS,
    );
    return () => window.clearTimeout(id);
  }, [autoplay, active]);

  return (
    <section id="sistema" className={`${sectionClass} pt-0 lg:pt-0`}>
      <div
        ref={sectionRef}
        className={`${containerClass} border-t border-line pt-24 lg:pt-28`}
      >
        <Reveal>
          <h2 className={headingClass}>{layers.heading}</h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_24rem] lg:gap-16">
          <Reveal>
            <ul
              className="divide-y divide-line border-y border-line"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              {layers.items.map((layer, i) => {
                const Icon = icons[i];
                const isOpen = i === active;
                return (
                  <li key={layer.title} className="relative">
                    <button
                      type="button"
                      id={`camada-${i}`}
                      aria-expanded={isOpen}
                      aria-controls={`camada-${i}-texto`}
                      onClick={() => {
                        setActive(i);
                        setUserPicked(true);
                      }}
                      className="flex w-full items-center gap-4 py-5 text-left"
                    >
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
                          isOpen
                            ? "border-ink bg-ink text-paper"
                            : "border-line bg-paper text-graphite"
                        }`}
                      >
                        <Icon size={18} strokeWidth={1.75} />
                      </span>
                      <span className="text-sm font-semibold text-signal tabular-nums">
                        {pad(i + 1)}
                      </span>
                      <span
                        className={`font-serif text-xl font-medium tracking-tight transition-colors sm:text-2xl ${
                          isOpen ? "text-ink" : "text-graphite hover:text-ink"
                        }`}
                      >
                        {layer.title}
                      </span>
                    </button>

                    <div
                      id={`camada-${i}-texto`}
                      role="region"
                      aria-labelledby={`camada-${i}`}
                      aria-hidden={!isOpen}
                      className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="pb-6 pl-14 leading-relaxed text-graphite sm:text-lg">
                          {layer.description}
                        </p>
                      </div>
                    </div>

                    {/* Progresso até a próxima camada */}
                    {isOpen && autoplay && (
                      <motion.span
                        key={`progress-${active}`}
                        aria-hidden
                        className="absolute -bottom-px left-0 h-0.5 w-full origin-left bg-signal"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: STEP_MS / 1000, ease: "linear" }}
                      />
                    )}
                  </li>
                );
              })}
            </ul>
          </Reveal>

          <SystemPanel active={active} />
        </div>
      </div>
    </section>
  );
}

function SystemPanel({ active }: { active: number }) {
  const reduceMotion = useReducedMotion();
  const total = layers.items.length;
  const Icon = icons[active];

  return (
    <aside aria-hidden className="hidden lg:block">
      <div className="rounded-lg border border-line bg-white/40 p-8">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-graphite">
          Do clique à cadeira
        </p>

        <motion.div
          key={active}
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 flex items-center gap-5"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-ink text-paper">
            <Icon size={28} strokeWidth={1.5} />
          </span>
          <div>
            <p className="text-sm text-graphite tabular-nums">
              Camada <span className="font-semibold text-signal">{pad(active + 1)}</span>{" "}
              de {pad(total)}
            </p>
            <p className="mt-1 font-serif text-2xl font-medium tracking-tight text-ink">
              {layers.items[active].title}
            </p>
          </div>
        </motion.div>

        {/* Caminho: cada segmento é uma camada; o ponto marca onde estamos */}
        <div className="relative mt-10">
          <div className="grid grid-cols-5 gap-1.5">
            {layers.items.map((layer, i) => (
              <span
                key={layer.title}
                className={`h-1.5 rounded-full transition-colors duration-500 ${
                  i <= active ? "bg-ink" : "bg-line"
                }`}
              />
            ))}
          </div>
          <motion.span
            className="absolute -top-[3px] h-3 w-3 -translate-x-1/2 rounded-full border-2 border-paper bg-signal"
            animate={{ left: `${((active + 0.5) / total) * 100}%` }}
            transition={
              reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 160, damping: 22 }
            }
          />
          <div className="mt-3 flex justify-between text-xs text-graphite">
            <span>Anúncio</span>
            <span>Faturamento</span>
          </div>
        </div>

        <div className="mt-8 flex items-center gap-3 border-t border-line pt-6 text-sm font-medium text-ink">
          <span className="flex h-6 w-6 items-center justify-center rounded-full border border-ink">
            <Check size={14} strokeWidth={2.25} />
          </span>
          Paciente rastreado até o faturamento
        </div>
      </div>
    </aside>
  );
}
