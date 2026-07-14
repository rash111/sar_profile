import React from "react";
import { motion } from "motion/react";

interface NeonCardProps {
  key?: string | number;
  id?: string;
  children: React.ReactNode;
  color?: "cyan" | "purple" | "green" | "pink" | "orange";
  className?: string;
  glowOnHover?: boolean;
  onClick?: () => void;
  delay?: number;
}

export default function NeonCard({
  id,
  children,
  color = "purple",
  className = "",
  glowOnHover = true,
  onClick,
  delay = 0,
}: NeonCardProps) {
  const colorMap = {
    purple: {
      border: "border-neon-purple/20 hover:border-neon-purple/50",
      glow: "border-glow-purple",
      text: "text-neon-purple",
      bg: "rgba(217, 70, 239, 0.02)",
      line: "bg-neon-purple",
    },
    cyan: {
      border: "border-neon-cyan/20 hover:border-neon-cyan/50",
      glow: "border-glow-cyan",
      text: "text-neon-cyan",
      bg: "rgba(6, 182, 212, 0.02)",
      line: "bg-neon-cyan",
    },
    green: {
      border: "border-neon-green/20 hover:border-neon-green/50",
      glow: "border-glow-green",
      text: "text-neon-green",
      bg: "rgba(0, 255, 65, 0.02)",
      line: "bg-neon-green",
    },
    pink: {
      border: "border-neon-pink/20 hover:border-neon-pink/50",
      glow: "border-glow-pink",
      text: "text-neon-pink",
      bg: "rgba(236, 72, 153, 0.02)",
      line: "bg-neon-pink",
    },
    orange: {
      border: "border-neon-orange/20 hover:border-neon-orange/50",
      glow: "border-glow-pink", 
      text: "text-neon-orange",
      bg: "rgba(249, 115, 22, 0.02)",
      line: "bg-neon-orange",
    },
  };

  const selected = colorMap[color];

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      whileHover={glowOnHover ? { y: -3, transition: { duration: 0.2 } } : undefined}
      onClick={onClick}
      className={`relative rounded-xl border bg-cosmic-card p-6 backdrop-blur-md transition-all duration-300 ${
        selected.border
      } ${glowOnHover ? "hover:shadow-lg " + selected.glow : ""} ${
        onClick ? "cursor-pointer" : ""
      } ${className}`}
      style={{
        background: `linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)`,
      }}
    >
      {/* Visual Tech Accent: Small glowing neon line at the top-left */}
      <div className={`absolute top-0 left-6 h-[2px] w-12 rounded-full ${selected.line} opacity-80`} />
      
      {/* Visual Tech Accent: Small bottom corner visual indicator */}
      <div className="absolute bottom-1 right-2 font-mono text-[9px] text-zinc-400 select-none tracking-widest">
        SRTH_0x{id ? id.slice(-2) : "D3"}
      </div>

      {children}
    </motion.div>
  );
}
