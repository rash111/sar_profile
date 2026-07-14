import React, { useState } from "react";
import { motion } from "motion/react";
import { SKILL_CATEGORIES } from "../data/portfolioData";
import { Hammer, Check, Sparkles, Database, ShieldCheck, Terminal } from "lucide-react";
import NeonCard from "./NeonCard";

export default function SkillsGrid() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const colors: ("cyan" | "purple" | "green" | "pink")[] = ["cyan", "purple", "green", "pink"];
  const icons = [Terminal, ShieldCheck, Database, Sparkles];

  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl px-6 md:px-12 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 font-mono text-[11px] tracking-wider text-neon-green uppercase">
            <Hammer className="h-3 w-3 text-neon-green animate-pulse" />
            <span><span className="text-neon-green font-bold mr-1">//</span> Multi-Disciplinary Expertise</span>
          </div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            Product & Engineering Toolkit
          </h2>
          <p className="text-sm md:text-base text-slate-700 font-medium max-w-2xl leading-relaxed">
            A comprehensive, battle-tested skillset bridging product strategy, advanced test engineering, technical execution, and next-generation AI prototyping.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SKILL_CATEGORIES.map((category, idx) => {
            const colors: ("green" | "cyan" | "purple" | "pink")[] = ["green", "cyan", "purple", "pink"];
            const color = colors[idx % colors.length];
            const Icon = icons[idx % icons.length];
            
            const colorClassMap = {
              green: {
                bg: "bg-neon-green/10",
                text: "text-neon-green",
                border: "border-neon-green/20",
              },
              cyan: {
                bg: "bg-neon-cyan/10",
                text: "text-neon-cyan",
                border: "border-neon-cyan/20",
              },
              purple: {
                bg: "bg-neon-purple/10",
                text: "text-neon-purple",
                border: "border-neon-purple/20",
              },
              pink: {
                bg: "bg-neon-pink/10",
                text: "text-neon-pink",
                border: "border-neon-pink/20",
              },
            };
            const themeClass = colorClassMap[color];

            return (
              <div
                key={category.id}
                onMouseEnter={() => setActiveCategory(category.id)}
                onMouseLeave={() => setActiveCategory(null)}
                className="h-full"
              >
                <NeonCard
                  color={color as any}
                  glowOnHover={true}
                  id={category.id}
                  className="h-full flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-center gap-3 border-b border-cosmic-border/60 pb-3">
                      <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${themeClass.bg} ${themeClass.text}`}>
                        <Icon className="h-4.5 w-4.5" />
                      </div>
                      <h3 className="font-display font-extrabold text-slate-900 text-base tracking-tight leading-none">
                        {category.name}
                      </h3>
                    </div>

                    {/* Skill Items list */}
                    <ul className="space-y-2.5">
                      {category.skills.map((skill) => (
                        <li
                          key={skill}
                          className="flex items-center gap-2.5 text-sm text-slate-800 font-bold transition-colors group"
                        >
                          <span className={`flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full ${themeClass.bg} ${themeClass.text} border ${themeClass.border}`}>
                            <Check className="h-3 w-3" />
                          </span>
                          <span className="group-hover:text-slate-950 transition-colors">
                            {skill}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`mt-6 border-t border-cosmic-border/40 pt-3 text-[9px] font-mono tracking-widest text-right uppercase ${themeClass.text}`}>
                    P_STATUS_VERIFIED
                  </div>
                </NeonCard>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
