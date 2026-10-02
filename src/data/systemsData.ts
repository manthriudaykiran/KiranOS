import { Engine, ProductizedSystem, OpportunityRow, CaseStudy, FaqItem } from '../types';

export const ENGINES_DATA: Engine[] = [
  {
    id: 'client-requirement-engine',
    number: '01',
    name: 'Client Requirement Engine',
    tagline: 'Structured Job Intake & Criteria Definition',
    description: 'Turn client requirements into structured job criteria, required skills, experience, priorities and recruiter-ready workflows.',
    inputs: ['Client Intake Briefs', 'Job Descriptions', 'Hiring Manager Calls', 'Skill Priority Matrix'],
    outputs: ['Structured Job Specification', 'Mandatory vs Preferred Matrix', 'Recruiter Sourcing Brief'],
    automations: ['Requirement parsing & normalization', 'Skill hierarchy extraction', 'Recruiter workflow generation', 'Role kick-off documentation'],
    connectedEngines: ['Candidate Sourcing Engine', 'Matching & Screening Engine', 'Submission & Client Workflow Engine']
  },
  {
    id: 'candidate-sourcing-engine',
    number: '02',
    name: 'Candidate Sourcing Engine',
    tagline: 'Discovery, Profile Collection & Pipeline Ingestion',
    description: 'Organize candidate discovery, sourcing inputs, profile collection and pipeline creation across active channels.',
    inputs: ['Job Portals & Inbound Applications', 'Passive Talent Databases', 'Referrals & Direct Outreach', 'Internal Talent Pools'],
    outputs: ['Normalized Candidate Profiles', 'Initial Talent Pool', 'Pipeline Ingestion Queue'],
    automations: ['Multi-channel profile collection', 'Deduplication across systems', 'Contact validation & enrichment', 'Automated pipeline routing'],
    connectedEngines: ['Client Requirement Engine', 'Resume Intelligence Engine', 'ATS / CRM Automation Engine']
  },
  {
    id: 'resume-intelligence-engine',
    number: '03',
    name: 'Resume Intelligence Engine',
    tagline: 'Automated Parsing & Candidate Profiling',
    description: 'Parse resumes, extract candidate information and structure profiles for faster recruiter review without manual transcription.',
    inputs: ['Unstructured PDF/Doc Resumes', 'LinkedIn Profiles', 'Portfolio Links', 'Technical Certifications'],
    outputs: ['Structured Experience Ledger', 'Technical Skill Taxonomy', 'Standardized Recruiter Snapshot'],
    automations: ['Document layout extraction', 'Role duration & title normalization', 'Tech stack & seniority mapping', 'Redacted/anonymized review options'],
    connectedEngines: ['Candidate Sourcing Engine', 'Matching & Screening Engine', 'ATS / CRM Automation Engine']
  },
  {
    id: 'matching-screening-engine',
    number: '04',
    name: 'Matching & Screening Engine',
    tagline: 'Criteria Alignment & Contextual Pre-Screening',
    description: 'Compare candidate profiles against job requirements and surface stronger matches for recruiter review.',
    inputs: ['Structured Resume Profile', 'Client Job Criteria', 'Recruiter Preferences', 'Past Placement Patterns'],
    outputs: ['Alignment Scorecard', 'Strengths & Gaps Analysis', 'Prioritized Review Queue'],
    automations: ['Requirement-to-experience gap analysis', 'Domain and tooling match verification', 'Compensation & location sanity checks', 'Recruiter highlight generation'],
    connectedEngines: ['Resume Intelligence Engine', 'Candidate Qualification Engine', 'Submission & Client Workflow Engine']
  },
  {
    id: 'candidate-qualification-engine',
    number: '05',
    name: 'Candidate Qualification Engine',
    tagline: 'Availability, Compensation & Baseline Screening',
    description: 'Collect screening information, availability, experience, compensation expectations and other qualification data.',
    inputs: ['Screening Questionnaires', 'Candidate Chat Replies', 'Recruiter Checklists', 'Notice Period Data'],
    outputs: ['Verified Qualification Dossier', 'Work Authorization State', 'Recruiter Prep Brief'],
    automations: ['Interactive baseline screening forms', 'Notice period & salary bracket checks', 'Relocation & work mode preference collection', 'Disqualification routing with graceful feedback'],
    connectedEngines: ['Matching & Screening Engine', 'Follow-Up Engine', 'Interview Coordination Engine']
  },
  {
    id: 'followup-engine',
    number: '06',
    name: 'Follow-Up Engine',
    tagline: 'Multi-Channel Candidate Outreach & Cadence',
    description: 'Coordinate candidate outreach, reminders, follow-ups and status communication across supported channels.',
    inputs: ['Candidate Records', 'Pipeline Milestones', 'Channel Preferences (Email / WhatsApp)'],
    outputs: ['Active Conversations', 'Engaged Candidate Responses', 'Status Acknowledgments'],
    automations: ['Timely outreach sequences', 'Contextual reminder cadences', 'Status update broadcasts', 'Cold-candidate reactivation loops'],
    connectedEngines: ['Candidate Qualification Engine', 'Interview Coordination Engine', 'ATS / CRM Automation Engine']
  },
  {
    id: 'interview-coordination-engine',
    number: '07',
    name: 'Interview Coordination Engine',
    tagline: 'Automated Scheduling, Confirmations & Reminders',
    description: 'Help manage scheduling, confirmations, reminders, rescheduling and interview status between candidates and hiring teams.',
    inputs: ['Client Availability Slots', 'Candidate Schedule Preferences', 'Time Zone Offsets', 'Interview Formats'],
    outputs: ['Confirmed Calendar Bookings', 'Preparation Briefs', 'Reschedule Handlers'],
    automations: ['Dynamic multi-party calendar coordination', 'Automated SMS/Email confirmations', 'Pre-interview candidate prep kits', 'Instant reschedule and cancellation handling'],
    connectedEngines: ['Follow-Up Engine', 'Submission & Client Workflow Engine', 'Offer & Placement Engine']
  },
  {
    id: 'submission-client-workflow-engine',
    number: '08',
    name: 'Submission & Client Workflow Engine',
    tagline: 'Formatted Candidate Packs & Client Feedback Loops',
    description: 'Structure candidate submissions, supporting information and client-facing recruitment workflows.',
    inputs: ['Qualified Candidate Dossiers', 'Screening Summaries', 'Client Submission Templates'],
    outputs: ['Standardized Submission Packets', 'Client Review Alerts', 'Feedback Tracking Logs'],
    automations: ['Formatted candidate profile generation', 'Client submission dispatch', 'Automated client feedback reminders', 'Interview request routing'],
    connectedEngines: ['Client Requirement Engine', 'Interview Coordination Engine', 'Offer & Placement Engine']
  },
  {
    id: 'offer-placement-engine',
    number: '09',
    name: 'Offer & Placement Engine',
    tagline: 'Offer Tracking, Counter-Offer Mitigation & Acceptance',
    description: 'Track offer stages, candidate communication, acceptance progress and joining status.',
    inputs: ['Client Offer Details', 'Candidate Compensation Targets', 'Notice Period Milestones'],
    outputs: ['Signed Offer Trackers', 'Joining Probability Signals', 'Placement Records'],
    automations: ['Offer stage tracking & notifications', 'Pre-joining candidate engagement touchpoints', 'Notice period check-in reminders', 'Placement confirmation ledger updates'],
    connectedEngines: ['Submission & Client Workflow Engine', 'Onboarding Engine', 'ATS / CRM Automation Engine']
  },
  {
    id: 'onboarding-engine',
    number: '10',
    name: 'Onboarding Engine',
    tagline: 'Post-Placement Hand-Off & Document Coordination',
    description: 'Coordinate documents, joining steps, candidate communication and internal handoffs after placement.',
    inputs: ['Placement Confirmation', 'Client Compliance Checklists', 'Candidate Identity & Work Documents'],
    outputs: ['Verified Onboarding File', 'Day-1 Joining Confirmation', 'Internal Hand-Off Summary'],
    automations: ['Document collection workflows', 'Background check milestone tracking', 'First-day instructions & reminders', 'Post-placement 30/60/90-day check-in prompts'],
    connectedEngines: ['Offer & Placement Engine', 'ATS / CRM Automation Engine', 'Recruitment Intelligence Engine']
  },
  {
    id: 'ats-crm-automation-engine',
    number: '11',
    name: 'ATS / CRM Automation Engine',
    tagline: 'Two-Way System Sync & Zero-Lag Record Updates',
    description: 'Keep candidate, client and job information synchronized across supported business systems without manual data entry.',
    inputs: ['Recruiter Activity Logs', 'Interview Outcomes', 'Pipeline Stage Transitions', 'Candidate Messages'],
    outputs: ['Synchronized ATS Profiles', 'Updated CRM Deal Records', 'Consistent Activity Timelines'],
    automations: ['Two-way status synchronization', 'Automated note and transcript appending', 'Field validation & normalization', 'Duplicate detection & merge queues'],
    connectedEngines: ['Candidate Sourcing Engine', 'Follow-Up Engine', 'Recruitment Intelligence Engine']
  },
  {
    id: 'recruitment-intelligence-engine',
    number: '12',
    name: 'Recruitment Intelligence Engine',
    tagline: 'Pipeline Visibility, Activity Summaries & Operational Alerts',
    description: 'Provide pipeline visibility, workflow alerts, recruiter activity summaries and operational insights.',
    inputs: ['All 11 Engine Signals', 'ATS/CRM Database Metrics', 'Recruiter Workflow Logs'],
    outputs: ['Daily Leadership Briefing', 'Pipeline Bottleneck Matrix', 'Operational SLA Alerts'],
    automations: ['Daily pipeline health rollups', 'Stalled candidate & open requirement alerts', 'Recruiter throughput summaries', 'Time-to-submit and conversion tracking'],
    connectedEngines: ['Client Requirement Engine', 'ATS / CRM Automation Engine', 'Onboarding Engine']
  }
];

