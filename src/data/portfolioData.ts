import { Experience, Project, SkillCategory, Education, Certification } from "../types";

export const CONTACT_INFO = {
  name: "Sarath Chandar Balakrishnan",
  preferredName: "Sarath Chandar",
  tagline: "Aspiring Product Manager",
  statement: "I build products with empathy, validate with data, and deliver with absolute quality.",
  about: "From breaking products to building them. I've spent 8+ years at Tekion on the ARC platform, reading PRDs, pushing back on requirements that don't hold up, and mapping how dealerships actually use the product before features ship. That QA lens taught me to think in edge cases, user workflows, and risk. Working shoulder-to-shoulder with PMs and engineers, I picked up the muscle for product strategy, prioritization, and stakeholder management. Now, I am translating that seasoned product judgment and QA rigor into a full-time Product Management role.",
  email: "sarathchandarb@gmail.com",
  phone: "+91 96550 09981",
  location: "Coimbatore / Bengaluru, India",
  linkedin: "",
  github: "",
  resumeLink: "#", // Direct simulated download/view in portfolio
};

export const METRICS = [
  { id: "m1", value: "8+", label: "Years in Enterprise SaaS & QA", desc: "Embedded tightly with Product, Engineering & Design", color: "neon-cyan" },
  { id: "m2", value: "1", label: "Core Platform Owned End-to-End", desc: "Tekion's Automotive Retail Cloud (ARC) Service Module", color: "neon-purple" },
  { id: "m3", value: "5", label: "Releases per Quarter Supported", desc: "Managing scope, risk, and user-workflow validation", color: "neon-green" },
  { id: "m4", value: "2", label: "Promotions Earned", desc: "From Associate QA Engineer to Senior SDET at Tekion", color: "neon-pink" }
];

export const HIGHLIGHTS = [
  "8+ years of experience in enterprise SaaS QA & SDET, embedded directly with Product, Engineering, and Design teams.",
  "Owned regression and overall test strategy for Tekion's Automotive Retail Cloud (ARC) Service module - one of the most transaction-heavy modules of the platform.",
  "Strong product instinct: Famous for active PRD reviews, rigorous edge-case hunting, product gap analysis, user-workflow mapping, and leading UATs.",
  "AI-First PM training at Airtribe: Mastery of Product Strategy, Discovery, Metrics, PRDs, and Prototyping.",
  "Leveraging AI-assisted development (Claude Code, Augment, Lovable) to build prototypes alongside my day job, validating technical concepts in record time."
];

