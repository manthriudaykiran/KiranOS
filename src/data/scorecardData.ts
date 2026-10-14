export interface ScorecardQuestion {
  id: string;
  question: string;
  options: string[];
}

export interface ScorecardCategory {
  key: string;
  title: string;
  intro: string;
  questions: ScorecardQuestion[];
}

export interface CategoryAdvice {
  name: string;
  finding: string;
  action: string;
  metric: string;
  opportunity: string;
}

export interface ScorecardResult {
  score: number;
  band: 'Critical Friction' | 'High Improvement Potential' | 'Developing Operations' | 'Well-Structured Operations' | 'Highly Optimized Operations';
  categories: Record<string, number>;
  priorities: string[];
  securityWarning: boolean;
  version: string;
  answers: Record<string, number>;
}

export const CATEGORIES_DATA: ScorecardCategory[] = [
  {
    key: 'INT',
    title: 'Job Order Intake & Response',
    intro: 'How reliably does your team turn an incoming requirement into a tracked recruiting workflow?',
    questions: [
      {
        id: 'INT1',
        question: 'When a new IT job requirement arrives, how consistently is it captured with complete information?',
        options: [
          'Job requirements are often incomplete or lost',
          'Captured manually with frequent missing details',
          'A checklist exists, but completion varies',
          'Standardized intake with consistent ownership',
          'Structured intake, validated fields and reliable tracking'
        ]
      },
      {
        id: 'INT2',
        question: 'How consistently are new job orders acknowledged and assigned to the correct recruiter?',
        options: [
          'No reliable acknowledgment or owner',
          'Ad hoc email or chat assignments',
          'Assigned manually, with occasional delays',
          'Documented ownership and response targets',
          'Tracked assignment workflow with timely escalation'
        ]
      },
      {
        id: 'INT3',
        question: 'Can your team track every open requirement from intake to candidate submission?',
        options: [
          'No consolidated status',
          'Scattered emails and spreadsheets',
          'Partial tracker with inconsistent updates',
          'Centralized and mostly current pipeline',
          'Reliable end-to-end visibility with aging alerts'
        ]
      }
    ]
  },
  {
    key: 'CAN',
    title: 'Candidate Screening & Matching',
    intro: 'How effectively can your recruiters find, qualify and reuse relevant candidate profiles?',
    questions: [
      {
        id: 'CAN1',
        question: 'How efficiently can recruiters identify potentially qualified candidates for a new IT requirement?',
        options: [
          'Mostly manual searching with no repeatable process',
          'Manual review across disconnected sources',
          'Saved searches and basic filters',
          'Structured search and consistent matching criteria',
          'Integrated search support with evidence-based recruiter review'
        ]
      },
      {
        id: 'CAN2',
        question: 'How standardized are candidate qualification and screening records?',
        options: [
          'Little or no structured documentation',
          'Free-text notes vary substantially',
          'Basic checklist used inconsistently',
          'Standard qualification template consistently used',
          'Auditable qualification records with review controls'
        ]
      },
      {
        id: 'CAN3',
        question: 'How easily can recruiters find and reuse existing, relevant candidate records?',
        options: [
          'Records are difficult to find or outdated',
          'Significant manual cleanup and rechecking',
          'Searchable but data is often stale',
          'Regularly maintained searchable records',
          'Maintained records, traceable updates and reuse workflows'
        ]
      }
    ]
  },
  {
    key: 'ENG',
    title: 'Candidate Engagement & Coordination',
    intro: 'How consistently are candidates acknowledged, scheduled and kept informed?',
    questions: [
      {
        id: 'ENG1',
        question: 'How consistently do applicants receive an acknowledgment and clear next steps?',
        options: [
          'Frequently receive no acknowledgment',
          'Responses depend on recruiter availability',
          'Basic acknowledgment exists but follow-up varies',
          'Consistent communication with tracked ownership',
          'Timely, tracked communication and exception alerts'
        ]
      },
      {
        id: 'ENG2',
        question: 'How reliably are interviews scheduled, confirmed and rescheduled?',
        options: [
          'Frequent missed or untracked coordination',
          'Mostly manual and error-prone',
          'Basic calendar tools with occasional issues',
          'Standard scheduling workflow and reminders',
          'Tracked coordination with confirmations and escalation'
        ]
      },
      {
        id: 'ENG3',
        question: 'How consistently are candidates updated when their application status changes?',
        options: [
          'Rarely or never updated',
          'Updates are ad hoc',
          'Some standard templates are used',
          'Defined status-update rules and owners',
          'Status-triggered updates with human review where needed'
        ]
      }
    ]
  },
  {
    key: 'OPS',
    title: 'ATS Data & Operational Visibility',
    intro: 'How reliable are your recruitment records, reporting and overdue-work escalations?',
    questions: [
      {
        id: 'OPS1',
        question: 'How accurate and up-to-date are your ATS candidate and job records?',
        options: [
          'Many duplicates or missing records',
          'Frequent manual correction needed',
          'Periodic cleanup and inconsistent quality',
          'Defined data rules and regular checks',
          'Continuous quality monitoring and audited corrections'
        ]
      },
      {
        id: 'OPS2',
        question: 'How easily can management see job-order status, submissions and recruiter workload?',
        options: [
          'No reliable consolidated view',
          'Manual reports requested from recruiters',
          'Weekly reporting with delays',
          'Shared dashboard updated consistently',
          'Trusted near-real-time dashboard with clear metrics'
        ]
      },
      {
        id: 'OPS3',
        question: 'How reliably are overdue tasks, stalled job orders and missed follow-ups escalated?',
        options: [
          'No systematic escalation',
          'People notice problems informally',
          'Manual reviews occasionally identify them',
          'Defined reminders and escalation owners',
          'Measured SLAs and reliable escalation tracking'
        ]
      }
    ]
  },
  {
    key: 'GOV',
    title: 'Scalability, Integration & Governance',
    intro: 'Can your business scale safely with connected tools and clear human oversight?',
    questions: [
      {
        id: 'GOV1',
        question: 'How well do your ATS, email, calendar and other recruitment tools work together?',
        options: [
          'Disconnected, repeated manual entry',
          'A few basic connections',
          'Partial integration with manual gaps',
          'Main systems integrated for key tasks',
          'Reliable integrations with monitoring and error handling'
        ]
      },
      {
        id: 'GOV2',
        question: 'Can recruiting volume grow without the same proportional growth in repetitive administrative work?',
        options: [
          'No; each increase creates substantial backlog',
          'Mostly dependent on additional manual work',
          'Some reusable processes reduce burden',
          'Standard workflows support moderate scaling',
          'Capacity monitored and repetitive tasks systematically streamlined'
        ]
      },
      {
        id: 'GOV3',
        question: 'How mature are your AI, data-security and human-review controls?',
        options: [
          'No defined policies or controls',
          'Informal awareness with major gaps',
          'Basic rules, inconsistent application',
          'Documented access, privacy and review controls',
          'Tested controls, auditability, monitoring and named owners'
        ]
      }
    ]
  }
];