export const PRODUCTIZED_SYSTEMS: ProductizedSystem[] = [
  {
    id: 'candidate-sourcing',
    title: 'AI Candidate Sourcing System',
    tagline: 'Spend less time searching manually. Spend more time engaging the right candidates.',
    description: 'Identify and organize relevant candidate profiles for active job requirements, structuring inbound applications and talent pool discovery into clean recruiter queues.',
    flow: ['Job Intake', 'Criteria Mapping', 'Multi-Source Discovery', 'Profile Collection', 'Pipeline Ingestion'],
    features: [
      'Multi-source profile collection and deduplication',
      'Contact enrichment and initial eligibility validation',
      'Integration with existing resume inboxes and job portals',
      'Automated pipeline tagging based on mandatory tech stack',
      'Direct synchronization into your primary ATS or CRM'
    ],
    outcomes: [
      'Recruiters review structured candidate lists rather than endless raw profiles',
      'Faster time-to-first-contact on newly opened client requirements',
      'No duplicate sourcing across team members'
    ],
    highlight: 'Structured Candidate Discovery'
  },
  {
    id: 'resume-screening',
    title: 'AI Resume Screening System',
    tagline: 'Move from resume overload to structured candidate review.',
    description: 'Structure resume information and help recruiters prioritize candidate review. Automatically extract experience, technical stacks, tenure, and project context.',
    flow: ['Resume Ingestion', 'Parsing & Extraction', 'Taxonomy Mapping', 'Contextual Synthesis', 'Recruiter Review'],
    features: [
      'Extraction of core skills, project scale, and employment timelines',
      'Standardized candidate snapshot generation for rapid scanning',
      'Highlighting of missing requirements or potential employment gaps',
      'Consistent profile formatting across diverse resume styles',
      'Recruiter remains the decision maker on every profile advancement'
    ],
    outcomes: [
      'Reduces manual screening time while improving review thoroughness',
      'Recruiters review stronger candidate context before making call decisions',
      'High-potential applicants are identified without sitting in backlogs'
    ],
    highlight: 'Standardized Recruiter Snapshots'
  },
  {
    id: 'candidate-matching',
    title: 'AI Candidate Matching System',
    tagline: 'Give recruiters better context before human review.',
    description: 'Compare candidate profiles with structured job requirements, highlighting domain alignment, must-have skills, and potential trade-offs.',
    flow: ['Job Requirement', 'Candidate Profile', 'Criteria Comparison', 'Match Scorecard', 'Recruiter Triage'],
    features: [
      'Objective comparison against required vs preferred competencies',
      'Clear breakdown of match strengths, uncertainties, and gaps',
      'Compensation, location, and work-mode sanity checks',
      'Surfacing existing past candidates from your internal talent pool',
      'Transparent reasoning provided for every match evaluation'
    ],
    outcomes: [
      'Prepares recruiters with tailored technical talking points before intake calls',
      'Uncovers overlooked candidates already sitting in internal databases',
      'Improves relevance of candidate submissions to clients'
    ],
    highlight: 'Contextual Alignment Scorecard'
  },
  {
    id: 'candidate-follow-up',
    title: 'AI Candidate Follow-Up System',
    tagline: 'Keep candidate conversations moving without relying entirely on manual follow-up.',
    description: 'Coordinate candidate outreach, reminders and status communication across approved email and messaging channels so warm talent never goes cold.',
    flow: ['Outreach Trigger', 'Contextual Message', 'Candidate Response', 'Qualification Check', 'Recruiter Notification'],
    features: [
      'Multi-touch follow-up cadences tailored to candidate stage',
      'Automated interview preparation and reminder notifications',
      'Status updates and feedback loops for active candidates',
      'Graceful re-engagement sequences for passive talent pools',
      'Immediate hand-off to human recruiter when candidate replies'
    ],
    outcomes: [
      'Prevents candidates from dropping out of the process due to silence',
      'Removes recurring administrative messaging from recruiter daily schedules',
      'Significantly improves candidate response rates and experience'
    ],
    highlight: 'Multi-Touch Nurture Cadence'
  },
  {
    id: 'interview-scheduling',
    title: 'AI Interview Scheduling System',
    tagline: 'Reduce the scheduling work surrounding every interview.',
    description: 'Coordinate interviews, confirmations, reminders and rescheduling between candidates, internal recruiters, and client hiring panels.',
    flow: ['Interview Request', 'Calendar Slot Matching', 'Candidate Selection', 'Calendar Dispatch', 'Reminders & Prep'],
    features: [
      'Multi-party availability matching across time zones',
      'Automated calendar event creation with meeting links and dial-ins',
      'Pre-interview prep kits dispatched to candidates automatically',
      'Self-service rescheduling workflow within approved interviewer windows',
      'Real-time interview status sync back to ATS / CRM'
    ],
    outcomes: [
      'Eliminates repeated back-and-forth emails to find open interview slots',
      'Reduces interview no-shows through timely confirmations and reminders',
      'Accelerates candidate progression through hiring stages'
    ],
    highlight: 'Zero-Friction Interview Coordination'
  },
  {
    id: 'ats-crm-automation',
    title: 'AI ATS / CRM Automation',
    tagline: 'Reduce repetitive data entry and improve pipeline visibility.',
    description: 'Keep candidate, job and client information updated across supported business systems without recruiters spending hours typing administrative notes.',
    flow: ['Workflow Event', 'Data Normalization', 'System Validation', 'Two-Way Sync', 'Audit Log'],
    features: [
      'Automated stage movement based on confirmed workflow milestones',
      'Interview summaries and screening notes automatically appended',
      'Candidate contact detail and status updates synchronized across systems',
      'Prevention of orphaned records and duplicate entries',
      'Audit log tracking for every system update'
    ],
    outcomes: [
      'Recruiters spend their days recruiting rather than updating databases',
      'ATS and CRM records reflect real-time operational reality',
      'Management gains accurate, up-to-date visibility into active pipelines'
    ],
    highlight: 'Real-Time Bi-Directional Sync'
  },
  {
    id: 'recruitment-intelligence',
    title: 'AI Recruitment Intelligence',
    tagline: 'Know what is happening across recruitment without chasing status updates.',
    description: 'Surface operational insights from recruiting workflows across open requirements, candidate pipelines, submissions, offers, and recruiter activity.',
    flow: ['Cross-System Telemetry', 'Pipeline Synthesis', 'Anomaly Detection', 'Executive Summary', 'Actionable Alerts'],
    features: [
      'Consolidated view of open requirements, submission ratios, and interview velocity',
      'Automated identification of stalled requirements and aging candidates',
      'Recruiter activity summaries highlighting pipeline movement',
      'Visibility into client feedback turnaround times',
      'Automated daily or weekly management briefings'
    ],
    outcomes: [
      'Leaders identify operational bottlenecks before they impact placement revenue',
      'No need to manually ask recruiters for daily status updates',
      'Clear visibility into where candidates leak across the hiring funnel'
    ],
    highlight: 'Executive Operational Clarity'
  },
  {
    id: 'custom-applications',
    title: 'Custom Recruitment Applications',
    tagline: 'If Your Workflow Needs Custom Software, We Build It.',
    description: 'When off-the-shelf recruiting tools cannot accommodate your firm’s unique operating model, we architect purpose-built dashboards, client portals, and workflow tools.',
    flow: ['Workflow Blueprint', 'Data & Architecture Design', 'Custom UI & Integrations', 'Staged Testing', 'Deployment'],
    features: [
      'Custom recruiter workbenches and candidate screening interfaces',
      'Client submission and feedback review portals',
      'Custom candidate qualification and technical intake applications',
      'Proprietary recruitment CRM extensions and pipeline dashboards',
      'Full cloud deployment with secure role-based access control'
    ],
    outcomes: [
      'Operating workflows tailored precisely to how your firm wins business',
      'Differentiate your staffing agency with modern, proprietary technology',
      'Full ownership of your operational workflows without restrictive vendor limits'
    ],
    highlight: 'Bespoke Staffing Engineering'
  }
];

