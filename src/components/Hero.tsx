"use client";

import { motion } from "framer-motion";
import {
  WhatsappIcon,
  GoogleAdsIcon,
  MetaIcon,
  PinterestIcon,
  YoutubeIcon,
  TaboolaIcon,
} from "@/components/icons";
import { hero } from "@/data/content";
import LeadFormButton from "@/components/LeadFormButton";
import Badge from "@/components/Badge";

const channels = [
  { id: "google", Icon: GoogleAdsIcon, xPct: 0.6, yPct: 0.15 },
  { id: "meta", Icon: MetaIcon, xPct: 0.88, yPct: 0.28 },
  { id: "youtube", Icon: YoutubeIcon, xPct: 0.7, yPct: 0.55 },
  { id: "pinterest", Icon: PinterestIcon, xPct: 0.92, yPct: 0.76 },
  { id: "taboola", Icon: TaboolaIcon, xPct: 0.56, yPct: 0.88 },
];

function ChannelBadges() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 hidden overflow-hidden md:block"
    >
      {channels.map(({ id, Icon, xPct, yPct }, i) => (
        <motion.div
          key={id}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${xPct * 100}%`, top: `${yPct * 100}%` }}
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 4 + i * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-accent/20 bg-accent/[0.04] text-accent/60 shadow-[0_0_18px_rgba(59,130,246,0.12)] backdrop-blur-[1px]">
            <Icon size={16} />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24 lg:px-8"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(600px circle at 50% 0%, rgba(59,130,246,0.12), transparent 70%)",
        }}
      />
      <ChannelBadges />

      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <Badge>{hero.eyebrow}</Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-balance text-4xl font-medium tracking-tight text-foreground sm:text-6xl lg:text-7xl"
        >
          {hero.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-2xl text-balance text-lg text-muted-foreground sm:text-xl"
        >
          {hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10"
        >
          <span className="relative inline-flex">
            <span
              aria-hidden
              className="absolute -inset-1 animate-ping rounded-full bg-accent/40"
              style={{ animationDuration: "2.2s" }}
            />
            <LeadFormButton
              location="hero"
              className="group relative inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-all duration-300 hover:scale-[1.06] hover:shadow-lg hover:shadow-accent/40"
            >
              <span className="transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110">
                <WhatsappIcon size={16} />
              </span>
              {hero.ctaLabel}
            </LeadFormButton>
          </span>
          <p className="mt-4 max-w-md text-balance text-sm text-muted-foreground">
            {hero.ctaMicrocopy}
          </p>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col gap-x-6 gap-y-2 text-xs text-muted-foreground sm:flex-row sm:flex-wrap"
        >
          {hero.credibilityBar.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="h-1 w-1 shrink-0 rounded-full bg-accent" />
              {item}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
