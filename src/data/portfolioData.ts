import { Experience, Project, SkillCategory, Education, Certification } from "../types";

export const CONTACT_INFO = {
  name: "Sarath Chandar Balakrishnan",
  preferredName: "Sarath Chandar",
  tagline: "Aspiring Product Manager",
  statement: "I build products with empathy, validate with data, and deliver with absolute quality.",
  about: "From breaking products to building them. I've spent 7+ years at Tekion on the ARC platform, reading PRDs, discussing use-cases with PMs to refine requirements, and mapping how dealerships actually use the product before features ship. That QA lens taught me to think in edge cases, user workflows, and risk. Working shoulder-to-shoulder with PMs and engineers, I picked up the muscle for product strategy, prioritization, and stakeholder management. Now, I am translating that seasoned product judgment and QA rigor into a full-time Product Management role.",
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
  { id: "m3", value: "5", label: "Releases per Quarter Supported", desc: "Managing scope, risk, and user-workflow validation", color: "neon-green" }
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
      "Review PRDs and user stories alongside PMs, engineers, and designers before each release on the Automotive Retail Cloud (ARC) platform. Successfully identified few critical gaps prior to development.",
      "Own the end-to-end test strategy for ARC Service module releases - evaluating and adjusting scope, highlighting risky product assumptions, and discussing use-cases with PMs to align requirements with real-world dealership usage.",
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
      problemStatement: "More than 67% of gym memberships go unused because beginners face extreme gym anxiety, lack clear workout structures, and cannot afford personal trainers (Rs. 2000 - Rs.4000/Mo). Existing apps act as simple databases of exercises rather than adaptive coaches.",
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
    id: "stayfit",
    title: "VitaFit: StayFit+ Gamification & Community",
    subtitle: "Product Requirements Document (PRD) — Retention Initiative",
    category: "Product Strategy",
    tags: ["PRD Writing", "Gamification", "Habit Loops", "Retention"],
    brief: "A high-impact Product Requirements Document addressing a retention crisis on a health & fitness platform through a tightly integrated Gamification Engine and a Community Challenges layer.",
    deliverables: [
      "Gamification & Streak Mechanics Spec",
      "Community Challenges Design Outline",
      "30-Day Retention Target Model (39% → 52%+)"
    ],
    docUrl: "#stayfit-pdf-sim",
    docMockup: {
      problemStatement: "VitaFit is facing an acute retention crisis. Users sign up, complete a handful of sessions, then quietly disappear due to loss of motivation (41%) and the absence of any real human connection (28%). 30-day user retention has collapsed from 58% to 39% over two quarters, putting approximately Rs. 2.1 Cr ARR at risk.",
      targetUser: "Working Professionals & Gen Z (18-35 years old). Alex, 28, is a time-poor but goal-driven consultant who needs clear progress markers, habit streaks, and community accountability to stay committed.",
      userInsights: [
        "Internal session telemetry shows the median active user completes just 1.4 sessions per week (industry benchmark is 3+).",
        "Only 12% of users have ever interacted with another user or instructor on the platform.",
        "Competitive benchmarking confirms platforms with social and gamification features achieve 2.3x higher 90-day retention."
      ],
      keyFeatures: [
        {
          name: "Gamification & Rewards Engine",
          description: "XP points earned per completed session accumulating toward weekly milestones, a 7-day consecutive streak counter with bonus tiers, a profile badge wall, and VitaCoins redeemable in a Reward Store for partner discounts.",
          impact: "Triggers immediate dopamine rewards, successfully addressing the 'motivation fades fast' pain point."
        },
        {
          name: "Community Challenges & Social Layer",
          description: "A dedicated Challenge Hub tab for weekly/monthly team challenges (e.g. '21-Day Yoga Reset'), social feed with emoji reactions, instructor weekly check-in videos, auto-celebration screens, and smart re-challenge CTAs.",
          impact: "Fosters team accountability and peer encouragement to increase weekly session frequency."
        }
      ],
      successMetrics: [
        { metric: "30-Day User Retention Rate", target: "39% → 52%+", explanation: "Our North Star metric, projected to recover ~Rs. 1.5 Cr in ARR at target within Month 3." },
        { metric: "Completed Sessions / User / Week", target: "1.4 → 2.5+", explanation: "Weekly workout session frequency uplift, closing the gap to the 3.0+ industry benchmark by Month 2." },
        { metric: "Challenge Participation Rate", target: "25%+ MAU", explanation: "Tracks immediate adoption and engagement in the newly deployed Community Challenge Hub." }
      ],
      gtmStrategy: [
        "Phase 0 — Research (Weeks 1-2): Conduct 30 qualitative user interviews to finalize the coin economy mechanics, XP formulas, and challenge formats.",
        "Phase 1 — Gamification MVP (Weeks 3-7): Ship XP and streak engine as an A/B test to 10% of users. Focus on profile badge and simple home streak card. Gate: Day-7 retention lift of 5pp+ to proceed.",
        "Phase 2 — Community Beta (Weeks 7-13): Roll out Challenge Hub to 25% of users with an instructor-led pilot challenge and mid-beta metrics review at Week 13.",
        "Phase 3 — GA Launch (Weeks 14-19): Full rollout of the push notification layer and VitaCoins Reward Store with targeted App Store updates."
      ]
    }
  },
  {
    id: "zepto",
    title: "Zepto: Growth Strategy to Increase AOV",
    subtitle: "Basket-Building & Average Order Value (AOV) Optimization",
    category: "Growth & Retention",
    tags: ["AOV Lifts", "RICE Scoring", "Growth Hacks", "Nudges"],
    brief: "Comprehensive product growth strategy analyzing Zepto's checkout friction and shopper types. Proposed cart add-on nudges, occasion-based bundling, and tiered value-stack loyalty programs to push AOV past Rs.400+.",
    deliverables: [
      "Four Shopper Typology & Sign Profiles",
      "5 Core Basket-Building Blockers Identification",
      "RICE Prioritized Product Roadmap (Score 473)"
    ],
    docUrl: "#zepto-pdf-sim",
    docMockup: {
      problemStatement: "Zepto's average basket size sits at around Rs. 260–300, far below the target of Rs. 400+. 42% of orders are under Rs. 200, 38% of users stop immediately once they cross the free delivery threshold, and 55% only ever reorder the same products.",
      targetUser: "Threshold Chasers (35% users) & Urgency Shoppers (27% users). Users who treat the free delivery limit as a stop signal or buy 1-2 items quickly under 90 seconds and leave.",
      userInsights: [
        "Users rely on quick commerce for urgent, small purchases rather than full-family grocery shopping.",
        "The current search-to-checkout flow is a 'one-way tunnel' with zero cross-sell triggers or related product recommendations.",
        "Reorder button shortcuts bypass the homepage, category tiles, and personalized suggestions, keeping users in a closed loop."
      ],
      keyFeatures: [
        {
          name: "Cart Contextual Add-on Nudges",
          description: "Instantly surfaces 1–2 low-cost, highly relevant micro add-ons (e.g. 'Add Coke for Rs.30' when Chips is added) inline within the cart update confirmation to trigger impulse purchases.",
          impact: "Achieved highest RICE score (473) with extremely low effort (2 weeks), yielding a +Rs.20-80 AOV uplift."
        },
        {
          name: "Bundling & Combo Offers",
          description: "Curated, occasion-based bundles (e.g., 'Breakfast Bundle' or 'Make Butter Chicken Tonight') that combine multiple individual SKUs into a single-tap add-to-cart kit.",
          impact: "Reduces comparison fatigue and naturally expands basket size, boosting AOV by +Rs.100-150."
        },
        {
          name: "Value Stack Tiered Loyalty Program",
          description: "A tiered AOV reward program: Silver (Rs. 400+, cashback), Gold (Rs. 600+, priority 8-min delivery), and Platinum (Rs. 900+, exclusive items). Includes a real-time 'You are Rs.X from Gold' cart tracker.",
          impact: "Directly addresses Explorer Builders (15% users), leveraging loss aversion to drive +Rs.200-500 AOV uplift."
        }
      ],
      successMetrics: [
        { metric: "Average Order Value (AOV)", target: "Rs. 400+", explanation: "Substantial lift from the baseline of Rs.260-300 across all active customer segments." },
        { metric: "Nudge Attach Rate", target: "30% – 40%", explanation: "Tracks user conversion on inline contextual cart add-on micro-recommendations." },
        { metric: "Threshold Overshoot Rate", target: ">50%", explanation: "Percentage of Threshold Chaser orders that cross the Rs.200 boundary after implementation." }
      ],
      gtmStrategy: [
        "Step 1: Ship high-RICE Cart Add-On Nudges first (estimated 2 weeks effort) to capture immediate low-hanging conversions.",
        "Step 2: Roll out Contextual Recommendations and co-purchase pattern matching on Cart & Product Detail pages.",
        "Step 3: Develop Curated Occasion Bundling and pilot them with Urgency Shoppers during high-traffic weekend slots.",
        "Step 4: Build the Tiered Value-Stack Loyalty Program and integrate progress counters directly on the cart page."
      ]
    }
  },
  {
    id: "learning-system",
    title: "Personalised Learning Recommendation Engine",
    subtitle: "Core System Design & Product Brief",
    category: "System Design",
    tags: ["Personalization", "Adaptive Learning", "GDPR", "Privacy-First"],
    brief: "End-to-end system design for an online education recommendation engine, balancing high-latency personalization (+25% engagement) with strict GDPR compliance and low-latency microservices.",
    deliverables: [
      "User Stories for Learners, Instructors, and Admins",
      "Privacy-First personalization Trade-off Analysis",
      "Low-Latency Microservices Data Architecture Map"
    ],
    docUrl: "#learning-pdf-sim",
    docMockup: {
      problemStatement: "Online learners face search friction and lack adaptive paths, causing low completion rates. The platform must implement a recommendation system to drive +25% engagement and +30% course completion while keeping latency under 200ms and adhering to strict GDPR laws.",
      targetUser: "Students seeking skill transitions, instructors tagging courses with metadata, and platform admins optimizing weight algorithms.",
      userInsights: [
        "Peak drop-off occurs during long onboarding profile questions; users prefer immediate progressive, opt-in profiling.",
        "Instructors require direct visibility into course drop-off points and student sentiment trends to iterate on materials.",
        "WCAG 2.1 Level AA conformance is required to ensure usability for students with assistive technologies."
      ],
      keyFeatures: [
        {
          name: "Adaptive Learning Paths",
          description: "Generates dynamic, sequenced curriculum paths that automatically adjust and route based on user milestone performance.",
          impact: "Keeps learners motivated and supported, directly boosting course completion rates."
        },
        {
          name: "Privacy-First Personalisation Model",
          description: "Two-tier model: default collaborative-filtering using anonymized cohort behavior, and opt-in personalized tracking with a transparent GDPR 'My Data' dashboard.",
          impact: "Achieves full GDPR compliance, building immediate user trust while retaining maximum relevance."
        },
        {
          name: "Instructor Analytics & AI Gap suggestions",
          description: "Analytics panel tracking enrollment, watch-time, and quiz scores, paired with AI-surfaced suggestions on topics with high learner demand but low course supply.",
          impact: "Empowers instructors to improve course quality and expand catalog value."
        }
      ],
      successMetrics: [
        { metric: "Platform User Engagement", target: "+25% lift", explanation: "Uplift in daily active learning hours and interactive session durations." },
        { metric: "Course Completion Rate", target: "+30% lift", explanation: "Directly improves graduation rates and lifetime customer value." },
        { metric: "API Response Time (95th %ile)", target: "<200ms", explanation: "Guarantees a seamless, non-blocking browsing experience for up to 10k concurrent users." }
      ],
      gtmStrategy: [
        "Step 1: Coordinate with the engineering team to tag the existing course catalog with skills and difficulty metadata.",
        "Step 2: Deploy the baseline Collaborative-Filtering recommendation model as the default zero-tracking option.",
        "Step 3: Launch the opt-in Personalized Tracking layer paired with the transparent GDPR 'My Data' consent dashboard.",
        "Step 4: Roll out the Instructor Analytics Dashboard and AI content gap suggestions to the pilot creator cohort."
      ]
    }
  },
  {
    id: "twitter-growth",
    title: "Twitter / X Funnel & Growth Strategy",
    subtitle: "AARRR Funnel Optimization & Feature Roadmap",
    category: "Growth & Retention",
    tags: ["AARRR Funnel", "Onboarding", "Referral Loops", "Virality"],
    brief: "Funnel analysis of Twitter/X mapping leaks across Acquisition, Activation, Retention, and Revenue. Structured E1 Smart Onboarding, E2 Communities 2.0, and E3 Referral rewards.",
    deliverables: [
      "AARRR Funnel Metrics & Conversion Mapping",
      "Activation 'Aha Moment' Specification",
      "Prioritized Epics Roadmap (E1 – E4)"
    ],
    docUrl: "#twitter-pdf-sim",
    docMockup: {
      problemStatement: "With over 40% estimated Day 1 churn, Twitter/X suffers from a critical cold-start relevance leak. High-profile trends drive massive acquisition, but weak non-logged-in paywalls and political default feeds cause immediate uninstalls, leaving substantial retention and premium subscription revenue on the table.",
      targetUser: "Newly acquired casual visitors and niche interest group members who feel overwhelmed or isolated by the massive public square.",
      userInsights: [
        "Users who follow 30+ accounts in their first week retain at 3x the rate of those who follow fewer than 5.",
        "App Store reviews cite toxic default feeds and 'cannot see anything without logging in' as primary reasons for quitting.",
        "The platform has zero formal referral programs, neglecting a massive organic growth channel."
      ],
      keyFeatures: [
        {
          name: "E1: Smart Onboarding Wizard",
          description: "A redesigned, 5-step dynamic onboarding flow that asks for granular topics (e.g. 'NBA' instead of 'Sports'), presents category preview tweets, and imports contacts with animated progress.",
          impact: "Directly targets Day-1 retention, boosting activation rates by 15-20%."
        },
        {
          name: "E3: Referral Rewards Programme",
          description: "Incentivized viral loop tracking unique referral codes. Successful referrals unlock 1 week of X Premium or creator boost credits, supported by automated shareable 'invite cards'.",
          impact: "Drives cheap customer acquisition, boosting monthly sign-ups by 10-18%."
        },
        {
          name: "E4: Premium Lite Tier ($3/mo)",
          description: "A low-friction entry tier offering ad-free mobile browsing, priority reply ranking, and advanced bookmarking without the verified checkmark.",
          impact: "Captures price-sensitive users, expanding the premium subscriber base by 30-50%."
        }
      ],
      successMetrics: [
        { metric: "Day 1 User Retention", target: "+15% to 20%", explanation: "Ensured by matching user onboarding interests directly with early timeline feeds." },
        { metric: "Follow Depth (Signup)", target: "12+ accounts", explanation: "Increases interest graph precision and feeds the recommendation algorithm." },
        { metric: "Premium Subscriber WAU", target: "3.0% → 4.5%", explanation: "Driven by the low-barrier $3 Premium Lite conversion tier." }
      ],
      gtmStrategy: [
        "Step 1: Deploy the E1 Smart Onboarding Wizard immediately to plug the primary cold-start funnel leak.",
        "Step 2: Launch the E3 Referral Rewards Programme in parallel as a low-effort, fast-ROI MVP.",
        "Step 3: Scale Communities 2.0 and rollout the Premium Lite Tier once retention stabilizes."
      ]
    }
  },
  {
    id: "zomato-strategy",
    title: "Zomato CY2026 Product Strategy & OKRs",
    subtitle: "Retention-First Engagement & Habit Blueprint",
    category: "Product Strategy",
    tags: ["OKRs", "Funnel Drop-off", "Cohort Analysis", "Retention"],
    brief: "Corporate growth blueprint designed to establish Zomato as the default daily food companion for urban India. Targets a 30-day retention lift (35% → 55%) using cohort-specific hypotheses.",
    deliverables: [
      "CY2026 Objective & Key Results Framework",
      "7-Stage Food Delivery Funnel Drop-off Study",
      "Zomato Daily & Gold 2.0 Initiative Matrix"
    ],
    docUrl: "#zomato-pdf-sim",
    docMockup: {
      problemStatement: "Zomato needs to transition from an occasional weekend delivery treat to a daily food habit. The primary challenge is a ~60% churn rate after the first order, high drop-off from Cart Creation to Checkout (38% → 28%), and low perceived weekday value.",
      targetUser: "New Users (less than 3 orders) and Low-Frequency weekday diners in urban metros.",
      userInsights: [
        "New users churn rapidly due to a generic onboarding experience with no taste profile building.",
        "Unexpected delivery fees at the checkout screen cause a 26% cart abandonment shock.",
        "Low-frequency users default to cooking-at-home on weekdays due to lack of healthy, affordable combos."
      ],
      keyFeatures: [
        {
          name: "Zomato Daily (AI Meal Planner)",
          description: "An AI-personalized weekly meal planner matching user taste profiles, offering automated pre-scheduling and subscription-based office lunch pricing.",
          impact: "Locks in recurring order behavior, driving weekly frequency from 2.5x to 3.5x."
        },
        {
          name: "Gold 2.0 Loyalty Program",
          description: "Revamped tiered loyalty focusing on streak-based rewards, weekday-exclusive perks, and priority delivery.",
          impact: "Increases high-margin cohort stickiness and incentivizes weekday ordering."
        },
        {
          name: "Upfront Fee Transparency & Smart Combos",
          description: "Displays delivery fee estimates directly on the restaurant card before cart creation, and groups single items into 'Weekday Combo Deals'.",
          impact: "Cures cart-to-checkout abandonment and accelerates order placement speed."
        }
      ],
      successMetrics: [
        { metric: "30-Day User Retention", target: "35% → 55%", explanation: "Zomato's CY2026 North Star metric, proving users found lasting daily utility." },
        { metric: "Order Frequency", target: "2.5x → 3.5x/mo", explanation: "Driven by office subscriptions and automated dinner reminder nudges." },
        { metric: "2nd Order Velocity", target: "14d → 7d", explanation: "Locks in new cohorts through post-delivery 'Order Tomorrow' prompts." }
      ],
      gtmStrategy: [
        "Step 1: Implement Upfront Fee Transparency and Taste Quiz onboarding immediately to capture easy wins.",
        "Step 2: Introduce 'Weekday Combo Deals' exclusively on Monday-Friday lunch slots to target low-frequency users.",
        "Step 3: Roll out Gold 2.0 Loyalty tier and Zomato Daily to power habit-formation cycles."
      ]
    }
  },
  {
    id: "adoption",
    title: "ARC Service Module Feature Adoption Plan",
    subtitle: "Tekion ARC-Inspired B2B SaaS Feature Optimization",
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
          impact: "Drastically boosts upsell approval rates by 40."
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
    credentialId: "PY1PKSHJHLLN",
    url: "https://www.airtribe.live/product-management/certificate/PY1PKSHJHLLN",
    description: [
      "Advanced program covering User Research, Product Strategy, prioritization frameworks (RICE/Kano), and modern product telemetry using Amplitude.",
      "Specialized training in AI-First Product Development, custom LLM integration, prompt engineering, RAG, and rapid technical prototyping using advanced AI tools.",
      "Successfully delivered and defended 6 core product case studies and an intensive 0→1 capstone project (GymBuddy) to a panel of senior product executives."
    ]
  }
];