export const OPPORTUNITY_MAP_DATA: OpportunityRow[] = [
  {
    category: 'Job Intake & Sourcing',
    workflow: 'Client Requirement Translation',
    currentProblem: 'Job requirements not converted into structured, recruiter-ready criteria; search criteria misaligned',
    automationOpportunity: 'Automated requirement breakdown with mandatory vs preferred skill taxonomy and sourcing briefs',
    priority: 'Immediate',
    impact: 'Accelerates sourcing start time and aligns recruiters on exact client expectations'
  },
  {
    category: 'Resume Review',
    workflow: 'Initial Resume Screening',
    currentProblem: 'Recruiters spend hours manually scanning hundreds of unstructured resumes before talking to candidates',
    automationOpportunity: 'AI resume intelligence parsing, skill mapping, and standardized candidate snapshots',
    priority: 'Immediate',
    impact: 'Recruiters focus evaluation time on pre-qualified profiles with clear context'
  },
  {
    category: 'Candidate Engagement',
    workflow: 'Candidate Outreach & Follow-Up',
    currentProblem: 'Follow-up depends on recruiter memory; warm candidates cool off and go cold between stages',
    automationOpportunity: 'Multi-touch conversational follow-up sequences across approved email and messaging channels',
    priority: 'High',
    impact: 'Maintains candidate responsiveness and prevents talent leakage'
  },
  {
    category: 'Interview Coordination',
    workflow: 'Multi-Party Scheduling',
    currentProblem: 'Repeated back-and-forth messages to align candidate, recruiter, and hiring manager availability',
    automationOpportunity: 'Automated slot coordination, confirmation dispatches, and pre-interview reminder notifications',
    priority: 'High',
    impact: 'Shortens interview booking cycles and reduces candidate drop-off'
  },
  {
    category: 'Client Workflows',
    workflow: 'Submission & Feedback Tracking',
    currentProblem: 'Candidate profiles submitted in inconsistent formats; client feedback delayed and untracked',
    automationOpportunity: 'Standardized candidate submission packaging with automated feedback reminder loops',
    priority: 'High',
    impact: 'Improves client perception and accelerates feedback turnaround'
  },
  {
    category: 'Database Operations',
    workflow: 'ATS / CRM Record Maintenance',
    currentProblem: 'Recruiters delay typing notes and status updates; pipeline data remains fragmented and out of date',
    automationOpportunity: 'Automated stage advancement, note synchronization, and activity logging across systems',
    priority: 'Strategic',
    impact: 'Keeps ATS/CRM records accurate without burdening recruiters with data entry'
  },
  {
    category: 'Post-Placement',
    workflow: 'Offer-to-Join & Onboarding',
    currentProblem: 'Manual tracking of document submission, notice periods, and joining readiness leads to dropouts',
    automationOpportunity: 'Pre-joining engagement check-ins, document verification tracking, and Day-1 handoff reminders',
    priority: 'Strategic',
    impact: 'Protects placement revenue by identifying joining risks early'
  },
  {
    category: 'Executive Operations',
    workflow: 'Pipeline Visibility & Reporting',
    currentProblem: 'Managers manually chase recruiters for status updates across open requirements',
    automationOpportunity: 'Automated daily recruitment intelligence briefing on open jobs, submissions, and bottlenecks',
    priority: 'Strategic',
    impact: 'Instant leadership visibility into operational velocity and pipeline health'
  }
];

