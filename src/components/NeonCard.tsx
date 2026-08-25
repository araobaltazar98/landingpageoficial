"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface NeonCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  glowColor?: "blue" | "cyan" | "purple";
}

export default function NeonCard({
  children,
  className = "",
  delay = 0,
  glowColor = "blue",
}: NeonCardProps) {
  // Mapeamento de cores para efeito neon
  const glowStyles = {
    blue: {
      border: "border-accent",
      shadow: "shadow-lg shadow-accent/30",
      glow: "after:shadow-accent/40",
    },
    cyan: {
      border: "border-cyan-500",
      shadow: "shadow-lg shadow-cyan-500/30",
      glow: "after:shadow-cyan-500/40",
    },
    purple: {
      border: "border-purple-500",
      shadow: "shadow-lg shadow-purple-500/30",
      glow: "after:shadow-purple-500/40",
    },
  };

  const selectedGlow = glowStyles[glowColor];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: "-100px" }}
      className={`relative rounded-lg border ${selectedGlow.border} bg-gradient-to-br from-surface to-background ${selectedGlow.shadow} backdrop-blur-sm transition-all duration-300 hover:${selectedGlow.shadow.replace("shadow", "hover:shadow")} hover:border-accent/80 ${className}`}
    >
      {/* Efeito de brilho interno sutil */}
      <div
        className="pointer-events-none absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            glowColor === "blue"
              ? "radial-gradient(circle at 50% 0%, rgba(59,130,246,0.1), transparent 70%)"
              : glowColor === "cyan"
                ? "radial-gradient(circle at 50% 0%, rgba(34,211,238,0.1), transparent 70%)"
                : "radial-gradient(circle at 50% 0%, rgba(168,85,247,0.1), transparent 70%)",
        }}
      />

      {/* Conteúdo */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
