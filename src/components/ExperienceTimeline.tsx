import React, { useState } from "react";
import { motion } from "motion/react";
import { EXPERIENCES } from "../data/portfolioData";
import { Briefcase, MapPin, Calendar, Award, CheckCircle } from "lucide-react";
import NeonCard from "./NeonCard";

export default function ExperienceTimeline() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl px-6 md:px-12 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 font-mono text-[11px] tracking-wider text-neon-green uppercase">
            <Award className="h-3 w-3 text-neon-green animate-pulse" />
            <span><span className="text-neon-green font-bold mr-1">//</span> 8+ Year Career Progression</span>
          </div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            SaaS & Quality Experience
          </h2>
          <p className="text-sm md:text-base text-slate-700 font-medium max-w-2xl leading-relaxed">
            Each role expanded my product surface area, refined my customer empathy, and solidified my muscle for validation, risk management, and product strategy.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l-2 border-cosmic-border ml-4 md:ml-6 space-y-12 py-2">
          {EXPERIENCES.map((exp, idx) => {
            const isLatest = idx === 0;
            return (
              <div
                key={exp.id}
                className="relative pl-8 md:pl-10"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Timeline Bullet Node with Glow */}
                <span
                  className={`absolute left-0 top-1.5 -translate-x-[9px] flex h-4 w-4 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                    hoveredIndex === idx || (isLatest && hoveredIndex === null)
                      ? "border-neon-green bg-cosmic-bg h-5 w-5 -translate-x-[11px] shadow-[0_0_10px_rgba(0,255,65,0.8)]"
                      : "border-cosmic-border bg-cosmic-card"
                  }`}
                />

                {/* Grid layout for timeline node */}
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 items-start">
                  
                  {/* Left part: Title, Company, Dates & quick facts */}
                  <div className="lg:col-span-4 space-y-3">
                    <div>
                      <span className="font-mono text-xs font-extrabold text-slate-600 tracking-wider block">ROLE_0{idx + 1}</span>
                      <h3 className="font-display font-extrabold text-slate-900 text-lg tracking-tight leading-tight">
                        {exp.role}
                      </h3>
                      <p className="font-display font-black text-neon-green text-sm mt-1">
                        {exp.company}
                      </p>
                    </div>

                    <div className="space-y-1.5 font-mono text-xs font-bold text-slate-700">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-slate-500 shrink-0" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-slate-500 shrink-0" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Promoted / High Impact highlights */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {exp.metrics.map((metric, mIdx) => (
                        <span
                          key={mIdx}
                          className="rounded bg-neon-green/10 border border-neon-green/35 px-2.5 py-1 text-[10px] font-mono text-neon-green font-extrabold"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right part: Description bullets & skills inside a clean neon card */}
                  <div className="lg:col-span-8">
                    <NeonCard
                      color={isLatest ? "green" : "cyan"}
                      glowOnHover={true}
                      id={exp.id}
                      className="p-6"
                    >
                      <ul className="space-y-3 mb-6">
                        {exp.description.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex gap-3 items-start text-sm leading-relaxed text-slate-800 font-medium">
                            <span className={`text-base font-bold mt-0.5 shrink-0 ${isLatest ? "text-neon-green" : "text-neon-cyan"}`}>•</span>
                            <p>{bullet}</p>
                          </li>
                        ))}
                      </ul>

                      {/* Applied skills */}
                      <div className="border-t border-cosmic-border/60 pt-4">
                        <span className="text-[10px] font-extrabold text-slate-600 uppercase tracking-widest block mb-2">Validated Competencies</span>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.skills.map((skill) => (
                            <span
                              key={skill}
                              className="rounded bg-slate-100 border border-cosmic-border px-2.5 py-1 text-[11px] font-mono font-bold text-slate-800"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </NeonCard>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