export const CASE_STUDIES_DATA: CaseStudy[] = [
  {
    id: 'resume-screening-prototype',
    badge: 'Validated Prototype',
    title: 'AI Resume Screening & Qualification Workflow',
    clientType: 'IT Staffing & Technical Recruitment Architecture',
    problem: 'Recruitment teams receiving 200+ resumes per technical job requirement, spending 15+ recruiter hours weekly reading unstructured documents just to verify baseline technology stacks and experience requirements.',
    beforeState: 'Resumes downloaded from portals into disparate folders. Recruiters manually skimmed each CV, copying contact details into spreadsheets and writing basic qualification notes by hand.',
    whatWeDiscovered: 'Over 65% of applicant resumes lacked clear alignment on mandatory framework versions, work authorization, or compensation expectations—details easily verifiable before recruiter interview time.',
    whatWeBuilt: 'An automated Resume Screening & Profile Intelligence Workflow. Ingests raw PDFs, extracts structured technical competencies against client job criteria, and generates a standardized one-page Recruiter Context Card.',
    toolsConnected: ['ATS Inbound Webhooks', 'Document Extraction Models', 'Supabase Database', 'Recruiter Notification Queue'],
    automationFlow: [
      'Resume ingested via portal webhook or email inbox',
      'System parses work history, technical stack, and tenure',
      'Engine compares profile against client mandatory requirements',
      'Generates structured match scorecard with strengths and potential gaps',
      'Recruiter receives prioritized candidate review queue with key talking points'
    ],
    hoursSaved: 'Recruiters review candidate context in seconds rather than minutes',
    responseTimeImprovement: 'Fast profile triage from ingestion to recruiter review queue',
    primaryOutcome: 'Recruiters spend human review time evaluating candidate suitability rather than transcribing resume details.',
    keyLearnings: 'Screening automation must present transparent reasoning rather than black-box scores. When recruiters see exact evidence for a match, confidence and speed increase significantly.'
  },
  {
    id: 'candidate-followup-pilot',
    badge: 'Pilot Implementation',
    title: 'Candidate Follow-Up & Interview Scheduling System',
    clientType: 'Technical Contract Staffing Operations',
    problem: 'Sourced candidates regularly went cold between initial outreach and scheduled screening calls. Coordinating interviews between candidates and technical recruiters required 4 to 6 back-and-forth messages.',
    beforeState: 'Recruiters sent manual outreach emails and relied on individual memory for follow-up reminders. When candidates replied outside working hours, follow-ups lagged by up to 24 hours.',
    whatWeDiscovered: 'Candidate engagement peaked within 30 minutes of receiving an initial outreach message. If scheduling wasn’t completed immediately, response rates plummeted significantly.',
    whatWeBuilt: 'A connected Candidate Outreach & Interview Scheduling Engine. Coordinates multi-channel follow-ups, sends timely status reminders, and provides seamless calendar selection within approved recruiter windows.',
    toolsConnected: ['Email Delivery APIs', 'Calendar Scheduling Services', 'Messaging Channels', 'ATS Candidate Database'],
    automationFlow: [
      'Recruiter approves candidate for outreach',
      'Personalized outreach dispatched across designated channel',
      'Candidate response triggers conversational qualification flow',
      'Qualified candidate selects verified interview slot in real time',
      'Calendar invites, prep material, and interview reminders dispatched automatically'
    ],
    hoursSaved: 'Removes recurring scheduling coordination from recruiter daily workload',
    responseTimeImprovement: 'Rapid scheduling turnaround upon candidate reply',
    primaryOutcome: 'Candidates transition from outreach to confirmed interview without multi-day delays or missed connections.',
    keyLearnings: 'Simplifying the scheduling step is critical. Giving candidates instant booking flexibility with automated reminders prevents drop-off during the critical early engagement phase.'
  },
  {
    id: 'ats-pipeline-build',
    badge: 'Internal Production Build',
    title: 'Recruitment Pipeline & ATS / CRM Automation',
    clientType: 'IT Staffing Firm Operations Workflow',
    problem: 'Recruiters focused on active calls and delayed updating candidate status, interview feedback, and client submission records in the ATS. Management lacked real-time visibility into actual pipeline state.',
    beforeState: 'Recruiters manually updated records at the end of the week, leading to outdated candidate statuses, forgotten client feedback loops, and incomplete recruitment metrics.',
    whatWeDiscovered: 'Manual data entry was the primary source of operational friction. Recruiters viewed the ATS as an administrative chore rather than an operating asset.',
    whatWeBuilt: 'A two-way ATS/CRM Automation Engine that syncs workflow events in real time. Meeting outcomes, candidate responses, and submission milestones update central records automatically.',
    toolsConnected: ['ATS REST APIs', 'Calendar Event Listeners', 'Communication Webhooks', 'Executive Dashboard'],
    automationFlow: [
      'Interview completion event detected via calendar/meeting status',
      'Candidate record automatically updated with stage progression',
      'Submission packet generated and logged against client requirement',
      'System flags stalled candidates without activity in 72+ hours',
      'Daily operational rollup generated for management visibility'
    ],
    hoursSaved: 'Eliminates repetitive data re-entry across multiple tools',
    responseTimeImprovement: 'Real-time pipeline state reflected across all systems',
    primaryOutcome: 'ATS records remain consistent and up to date, providing leaders with genuine pipeline clarity without chasing team members.',
    keyLearnings: 'System synchronization works best when it happens transparently in the background of actions recruiters already take, rather than forcing additional data entry steps.'
  }
];

