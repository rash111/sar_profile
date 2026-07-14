import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CERTIFICATIONS, EDUCATION_HISTORY } from "../data/portfolioData";
import { GraduationCap, Award, Calendar, BookOpen, Trophy, ShieldAlert, BadgeCheck, Eye, EyeOff, Sparkles, X } from "lucide-react";
import NeonCard from "./NeonCard";

export default function Certifications() {
  const [showCertModal, setShowCertModal] = useState<boolean>(false);

  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl px-6 md:px-12 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 font-mono text-[11px] tracking-wider text-neon-green uppercase">
            <GraduationCap className="h-3 w-3 text-neon-green animate-pulse" />
            <span><span className="text-neon-green font-bold mr-1">//</span> Continuous Growth & Foundations</span>
          </div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            Education & Certifications
          </h2>
          <p className="text-sm md:text-base text-slate-700 font-medium max-w-2xl leading-relaxed">
            My engineering foundations paired with executive training in AI-first product management and lifelong learning.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          
          {/* Column 1: Certifications & Digital Badges */}
          <div className="space-y-6">
            <h3 className="font-display font-bold text-slate-900 text-lg tracking-tight mb-4 flex items-center gap-2">
              <Award className="h-5 w-5 text-neon-green" />
              <span>Professional Accreditations</span>
            </h3>

            {CERTIFICATIONS.map((cert, idx) => (
              <NeonCard
                key={idx}
                color="green"
                glowOnHover={true}
                className="flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-display font-extrabold text-slate-900 text-base leading-tight">
                        {cert.title}
                      </h4>
                      <p className="font-display font-bold text-neon-green text-sm mt-0.5 font-mono">
                        {cert.provider} • {cert.period}
                      </p>
                    </div>
                    
                    <button
                      onClick={() => setShowCertModal(true)}
                      className="flex items-center gap-1.5 rounded bg-neon-green/10 px-2.5 py-1.5 font-mono text-xs font-black text-neon-green border border-neon-green/20 hover:bg-neon-green/20 transition-all shrink-0 cursor-pointer"
                    >
                      <Eye className="h-4 w-4 text-neon-green" />
                      <span>VIEW CERTIFICATE</span>
                    </button>
                  </div>

                  <ul className="space-y-2">
                    {cert.description.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex gap-2.5 items-start text-sm leading-relaxed text-slate-800 font-medium">
                        <span className="text-neon-green mt-0.5">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 border-t border-cosmic-border pt-3 flex justify-between items-center text-[11px] font-mono font-bold text-slate-600">
                  <span>CREDENTIAL ID: {cert.credentialId}</span>
                  <span>STATUS: ACTIVE_VERIFIED</span>
                </div>
              </NeonCard>
            ))}
          </div>

          {/* Column 2: Academic & Leadership History */}
          <div className="space-y-6">
            <h3 className="font-display font-bold text-slate-900 text-lg tracking-tight mb-4 flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-neon-cyan" />
              <span>Academic Foundations</span>
            </h3>

            {EDUCATION_HISTORY.map((edu, idx) => (
              <NeonCard
                key={idx}
                color="cyan"
                glowOnHover={true}
                className="flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div>
                    <h4 className="font-display font-extrabold text-slate-900 text-base leading-tight">
                      {edu.degree}
                    </h4>
                    <p className="font-display font-bold text-neon-cyan text-sm mt-0.5">
                      {edu.institution} • {edu.period}
                    </p>
                  </div>

                  <ul className="space-y-3">
                    {edu.details.map((bullet, bIdx) => {
                      const isFootball = bullet.includes("Football");
                      const isMidfielder = bullet.includes("Midfielder");
                      return (
                        <li key={bIdx} className="flex gap-2.5 items-start text-sm leading-relaxed text-slate-800 font-medium">
                          {isFootball || isMidfielder ? (
                            <Trophy className="h-4 w-4 text-neon-orange shrink-0 mt-0.5" />
                          ) : (
                            <span className="text-neon-cyan mt-0.5">•</span>
                          )}
                          <span>{bullet}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="mt-6 border-t border-cosmic-border pt-3 flex justify-between items-center text-[11px] font-mono font-bold text-slate-600">
                  <span>LOCATION: COIMBATORE, INDIA</span>
                  <span>ATHLETICS: FOOTBALL CAPTAIN</span>
                </div>
              </NeonCard>
            ))}
          </div>

        </div>

        {/* Certificate Display Dialog */}
        <AnimatePresence>
          {showCertModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
              onClick={() => setShowCertModal(false)}
            >
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-3xl relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setShowCertModal(false)}
                  className="absolute -top-12 right-0 rounded-full bg-cosmic-card border border-cosmic-border p-2 text-gray-400 hover:text-white transition-all hover:border-neon-green/35 cursor-pointer"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Simulated High-Fidelity Certificate Card matching the green Airtribe look */}
                <div 
                  className="w-full aspect-[4/3] rounded-2xl border-4 border-neon-green/30 bg-cosmic-card relative overflow-hidden flex flex-col justify-between p-8 sm:p-12 md:p-16 text-center shadow-2xl"
                  style={{
                    background: "radial-gradient(circle at center, #051409 0%, #000000 100%)",
                  }}
                >
                  {/* Glowing background waves */}
                  <div className="absolute inset-0 pointer-events-none opacity-20">
                    <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M-50,320 C100,280 200,340 350,290 C500,240 450,150 550,100" stroke="#00ff41" strokeWidth="1" fill="none" />
                      <path d="M-50,290 C120,240 180,310 320,250 C460,190 400,100 550,60" stroke="#00f0ff" strokeWidth="1" fill="none" />
                      <path d="M-50,260 C140,200 160,280 290,210 C420,140 350,50 550,20" stroke="#00ff41" strokeWidth="1" fill="none" />
                    </svg>
                  </div>

                  {/* Corner Elements */}
                  <div className="absolute top-4 left-4 h-8 w-8 border-t-2 border-l-2 border-neon-green/40" />
                  <div className="absolute top-4 right-4 h-8 w-8 border-t-2 border-r-2 border-neon-green/40" />
                  <div className="absolute bottom-4 left-4 h-8 w-8 border-b-2 border-l-2 border-neon-green/40" />
                  <div className="absolute bottom-4 right-4 h-8 w-8 border-b-2 border-r-2 border-neon-green/40" />

                  {/* Top Logo / Brand */}
                  <div className="flex justify-center items-center gap-2 z-10">
                    <div className="h-6 w-6 rounded bg-neon-green/10 border border-neon-green/30 flex items-center justify-center">
                      <Sparkles className="h-3.5 w-3.5 text-neon-green" />
                    </div>
                    <span className="font-display font-extrabold text-white text-base tracking-widest uppercase">
                      Airtribe
                    </span>
                  </div>

                  {/* Main Header */}
                  <div className="space-y-2 z-10">
                    <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-gray-100 tracking-wider uppercase">
                      Certificate
                    </h2>
                    <p className="font-mono text-[10px] sm:text-xs text-neon-green tracking-widest uppercase font-semibold">
                      of Completion
                    </p>
                  </div>

                  {/* Recipient Details */}
                  <div className="space-y-4 z-10">
                    <p className="text-xs sm:text-sm text-gray-400 font-mono">This certification is proudly presented to</p>
                    <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-neon-green border-b border-neon-green/20 pb-4 inline-block px-12 glow-green">
                      Sarath Chandar
                    </h3>
                  </div>

                  {/* Achievement details */}
                  <div className="space-y-2 z-10">
                    <p className="text-xs sm:text-sm text-gray-400 font-mono">for successfully completing the advanced program in</p>
                    <p className="font-display text-lg sm:text-xl md:text-2xl font-bold text-white tracking-wide">
                      AI-First Product Management
                    </p>
                  </div>

                  {/* Footer metadata & signature */}
                  <div className="grid grid-cols-2 gap-4 border-t border-neon-green/10 pt-6 mt-4 z-10 items-end">
                    
                    {/* Date */}
                    <div className="text-left space-y-1">
                      <span className="block text-[8px] sm:text-[9px] font-mono text-gray-500 uppercase tracking-wider">Issue Date</span>
                      <span className="block text-xs font-semibold text-gray-300 font-display">July 03, 2026</span>
                    </div>

                    {/* Signature */}
                    <div className="text-right space-y-1">
                      <div className="inline-block border-b border-gray-600/50 pb-1">
                        <span className="font-display text-sm italic text-gray-300 font-medium tracking-wide">Navneet Sharma</span>
                      </div>
                      <span className="block text-[8px] sm:text-[9px] font-mono text-gray-500 uppercase tracking-wider font-mono">Navneet Sharma, Co-Founder @ Airtribe</span>
                    </div>

                  </div>

                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
