import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectShowcase from "./components/ProjectShowcase";
import ExperienceTimeline from "./components/ExperienceTimeline";
import SkillsGrid from "./components/SkillsGrid";
import Certifications from "./components/Certifications";
import ContactFooter from "./components/ContactFooter";
import { Sparkles, Terminal, FileText, Briefcase, Award, Hammer, Mail, Search, X, Hash } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface FunnyTag {
  tag: string;
  desc: string;
  category: string;
  targetId: string;
}

const FUNNY_TAGS: FunnyTag[] = [
  {
    tag: "GymBuddy Creator (Solo MVP) 🏋️",
    desc: "A live 0→1 fitness tracker built, coded, and launched entirely solo.",
    category: "engineering",
    targetId: "projects-sec",
  },
  {
    tag: "PRD Quality Gatekeeper 🛡️",
    desc: "Pushes back on requirements with empathy, risk management, and clarity.",
    category: "product",
    targetId: "overview-sec",
  },
  {
    tag: "Edge-case Assassin 🕵️‍♂️",
    desc: "8+ years hunting down software flaws and edge cases before code hits prod.",
    category: "quality",
    targetId: "experience-sec",
  },
  {
    tag: "Tekion ARC SaaS Veteran 🚗",
    desc: "Shipped quality across the Automotive Retail Cloud platform for enterprise.",
    category: "experience",
    targetId: "experience-sec",
  },
  {
    tag: "Passionate PM Aspirant 📈",
    desc: "Leveraging deep technical SDET foundations to build user-centered products.",
    category: "product",
    targetId: "overview-sec",
  },
  {
    tag: "Midfield General ⚽",
    desc: "Former football team captain and midfielder. High agency playmaker.",
    category: "leadership",
    targetId: "edu-sec",
  },
  {
    tag: "Airtribe AI-First PM Alumni 🎓",
    desc: "Trained in state-of-the-art AI-first spec writing, analytics, and roadmapping.",
    category: "education",
    targetId: "edu-sec",
  },
];

