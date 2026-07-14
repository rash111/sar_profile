import React from "react";
import { motion } from "motion/react";
import { METRICS, CONTACT_INFO, HIGHLIGHTS } from "../data/portfolioData";
import { ShieldCheck, HelpCircle, ArrowRight, Zap, Target, Laptop, Lightbulb } from "lucide-react";
import NeonCard from "./NeonCard";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl px-6 md:px-12 space-y-16">
        
        {/* Bento Grid: Core Value Metrics */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {METRICS.map((metric, idx) => {
            const cardColor = metric.color.includes("-") ? metric.color.split("-")[1] : metric.color;
            return (
              <NeonCard
                key={metric.id}
                id={metric.id}
                color={cardColor as any}
                delay={idx * 0.1}
                className="flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs font-extrabold text-slate-600 block mb-1">METRIC_0{idx + 1}</span>
                  <div className={`font-display text-4xl font-extrabold tracking-tight leading-none text-slate-900 my-2`}>
                    <span className={`text-neon-${cardColor} glow-${cardColor}`}>
                      {metric.value}
                    </span>
                  </div>
                  <h3 className="font-display font-extrabold text-sm text-slate-900 mb-2 leading-tight">
                    {metric.label}
                  </h3>
                </div>
                <p className="text-xs font-semibold text-slate-700 mt-4 pt-4 border-t border-cosmic-border">
                  {metric.desc}
                </p>
              </NeonCard>
            );
          })}
        </motion.div>

        {/* Highlight Section: The QA Superpower Metaphor */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-stretch">
          
          {/* Why Hire Me Statement */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-between rounded-xl border border-cosmic-border bg-cosmic-card p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 h-40 w-40 bg-neon-green/3 rounded-bl-full translate-x-12 -translate-y-12 pointer-events-none" />
            
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-neon-green/10 px-3 py-1 font-mono text-xs text-neon-green border border-neon-green/20">
                <Target className="h-3.5 w-3.5 text-neon-green animate-pulse" />
                <span><span className="text-neon-green mr-1 font-mono font-bold">//</span> PM ASPIRANT LENS</span>
              </div>
              
              <h2 className="font-display text-2xl font-black text-slate-950 md:text-3xl leading-tight">
                From breaking products to building them with empathy & technical rigor.
              </h2>
              
              <p className="text-sm md:text-base leading-relaxed font-medium text-slate-800">
                {CONTACT_INFO.about}
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 border-t border-cosmic-border pt-6 text-xs text-slate-600">
              <div className="flex gap-2.5 items-start">
                <div className="rounded bg-neon-green/10 border border-neon-green/10 p-1.5 text-neon-green shrink-0">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div>
                  <span className="font-bold text-slate-900 block mb-0.5">Obsessive Edge-Case Hunter</span>
                  <span className="text-slate-500">Anticipating failure points before developers write a single line of code.</span>
                </div>
              </div>

              <div className="flex gap-2.5 items-start">
                <div className="rounded bg-neon-green/10 border border-neon-green/10 p-1.5 text-neon-green shrink-0">
                  <Laptop className="h-4 w-4" />
                </div>
                <div>
                  <span className="font-bold text-slate-900 block mb-0.5">AI-Assisted Prototyper</span>
                  <span className="text-slate-500">Validating PRD logic and core user assumptions in hours, not weeks.</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Strategic Highlights Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <NeonCard color="green" glowOnHover={true} className="h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-neon-green/10 text-neon-green">
                    <Lightbulb className="h-4.5 w-4.5" />
                  </div>
                  <h3 className="font-display font-bold text-slate-900 text-base">Key Strategic Pillars</h3>
                </div>
                
                <div className="space-y-4">
                  {HIGHLIGHTS.map((highlight, idx) => (
                    <div key={idx} className="flex gap-3 items-start text-sm leading-relaxed text-slate-800 font-medium">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-neon-green/10 font-mono text-xs font-bold text-neon-green">
                        {idx + 1}
                      </div>
                      <p className="pt-0.5">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 border-t border-cosmic-border pt-4 flex items-center justify-between font-mono text-[10px] text-slate-400">
                <span>SYSTEM STATUS: VALIDATED</span>
                <span>QE-TO-PM_READY</span>
              </div>
            </NeonCard>
          </motion.div>

        </div>

      </div>
    </div>
  );
}
