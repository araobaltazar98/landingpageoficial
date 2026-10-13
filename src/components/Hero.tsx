"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { hero } from "@/data/content";
import LeadFormButton from "@/components/LeadFormButton";
import { buttonPrimary } from "@/components/styles";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section id="top" className="px-6 pb-20 pt-36 lg:px-8 lg:pb-24 lg:pt-44">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="text-sm font-medium tracking-wide text-signal"
        >
          {hero.eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="mt-6 max-w-4xl text-balance font-serif text-4xl font-medium leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl"
        >
          {hero.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
          className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-graphite sm:text-xl"
        >
          {hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease }}
          className="mt-10"
        >
          <LeadFormButton location="hero" className={`group ${buttonPrimary}`}>
            {hero.ctaLabel}
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </LeadFormButton>
        </motion.div>
      </div>
    </section>
  );
}
