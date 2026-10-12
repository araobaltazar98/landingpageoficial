"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

function parseValue(value: string) {
  const match = value.match(/^([^\d]*)(\d+)([^\d]*)$/);
  if (!match) return { prefix: "", number: 0, suffix: value };
  const [, prefix, number, suffix] = match;
  return { prefix, number: parseInt(number, 10), suffix };
}

/**
 * The real value is always in the server-rendered HTML, so crawlers, link
 * previews and slow connections never see "0". The count-up only runs on the
 * client: once hydrated, an off-screen stat is reset to 0 and animated up to
 * its value when it scrolls into view.
 */
export default function AnimatedStat({ value }: { value: string }) {
  const { prefix, number, suffix } = parseValue(value);
  const ref = useRef<HTMLSpanElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);
  const armed = useRef(false);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();

  // On mount: arm the animation only if the stat starts off-screen.
  useEffect(() => {
    if (reduceMotion || inView || !numberRef.current) return;
    numberRef.current.textContent = "0";
    armed.current = true;
    // Run once on mount.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!armed.current || !inView) return;
    const controls = animate(0, number, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        if (numberRef.current) numberRef.current.textContent = String(Math.round(v));
      },
    });
    return () => controls.stop();
  }, [inView, number]);

  return (
    <span ref={ref}>
      {prefix}
      <span ref={numberRef}>{number}</span>
      {suffix}
    </span>
  );
}
