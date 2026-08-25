"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

function parseValue(value: string) {
  const match = value.match(/^([^\d]*)(\d+)([^\d]*)$/);
  if (!match) return { prefix: "", number: 0, suffix: value };
  const [, prefix, number, suffix] = match;
  return { prefix, number: parseInt(number, 10), suffix };
}

export default function AnimatedStat({ value }: { value: string }) {
  const { prefix, number, suffix } = parseValue(value);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, number, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, number]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
