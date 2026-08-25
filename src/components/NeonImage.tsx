"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface NeonImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  delay?: number;
  glowColor?: "blue" | "cyan" | "purple";
}

export default function NeonImage({
  src,
  alt,
  width = 300,
  height = 400,
  delay = 0,
  glowColor = "blue",
}: NeonImageProps) {
  // Mapeamento de cores para efeito neon
  const glowStyles = {
    blue: {
      border: "border-accent",
      shadow: "shadow-2xl shadow-accent/40",
      innerGlow: "rgba(59,130,246,0.2)",
    },
    cyan: {
      border: "border-cyan-500",
      shadow: "shadow-2xl shadow-cyan-500/40",
      innerGlow: "rgba(34,211,238,0.2)",
    },
    purple: {
      border: "border-purple-500",
      shadow: "shadow-2xl shadow-purple-500/40",
      innerGlow: "rgba(168,85,247,0.2)",
    },
  };

  const selectedGlow = glowStyles[glowColor];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: "-100px" }}
      className={`group relative inline-block rounded-lg border-2 ${selectedGlow.border} ${selectedGlow.shadow} transition-all duration-300 hover:shadow-2xl`}
    >
      {/* Efeito de brilho ao redor */}
      <div
        className="pointer-events-none absolute -inset-2 rounded-lg opacity-0 blur transition-opacity duration-300 group-hover:opacity-100 -z-10"
        style={{
          background: `radial-gradient(circle, ${selectedGlow.innerGlow}, transparent 80%)`,
        }}
      />

      {/* Efeito de brilho superior */}
      <div
        className="pointer-events-none absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            glowColor === "blue"
              ? "radial-gradient(circle at 50% -20%, rgba(59,130,246,0.15), transparent 50%)"
              : glowColor === "cyan"
                ? "radial-gradient(circle at 50% -20%, rgba(34,211,238,0.15), transparent 50%)"
                : "radial-gradient(circle at 50% -20%, rgba(168,85,247,0.15), transparent 50%)",
        }}
      />

      {/* Imagem */}
      <div className="relative overflow-hidden rounded-md">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="block h-auto w-full object-cover transition-transform duration-300 group-hover:scale-105"
          priority
        />
      </div>
    </motion.div>
  );
}
