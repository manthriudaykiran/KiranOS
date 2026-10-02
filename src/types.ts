export interface Engine {
  id: string;
  number: string;
  name: string;
  tagline: string;
  description: string;
  inputs: string[];
  outputs: string[];
  automations: string[];
  connectedEngines: string[];
}

export interface ProductizedSystem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  flow: string[];
  features: string[];
  outcomes: string[];
  highlight: string;
}

export interface OpportunityRow {
  workflow: string;
  currentProblem: string;
  automationOpportunity: string;
  priority: 'High' | 'Immediate' | 'Strategic';
  impact: string;
  category: string;
}

export interface CaseStudy {
  id: string;
  badge: 'Pilot Implementation' | 'Internal Production Build' | 'Validated Prototype';
  title: string;
  clientType: string;
  problem: string;
  beforeState: string;
  whatWeDiscovered: string;
  whatWeBuilt: string;
  toolsConnected: string[];
  automationFlow: string[];
  hoursSaved: string;
  responseTimeImprovement: string;
  primaryOutcome: string;
  keyLearnings: string;
  quote?: {
    text: string;
    author: string;
    role: string;
  };
}

export interface FaqItem {
  question: string;
  answer: string;
}