export const DIFFERENTIATION_DATA = {
  traditional: [
    'Add more standalone tools and software subscriptions',
    'Create isolated automations with no shared pipeline state',
    'Depend on manual handoffs between recruiters and systems',
    'Automate individual tasks without redesigning the workflow',
    'Leave recruiters managing tool integrations and troubleshooting',
    'Focus on technology first rather than recruitment business process'
  ],
  kiranOS: [
    'Map the complete recruitment workflow from requirement to placement',
    'Find the highest-value operational bottleneck and solve it first',
    'Build connected workflows around your firm’s specific recruiting process',
    'Connect existing ATS, CRM, calendars, and channels where technically possible',
    'Keep human recruiters strictly responsible for judgment and relationships',
    'Measure operational impact: faster responses, cleaner data, reduced admin',
    'Expand one verified recruitment workflow at a time'
  ]
};

export const INTEGRATIONS_DATA = [
  { name: 'ATS Systems', category: 'Applicant Tracking', description: 'Connect supported ATS platforms for two-way candidate, requirement, and stage updates.' },
  { name: 'Recruitment CRMs', category: 'Client & Deal Management', description: 'Synchronize client accounts, open job orders, hiring contacts, and deal pipeline status.' },
  { name: 'Email (Google & Microsoft)', category: 'Communication', description: 'Automated interview invites, candidate outreach sequences, and client submission packs.' },
  { name: 'WhatsApp Business API', category: 'Direct Messaging', description: 'Approved official messaging for time-sensitive candidate outreach, reminders, and updates.' },
  { name: 'Calendar Systems', category: 'Scheduling', description: 'Real-time interview scheduling, multi-interviewer buffer coordination, and conflict checks.' },
  { name: 'Job Portals & Ingestion', category: 'Sourcing Inbound', description: 'Webhook and inbox listeners to collect candidate profiles from job boards and portals.' },
  { name: 'Spreadsheets (Sheets / Excel)', category: 'Data & Reporting', description: 'Two-way synchronization for operational trackers without proprietary lock-in.' },
  { name: 'Databases (PostgreSQL / Supabase)', category: 'State & Records', description: 'Secure structured storage for candidate profiles, talent pools, and operational telemetry.' },
  { name: 'Internal Applications', category: 'Custom Workflows', description: 'Connect custom recruiter workbenches, submission portals, and admin dashboards.' },
  { name: 'REST APIs & Webhooks', category: 'Ecosystem Glue', description: 'Standardized protocols ensuring reliable data movement between all supported software.' }
];

