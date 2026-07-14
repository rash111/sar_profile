export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  skills: string[];
  metrics: string[];
}

export interface CaseStudyDoc {
  problemStatement: string;
  targetUser: string;
  userInsights: string[];
  keyFeatures: {
    name: string;
    description: string;
    impact: string;
  }[];
  successMetrics: {
    metric: string;
    target: string;
    explanation: string;
  }[];
  gtmStrategy: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  tags: string[];
  brief: string;
  deliverables: string[];
  liveUrl?: string;
  docUrl?: string;
  docMockup: CaseStudyDoc;
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  details: string[];
}

export interface Certification {
  title: string;
  provider: string;
  period: string;
  description: string[];
  credentialId?: string;
}
