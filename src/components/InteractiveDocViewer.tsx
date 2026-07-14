import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Project } from "../types";
import { 
  FileText, 
  Target, 
  Sparkles, 
  Compass, 
  ArrowUpRight, 
  Minimize2, 
  ExternalLink,
  BookOpen,
  TrendingUp
} from "lucide-react";

interface InteractiveDocViewerProps {
  project: Project;
  onClose?: () => void;
  isFullModal?: boolean;
}

type TabType = "overview" | "features" | "metrics" | "gtm";

export default function InteractiveDocViewer({
  project,
  onClose,
  isFullModal = false,
}: InteractiveDocViewerProps) {
  const [activeTab, setActiveTab] = useState<TabType>("overview");
  const doc = project.docMockup;

  const tabs: { id: TabType; label: string; icon: any }[] = [
    { id: "overview", label: "Overview & Insights", icon: Compass },
    { id: "features", label: "Features & Impact", icon: Sparkles },
    { id: "metrics", label: "Metrics & Success", icon: Target },
    { id: "gtm", label: "Go-To-Market Plan", icon: FileText },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <motion.div
            key="overview"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="space-y-6"
          >
            <div>
              <h4 className="mb-2 font-display text-xs font-bold tracking-wider text-neon-green uppercase">
                Problem Statement
              </h4>
              <p className="rounded-lg border border-red-200 bg-red-50/50 p-5 text-sm leading-relaxed text-slate-800">
                {doc.problemStatement}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <h4 className="mb-2 font-display text-xs font-bold tracking-wider text-neon-green uppercase">
                  Primary Target Persona
                </h4>
                <div className="rounded-lg border border-neon-green/20 bg-emerald-50/30 p-5">
                  <div className="mb-2 text-base font-bold text-slate-900">
                    {doc.targetUser.split(",")[0]}
                  </div>
                  <p className="text-sm leading-relaxed text-slate-700">
                    {doc.targetUser.split(",").slice(1).join(",")}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="mb-2 font-display text-xs font-bold tracking-wider text-neon-green uppercase">
                  Validated User Insights
                </h4>
                <ul className="space-y-3">
                  {doc.userInsights.map((insight, idx) => (
                    <li key={idx} className="flex items-start text-sm text-slate-700 leading-relaxed">
                      <span className="mr-2 text-neon-green font-bold text-lg leading-none">•</span>
                      <span>{insight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        );

      case "features":
        return (
          <motion.div
            key="features"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="space-y-4"
          >
            <h4 className="mb-3 font-display text-xs font-bold tracking-wider text-neon-green uppercase">
              Core Feature Specifications
            </h4>
            <div className="grid grid-cols-1 gap-4">
              {doc.keyFeatures.map((feature, idx) => (
                <div
                  key={idx}
                  className="rounded-lg border border-cosmic-border bg-cosmic-bg p-5 hover:border-neon-green/40 transition-colors"
                >
                  <div className="flex items-center justify-between gap-2 border-b border-cosmic-border pb-2 mb-3">
                    <span className="text-base font-bold text-slate-900">{feature.name}</span>
                    <span className="rounded bg-neon-green/10 px-2.5 py-0.5 text-[10px] font-mono font-bold text-neon-green shrink-0">
                      PRD Component_0{idx + 1}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-700">
                    {feature.description}
                  </p>
                  <div className="mt-3 pt-3 border-t border-cosmic-border/60 flex flex-wrap items-center gap-1.5 text-xs text-neon-green">
                    <span className="font-bold uppercase tracking-wider text-[10px]">Expected Impact:</span>
                    <span className="text-slate-800 font-medium">{feature.impact}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        );

      case "metrics":
        return (
          <motion.div
            key="metrics"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="space-y-6"
          >
            <h4 className="font-display text-xs font-bold tracking-wider text-neon-green uppercase">
              Success Metric Scorecard
            </h4>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {doc.successMetrics.map((sm, idx) => (
                <div
                  key={idx}
                  className="flex flex-col justify-between rounded-lg border border-neon-green/20 bg-emerald-50/10 p-5 relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 h-16 w-16 bg-neon-green/5 rounded-bl-full translate-x-4 -translate-y-4 group-hover:bg-neon-green/10 transition-colors" />
                  <div>
                    <span className="text-xs font-bold text-slate-500 tracking-wide uppercase block mb-1">
                      {sm.metric}
                    </span>
                    <div className="text-3xl font-extrabold font-display text-neon-green leading-none my-2">
                      {sm.target}
                    </div>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed mt-2 border-t border-cosmic-border/60 pt-2">
                    {sm.explanation}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="rounded-lg border border-cosmic-border bg-slate-50 p-5 flex gap-3.5 items-start">
              <TrendingUp className="text-neon-green h-5 w-5 shrink-0 mt-0.5" />
              <div>
                <h5 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">Analytics Verification Strategy</h5>
                <p className="text-xs leading-relaxed text-slate-600">
                  Every metric is tracked via custom events in **Amplitude** and mapped to a daily active dashboard. Discrepancy gates are built directly into our QA integration suite to guarantee 100% data fidelity.
                </p>
              </div>
            </div>
          </motion.div>
        );

      case "gtm":
        return (
          <motion.div
            key="gtm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="space-y-4"
          >
            <h4 className="mb-2 font-display text-xs font-bold tracking-wider text-neon-green uppercase">
              Go-To-Market Rollout Phases
            </h4>
            <div className="space-y-3">
              {doc.gtmStrategy.map((step, idx) => (
                <div key={idx} className="flex gap-4 items-start rounded-lg bg-cosmic-bg p-4 border border-cosmic-border">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-neon-green/10 font-mono text-xs font-bold text-neon-green">
                    0{idx + 1}
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed pt-0.5">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        );
    }
  };

  return (
    <div className={`flex flex-col bg-cosmic-card border border-cosmic-border rounded-xl overflow-hidden ${isFullModal ? "h-full max-h-[85vh] md:max-h-[75vh]" : ""}`}>
      {/* Document Header */}
      <div className="flex flex-col gap-3 border-b border-cosmic-border bg-slate-50 p-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neon-green/10 text-neon-green shrink-0">
            <BookOpen className="h-5.5 w-5.5" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-display font-extrabold text-slate-900 text-lg leading-tight">
                {project.title}
              </h3>
              <span className="rounded-full bg-neon-green/10 px-2.5 py-0.5 text-[10px] font-bold text-neon-green tracking-wide uppercase">
                {project.category}
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-1 font-medium">{project.subtitle}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded bg-neon-green/10 px-3 py-2 font-mono text-xs font-bold text-neon-green hover:bg-neon-green/20 transition-all duration-200"
            >
              <span className="uppercase tracking-wider text-[10px]">Launch Live</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
          
          {project.docUrl && (
            <a
              href={project.docUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded border border-cosmic-border bg-cosmic-card px-3 py-2 font-mono text-xs font-bold text-slate-700 hover:border-neon-green/30 transition-all duration-200"
            >
              <span className="uppercase tracking-wider text-[10px]">Read Spec PDF</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          )}

          {onClose && (
            <button
              onClick={onClose}
              className="rounded-full p-1.5 text-slate-500 hover:bg-slate-200 hover:text-slate-800 transition-all cursor-pointer shrink-0"
              aria-label="Close document"
            >
              <Minimize2 className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>

      {/* Tabs Navigator */}
      <div className="flex overflow-x-auto border-b border-cosmic-border bg-slate-50/50 px-4 py-2.5 scrollbar-none gap-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 whitespace-nowrap rounded-lg px-4 py-2 font-mono text-xs font-bold transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-slate-200 text-slate-900 border-b-2 border-neon-green"
                  : "text-slate-500 hover:bg-slate-100 hover:text-slate-800"
              }`}
            >
              <Icon className={`h-3.5 w-3.5 ${isActive ? "text-neon-green" : "text-slate-500"}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Document Content */}
      <div className="flex-1 overflow-y-auto p-6 bg-white">
        <AnimatePresence mode="wait">
          {renderTabContent()}
        </AnimatePresence>
      </div>

      {/* Document Footer / Sign-off */}
      <div className="border-t border-cosmic-border bg-slate-50 px-6 py-3.5 flex justify-between items-center text-[10px] font-mono font-bold text-slate-500">
        <span>AUTHOR: SARATH CHANDAR</span>
        <span>Airtribe PM Program Series • 2026</span>
      </div>
    </div>
  );
}
