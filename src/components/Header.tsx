import React from "react";
import { motion } from "motion/react";
import { CONTACT_INFO } from "../data/portfolioData";
import { Mail, Phone, MapPin, FileDown, ShieldAlert, BadgeCheck, Code } from "lucide-react";

export default function Header() {
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
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.header
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative z-10 border-b border-cosmic-border bg-cosmic-bg/60 py-8 backdrop-blur-md"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          
          {/* Left Block: Name, Titles, Subtitles */}
          <div className="space-y-4 max-w-2xl">
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 rounded-full border border-neon-green/10 bg-neon-green/5 px-3 py-1 font-mono text-xs text-neon-green border-glow-green">
              <BadgeCheck className="h-3.5 w-3.5 text-neon-green animate-pulse" />
              <span><span className="text-neon-green mr-1 font-mono font-bold">//</span> ASPIRING PRODUCT MANAGER</span>
            </motion.div>
            
            <div className="space-y-1">
              <motion.h1
                variants={itemVariants}
                className="font-display text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl lg:text-6xl"
              >
                {CONTACT_INFO.name}
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="font-display text-lg font-medium text-neon-green glow-green"
              >
                <span className="text-neon-green/60 mr-1.5 font-mono">//</span> {CONTACT_INFO.tagline}
              </motion.p>
            </div>

            <motion.p
              variants={itemVariants}
              className="text-base leading-relaxed text-slate-800 font-semibold max-w-xl"
            >
              "{CONTACT_INFO.statement}"
            </motion.p>
          </div>

          {/* Right Block: Interactive Floating Digital Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="w-full md:w-auto shrink-0"
          >
            <div className="relative rounded-xl border border-neon-green/30 bg-cosmic-card p-6 border-glow-green max-w-sm w-full md:w-80 shadow-md">
              <div className="absolute top-3 right-3 flex gap-1">
                <span className="h-2 w-2 rounded-full bg-neon-green animate-pulse" />
                <span className="h-2 w-2 rounded-full bg-neon-green/40 animate-pulse delay-75" />
              </div>
              
              <div className="flex items-center gap-4 mb-4">
                {/* Custom Stylized Geometric Avatar - representing product lens and qa */}
                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-neon-green/10 border border-neon-green/30">
                  <ShieldAlert className="h-6 w-6 text-neon-green animate-pulse" />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-neon-green/10 to-neon-green/5 animate-pulse" />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-slate-900 text-sm">Sarath Chandar</h3>
                  <p className="text-xs font-mono font-bold text-slate-700">sarathchandarb@gmail.com</p>
                </div>
              </div>

              {/* Direct links list */}
              <div className="space-y-2 border-t border-cosmic-border pt-4 text-xs font-mono font-semibold">
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center gap-2.5 text-slate-800 hover:text-neon-green transition-colors"
                >
                  <Mail className="h-4 w-4 text-neon-green" />
                  <span>{CONTACT_INFO.email}</span>
                </a>
                
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-2.5 text-slate-800 hover:text-neon-green transition-colors"
                >
                  <Phone className="h-4 w-4 text-neon-green" />
                  <span>{CONTACT_INFO.phone}</span>
                </a>

                <div className="flex items-center gap-2.5 text-slate-800">
                  <MapPin className="h-4 w-4 text-neon-green" />
                  <span>{CONTACT_INFO.location}</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.header>
  );
}
