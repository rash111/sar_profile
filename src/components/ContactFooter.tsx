import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CONTACT_INFO } from "../data/portfolioData";
import { Mail, Phone, Send, Sparkles, CheckCircle2 } from "lucide-react";
import NeonCard from "./NeonCard";

export default function ContactFooter() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);
    
    // Simulate API delivery
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setName("");
      setEmail("");
      setCompany("");
      setMessage("");

      // reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <footer className="border-t border-cosmic-border bg-cosmic-bg/40 py-16 relative overflow-hidden">
      {/* Background neon blur orb */}
      <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-neon-green/5 blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-1/4 h-80 w-80 rounded-full bg-neon-green/5 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
          
          {/* Left Column: CTA Pitch */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 font-mono text-[11px] tracking-wider text-neon-green uppercase">
              <Sparkles className="h-3 w-3 text-neon-green animate-pulse" />
              <span><span className="text-neon-green font-bold mr-1">//</span> Opportunity Compatibility</span>
            </div>
            
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl leading-tight">
              Let's build products that matter, together.
            </h2>
            
            <p className="text-sm md:text-base leading-relaxed text-slate-700 font-medium">
              I am actively looking for full-time **Product Manager** opportunities where my technical SDET foundation, workflow analytics precision, and Airtribe AI-First PM training can be fully put to work.
            </p>

            <div className="space-y-4 border-t border-cosmic-border/60 pt-6">
              <h4 className="text-xs font-bold text-slate-600 uppercase tracking-widest">Connect Directly</h4>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 text-xs font-mono font-bold">
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center gap-2.5 rounded-lg border border-cosmic-border bg-cosmic-card/50 p-3 text-slate-800 hover:border-neon-green/30 hover:text-neon-green transition-all"
                >
                  <Mail className="h-4 w-4 text-neon-green" />
                  <span>{CONTACT_INFO.email}</span>
                </a>
                
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-2.5 rounded-lg border border-cosmic-border bg-cosmic-card/50 p-3 text-slate-800 hover:border-neon-green/30 hover:text-neon-green transition-all"
                >
                  <Phone className="h-4 w-4 text-neon-green" />
                  <span>{CONTACT_INFO.phone}</span>
                </a>
              </div>
            </div>

            <div className="flex gap-4 text-slate-600 font-mono text-[10px] font-bold">
              <span>COIMBATORE • BENGALURU • INDIA</span>
              <span>© {new Date().getFullYear()} SARATH CHANDAR</span>
            </div>
          </div>

          {/* Right Column: Interactive Email Simulator Form */}
          <div className="lg:col-span-7">
            <NeonCard color="green" glowOnHover={false} className="p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-display font-extrabold text-slate-900 text-base">Direct Inbox Dispatch</h3>
                  <p className="text-xs text-slate-700 mt-0.5 font-semibold">Send a message directly into my priority product queue.</p>
                </div>
                <div className="hidden sm:block rounded bg-neon-green/10 px-2.5 py-1 text-[10px] font-mono text-neon-green border border-neon-green/15 font-bold">
                  SECURE_TLS_DISPATCH
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Navneet Sharma"
                      className="w-full rounded-lg border border-cosmic-border bg-cosmic-bg p-3 font-mono text-xs text-slate-800 placeholder-slate-400 focus:border-neon-green/50 focus:outline-none focus:ring-0 transition-colors font-bold"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g. Tekion or Airtribe"
                      className="w-full rounded-lg border border-cosmic-border bg-cosmic-bg p-3 font-mono text-xs text-slate-800 placeholder-slate-400 focus:border-neon-green/50 focus:outline-none focus:ring-0 transition-colors font-bold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                    Your Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. recruiter@company.com"
                    className="w-full rounded-lg border border-cosmic-border bg-cosmic-bg p-3 font-mono text-xs text-slate-800 placeholder-slate-400 focus:border-neon-green/50 focus:outline-none focus:ring-0 transition-colors font-bold"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your role or project scope. I will get back to you within 12 hours."
                    className="w-full rounded-lg border border-cosmic-border bg-cosmic-bg p-3 font-mono text-xs text-slate-800 placeholder-slate-400 focus:border-neon-green/50 focus:outline-none focus:ring-0 transition-colors resize-none font-bold"
                  />
                </div>

                <div className="flex items-center gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center gap-2 rounded-lg bg-neon-green px-6 py-2.5 font-mono text-xs font-black text-black hover:bg-neon-green/90 transition-all border border-neon-green/30 shrink-0 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  >
                    <span>{isSubmitting ? "DISPATCHING..." : "DISPATCH MESSAGE"}</span>
                    <Send className="h-3.5 w-3.5" />
                  </button>

                  <AnimatePresence>
                    {isSuccess && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        className="flex items-center gap-1.5 font-mono text-xs text-neon-green"
                      >
                        <CheckCircle2 className="h-4 w-4 shrink-0" />
                        <span>Message queued successfully!</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </form>
            </NeonCard>
          </div>

        </div>
      </div>
    </footer>
  );
}