export const FAQ_DATA: FaqItem[] = [
  {
    question: 'What type of recruitment firms do you work with?',
    answer: 'We focus on IT staffing and recruitment firms that manage recurring job requirements, candidate pipelines, communication, interviews and operational workflows.'
  },
  {
    question: 'Do we need to replace our ATS or CRM?',
    answer: 'Usually not. The first goal is to understand your existing workflow and connect or improve the systems you already use where technically appropriate.'
  },
  {
    question: 'Will AI make candidate decisions automatically?',
    answer: 'The system is designed to support recruiting operations. Human recruiters remain responsible for judgment, relationships, nuanced qualification and final decisions.'
  },
  {
    question: 'What should we automate first?',
    answer: 'We start with the workflow that combines high repetition, clear operational friction and measurable business impact.'
  },
  {
    question: 'Can you automate candidate follow-up?',
    answer: 'Candidate communication, reminders and follow-up workflows can be designed around approved channels and the firm’s operating process.'
  },
  {
    question: 'Can this integrate with our existing recruitment software?',
    answer: 'That depends on the product, available APIs and access permissions. We review the current technology stack during the workflow audit before recommending an architecture.'
  },
  {
    question: 'How much work is required from our team?',
    answer: 'The goal is to minimize disruption. We first map the existing process with key stakeholders, then design implementation around the workflow the team already understands.'
  },
  {
    question: 'What happens if AI makes a mistake?',
    answer: 'AI should not be treated as an uncontrolled decision maker. Important workflows should include validation rules, human review and clear exception handling based on risk.'
  },
  {
    question: 'How do we start?',
    answer: 'We start with an AI Recruitment Workflow Audit to identify the strongest operational opportunity before building anything.'
  },
  {
    question: 'Have you done this in our industry before?',
    answer: 'Our approach starts with deep workflow analysis rather than pretending every staffing firm operates the same way. Where verified client results are not yet available, we will show the methodology, system architecture, prototypes and documented industry evidence honestly rather than making unsupported claims.'
  }
];