export const ADVICE_DATA: Record<string, CategoryAdvice> = {
  INT: {
    name: 'Job Order Intake',
    finding: 'Incoming requirements and recruiter handoffs may be inconsistent.',
    action: 'Create one standardized job-intake form with owner, priority, missing-field checks and a response-time target.',
    metric: 'Median time from client job order to assigned recruiter',
    opportunity: 'Job Intake & Assignment AI Workflow'
  },
  CAN: {
    name: 'Candidate Screening & Matching',
    finding: 'Recruiters may spend excess time finding and preparing candidate information.',
    action: 'Create a repeatable qualification checklist and verify matching evidence before submission.',
    metric: 'Minutes spent preparing one recruiter-reviewed shortlist',
    opportunity: 'AI Matching Assistant with human review'
  },
  ENG: {
    name: 'Candidate Engagement',
    finding: 'Candidate communication or scheduling may depend on manual reminders.',
    action: 'Map applicant acknowledgment and status-update ownership; pilot approved templates and simple reminders.',
    metric: 'Percentage of eligible candidate messages sent within target SLA',
    opportunity: 'Consent-aware Candidate Engagement Workflow'
  },
  OPS: {
    name: 'ATS & Operational Visibility',
    finding: 'Incomplete records and delayed reporting may conceal recruitment bottlenecks.',
    action: 'Audit 20 ATS records, define key statuses and publish a weekly job-order aging report.',
    metric: 'Percentage of complete candidate records and overdue job orders',
    opportunity: 'ATS Data Quality & Recruitment Dashboard'
  },
  GOV: {
    name: 'Integration & Governance',
    finding: 'Disconnected systems or unclear controls may increase operational and privacy risks.',
    action: 'Document key integrations, access permissions, data retention, exceptions and recruiter-approval steps.',
    metric: 'Integration failure count and percentage of audited sensitive actions',
    opportunity: 'AI Readiness & Integration Audit'
  }
};

export const BAND_DESCRIPTIONS: Record<string, string> = {
  'Critical Friction':
    'Your answers indicate basic operational controls may be missing. Begin with a clear owner, reliable records and consistent communication.',
  'High Improvement Potential':
    'Several workflows appear to rely on ad hoc processes. Standardization should come before complex automation.',
  'Developing Operations':
    'Your operation has some repeatable processes. The next opportunity may be connecting workflows and improving visibility.',
  'Well-Structured Operations':
    'Core workflows appear established. Test carefully scoped improvements against real performance data.',
  'Highly Optimized Operations':
    'Your self-reported maturity is high. Validate with operational metrics and look for targeted reliability or capacity improvements.'
};

export function calculateScorecardResult(answers: Record<string, number>): ScorecardResult {
  let raw = 0;
  const categories: Record<string, number> = {};

  for (const c of CATEGORIES_DATA) {
    const vals = [1, 2, 3].map((n) => answers[c.key + n]);
    if (vals.some((v) => !Number.isInteger(v) || v < 0 || v > 4)) {
      throw new Error(`Incomplete responses in category ${c.title}`);
    }
    const sum = vals.reduce((a, b) => a + b, 0);
    raw += sum;
    categories[c.key] = Math.round((sum / 12) * 100);
  }

  const score = Math.round((raw / 60) * 100);

  const band =
    score < 25
      ? 'Critical Friction'
      : score < 50
      ? 'High Improvement Potential'
      : score < 75
      ? 'Developing Operations'
      : score < 90
      ? 'Well-Structured Operations'
      : 'Highly Optimized Operations';

  const tieOrder = ['GOV', 'ENG', 'INT', 'CAN', 'OPS'];
  const priorities = Object.keys(categories)
    .sort((a, b) => categories[a] - categories[b] || tieOrder.indexOf(a) - tieOrder.indexOf(b))
    .slice(0, 3);

  return {
    score,
    band,
    categories,
    priorities,
    securityWarning: answers.GOV3 === 0,
    version: '1.0',
    answers: { ...answers }
  };
}