export default function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navItems = [
    { label: "Overview", targetId: "overview-sec", icon: Sparkles },
    { label: "Case Studies", targetId: "projects-sec", icon: FileText },
    { label: "Experience", targetId: "experience-sec", icon: Briefcase },
    { label: "Skills", targetId: "skills-sec", icon: Hammer },
    { label: "Education", targetId: "edu-sec", icon: Award },
    { label: "Contact", targetId: "contact-sec", icon: Mail },
  ];

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      
      // Flash animation highlight on the target container to visually guide the user
      el.classList.add("ring-8", "ring-neon-green/20", "rounded-2xl", "transition-all", "duration-500");
      setTimeout(() => {
        el.classList.remove("ring-8", "ring-neon-green/20");
      }, 2000);
    }
  };

  const filteredTags = FUNNY_TAGS.filter((item) =>
    item.tag.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-cosmic-bg text-slate-800 neon-grid selection:bg-neon-green/25 selection:text-slate-900 relative overflow-hidden">
      
      {/* Background radial gradients for ambient neon atmospheric lights */}
      <div className="absolute top-[10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-neon-green/3 blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] h-[600px] w-[600px] rounded-full bg-neon-green/2 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[20%] h-[500px] w-[500px] rounded-full bg-neon-green/2.5 blur-[120px] pointer-events-none" />

      {/* Sticky Floating Cyber Navigator */}
      <nav className="sticky top-0 z-40 border-b border-cosmic-border/60 bg-cosmic-bg/85 py-3.5 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo / Brand */}
          <div className="flex items-center gap-2 cursor-pointer shrink-0" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-neon-green/10 border border-neon-green/30">
              <Terminal className="h-4 w-4 text-neon-green" />
            </div>
            <span className="font-display font-black text-sm tracking-widest text-slate-900">
              SARATH_CHANDAR
            </span>
          </div>

          {/* Nav Items (scrolls to target) */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.label}
                  onClick={() => handleScrollTo(item.targetId)}
                  className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-mono text-xs text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-all cursor-pointer"
                >
                  <Icon className="h-3.5 w-3.5 text-neon-green/70" />
                  <span>{item.label.toUpperCase()}</span>
                </button>
              );
            })}
          </div>

          {/* Controls: Search & HIRE CTA */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center gap-1.5 rounded-lg border border-cosmic-border bg-cosmic-card px-3 py-1.5 font-mono text-xs text-slate-500 hover:text-neon-green hover:border-neon-green/35 transition-all cursor-pointer shadow-sm"
              title="Search Profile Persona & Funny Tags"
            >
              <Search className="h-4 w-4 text-neon-green animate-pulse" />
              <span className="hidden sm:inline text-[10px] tracking-wide text-slate-400">SEARCH TAGS</span>
            </button>

            <button
              onClick={() => handleScrollTo("contact-sec")}
              className="rounded bg-neon-green/10 px-4 py-1.5 font-mono text-xs font-bold text-neon-green border border-neon-green/30 hover:bg-neon-green/20 transition-all cursor-pointer shadow-[0_0_15px_rgba(16,185,129,0.1)] shrink-0"
            >
              HIRE_ME
            </button>
          </div>

        </div>
      </nav>

      {/* Main Header / Card Area */}
      <Header />

      {/* Content Sections wrapper */}
      <main className="pb-16">
        
        {/* Section 1: Overview */}
        <section id="overview-sec" className="scroll-mt-20">
          <Hero />
        </section>

        {/* Section 2: Case Study Hub */}
        <section id="projects-sec" className="scroll-mt-20 border-t border-cosmic-border/50">
          <ProjectShowcase />
        </section>

        {/* Section 3: Professional Experience */}
        <section id="experience-sec" className="scroll-mt-20 border-t border-cosmic-border/50">
          <ExperienceTimeline />
        </section>

        {/* Section 4: Skills and Toolkit */}
        <section id="skills-sec" className="scroll-mt-20 border-t border-cosmic-border/50">
          <SkillsGrid />
        </section>

        {/* Section 5: Certifications & Education */}
        <section id="edu-sec" className="scroll-mt-20 border-t border-cosmic-border/50">
          <Certifications />
        </section>

        {/* Section 6: Contact & Inbox Dispatch */}
        <section id="contact-sec" className="scroll-mt-20">
          <ContactFooter />
        </section>

      </main>

      {/* Interactive Search Modal Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] p-4 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setIsSearchOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: -20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: -20 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-xl rounded-2xl border border-cosmic-border bg-white shadow-2xl p-6 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header block */}
              <div className="flex items-center justify-between border-b border-cosmic-border pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded bg-neon-green/10 flex items-center justify-center text-neon-green">
                    <Search className="h-3.5 w-3.5" />
                  </div>
                  <h3 className="font-display font-bold text-slate-900 text-sm">
                    Interactive Profile Search
                  </h3>
                </div>
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="rounded-full hover:bg-slate-100 p-1 text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Search input field */}
              <div className="relative mb-6">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  autoFocus
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Type to search (e.g., GymBuddy, PRD, SDET)..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-cosmic-border bg-slate-50 font-mono text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-neon-green/50 focus:ring-0 transition-colors"
                />
              </div>

              {/* Persona Tags selection box */}
              <div className="space-y-4">
                <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">
                  <span>Match Profile Tag / Persona</span>
                  <span>{filteredTags.length} Found</span>
                </div>

                <div className="max-h-[300px] overflow-y-auto pr-1 space-y-2 scrollbar-thin">
                  {filteredTags.length > 0 ? (
                    filteredTags.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setIsSearchOpen(false);
                          setSearchQuery("");
                          handleScrollTo(item.targetId);
                        }}
                        className="w-full text-left p-3 rounded-xl border border-cosmic-border hover:border-neon-green/30 hover:bg-neon-green/[0.02] flex items-start gap-3 transition-all cursor-pointer group"
                      >
                        <div className="h-6 w-6 rounded bg-neon-green/5 flex items-center justify-center text-neon-green group-hover:bg-neon-green/10 shrink-0 mt-0.5">
                          <Hash className="h-3 w-3" />
                        </div>
                        <div>
                          <div className="font-display font-bold text-xs text-slate-900 group-hover:text-neon-green transition-colors">
                            {item.tag}
                          </div>
                          <div className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                            {item.desc}
                          </div>
                        </div>
                      </button>
                    ))
                  ) : (
                    <div className="text-center py-6 text-slate-400 font-mono text-xs">
                      No matching profile personas or tags found. Try "Gym" or "PM".
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom advice info */}
              <div className="mt-5 border-t border-cosmic-border pt-3.5 flex justify-between items-center text-[9px] font-mono text-slate-400">
                <span>PRESS ESC TO CLOSE</span>
                <span>QE-TO-PM_SEARCH_INDEX</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