export const EXPERIENCES: Experience[] = [
  {
    id: "exp1",
    role: "Senior SDET (Senior Software Development Engineer in Test)",
    company: "Tekion Corp",
    period: "Jan 2019 – Present",
    location: "Bengaluru, India",
    description: [
      "Review PRDs and user stories alongside PMs, engineers, and designers before each release on the Automotive Retail Cloud (ARC) platform. Successfully flagged 100+ critical product gaps prior to development.",
      "Own the end-to-end test strategy for ARC Service module releases - evaluating and adjusting scope, highlighting risky product assumptions, and pushing back on requirements that do not hold up to real-world dealership usage.",
      "Utilize Claude Code, Augment, and Lovable to rapidly prototype automation frameworks, testing tools, and early-stage features before committing core engineering resources.",
      "Designed, built, and maintain the primary regression suite (Selenium, Java, TypeScript) covering business-critical dealer operations and financial transaction workflows.",
      "Promoted twice across the journey, progressing from Associate QA Engineer → QA Engineer → Senior SDET, recognizing strong technical execution and product advocacy."
    ],
    skills: ["PRD Analysis", "Edge-Case Hunting", "Selenium", "Java", "TypeScript", "TestNG", "Postman", "Jira", "Figma", "Amplitude"],
    metrics: [
      "5 releases/quarter supported on ARC Service",
      "100% regression ownership",
      "2 promotions received"
    ]
  },
  {
    id: "exp2",
    role: "Software Engineer (QA & Automation)",
    company: "LetzConnect Technologies Pvt. Ltd.",
    period: "Aug 2017 – Dec 2018",
    location: "Coimbatore, India",
    description: [
      "Tested complex educational web application functionality end to end, coordinating directly with software developers to isolate, track, and resolve system defects.",
      "Developed custom automation scripts to pull, parse, and process website content, significantly cutting down on manual verification time and accelerating release speed.",
      "Participated in agile planning sessions, providing feedback on technical feasibility and edge-cases for student-community networking features."
    ],
    skills: ["Web Testing", "Automation Scripts", "Defect Tracking", "SQL", "Manual Testing"],
    metrics: [
      "40% reduction in manual regression time",
      "Over 120 key defects identified and resolved"
    ]
  },
  {
    id: "exp3",
    role: "Technical Support Engineer",
    company: "CSS Corp / Slash Support",
    period: "Aug 2016 – Apr 2017",
    location: "Coimbatore, India",
    description: [
      "Supported Roku and Belkin customers on advanced connectivity, device setup, and hardware/software configuration issues.",
      "Gained frontline customer empathy and a deep understanding of where products actually break for real, non-technical users in the wild.",
      "Collaborated with tier-2 engineering to escalate and document consistent firmware issues, improving customer satisfaction."
    ],
    skills: ["Customer Support", "Troubleshooting", "User Empathy", "Root Cause Analysis"],
    metrics: [
      "95% customer satisfaction score",
      "Frontline exposure to product failure patterns"
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "pm",
    name: "Product Management",
    skills: [
      "Product Discovery",
      "User Research",
      "Product Strategy",
      "Prioritization (RICE/Kano)",
      "Roadmapping",
      "Product Metrics & Funnels",
      "PRD Writing",
      "Launch & Adoption Plan",
      "Stakeholder Management"
    ]
  },
  {
    id: "qe",
    name: "Quality Engineering & Strategy",
    skills: [
      "Manual Testing",
      "Test Automation Strategy",
      "API Testing & Verification",
      "Regression Testing Ownership",
      "SaaS Validation",
      "Risk Mitigation",
      "Root Cause Analysis",
      "UAT Coordination"
    ]
  },
  {
    id: "tech",
    name: "Technical Foundation",
    skills: [
      "SQL (PostgreSQL / MySQL)",
      "REST APIs",
      "Selenium WebDriver",
      "Java",
      "TypeScript & JavaScript",
      "Agile / Scrum",
      "Jira & Confluence",
      "SDLC & STLC"
    ]
  },
  {
    id: "ai",
    name: "AI-Assisted Product Development",
    skills: [
      "Claude Code & Prompt Eng",
      "Lovable / Augment Prototyping",
      "Rapid MVP Creation",
      "LLMs & RAG Architectures",
      "Vibe Coding for PMs",
      "AI-First PM Frameworks"
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "capstone",
    title: "GymBuddy AI Fitness Companion",
    subtitle: "Airtribe PM Capstone Project (0 → 1)",
    category: "Product (0→1)",
    tags: ["0→1 Product", "AI Coach", "UX Design", "GTM Strategy"],
    brief: "A live, fully responsive AI-assisted fitness companion that tackles gym consistency and workout anxieties. Features real-time guidance, customized scheduling, and interactive progression tracking. Designed from user research up to production.",
    deliverables: [
      "Full Product Requirement Document (PRD)",
      "Interactive Mockups & Wireframes",
      "Live Deployable Web MVP",
      "Comprehensive Go-To-Market Blueprint"
    ],
    liveUrl: "https://gymbuddy-149292217442.asia-southeast1.run.app/welcome",
    docUrl: "https://drive.google.com/file/d/1fiWSwglubyI2YvkBJ759D2xzXY5Ffmjs/view?usp=sharing",
    docMockup: {
      problemStatement: "More than 67% of gym memberships go unused because beginners face extreme gym anxiety, lack clear workout structures, and cannot afford personal trainers ($50-$100/hr). Existing apps act as simple databases of exercises rather than adaptive coaches.",
      targetUser: "Alex, 26, a young software professional in Bangalore. Alex wants to get fit but feels overwhelmed inside a crowded gym, doesn't know which exercises to pair, and loses motivation within 2 weeks.",
      userInsights: [
        "Gym anxiety is heavily driven by 'feeling watched' or 'doing the exercise wrong.'",
        "Consistency breaks down when users have to spend more than 5 minutes planning their workout in the app before starting.",
        "Beginners value real-time positive reinforcement and simplified micro-goals over advanced data dashboards."
      ],
      keyFeatures: [
        {
          name: "Smart AI Workout Constructor",
          description: "Generates daily workout splits customized to user's targeted muscle groups, available gym equipment, and current energy levels in less than 15 seconds.",
          impact: "Reduces time-to-start friction, completely eliminating choice paralysis."
        },
        {
          name: "Interactive Visual Form Helper",
          description: "A pocket-coach UI that breaks down complex compound lifts (Squats, Deadlifts) into simple, clear cues and visual micro-checklists.",
          impact: "Reduces form anxiety and builds immediate confidence in beginners."
        },
        {
          name: "Dynamic Streak & Motivation Loop",
          description: "Gamified progression and custom alerts powered by local triggers, built with modern React web standards.",
          impact: "Fosters user retention and daily habit formation through positive reinforcement."
        }
      ],
      successMetrics: [
        { metric: "Onboarding Completion Rate", target: "85%", explanation: "Measures whether the core setup flow is frictionless enough for new fitness enthusiasts." },
        { metric: "Weekly Workout Consistency (L7/L30)", target: "3.2x", explanation: "Ensures the motivation loop successfully drives repeat usage week-over-week." },
        { metric: "Day-30 User Retention", target: "38%", explanation: "Tracks sustained value delivery, outperforming the industry average of 12% for fitness apps." }
      ],
      gtmStrategy: [
        "Hyper-local partner programs with premium apartment-complex gym rooms in IT corridors.",
        "Vibrant micro-influencer content sharing genuine 'Before and After GymBuddy' 30-day challenges on Instagram and YouTube.",
        "Freemium launch on Product Hunt and local Tech Slack groups targeting software developers with sedentary lifestyles."
      ]
    }
  },
  {
    id: "growth",
    title: "Airtribe Growth & Retention Strategy",
    subtitle: "High-Engagement User Onboarding & Retention Mechanics",
    category: "Growth & Retention",
    tags: ["AARRR Funnel", "User Onboarding", "Streaks", "Retention Engine"],
    brief: "A complete growth study mapping out the activation funnel of a modern B2C product. Designed user streaks, context-rich push notifications, and personalized reward templates to curb Day-3 churn.",
    deliverables: [
      "Onboarding Flow Audit & Optimization Blueprint",
      "High-Conversion Habit Loop Specification",
      "Smart Push Notification Sequence & Trigger Matrix"
    ],
    docMockup: {
      problemStatement: "B2C mobile and web applications lose up to 55% of their signed-up users on Day 1, and 80% within the first week, due to complex onboarding flows that fail to deliver the 'Aha!' moment fast enough.",
      targetUser: "First-time sign-ups who are highly distracted, testing multiple products, and have low patience for setup overhead.",
      userInsights: [
        "The peak dropoff occurs when users are forced to fill out long profiles before seeing any product value.",
        "Interactive walk-throughs that let users 'do' instead of 'read' improve activation by 35%.",
        "Introducing visual progress bars during onboarding creates an completion bias (Zeigarnik Effect)."
      ],
      keyFeatures: [
        {
          name: "Progressive Profiling Engine",
          description: "Defers optional configuration questions into post-activation states, allowing users to experience the core product in 2 clicks.",
          impact: "Instantly increases onboarding completion by 28%."
        },
        {
          name: "Dynamic Habit Streak Visualizer",
          description: "A neon-glowing streak tracker that celebrates consecutive action days, backed by a micro-reward animation.",
          impact: "Increases Day-7 and Day-14 retention by triggering completion motivation."
        },
        {
          name: "Smart Re-Engagement Trigger Matrix",
          description: "An automated trigger framework sending context-aware, value-first push notifications based on user inactivity periods.",
          impact: "Recovers 15% of dormant users before they churn completely."
        }
      ],
      successMetrics: [
        { metric: "User Activation Rate", target: "+30%", explanation: "Percentage of signups who complete a core value action on Day 1." },
        { metric: "Day-7 User Retention", target: "45%", explanation: "Stabilizes the retention curve early in the customer lifecycle." },
        { metric: "Streak Continuation Rate", target: "62%", explanation: "Measures the power of gamified streaks in driving consecutive daily active usage." }
      ],
      gtmStrategy: [
        "Implement A/B tests on onboarding steps to identify critical dropoff nodes.",
        "Launch a '10-Day Consistent Habit' reward campaign offering unlockable premium badges.",
        "Utilize event tracking in Amplitude to isolate high-retaining user cohorts."
      ]
    }
  },
  {
    id: "adoption",
    title: "ARC Service Module Feature Adoption Plan",
    subtitle: "Tekion ARC-Inspired SaaS Feature Optimization",
    category: "Feature Adoption",
    tags: ["SaaS Optimization", "B2B Workflows", "Dealer Operations", "PRD Review"],
    brief: "Applying deep Automotive Retail Cloud (ARC) insights to structure a seamless, high-adoption upgrade path for dealer workshop schedulers, resolving complex desktop-mobile handoffs.",
    deliverables: [
      "Frictionless Multi-Device Service Check-In Proposal",
      "Technician Flow Optimization Blueprint",
      "SaaS Feature Rollout and Training Plan"
    ],
    docMockup: {
      problemStatement: "Automotive dealerships use legacy, fragmented service booking apps that require service advisors to enter redundant customer info, causing massive check-in lanes and low platform trust.",
      targetUser: "SaaS Service Advisors and Auto Technicians working in fast-paced, high-stress dealership environments.",
      userInsights: [
        "Service advisors are constantly on their feet, needing a mobile-first interface, while managers need deep desktop reporting.",
        "Complex data validation should happen in the background without halting the advisor's customer conversation.",
        "Technicians reject features that require typing; they prefer quick-tap diagnostic checklists."
      ],
      keyFeatures: [
        {
          name: "Interactive Quick-Scan Check-In",
          description: "Enables service advisors to walk around the car, scan the VIN, and automatically pre-populate vehicle make, model, and active recalls.",
          impact: "Reduces check-in duration from 12 minutes to 3 minutes."
        },
        {
          name: "Seamless Mobile-to-Desktop Handoff",
          description: "Real-time sync of active repair orders, allowing the front desk and workshop back-end to operate on a single source of truth.",
          impact: "Eliminates double data-entry and status communication delays."
        },
        {
          name: "Tap-to-Sign Mobile UAT/UAC",
          description: "Integrated digital consent forms on tablet screens for instant customer approval on additional service recommendations.",
          impact: "Drastically boosts upsell approval rates by 40%."
        }
      ],
      successMetrics: [
        { metric: "Advisor Feature Adoption Rate", target: "90%", explanation: "Tracks advisor preference for the new flow over manual legacy workarounds." },
        { metric: "Average Vehicle Check-in Latency", target: "<3 Mins", explanation: "Improves dealership throughput and customer satisfaction scores." },
        { metric: "Upsell Conversion Growth", target: "+25%", explanation: "Direct revenue impact of real-time technician recommendation sharing." }
      ],
      gtmStrategy: [
        "Phased rollouts starting with regional champions (high-volume dealerships) to serve as local reference sites.",
        "On-site shadow audits and training webinars for service managers.",
        "In-app tooltips and interactive, reward-based walkthroughs for service technicians."
      ]
    }
  },
  {
    id: "analytics",
    title: "Automotive SaaS Analytics & KPI Dashboard",
    subtitle: "Measuring Dealership Operational Efficiency",
    category: "Analytics & Metrics",
    tags: ["Product Analytics", "SLA Dashboards", "Operational Metrics", "Amplitude"],
    brief: "A complete metrics blueprint designed to align service lane workflows with actual operational outcomes. Tracks technician idle times, appointment latencies, and transaction velocities.",
    deliverables: [
      "Operational SLA Metrics Framework",
      "Interactive High-Contrast KPI Mockups",
      "Dealership Service Bottleneck Analysis"
    ],
    docMockup: {
      problemStatement: "Dealership managers lack real-time visibility into workshop productivity. Bottlenecks (like parts delivery delays or technician idle times) are only caught during end-of-month financial reviews, when it is too late to adapt.",
      targetUser: "Dealership Directors and General Managers who need high-level operational performance and financial indicators.",
      userInsights: [
        "Managers do not want complex raw logs; they want clear visual red/green alerts on lagging SLA steps.",
        "The 'Parts Waiting Room' is the single largest bottleneck in vehicle repair cycle times.",
        "Technician efficiency spikes when personal performance rankings are transparently displayed in breakrooms."
      ],
      keyFeatures: [
        {
          name: "Visual SLA Bottleneck Radar",
          description: "An analytics widget that flags repair orders that have been stuck in a single status (e.g. 'Waiting for Parts') longer than 45 minutes.",
          impact: "Reduces cycle times by allowing active manager intervention."
        },
        {
          name: "Technician Productivity Grid",
          description: "A real-time leader-board displaying active repair order count, average hours billed, and accuracy/re-check rates.",
          impact: "Incentivizes efficiency while monitoring overall quality of repair."
        },
        {
          name: "Predictive Parts Booking Predictor",
          description: "Aligns parts inventory data with scheduled appointment trends to pre-order common service parts.",
          impact: "Cuts parts waiting latency by 35% during peak seasons."
        }
      ],
      successMetrics: [
        { metric: "SLA Dashboard Daily Active Usage (DAU)", target: "80%", explanation: "Measures active management adoption of the operational dashboard." },
        { metric: "Repair Order Cycle Time (Key-to-Key)", target: "-20%", explanation: "Direct measure of operational delay reduction across the workshop." },
        { metric: "Parts Shortage Frequency", target: "<5%", explanation: "Ensures predictive parts booking aligns with real-world appointment demand." }
      ],
      gtmStrategy: [
        "Incorporate analytics widgets directly into the primary dealer manager dashboard home screen.",
        "Schedule automated daily PDF email digests for senior dealership leadership.",
        "Run interactive, gamified feedback loops with technicians on high efficiency ratings."
      ]
    }
  },
  {
    id: "monetisation",
    title: "GymBuddy Tiered Subscription Strategy",
    subtitle: "SaaS Monetization and Upsell Optimization",
    category: "Monetisation",
    tags: ["Pricing Tiers", "Value Mapping", "Upsell Models", "MRR Strategy"],
    brief: "A rigorous pricing and packaging study for GymBuddy. Structured free trial boundaries, Premium tier pricing anchors, and Elite coaching upsells based on user willingness-to-pay.",
    deliverables: [
      "Three-Tier Pricing Matrix and Value Map",
      "Free-to-Paid Conversion Funnel Specification",
      "Enterprise/Gym Partner Upsell Framework"
    ],
    docMockup: {
      problemStatement: "B2C fitness apps experience massive churn because they employ uniform, aggressive paywalls that block user value early on. Without a clear value-to-cost mapping, conversion rates stay stagnant under 2%.",
      targetUser: "Hobbyist gym-goers ready to invest in structured fitness coaching but hesitant to pay high upfront annual commitments.",
      userInsights: [
        "Users are highly willing to pay for direct human feedback (trainer form reviews) but find standard static app content overpriced.",
        "Interactive AI features (like custom daily constructors) act as high-value triggers for subscription conversion.",
        "Monthly recurring subscriptions with a 'cancel anytime' trial outperform annual-only commitments by 4x."
      ],
      keyFeatures: [
        {
          name: "AI Personal Trainer Paywall Anchor",
          description: "Positions a mid-level 'AI Pro' tier ($9.99/mo) with unlimited AI workout scheduling right alongside an expensive 'Human Coach' tier ($49.99/mo).",
          impact: "Leverages pricing decoy effects to maximize AI-Pro signup volume."
        },
        {
          name: "Usage-Based Premium Gating",
          description: "Provides free users with 3 free AI-constructed workouts per month, then smoothly initiates a conversion modal to unlock unlimited access.",
          impact: "Allows users to realize value before encountering payment hurdles."
        },
        {
          name: "Group Fitness Family Add-on",
          description: "Enables individual subscribers to add a gym buddy to their account for an extra $4.99/mo, enabling shared motivation loops.",
          impact: "Boosts expansion revenue and organic virality."
        }
      ],
      successMetrics: [
        { metric: "Free-to-Paid Subscription Conversion", target: "5.5%", explanation: "Measures overall pricing model fit and value realization speed." },
        { metric: "Average Revenue Per Paying User (ARPPU)", target: "$12.50", explanation: "Ensures a healthy blend of subscription tiers and optional add-ons." },
        { metric: "Subscription Renewal Rate (L6M)", target: "82%", explanation: "Tracks long-term product value retention and user satisfaction." }
      ],
      gtmStrategy: [
        "A/B test dynamic paywall messaging based on the user's primary goal (e.g. weight loss vs. muscle gain).",
        "Offer a limited 7-day full access trial with frictionless in-app cancellation.",
        "Bundle subscriptions with local neighborhood gym entry passes to reduce customer acquisition cost (CAC)."
      ]
    }
  },
  {
    id: "ux",
    title: "SaaS Workflow Redesign for Auto Technicians",
    subtitle: "Applying User-Centric Design to B2B Desktop & Mobile",
    category: "UX & Design",
    tags: ["User Empathy", "B2B Design", "Heuristic Evaluation", "Figma Prototyping"],
    brief: "Heuristic audit and UX redesign of a high-stress auto technician diagnostic interface, replacing multi-step search bars with immediate vehicle status cards and tap-to-verify action items.",
    deliverables: [
      "UX Redesign Mockups & Comparison Sheets",
      "Frictionless Tablet Interface Wireframes",
      "Auto-Technician Shadowing Insights Report"
    ],
    docMockup: {
      problemStatement: "Auto technicians work under extreme time pressure and often have grease-covered hands. Legacy software designed for desktop screens requires detailed keyboard input and extensive scrolling, leading to user errors and low adoption.",
      targetUser: "Auto Technicians working in busy service bays under strict flat-rate time schedules.",
      userInsights: [
        "Technicians rely heavily on tablets or ruggedized handhelds rather than desktop terminals.",
        "Typing is a massive bottleneck; interfaces must utilize high-contrast, oversized tap targets (>48px).",
        "Real-time visual alerts (color-coded statuses) are immediately understood, even in distracting workshop noise."
      ],
      keyFeatures: [
        {
          name: "Oversized 'Tap-to-Complete' Checklist",
          description: "Replaces tiny desktop checkboxes with full-width diagnostic cards that turn bright green with simple swipe or tap actions.",
          impact: "Saves up to 4 minutes per diagnostic inspection step."
        },
        {
          name: "Voice-Guided Diagnostic Notes",
          description: "A hands-free voice transcription feature that allows technicians to record repair recommendations while working under a vehicle.",
          impact: "Maintains tool workflow speed while capturing rich, valuable service data."
        },
        {
          name: "High-Contrast Workshop Mode UI",
          description: "A bright, bold dark mode UI designed specifically to combat intense fluorescent shop lights and glare.",
          impact: "Reduces visual fatigue and system navigation errors by 30%."
        }
      ],
      successMetrics: [
        { metric: "Diagnostic Flow Completion Speed", target: "-50%", explanation: "Directly measures the reduction in administrative technician time." },
        { metric: "SaaS App Adoption on Shop Floor", target: "95%", explanation: "Tracks technician satisfaction and voluntary system usage." },
        { metric: "Recommendation Entry Accuracy", target: "+40%", explanation: "Ensures clear, readable service comments reach the front desk without typos." }
      ],
      gtmStrategy: [
        "Conduct live on-floor workshop training sessions using ruggedized tablet hardware.",
        "Incentivize top adopting technicians with 'Quick-Finisher' workshop performance awards.",
        "Incorporate a simple 1-question in-app feedback face (happy/neutral/sad) to track floor sentiments."
      ]
    }
  }
];

export const EDUCATION_HISTORY: Education[] = [
  {
    degree: "B.E. in Electronics & Communication Engineering",
    institution: "INFO Institute of Engineering, Coimbatore, India",
    period: "2012 – 2016",
    details: [
      "Bachelor's degree combining rigorous engineering methodology, logic design, and communications systems.",
      "Football Team Captain (2014 – 2016): Led a 16-member squad in competitive regional and inter-university tournaments. Built early leadership, team alignment, and high-pressure strategic execution skills.",
      "Central Midfielder: SARA LG F.C. - CDFA 'B' Division League winners (2015). Competed in the highly competitive CDFA 'A' Division (2016)."
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "AI-First Product Manager Program",
    provider: "Airtribe",
    period: "Completed July 2026",
    credentialId: "Airtribe-PM-2026-07-04",
    description: [
      "Advanced program covering User Research, Product Strategy, prioritization frameworks (RICE/Kano), and modern product telemetry using Amplitude.",
      "Specialized training in AI-First Product Development, custom LLM integration, prompt engineering, RAG, and rapid technical prototyping using advanced AI tools.",
      "Successfully delivered and defended 6 core product case studies and an intensive 0→1 capstone project (GymBuddy) to a panel of senior product executives."
    ]
  }
];
