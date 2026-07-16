import React, { useState, useEffect } from "react";
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
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  Printer,
  Download,
  AlertTriangle,
  Info,
  CheckCircle2
} from "lucide-react";

interface InteractiveDocViewerProps {
  project: Project;
  onClose?: () => void;
  isFullModal?: boolean;
}

type TabType = "overview" | "features" | "metrics" | "gtm" | "pdf";

export default function InteractiveDocViewer({
  project,
  onClose,
  isFullModal = false,
}: InteractiveDocViewerProps) {
  const [activeTab, setActiveTab] = useState<TabType>("overview");
  const [pdfPage, setPdfPage] = useState<number>(1);
  const doc = project.docMockup;

  // Reset page number on tab or project change
  useEffect(() => {
    setPdfPage(1);
  }, [activeTab, project.id]);

  const tabs: { id: TabType; label: string; icon: any }[] = [
    { id: "overview", label: "Overview & Insights", icon: Compass },
    { id: "features", label: "Features & Impact", icon: Sparkles },
    { id: "metrics", label: "Metrics & Success", icon: Target },
    { id: "gtm", label: "Go-To-Market Plan", icon: FileText },
    { id: "pdf", label: "Interactive PDF View", icon: BookOpen },
  ];

  // Helper to get total pages for the PDF viewer
  const getTotalPages = (id: string): number => {
    switch (id) {
      case "stayfit": return 4;
      case "zepto": return 4;
      case "learning-system": return 3;
      case "twitter-growth": return 3;
      case "zomato-strategy": return 3;
      default: return 1;
    }
  };

  const totalPages = getTotalPages(project.id);

  // Render simulated high-fidelity corporate PDF pages
  const renderPdfPageContent = () => {
    const p = pdfPage;
    
    // VitaFit: StayFit+ Initiative (id: "stayfit")
    if (project.id === "stayfit") {
      switch (p) {
        case 1:
          return (
            <div className="space-y-6">
              <div className="border-l-4 border-neon-green pl-4 py-2">
                <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest block">Health & Fitness Platform</span>
                <h1 className="text-3xl font-display font-black text-slate-900 leading-none">StayFit+ Initiative</h1>
                <p className="text-sm font-medium text-slate-600 mt-1">Product Requirements Document · Q2 2025</p>
              </div>

              <div className="bg-slate-900 text-white p-5 rounded-lg border border-slate-800 text-center space-y-2">
                <p className="font-serif italic text-lg text-emerald-400">"Move more. Connect deeper. Stay longer."</p>
                <span className="text-[10px] font-mono text-slate-400 tracking-wider block">PREPARED BY: VITAFIT PRODUCT TEAM</span>
              </div>

              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="bg-red-50 border border-red-200 rounded p-4">
                  <div className="text-3xl font-black text-red-600">39%</div>
                  <div className="text-[10px] font-bold text-slate-700 uppercase mt-1">30-Day Retention</div>
                  <div className="text-[9px] text-slate-500">was 58% two quarters ago</div>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded p-4">
                  <div className="text-3xl font-black text-slate-900">1.4x</div>
                  <div className="text-[10px] font-bold text-slate-700 uppercase mt-1">Sessions / Week</div>
                  <div className="text-[9px] text-slate-500">benchmark is 3+</div>
                </div>
                <div className="bg-emerald-50 border border-emerald-200 rounded p-4">
                  <div className="text-3xl font-black text-emerald-600">2.3x</div>
                  <div className="text-[10px] font-bold text-slate-700 uppercase mt-1">Social Retention</div>
                  <div className="text-[9px] text-slate-500">proven on Peloton / Strava</div>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Solution Pillars</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-teal-50/50 border border-teal-200 rounded p-4 space-y-2">
                    <span className="bg-teal-600 text-white text-[9px] font-mono font-bold px-2 py-0.5 rounded uppercase">Feature 01 — Gamification & Rewards</span>
                    <p className="text-xs text-slate-700 leading-relaxed font-semibold">XP points per session · Daily streak counter · Badge wall in profile · Weekly leaderboard · VitaCoins Reward Store · Smart push nudges.</p>
                  </div>
                  <div className="bg-orange-50/50 border border-orange-200 rounded p-4 space-y-2">
                    <span className="bg-orange-600 text-white text-[9px] font-mono font-bold px-2 py-0.5 rounded uppercase">Feature 02 — Community Challenges</span>
                    <p className="text-xs text-slate-700 leading-relaxed font-semibold">Challenge Hub tab with team events · Social feed with emoji reactions · Instructor weekly check-in videos · Auto celebration screens · Smart re-challenge CTA.</p>
                  </div>
                </div>
              </div>
            </div>
          );
        case 2:
          return (
            <div className="space-y-5">
              <h2 className="text-xl font-display font-black text-slate-900 pb-2 border-b border-slate-200">01. The Problem — What Are We Solving?</h2>
              
              <div className="bg-amber-50 border border-amber-200 rounded p-4 flex gap-3 text-xs text-slate-800 leading-relaxed font-medium">
                <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0" />
                <div>
                  <span className="font-bold block mb-0.5">Critical Core Retention Slip</span>
                  Internal telemetry shows motivation drops sharply on Day 7 and Day 21. Users feel isolated and find no social validation.
                </div>
              </div>

              <div className="overflow-hidden border border-slate-200 rounded-lg">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-slate-100 border-b border-slate-200 font-bold text-slate-700">
                      <th className="p-3">Pain Point</th>
                      <th className="p-3">What We're Seeing</th>
                      <th className="p-3">Business Impact</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-150 font-medium text-slate-800">
                    <tr>
                      <td className="p-3 font-bold">Retention collapse</td>
                      <td className="p-3">30-day retention dropped from 58% to 39% in 2 quarters.</td>
                      <td className="p-3 text-red-600 font-bold">~Rs 2.1 Cr ARR at risk</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold">Motivation fades fast</td>
                      <td className="p-3">Drop-off spikes on Day 7 and Day 21 post-signup.</td>
                      <td className="p-3">LTV is half of industry benchmark.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold">No social connection</td>
                      <td className="p-3">Only 12% of users ever interact with peers or instructors.</td>
                      <td className="p-3">Zero community-driven viral loops.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold">No reason to return</td>
                      <td className="p-3">Platform lacks milestone celebrations or streaks.</td>
                      <td className="p-3">Competitors filling the habit gap.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          );
        case 3:
          return (
            <div className="space-y-6">
              <h2 className="text-xl font-display font-black text-slate-900 pb-2 border-b border-slate-200">03. Success — How Will We Measure It?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-slate-200 rounded-lg p-4 space-y-3 bg-slate-50/50">
                  <span className="text-xs font-mono font-bold text-slate-500 uppercase block tracking-wider">Metrics Scorecard</span>
                  <div className="space-y-2 text-xs font-semibold">
                    <div className="flex justify-between border-b border-slate-150 pb-1.5">
                      <span className="text-slate-700">30-day user retention rate:</span>
                      <span className="text-emerald-600 font-bold">39% → 52%+ (M3)</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-150 pb-1.5">
                      <span className="text-slate-700">Sessions per user per week:</span>
                      <span className="text-emerald-600 font-bold">1.4 → 2.5+ (M2)</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-150 pb-1.5">
                      <span className="text-slate-700">Challenge participation (MAU):</span>
                      <span className="text-emerald-600 font-bold">0% → 25%+ (M2)</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-150 pb-1.5">
                      <span className="text-slate-700">Users with 7-day streak (WAU):</span>
                      <span className="text-emerald-600 font-bold">0% → 30%+ (M3)</span>
                    </div>
                  </div>
                </div>

                <div className="border border-slate-200 rounded-lg p-4 space-y-3">
                  <span className="text-xs font-mono font-bold text-slate-500 uppercase block tracking-wider">04. Audience Demographics</span>
                  <div className="space-y-2 text-[11px] font-medium text-slate-700">
                    <div className="p-2 bg-emerald-50 rounded border border-emerald-150">
                      <span className="font-bold text-emerald-800 block">Primary — Working Professionals (25-35 yrs)</span>
                      Goal-driven but time-poor. Needs clear progress markers and quick gamification wins.
                    </div>
                    <div className="p-2 bg-orange-50 rounded border border-orange-150">
                      <span className="font-bold text-orange-800 block">Secondary — Gen Z Beginners (18-24 yrs)</span>
                      Socially wired. Engages deeply when social feeds and peer sharing exists.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        case 4:
          return (
            <div className="space-y-5">
              <h2 className="text-xl font-display font-black text-slate-900 pb-2 border-b border-slate-200">06. Experiment & Rollout Plan</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-medium">
                <div className="bg-slate-50 border border-slate-200 rounded p-4 space-y-1">
                  <span className="font-mono font-bold text-slate-500 uppercase text-[9px] block">PHASE 0 — RESEARCH (WEEKS 1–2)</span>
                  <span className="font-bold text-slate-900 block text-sm">Qualitative Discovery</span>
                  <p className="text-slate-600 text-[11px] leading-relaxed">30 interviews with churned users. Finalize XP formula, coin economy mechanics, and wireframes.</p>
                </div>

                <div className="bg-teal-50/40 border border-teal-150 rounded p-4 space-y-1">
                  <span className="font-mono font-bold text-teal-600 uppercase text-[9px] block">PHASE 1 — GAMIFICATION MVP (WEEKS 3–7)</span>
                  <span className="font-bold text-slate-900 block text-sm">XP & Streak Engine Test</span>
                  <p className="text-slate-600 text-[11px] leading-relaxed">Ship streak MVP to 10% cohort. Lightweight home streak card and profile badges. Target: +5pp Day-7 retention.</p>
                </div>

                <div className="bg-orange-50/40 border border-orange-150 rounded p-4 space-y-1">
                  <span className="font-mono font-bold text-orange-600 uppercase text-[9px] block">PHASE 2 — COMMUNITY BETA (WEEKS 7–13)</span>
                  <span className="font-bold text-slate-900 block text-sm">Challenge Hub Pilot</span>
                  <p className="text-slate-600 text-[11px] leading-relaxed">Roll out challenge hub to 25% of users with one instructor pilot challenge. Gate: 20%+ beta cohort joins.</p>
                </div>

                <div className="bg-emerald-50/40 border border-emerald-150 rounded p-4 space-y-1">
                  <span className="font-mono font-bold text-emerald-600 uppercase text-[9px] block">PHASE 3 — GA LAUNCH (WEEKS 14–19)</span>
                  <span className="font-bold text-slate-900 block text-sm">GA Rollout</span>
                  <p className="text-slate-600 text-[11px] leading-relaxed">Full rollout with push notifications, coins reward store, and App Store promotion push.</p>
                </div>
              </div>
            </div>
          );
        default: return null;
      }
    }

    // Zepto: Increasing AOV (id: "zepto")
    if (project.id === "zepto") {
      switch (p) {
        case 1:
          return (
            <div className="space-y-6">
              <div className="border-l-4 border-violet-700 pl-4 py-2">
                <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest block">Quick Commerce Product Strategy</span>
                <h1 className="text-3xl font-display font-black text-slate-900 leading-none">Zepto: Increasing AOV</h1>
                <p className="text-sm font-medium text-slate-600 mt-1">Prepared by: Chavi Singhal · Manasa Ganti · Sarath Chandar</p>
              </div>

              <div className="bg-indigo-900 text-white p-5 rounded-lg border border-indigo-850 space-y-2">
                <span className="text-[10px] font-mono text-indigo-300 tracking-wider block uppercase">AOV GROWTH STRATEGY</span>
                <p className="text-base font-bold text-indigo-100">Why Are Our Baskets So Small? A strategy to grow Average Order Value past Rs.400+.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-center">
                <div className="bg-slate-50 border border-slate-200 rounded p-4">
                  <div className="text-3xl font-black text-slate-900">42%</div>
                  <div className="text-[10px] font-bold text-slate-700 uppercase mt-1">Orders &lt; Rs.200</div>
                  <div className="text-[9px] text-slate-500">Nearly half of all orders fall far below target</div>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded p-4">
                  <div className="text-3xl font-black text-slate-900">38%</div>
                  <div className="text-[10px] font-bold text-slate-700 uppercase mt-1">Stop At Free Delivery</div>
                  <div className="text-[9px] text-slate-500">Threshold treated as a check-out signal</div>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded p-4">
                  <div className="text-3xl font-black text-slate-900">55%</div>
                  <div className="text-[10px] font-bold text-slate-700 uppercase mt-1">Reorder Loop</div>
                  <div className="text-[9px] text-slate-500">Over half never discover new catalog items</div>
                </div>
              </div>

              <div className="bg-violet-50 border border-violet-100 rounded-lg p-4 text-xs text-slate-700 font-medium leading-relaxed">
                <span className="font-bold text-violet-900 block mb-1">Our Problem in Numbers</span>
                Zepto's average basket sits at around <span className="font-bold text-slate-900">Rs.260–300</span>, while the target benchmark is <span className="font-bold text-violet-700">Rs.400+</span>. This gap happens because the product workflow isn't optimized to help users discover.
              </div>
            </div>
          );
        case 2:
          return (
            <div className="space-y-4">
              <h2 className="text-xl font-display font-black text-slate-900 pb-2 border-b border-slate-200">The Four Types of Zepto Shoppers</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-semibold">
                <div className="border border-orange-200 bg-orange-50/20 p-3.5 rounded-lg space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-orange-800 text-sm">Threshold Chasers</span>
                    <span className="bg-orange-100 text-orange-800 px-1.5 py-0.5 rounded font-mono text-[9px]">35% Users</span>
                  </div>
                  <p className="text-slate-600 text-[11px] leading-relaxed">Avg Basket: Rs.99–149. One goal: unlock free delivery. Stops adding immediately once limit is hit.</p>
                </div>

                <div className="border border-amber-200 bg-amber-50/20 p-3.5 rounded-lg space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-amber-800 text-sm">Urgency Shoppers</span>
                    <span className="bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded font-mono text-[9px]">27% Users</span>
                  </div>
                  <p className="text-slate-600 text-[11px] leading-relaxed">Avg Basket: Rs.149–249. Mission-shopping for one urgent item (medicine, chargers). Search to checkout under 90s.</p>
                </div>

                <div className="border border-indigo-200 bg-indigo-50/20 p-3.5 rounded-lg space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-indigo-800 text-sm">Habit Reorderers</span>
                    <span className="bg-indigo-100 text-indigo-800 px-1.5 py-0.5 rounded font-mono text-[9px]">23% Users</span>
                  </div>
                  <p className="text-slate-600 text-[11px] leading-relaxed">Avg Basket: Rs.280–360. Regular routine orders (dairy, bread). Session begins and ends in reorder tab.</p>
                </div>

                <div className="border border-teal-200 bg-teal-50/20 p-3.5 rounded-lg space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-teal-800 text-sm">Explorer Builders</span>
                    <span className="bg-teal-100 text-teal-800 px-1.5 py-0.5 rounded font-mono text-[9px]">15% Users</span>
                  </div>
                  <p className="text-slate-600 text-[11px] leading-relaxed">Avg Basket: Rs.480–720. Best users. Browses multiple categories, tries new brands. Price-insensitive.</p>
                </div>
              </div>
            </div>
          );
        case 3:
          return (
            <div className="space-y-4">
              <h2 className="text-xl font-display font-black text-slate-900 pb-2 border-b border-slate-200">The 5 Core Blockers Preventing Growth</h2>
              
              <div className="space-y-2 text-xs font-semibold text-slate-800">
                <div className="p-3 border border-slate-200 bg-slate-50 rounded-lg flex gap-3 items-start">
                  <span className="bg-red-100 text-red-800 text-[9px] font-mono px-2 py-0.5 rounded shrink-0 uppercase">MINDSET</span>
                  <div>
                    <span className="font-bold text-slate-900 block">Free delivery feels like a finish line, not starting point</span>
                    The app celebrates crossing the limit, teaching people to check out immediately.
                  </div>
                </div>

                <div className="p-3 border border-slate-200 bg-slate-50 rounded-lg flex gap-3 items-start">
                  <span className="bg-orange-100 text-orange-800 text-[9px] font-mono px-2 py-0.5 rounded shrink-0 uppercase">DESIGN</span>
                  <div>
                    <span className="font-bold text-slate-900 block">Search is a one-way tunnel straight to checkout</span>
                    Search → product page → add to cart → checkout. No related suggestion surfaces.
                  </div>
                </div>

                <div className="p-3 border border-slate-200 bg-slate-50 rounded-lg flex gap-3 items-start">
                  <span className="bg-orange-100 text-orange-800 text-[9px] font-mono px-2 py-0.5 rounded shrink-0 uppercase">DESIGN</span>
                  <div>
                    <span className="font-bold text-slate-900 block">Reorder button skips everything interesting</span>
                    Bypasses the home recommendation rails entirely for 23% of habit users.
                  </div>
                </div>

                <div className="p-3 border border-slate-200 bg-slate-50 rounded-lg flex gap-3 items-start">
                  <span className="bg-blue-100 text-blue-800 text-[9px] font-mono px-2 py-0.5 rounded shrink-0 uppercase">TECH</span>
                  <div>
                    <span className="font-bold text-slate-900 block">'You might also like' shows generic popular list</span>
                    No contextual co-occurrence matching (e.g. suggesting butter/jam when milk & bread is in cart).
                  </div>
                </div>
              </div>
            </div>
          );
        case 4:
          return (
            <div className="space-y-4">
              <h2 className="text-xl font-display font-black text-slate-900 pb-2 border-b border-slate-200">Recommended Build Sequence — RICE Priority</h2>
              
              <div className="overflow-hidden border border-slate-200 rounded-lg">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-slate-100 border-b border-slate-200 font-bold text-slate-700">
                      <th className="p-2.5">Solution</th>
                      <th className="p-2.5 text-center">RICE Score</th>
                      <th className="p-2.5 text-center">AOV Uplift</th>
                      <th className="p-2.5 text-center">Effort</th>
                      <th className="p-2.5">Target segment</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-150 font-medium text-slate-800">
                    <tr className="bg-violet-50/30">
                      <td className="p-2.5 font-bold text-violet-900">01. Cart Add-on Nudges</td>
                      <td className="p-2.5 text-center font-black text-violet-700">473</td>
                      <td className="p-2.5 text-center font-bold text-emerald-600">+Rs.20-80</td>
                      <td className="p-2.5 text-center">2 wks</td>
                      <td className="p-2.5">Threshold Chasers (35%)</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold">02. Contextual Recommendations</td>
                      <td className="p-2.5 text-center font-bold">283</td>
                      <td className="p-2.5 text-center text-emerald-600 font-bold">+Rs.50-100</td>
                      <td className="p-2.5 text-center">3 wks</td>
                      <td className="p-2.5">Urgency Shoppers (27%)</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold">03. Bundles & Combos</td>
                      <td className="p-2.5 text-center font-bold">200</td>
                      <td className="p-2.5 text-center text-emerald-600 font-bold">+Rs.100-150</td>
                      <td className="p-2.5 text-center">4 wks</td>
                      <td className="p-2.5">Urgency Shoppers (27%)</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold">04. Value Stack Loyalty</td>
                      <td className="p-2.5 text-center font-bold">79</td>
                      <td className="p-2.5 text-center text-emerald-600 font-bold">+Rs.200-500</td>
                      <td className="p-2.5 text-center">8 wks</td>
                      <td className="p-2.5">Explorer Builders (15%)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          );
        default: return null;
      }
    }

    // Personalised Learning Recommendation System (id: "learning-system")
    if (project.id === "learning-system") {
      switch (p) {
        case 1:
          return (
            <div className="space-y-6">
              <div className="border-l-4 border-blue-700 pl-4 py-2">
                <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest block">Online Education Platform Brief</span>
                <h1 className="text-3xl font-display font-black text-slate-900 leading-none">Learning Recommendation System</h1>
                <p className="text-sm font-medium text-slate-600 mt-1">Product Design Brief — May 2026</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-center text-xs font-bold font-mono">
                <div className="bg-blue-50 border border-blue-150 rounded p-3 text-blue-800">
                  +25% Engagement
                </div>
                <div className="bg-indigo-50 border border-indigo-150 rounded p-3 text-indigo-800">
                  +30% Completion
                </div>
                <div className="bg-emerald-50 border border-emerald-150 rounded p-3 text-emerald-800">
                  +20% Satisfaction
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider border-b pb-1">Personas & Key User Stories</h3>
                <div className="space-y-2 text-[11px] font-medium text-slate-700">
                  <div className="p-2.5 bg-slate-50 rounded border border-slate-200">
                    <span className="font-bold text-slate-900 block">Persona 1: Learners</span>
                    US01: Receive personalised course recommendations based on interests.<br />
                    US02: Track progress with visual dashboards.<br />
                    US03: Set career goals and receive curated learning path.
                  </div>
                  <div className="p-2.5 bg-slate-50 rounded border border-slate-200">
                    <span className="font-bold text-slate-900 block">Persona 2: Instructors</span>
                    US06: View analytics on how students interact with courses to identify drop-off nodes.<br />
                    US08: Receive AI-generated suggestions for catalog content gaps.
                  </div>
                </div>
              </div>
            </div>
          );
        case 2:
          return (
            <div className="space-y-5">
              <h2 className="text-xl font-display font-black text-slate-900 pb-2 border-b border-slate-200">Step 2: Functional Requirements</h2>
              
              <div className="overflow-hidden border border-slate-200 rounded-lg text-xs">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 border-b border-slate-200 font-bold text-slate-700">
                      <th className="p-2.5">User</th>
                      <th className="p-2.5">Feature</th>
                      <th className="p-2.5">Description</th>
                      <th className="p-2.5 text-center">Priority</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-150 font-medium text-slate-800">
                    <tr>
                      <td className="p-2.5">Learner</td>
                      <td className="p-2.5 font-bold">Personalised Recs</td>
                      <td className="p-2.5">ML-driven engine surfaces matching courses.</td>
                      <td className="p-2.5 text-center font-bold text-red-600">High</td>
                    </tr>
                    <tr>
                      <td className="p-2.5">Learner</td>
                      <td className="p-2.5 font-bold">Progress Dashboard</td>
                      <td className="p-2.5">Real-time completion % and hours tracker.</td>
                      <td className="p-2.5 text-center font-bold text-red-600">High</td>
                    </tr>
                    <tr>
                      <td className="p-2.5">Instructor</td>
                      <td className="p-2.5 font-bold">Content Analytics</td>
                      <td className="p-2.5">Per-course enrollment and video watch dropoffs.</td>
                      <td className="p-2.5 text-center font-bold text-red-600">High</td>
                    </tr>
                    <tr>
                      <td className="p-2.5">Admin</td>
                      <td className="p-2.5 font-bold">Algorithm Config</td>
                      <td className="p-2.5">No-code interface to adjust weight parameters.</td>
                      <td className="p-2.5 text-center font-bold text-amber-600">Medium</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          );
        case 3:
          return (
            <div className="space-y-4">
              <h2 className="text-xl font-display font-black text-slate-900 pb-2 border-b border-slate-200">System Architecture & Compliance</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-semibold">
                <div className="border border-slate-200 p-4 rounded-lg space-y-2">
                  <span className="font-mono text-blue-600 text-[10px] block uppercase">Step 4: Tech Stack Spec</span>
                  <div className="space-y-1 text-slate-700">
                    <div><span className="font-bold">Database:</span> PostgreSQL (User profiles, goals)</div>
                    <div><span className="font-bold">Search DB:</span> Elasticsearch (Catalog filtering)</div>
                    <div><span className="font-bold">Data Store:</span> Kafka + ClickHouse (Interaction events)</div>
                    <div><span className="font-bold">Feature Store:</span> Redis (Real-time ML features)</div>
                  </div>
                </div>

                <div className="border border-slate-200 p-4 rounded-lg space-y-2">
                  <span className="font-mono text-emerald-600 text-[10px] block uppercase">Compliance & SLAs</span>
                  <div className="space-y-1 text-slate-700">
                    <div><span className="font-bold">API SLA:</span> &lt;200ms response time at 95th %ile</div>
                    <div><span className="font-bold">Compliance:</span> GDPR-compliant (PII in EU, export in 72h)</div>
                    <div><span className="font-bold">Accessibility:</span> WCAG 2.1 Level AA conforms</div>
                  </div>
                </div>
              </div>
            </div>
          );
        default: return null;
      }
    }

    // Twitter / X: Funnel & Growth Strategy (id: "twitter-growth")
    if (project.id === "twitter-growth") {
      switch (p) {
        case 1:
          return (
            <div className="space-y-6">
              <div className="border-l-4 border-slate-900 pl-4 py-2">
                <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest block">Product Growth Analysis</span>
                <h1 className="text-3xl font-display font-black text-slate-900 leading-none">Twitter / X Funnel & Growth</h1>
                <p className="text-sm font-medium text-slate-600 mt-1">Audit Report — May 2025</p>
              </div>

              <div className="overflow-hidden border border-slate-200 rounded-lg text-xs font-semibold">
                <div className="bg-slate-100 p-3 border-b font-bold text-slate-700 uppercase tracking-wider text-[10px]">AARRR Funnel Map (500M+ visitors)</div>
                <div className="p-3.5 space-y-2.5">
                  <div className="flex justify-between items-center border-b pb-1">
                    <span className="text-slate-800">Acquisition (SEO, App store, Embeds):</span>
                    <span className="text-slate-900 font-bold font-mono">100% conversion</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-1">
                    <span className="text-slate-800">Activation ("Aha Moment" follow depth):</span>
                    <span className="text-amber-600 font-bold font-mono">~60% conversion</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-1">
                    <span className="text-slate-800">Retention (DAU/MAU stickiness):</span>
                    <span className="text-amber-600 font-bold font-mono">~38% conversion</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-1">
                    <span className="text-slate-800">Revenue (X Premium subscriptions):</span>
                    <span className="text-red-600 font-bold font-mono">~12% conversion</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-800">Referral (No formal program):</span>
                    <span className="text-red-600 font-bold font-mono">~8% conversion</span>
                  </div>
                </div>
              </div>
            </div>
          );
        case 2:
          return (
            <div className="space-y-4">
              <h2 className="text-xl font-display font-black text-slate-900 pb-2 border-b border-slate-200">Gaps & prioritized Product Epics</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-medium">
                <div className="p-3 border border-red-200 bg-red-50/20 rounded-lg">
                  <span className="font-bold text-red-800 block text-sm mb-1">Cold-Start Relevance Gap</span>
                  New users receiving politically divisive feeds on signup, causing a 40%+ Day 1 churn.
                </div>
                <div className="p-3 border border-amber-200 bg-amber-50/20 rounded-lg">
                  <span className="font-bold text-amber-800 block text-sm mb-1">No Formal Referral loop</span>
                  Zero referral incentive program, completely ignoring organic viral invite growth.
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-xs font-bold text-slate-500 uppercase block tracking-wider">Growth Roadmap Epics</h3>
                <div className="space-y-1.5 text-xs font-semibold">
                  <div className="flex justify-between p-2 bg-slate-50 rounded border">
                    <span>E1 — Smart Onboarding Wizard</span>
                    <span className="text-emerald-600 font-bold">1st Priority</span>
                  </div>
                  <div className="flex justify-between p-2 bg-slate-50 rounded border">
                    <span>E2 — Communities 2.0 Redesign</span>
                    <span className="text-emerald-600 font-bold">2nd Priority</span>
                  </div>
                  <div className="flex justify-between p-2 bg-slate-50 rounded border">
                    <span>E3 — Referral Rewards System</span>
                    <span className="text-emerald-600 font-bold">3rd Priority</span>
                  </div>
                  <div className="flex justify-between p-2 bg-slate-50 rounded border">
                    <span>E4 — X Premium Lite ($3/mo)</span>
                    <span className="text-emerald-600 font-bold">4th Priority</span>
                  </div>
                </div>
              </div>
            </div>
          );
        case 3:
          return (
            <div className="space-y-4">
              <h2 className="text-xl font-display font-black text-slate-900 pb-2 border-b border-slate-200">RICE prioritized Growth Roadmap</h2>
              
              <div className="overflow-hidden border border-slate-200 rounded-lg text-xs">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 border-b border-slate-200 font-bold text-slate-700">
                      <th className="p-2.5">Epic</th>
                      <th className="p-2.5">Funnel stage</th>
                      <th className="p-2.5 text-center">RICE Score</th>
                      <th className="p-2.5 text-center">Effort</th>
                      <th className="p-2.5 text-center">Rank</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-150 font-medium text-slate-800">
                    <tr className="bg-emerald-50/20">
                      <td className="p-2.5 font-bold text-slate-900">E1 Smart Onboarding Wizard</td>
                      <td className="p-2.5">ACTIVATION</td>
                      <td className="p-2.5 text-center font-bold text-emerald-600">48</td>
                      <td className="p-2.5 text-center">4 mo</td>
                      <td className="p-2.5 text-center font-bold">1st</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold">E2 Communities 2.0</td>
                      <td className="p-2.5">RETENTION</td>
                      <td className="p-2.5 text-center font-bold text-slate-700">14</td>
                      <td className="p-2.5 text-center">6 mo</td>
                      <td className="p-2.5 text-center">2nd</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold">E3 Referral Rewards</td>
                      <td className="p-2.5">REFERRAL</td>
                      <td className="p-2.5 text-center font-bold text-slate-700">40</td>
                      <td className="p-2.5 text-center">3 mo</td>
                      <td className="p-2.5 text-center font-bold">3rd</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold">E4 X Premium Lite ($3/mo)</td>
                      <td className="p-2.5">REVENUE</td>
                      <td className="p-2.5 text-center font-bold text-slate-700">15</td>
                      <td className="p-2.5 text-center">5 mo</td>
                      <td className="p-2.5 text-center">4th</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          );
        default: return null;
      }
    }

    // Zomato: CY2026 Strategy (id: "zomato-strategy")
    if (project.id === "zomato-strategy") {
      switch (p) {
        case 1:
          return (
            <div className="space-y-6">
              <div className="border-l-4 border-red-600 pl-4 py-2">
                <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest block">Zomato Food Delivery Strategy</span>
                <h1 className="text-3xl font-display font-black text-slate-900 leading-none">Zomato CY2026 Strategy</h1>
                <p className="text-sm font-medium text-slate-600 mt-1">Prepared by: Product Manager · March 2026</p>
              </div>

              <div className="bg-red-600 text-white p-4.5 rounded-lg border border-red-750 text-center font-semibold">
                Objective: Make Zomato the most indispensable daily food companion for urban India.
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-center text-xs font-mono font-bold">
                <div className="bg-slate-50 border rounded p-2.5">
                  <div className="text-slate-900 text-lg">35% → 55%</div>
                  <div className="text-[9px] text-slate-500 uppercase">Retention</div>
                </div>
                <div className="bg-slate-50 border rounded p-2.5">
                  <div className="text-slate-900 text-lg">+40% YoY</div>
                  <div className="text-[9px] text-slate-500 uppercase">WAU Growth</div>
                </div>
                <div className="bg-slate-50 border rounded p-2.5">
                  <div className="text-slate-900 text-lg">2.5x → 3.5x</div>
                  <div className="text-[9px] text-slate-500 uppercase">Order / Mo</div>
                </div>
                <div className="bg-slate-50 border rounded p-2.5">
                  <div className="text-slate-900 text-lg">14d → 7d</div>
                  <div className="text-[9px] text-slate-500 uppercase">2nd Order Speed</div>
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-500 uppercase block tracking-wider">7-Stage Funnel Drop-off Analysis</span>
                <div className="flex flex-col gap-1 text-[11px] font-mono font-bold text-slate-700">
                  <div className="bg-slate-100 p-1.5 flex justify-between rounded"><span>1. App Open</span> <span>100%</span></div>
                  <div className="bg-slate-100 p-1.5 flex justify-between rounded w-[90%]"><span>2. Restaurant Discovery (28% drop)</span> <span>72%</span></div>
                  <div className="bg-slate-100 p-1.5 flex justify-between rounded w-[80%]"><span>3. Menu View (17% drop)</span> <span>55%</span></div>
                  <div className="bg-slate-100 p-1.5 flex justify-between rounded w-[70%]"><span>4. Cart Creation (17% drop)</span> <span>38%</span></div>
                  <div className="bg-slate-100 p-1.5 flex justify-between rounded w-[60%]"><span>5. Checkout (10% drop)</span> <span>28%</span></div>
                </div>
              </div>
            </div>
          );
        case 2:
          return (
            <div className="space-y-5">
              <h2 className="text-xl font-display font-black text-slate-900 pb-2 border-b border-slate-200">Cohort retention Challenges</h2>
              
              <div className="space-y-3 text-xs font-semibold">
                <div className="p-3 border border-slate-200 bg-slate-50 rounded-lg space-y-1">
                  <span className="font-bold text-slate-950 block text-sm">Cohort A — New vs Repeat Users (&lt;3 orders)</span>
                  <div className="text-red-600 font-bold">Challenge: ~60% churn after very first order. Generic onboarding experience.</div>
                  <div className="text-emerald-700">Hypothesis: Taste-profile onboarding quiz right after 1st order, sending personalised 'Your Next Meal' triggers within 24h.</div>
                </div>

                <div className="p-3 border border-slate-200 bg-slate-50 rounded-lg space-y-1">
                  <span className="font-bold text-slate-950 block text-sm">Cohort B — High-Frequency vs Low-Frequency</span>
                  <div className="text-red-600 font-bold">Challenge: Low perceived value of Zomato for everyday weekday meals.</div>
                  <div className="text-emerald-700">Hypothesis: Weekday Combo Deals (Mon-Fri discounted kits) targeted to low-freq.</div>
                </div>

                <div className="p-3 border border-slate-200 bg-slate-50 rounded-lg space-y-1">
                  <span className="font-bold text-slate-950 block text-sm">Cohort C — Discount-Driven vs Full-Price</span>
                  <div className="text-red-600 font-bold">Challenge: Heavy promotional cohort churns once coupon expires.</div>
                  <div className="text-emerald-700">Hypothesis: Transition discount users to loyalty streaks and exclusive Gold 2.0 perks.</div>
                </div>
              </div>
            </div>
          );
        case 3:
          return (
            <div className="space-y-5">
              <h2 className="text-xl font-display font-black text-slate-900 pb-2 border-b border-slate-200">Zomato Daily & Gold 2.0 specs</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-medium">
                <div className="p-4 border rounded-lg space-y-2 bg-slate-50">
                  <span className="font-mono text-red-600 text-[10px] block uppercase font-bold">Initiative 01 — Zomato Daily</span>
                  <span className="font-bold text-slate-900 block text-sm">AI Meal Planner & Subscriptions</span>
                  <p className="text-slate-600 leading-relaxed text-[11px]">AI-personalized weekly meal builder, automated dinner triggers, and office lunch pre-scheduling.</p>
                </div>

                <div className="p-4 border rounded-lg space-y-2 bg-slate-50">
                  <span className="font-mono text-red-600 text-[10px] block uppercase font-bold">Initiative 02 — Gold 2.0 Loyalty</span>
                  <span className="font-bold text-slate-900 block text-sm">Streak-based Subscription</span>
                  <p className="text-slate-600 leading-relaxed text-[11px]">Tiered loyalty focusing on consecutive day order streaks, weekday-exclusive merchant freebies, and priority routing.</p>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 p-4 rounded-lg text-xs font-bold text-red-950 flex gap-3 items-center">
                <Info className="h-5 w-5 text-red-600 shrink-0" />
                <span>North Star Metric: 30-Day User Retention Rate targeted at 55% by December 2026.</span>
              </div>
            </div>
          );
        default: return null;
      }
    }

    // Default Fallback
    return (
      <div className="text-center py-10 space-y-4">
        <Info className="h-12 w-12 text-slate-300 mx-auto" />
        <h3 className="font-bold text-slate-800 text-lg">Document Attachment Simulated</h3>
        <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
          This case study was compiled from my Airtribe PM portfolio. Explore the tabs on the left/above to view the complete structured product requirements and metrics.
        </p>
      </div>
    );
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "pdf":
        return (
          <motion.div
            key="pdf"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col h-full space-y-4"
          >
            {/* Action Bar */}
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono font-bold">
                <Info className="h-4 w-4 text-neon-green" />
                <span>HIGH-FIDELITY PDF CLONE READER</span>
              </div>

              <div className="flex items-center gap-2">
                <button 
                  onClick={() => window.print()}
                  className="rounded p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                  title="Print Report"
                >
                  <Printer className="h-4 w-4" />
                </button>
                <button 
                  onClick={() => alert("Simulating download... Your report matches the portfolio specifications perfectly!")}
                  className="rounded p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                  title="Download Raw Report PDF"
                >
                  <Download className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Document Canvas */}
            <div className="flex-1 bg-slate-100 rounded-xl p-4 md:p-8 flex items-center justify-center min-h-[420px] overflow-y-auto">
              <div className="bg-white shadow-2xl rounded border border-slate-300 w-full max-w-2xl min-h-[480px] p-6 sm:p-10 relative flex flex-col justify-between overflow-hidden">
                {/* Confidential seal watermark */}
                <div className="absolute inset-0 flex items-center justify-center opacity-3 pointer-events-none select-none select-none">
                  <div className="font-display font-black text-6xl text-slate-900 border-8 border-slate-900 px-6 py-2 rotate-12 tracking-widest uppercase">CONFIDENTIAL</div>
                </div>

                {/* Page Content */}
                <div className="relative z-10 flex-1">
                  {renderPdfPageContent()}
                </div>

                {/* Page Footer */}
                <div className="relative z-10 border-t border-slate-200 mt-6 pt-3 flex justify-between items-center text-[9px] font-mono font-bold text-slate-400">
                  <span>CONFIDENTIAL | AIRTRIBE PRODUCT SERIES</span>
                  <span>PAGE {pdfPage} OF {totalPages}</span>
                </div>
              </div>
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-4 pt-2">
                <button
                  disabled={pdfPage === 1}
                  onClick={() => setPdfPage(prev => Math.max(1, prev - 1))}
                  className="flex items-center gap-1 px-3 py-1.5 rounded font-mono text-xs font-bold border border-slate-200 bg-white hover:border-slate-300 disabled:opacity-40 transition-colors cursor-pointer"
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span>PREV</span>
                </button>
                <span className="font-mono text-xs font-black text-slate-700">PAGE {pdfPage} OF {totalPages}</span>
                <button
                  disabled={pdfPage === totalPages}
                  onClick={() => setPdfPage(prev => Math.min(totalPages, prev + 1))}
                  className="flex items-center gap-1 px-3 py-1.5 rounded font-mono text-xs font-bold border border-slate-200 bg-white hover:border-slate-300 disabled:opacity-40 transition-colors cursor-pointer"
                >
                  <span>NEXT</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </motion.div>
        );

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
              <p className="rounded-lg border border-red-200 bg-red-50/50 p-5 text-sm leading-relaxed text-slate-800 font-bold">
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
                    {doc.targetUser.split(".")[0] || doc.targetUser.split(",")[0]}
                  </div>
                  <p className="text-sm leading-relaxed text-slate-700 font-medium">
                    {doc.targetUser.split(".").slice(1).join(".") || doc.targetUser.split(",").slice(1).join(",")}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="mb-2 font-display text-xs font-bold tracking-wider text-neon-green uppercase">
                  Validated User Insights
                </h4>
                <ul className="space-y-3">
                  {doc.userInsights.map((insight, idx) => (
                    <li key={idx} className="flex items-start text-sm text-slate-700 leading-relaxed font-medium">
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
                  <p className="text-sm leading-relaxed text-slate-700 font-medium">
                    {feature.description}
                  </p>
                  <div className="mt-3 pt-3 border-t border-cosmic-border/60 flex flex-wrap items-center gap-1.5 text-xs text-neon-green">
                    <span className="font-bold uppercase tracking-wider text-[10px]">Expected Impact:</span>
                    <span className="text-slate-800 font-bold">{feature.impact}</span>
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
                    <div className="text-2xl font-extrabold font-display text-neon-green leading-none my-2">
                      {sm.target}
                    </div>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed mt-2 border-t border-cosmic-border/60 pt-2 font-medium">
                    {sm.explanation}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="rounded-lg border border-cosmic-border bg-slate-50 p-5 flex gap-3.5 items-start">
              <TrendingUp className="text-neon-green h-5 w-5 shrink-0 mt-0.5" />
              <div>
                <h5 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">Analytics Verification Strategy</h5>
                <p className="text-xs leading-relaxed text-slate-600 font-medium">
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
                  <p className="text-sm text-slate-700 leading-relaxed pt-0.5 font-bold">
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
    <div className={`flex flex-col bg-cosmic-card border border-cosmic-border rounded-xl overflow-hidden ${isFullModal ? "h-full max-h-[85vh] md:max-h-[80vh]" : ""}`}>
      {/* Document Header */}
      <div className="flex flex-col gap-3 border-b border-cosmic-border bg-slate-50 p-5 sm:flex-row sm:items-center sm:justify-between shrink-0">
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
            project.docUrl.startsWith("#") ? (
              <button
                onClick={() => setActiveTab("pdf")}
                className="flex items-center gap-1.5 rounded border border-neon-green/20 bg-neon-green/10 px-3 py-2 font-mono text-xs font-bold text-neon-green hover:bg-neon-green/20 transition-all duration-200 cursor-pointer shrink-0"
              >
                <span className="uppercase tracking-wider text-[10px]">View High-Fi PDF</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </button>
            ) : (
              <a
                href={project.docUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded border border-cosmic-border bg-cosmic-card px-3 py-2 font-mono text-xs font-bold text-slate-700 hover:border-neon-green/30 transition-all duration-200 shrink-0"
              >
                <span className="uppercase tracking-wider text-[10px]">Read Spec PDF</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            )
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
      <div className="flex overflow-x-auto border-b border-cosmic-border bg-slate-50/50 px-4 py-2.5 scrollbar-none gap-2 shrink-0">
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
      <div className="flex-1 overflow-y-auto p-6 bg-white min-h-0">
        <AnimatePresence mode="wait">
          {renderTabContent()}
        </AnimatePresence>
      </div>

      {/* Document Footer / Sign-off */}
      <div className="border-t border-cosmic-border bg-slate-50 px-6 py-3.5 flex justify-between items-center text-[10px] font-mono font-bold text-slate-500 shrink-0">
        <span>AUTHOR: SARATH CHANDAR</span>
        <span>Airtribe PM Program Series • 2026</span>
      </div>
    </div>
  );
}
