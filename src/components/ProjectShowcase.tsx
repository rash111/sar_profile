import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PROJECTS } from "../data/portfolioData";
import { Project } from "../types";
import { 
  FolderIcon, 
  ExternalLink, 
  ArrowRight, 
  Filter, 
  CheckCircle2, 
  Sparkles, 
  Maximize2,
  FileText
} from "lucide-react";
import NeonCard from "./NeonCard";
import InteractiveDocViewer from "./InteractiveDocViewer";

export default function ProjectShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  // Derive unique categories from projects list
  const categories = ["All", ...Array.from(new Set(PROJECTS.map((p) => p.category)))];

  // Filter projects based on selection
  const filteredProjects = selectedCategory === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="py-12 relative">
      <div className="mx-auto max-w-7xl px-6 md:px-12 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 font-mono text-[11px] tracking-wider text-neon-green uppercase">
              <Sparkles className="h-3 w-3 text-neon-green animate-pulse" />
              <span><span className="text-neon-green font-bold mr-1">//</span> Airtribe Case Studies & Capstone</span>
            </div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
              Product Case Study Hub
            </h2>
            <p className="text-sm md:text-base text-slate-700 font-medium max-w-2xl leading-relaxed">
              Deep product strategy case studies from Airtribe's AI-First PM Program alongside my standalone live capstone project. Click any card to launch the **Interactive PM Document Simulator** in-app.
            </p>
          </div>

          {/* Live indicator of PM logic */}
          <div className="rounded-lg border border-cosmic-border bg-cosmic-card px-4 py-2 flex items-center gap-2 text-xs font-mono font-bold text-slate-700 self-start md:self-auto">
            <span className="h-2 w-2 rounded-full bg-neon-green animate-pulse" />
            <span>Interactive Simulator Ready</span>
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-wrap items-center gap-1.5 border-b border-cosmic-border pb-4 overflow-x-auto scrollbar-none">
          <div className="flex h-8 items-center gap-1.5 text-xs font-mono font-bold text-slate-600 mr-2 shrink-0">
            <Filter className="h-3.5 w-3.5" />
            <span>FILTER:</span>
          </div>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-4 py-1.5 font-mono text-xs font-medium transition-all duration-200 shrink-0 cursor-pointer ${
                selectedCategory === category
                  ? "bg-neon-green/10 text-neon-green border border-neon-green/35"
                  : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              {category.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, idx) => {
            const isCapstone = project.id === "capstone";
            const projectColor = isCapstone ? "green" : (idx % 2 === 0 ? "cyan" : "purple");
            const textColorClass = isCapstone ? "text-neon-green font-bold" : (idx % 2 === 0 ? "text-neon-cyan font-bold" : "text-neon-purple font-bold");
            const borderBadgeClass = isCapstone 
              ? "bg-neon-green/10 text-neon-green border border-neon-green/20" 
              : (idx % 2 === 0 
                ? "bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20"
                : "bg-neon-purple/10 text-neon-purple border border-neon-purple/20");

            return (
              <NeonCard
                key={project.id}
                id={project.id}
                color={projectColor as any}
                delay={idx * 0.08}
                onClick={() => setActiveProject(project)}
                className={`flex flex-col justify-between group h-full relative overflow-hidden transition-all duration-300 ${
                  isCapstone 
                    ? "md:col-span-2 lg:col-span-3 border-2 border-neon-green/40 shadow-[0_0_20px_rgba(16,185,129,0.1)] hover:border-neon-green bg-gradient-to-br from-neon-green/5 to-transparent" 
                    : ""
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold tracking-wider uppercase font-mono ${borderBadgeClass}`}>
                      {project.category}
                    </span>
                    
                    {isCapstone && (
                      <span className="bg-neon-green/90 text-white font-mono font-black text-[9px] px-2.5 py-1 rounded tracking-widest uppercase animate-pulse">
                        ⭐ Main Featured Project (0→1 Live)
                      </span>
                    )}

                    <div className="flex gap-2">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="rounded p-1 text-slate-400 hover:text-neon-green hover:bg-neon-green/5 transition-colors"
                          title="Launch Live App"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="font-display font-extrabold text-slate-900 text-xl tracking-tight mb-2 group-hover:text-neon-green transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-slate-700 leading-relaxed mb-4 font-medium">
                    {project.brief}
                  </p>

                  {/* Key Deliverables Bulletpoints */}
                  <div className="space-y-1.5 border-t border-cosmic-border/50 pt-3 mb-4">
                    <span className="text-[10px] font-extrabold text-slate-600 uppercase tracking-widest block mb-1">Deliverables</span>
                    {project.deliverables.slice(0, 3).map((item, dIdx) => (
                      <div key={dIdx} className="flex gap-2 items-center text-xs text-slate-800 font-bold">
                        <CheckCircle2 className={`h-3.5 w-3.5 shrink-0 ${textColorClass}`} />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags and CTA */}
                <div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded bg-slate-100 px-2.5 py-1 text-[10px] font-mono font-bold text-slate-700 border border-cosmic-border">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className={`mt-2 flex items-center justify-between border-t border-cosmic-border pt-3 font-mono text-xs ${textColorClass}`}>
                    <span className="flex items-center gap-1.5 font-bold tracking-wider">
                      <span>EXPLORE SPEC</span>
                      <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <Maximize2 className="h-3.5 w-3.5 text-slate-400 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </NeonCard>
            );
          })}
        </div>

        {/* Dynamic Detail Overlay (Modal Drawer) */}
        <AnimatePresence>
          {activeProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={() => setActiveProject(null)}
            >
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-4xl max-h-[85vh] relative shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <InteractiveDocViewer
                  project={activeProject}
                  onClose={() => setActiveProject(null)}
                  isFullModal={true}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
