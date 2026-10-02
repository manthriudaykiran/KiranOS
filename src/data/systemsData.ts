import { Engine, ProductizedSystem, OpportunityRow, CaseStudy, FaqItem } from '../types';

export const ENGINES_DATA: Engine[] = [
  {
    id: 'lead-engine',
    number: '01',
    name: 'Lead Engine',
    tagline: 'Multi-Channel Instant Inbound Capture',
    description: 'Captures and structures incoming leads from social ad campaigns, reel DMs, website landing pages, and interactive opt-in forms without human delay.',
    inputs: ['Instagram DMs & Comments', 'Meta & Google Ads', 'Landing Pages & Funnels', 'WhatsApp Inbound', 'Webinar Registrations'],
    outputs: ['Enriched Lead Record', 'Initial Intent Score', 'Instant Welcome Hook'],
    automations: ['Real-time webhook ingestion', 'Zero-delay DM auto-response', 'Deduplication across channels', 'Source tracking & UTM attribution'],
    connectedEngines: ['Follow-Up Engine', 'Sales Engine', 'Intelligence Engine']
  },
  {
    id: 'followup-engine',
    number: '02',
    name: 'Follow-Up Engine',
    tagline: 'Conversational WhatsApp & Email Nurture',
    description: 'Executes contextual, multi-step conversational nurture sequences over approved WhatsApp Business and email, adjusting cadence based on prospect replies.',
    inputs: ['Lead Record', 'Prospect Activity State', 'Channel Preference'],
    outputs: ['Qualified Engagement', 'Scheduled Consultations', 'Warmed Prospects'],
    automations: ['Conversational AI WhatsApp messaging', 'Dynamic email deliverability routing', 'Behavioral re-engagement triggers', 'No-response recovery loops'],
    connectedEngines: ['Lead Engine', 'Sales Engine', 'Webinar Engine']
  },
  {
    id: 'sales-engine',
    number: '03',
    name: 'Sales Engine',
    tagline: 'Qualification, Scoring & Calendar Booking',
    description: 'Filters prospects through custom qualification criteria, scores high-intent buyers, schedules sales consultations, and automates multi-stage SMS/WhatsApp reminders.',
    inputs: ['Nurtured Prospect', 'Form Submissions', 'Chat History'],
    outputs: ['Booked Calendar Event', 'Pre-Call Dossier', 'Objection Profile'],
    automations: ['Interactive qualification questionnaires', 'Dynamic calendar sync & buffer rules', 'Multi-touch appointment reminders', 'Automated CRM deal pipeline updates'],
    connectedEngines: ['Follow-Up Engine', 'Webinar Engine', 'Intelligence Engine', 'Onboarding Engine']
  },
  {
    id: 'webinar-engine',
    number: '04',
    name: 'Webinar Engine',
    tagline: 'Attendance Booster & No-Show Recovery',
    description: 'Maximizes show-up rates for live workshops and masterclasses with personalized AI voice reminders, calendar invites, and post-session conversion sequences.',
    inputs: ['Webinar Registrations', 'Live Room Attendance Logs', 'Drop-off Timestamps'],
    outputs: ['Attended Buyer Segments', 'No-Show Recovery Leads', 'Replay Engagements'],
    automations: ['WhatsApp event reminders with 1-click links', 'AI voice reminder dispatch 15m prior', 'Real-time attendance duration tracking', 'Segmented follow-up based on watch time'],
    connectedEngines: ['Lead Engine', 'Sales Engine', 'Intelligence Engine']
  },
  {
    id: 'onboarding-engine',
    number: '05',
    name: 'Client Onboarding Engine',
    tagline: 'Zero-Friction Payment to Day-1 Delivery',
    description: 'Instantly transitions paying clients from transaction completion to enrolled status, orchestrating contract signing, course access, and orientation steps.',
    inputs: ['Stripe / Razorpay Webhooks', 'Payment Notifications'],
    outputs: ['Active Student Profile', 'Course & Community Access', 'Welcome Dossier'],
    automations: ['Immediate invoice & receipt generation', 'Automated portal & LMS invite generation', 'Community role provisioning (Skool/Discord/WhatsApp)', 'Kickoff intake form reminders & calendar booking'],
    connectedEngines: ['Sales Engine', 'Student Success Engine', 'Intelligence Engine']
  },
  {
    id: 'student-engine',
    number: '06',
    name: 'Student Success Engine',
    tagline: '24/7 AI Knowledge Assistant & Milestone Tracking',
    description: 'Provides around-the-clock curriculum answers trained strictly on your coaching materials, tracks student completion milestones, and alerts coaches to stalled clients.',
    inputs: ['Student Inquiries', 'Course Progress Events', 'Community Messages'],
    outputs: ['Instant Accurate Answers', 'Coach Escalation Alerts', 'Progress Check-ins'],
    automations: ['RAG-based curriculum question answering', 'Automated stalled-student check-in alerts', 'Milestone celebration messages', 'High-priority coaching intervention routing'],
    connectedEngines: ['Client Onboarding Engine', 'Intelligence Engine']
  },
  {
    id: 'content-engine',
    number: '07',
    name: 'Content Engine',
    tagline: 'Research, Repurposing & Distribution Pipeline',
    description: 'Transforms core client coaching calls and long-form training into structured social frameworks, newsletters, and audience nurture assets with consistent voice.',
    inputs: ['Session Transcripts', 'Core Frameworks', 'Student Questions'],
    outputs: ['Formatted Newsletters', 'Social Post Drafts', 'Case Study Frameworks'],
    automations: ['Audio/video transcript ingestion', 'Key insight extraction and concept tagging', 'Multi-format repurposing (LinkedIn, X, WhatsApp blasts)', 'Content draft queue for founder approval'],
    connectedEngines: ['Lead Engine', 'Intelligence Engine']
  },
  {
    id: 'intelligence-engine',
    number: '08',
    name: 'Intelligence Engine',
    tagline: 'Cross-System Analytics & Daily Executive Briefings',
    description: 'Aggregates signals from all seven engines into an actionable daily management brief, identifying pipeline leaks, high-intent leads, and delivery bottlenecks.',
    inputs: ['All 7 Engine Telemetry', 'Payment Gateways', 'CRM Activity'],
    outputs: ['Daily Telegram/WhatsApp Brief', 'Pipeline Health Matrix', 'Conversion Leak Alerts'],
    automations: ['End-of-day cross-platform metric consolidation', 'Abnormal drop-off anomaly alerts', 'Revenue vs advertising cost calculations', 'Coach intervention recommendations'],
    connectedEngines: ['Lead Engine', 'Follow-Up Engine', 'Sales Engine', 'Webinar Engine', 'Client Onboarding Engine', 'Student Success Engine', 'Content Engine']
  }
];

export const PRODUCTIZED_SYSTEMS: ProductizedSystem[] = [
  {
    id: 'lead-conversion',
    title: 'AI Lead Conversion Engine',
    tagline: 'Never Let a Warm Lead Go Cold.',
    description: 'Capture inbound inquiries from Instagram, ads, and landing pages, qualify their budget and timeline via natural conversational WhatsApp, and push booked calls to your calendar within 120 seconds.',
    flow: ['Capture', 'Respond (Instant)', 'Qualify (AI)', 'Nurture', 'Book on Calendar'],
    features: [
      'Instagram DM & Comment-to-WhatsApp automation',
      'Contextual AI conversation in English & regional context',
      'Automated qualification scoring matrix',
      'Direct synchronization with your CRM & Google Calendar',
      'Persistent multi-day no-response recovery sequences'
    ],
    outcomes: [
      'Zero lead leakage during off-hours or peak campaigns',
      'Lead response time reduced from hours to under 2 minutes',
      'Sales calendar populated exclusively with pre-qualified buyers'
    ],
    highlight: 'Instant 2-minute response speed'
  },
  {
    id: 'voice-agent',
    title: 'AI Voice Growth Agent',
    tagline: 'Every Lead Gets a Conversation.',
    description: 'Human-like conversational voice agents trained on your business script to handle high-volume outbound reminder calls, webinar confirmations, and no-show re-engagements with zero staff fatigue.',
    flow: ['Trigger Event', 'AI Voice Call', 'Intent Detection', 'Disposition Route', 'CRM Update'],
    features: [
      'Webinar reminder calls 15-30 minutes before broadcast',
      'Appointment confirmation and reschedule management',
      'Immediate no-show recovery for missed sales calls',
      'Lead qualification screening for high-volume programs',
      'Full audio recording, transcript, and sentiment analysis'
    ],
    outcomes: [
      'Show-up rates increased without hiring call center staff',
      'Immediate touchpoint with every registered prospect',
      'Coaches enter sales calls with verified attendance intent'
    ],
    highlight: 'Natural voice cadence & smart objection routing'
  },
  {
    id: 'webinar-revenue',
    title: 'Webinar Revenue Engine',
    tagline: 'Turn Registrations Into Conversations.',
    description: 'An integrated system that bridges the gap between ad click and workshop seat. From automated WhatsApp calendar invites to real-time attendance drop-off tracking and tailored post-webinar offers.',
    flow: ['Reel / Ad', 'Registration', 'WhatsApp Sync', 'AI Reminder', 'Webinar Room', 'Attendance Log', 'Tailored Follow-Up', 'Sales Call'],
    features: [
      'Automated WhatsApp calendar event dispatch upon signup',
      'Multi-touch countdown sequences (24h, 2h, 15m)',
      'Live attendee duration tracking and drop-off tagging',
      'Separate nurture tracks for full-watchers vs early drop-offs vs no-shows',
      'Automated offer delivery & sales call booking pipeline'
    ],
    outcomes: [
      'Consistently higher room attendance percentage',
      'Non-attendees systematically recovered into evergreen replays',
      'Warm buyers receive personalized booking links within minutes'
    ],
    highlight: 'Granular attendance-based segmentation'
  },
  {
    id: 'sales-intelligence',
    title: 'AI Sales Intelligence',
    tagline: 'Every Sales Call Makes the Next One Smarter.',
    description: 'Automatically transcribes your consultation and closing calls, extracts buyer objections, scores purchase intent, updates your CRM fields, and produces a personalized follow-up summary for the prospect.',
    flow: ['Sales Call (Zoom/Meet)', 'Instant Transcript', 'Objection Analysis', 'Dossier Generation', 'CRM Sync & Follow-Up'],
    features: [
      'Automated Zoom and Google Meet audio capture',
      'Objection taxonomy detection (budget, timing, spouse, partner)',
      'Lead heat score calculated from commitment signals',
      'Personalized recap email and WhatsApp summary drafted automatically',
      'CRM pipeline status, notes, and tasks updated without manual typing'
    ],
    outcomes: [
      'Eliminates 30-45 minutes of manual post-call admin per consultation',
      'Reveals hidden friction points across all closed-lost calls',
      'Arm sales closers with exact conversational patterns that convert'
    ],
    highlight: 'Zero manual CRM data entry after calls'
  },
  {
    id: 'client-success',
    title: 'AI Client Success System',
    tagline: 'Automate Delivery Without Losing the Human Touch.',
    description: 'A white-glove onboarding and progress monitoring operating system that grants portal access, distributes custom contracts, schedules kickoff sessions, and alerts you when a client needs personal help.',
    flow: ['Payment Cleared', 'Contract Dispatched', 'Portal Provisioned', 'Kickoff Booked', 'Progress Tracker', 'Retention Signals'],
    features: [
      'Instant payment receipt & onboarding welcome package',
      'Automated access provisioning across LMS, community, and drive',
      'Intelligent intake form analysis that surfaces client priorities',
      'Milestone check-ins based on curriculum progression',
      'Early churn risk detection and retention notifications'
    ],
    outcomes: [
      'Clients experience instant, professional Day-1 delight',
      'Zero administrative lag between payment and student activation',
      'Coaches focus on high-impact transformation rather than access troubleshooting'
    ],
    highlight: 'Flawless zero-delay student onboarding'
  },
  {
    id: 'knowledge-assistant',
    title: 'AI Knowledge Assistant',
    tagline: 'Your Business Knowledge. Available 24/7.',
    description: 'A private conversational intelligence model trained exclusively on your courses, SOPs, past coaching Q&As, and frameworks, answering routine student questions with pinpoint accuracy.',
    flow: ['Course Documents / SOPs', 'Private Knowledge Base', 'Student Inquiries', 'Grounded Answers', 'Escalation Alert'],
    features: [
      'Grounded strictly in your verified coaching materials (no hallucinations)',
      'Cites exact video timestamps and lesson references in responses',
      'Embedded directly inside your student community or WhatsApp channel',
      'Flags sensitive personal or technical queries for coach escalation',
      'Identifies gaps where multiple students ask similar unresolved questions'
    ],
    outcomes: [
      'Over 65% of routine curriculum FAQs answered instantly 24/7',
      'Students stay unblocked at midnight without waiting for support hours',
      'Coaches reclaim hours of repetitive community messaging daily'
    ],
    highlight: 'Private, grounded RAG architecture'
  },
  {
    id: 'custom-applications',
    title: 'Custom AI Applications',
    tagline: 'If the Tool Doesn’t Exist, We Build It.',
    description: 'When off-the-shelf software falls short of your unique coaching methodology, we architect custom student assessment portals, proprietary calculation tools, and founder executive dashboards.',
    flow: ['Problem Blueprint', 'Database & API Architecture', 'AI Integration', 'Custom Web/PWA App', 'Seamless Deployment'],
    features: [
      'Custom interactive client diagnosis & assessment tools',
      'Proprietary coach-client milestone dashboards',
      'Centralized multi-channel business intelligence control rooms',
      'Tailored membership web applications with integrated AI features',
      'Full cloud deployment with automated backups and bank-grade security'
    ],
    outcomes: [
      'Create intellectual property that competitors cannot easily copy',
      'Delight enterprise or premium clients with tailored software experiences',
      'Own your data and workflows without restrictive platform lock-in'
    ],
    highlight: 'Full-stack engineering & proprietary IP'
  }
];

export const OPPORTUNITY_MAP_DATA: OpportunityRow[] = [
  {
    category: 'Lead Capture & Response',
    workflow: 'New Inbound Inquiries',
    currentProblem: 'Slow manual response (2-6 hours); warm prospects move to competitors',
    automationOpportunity: 'Instant 90-second conversational WhatsApp qualification & booking',
    priority: 'Immediate',
    impact: 'Recovers lost leads & locks appointments while intent is peaked'
  },
  {
    category: 'Event Operations',
    workflow: 'Webinar Registrations',
    currentProblem: 'Attendance drops to 15-20% due to buried email reminders',
    automationOpportunity: 'Multi-touch WhatsApp reminders + 15m outbound AI voice reminder',
    priority: 'High',
    impact: 'Substantially increases live room seats and buyer engagement'
  },
  {
    category: 'Sales & Consultations',
    workflow: 'Sales Call Follow-Up',
    currentProblem: 'Notes typed manually into CRM; follow-up summaries sent days late',
    automationOpportunity: 'Instant Zoom audio analysis, objection profiling & tailored proposal recap',
    priority: 'High',
    impact: 'Accelerates closing velocity and saves 40m per consultation'
  },
  {
    category: 'Client Delivery',
    workflow: 'New Client Onboarding',
    currentProblem: 'Manual contract sending, LMS password setup, and spreadsheet tracking',
    automationOpportunity: 'End-to-end payment-triggered provisioning & scheduled intake kickoff',
    priority: 'Immediate',
    impact: 'Eliminates day-one buyer remorse and administrative lag'
  },
  {
    category: 'Community & Support',
    workflow: 'Student Curriculum FAQs',
    currentProblem: 'Coach & team spend 15+ hours/week re-answering identical core questions',
    automationOpportunity: 'Private AI Knowledge Assistant trained on curriculum video & PDFs',
    priority: 'High',
    impact: 'Resolves routine questions in seconds; frees team for high-touch mentorship'
  },
  {
    category: 'Executive Operations',
    workflow: 'Cross-Tool Reporting',
    currentProblem: 'Disjointed spreadsheets; founder lacks clear daily view of ads, calls & revenue',
    automationOpportunity: 'Automated daily executive briefing delivered directly to Telegram/WhatsApp',
    priority: 'Strategic',
    impact: 'Instant clarity on bottlenecks and ad spend efficiency every morning'
  }
];

export const CASE_STUDIES_DATA: CaseStudy[] = [
  {
    id: 'lead-capture-pilot',
    badge: 'Pilot Implementation',
    title: 'Lead Capture + Instant Multichannel Follow-Up System',
    clientType: 'High-Ticket Business & Leadership Coach',
    problem: 'Generating 300+ monthly inbound ad leads across Instagram and landing pages, but follow-ups were handled manually by a virtual assistant with an average lag of 3.5 hours. Nearly 40% of leads never answered back.',
    beforeState: 'Leads accumulated in Google Sheets. VA manually sent templated WhatsApp messages and emails during business hours. High no-response rate; ad budget leaked substantially.',
    whatWeDiscovered: 'Over 68% of inbound leads registered outside working hours (between 8:00 PM and 11:30 PM). By the time the VA messaged the following morning, prospects had already cooled down or forgotten the offer.',
    whatWeBuilt: 'An automated 24/7 Lead Capture & Conversational Follow-Up Engine connected directly to Meta Ad Webhooks, WhatsApp Business API, and Google Calendar. Prospects receive a personalized qualification dialogue within 90 seconds.',
    toolsConnected: ['Meta Lead Ads', 'WhatsApp Business API', 'n8n Workflow Engine', 'Supabase Database', 'Google Calendar API'],
    automationFlow: [
      'Meta Ad Form / Reel Comment triggers instant webhook',
      'System enriches lead and verifies phone number validity',
      'AI sends tailored conversational greeting on WhatsApp',
      'Prospect answers 3 qualification questions naturally in chat',
      'High-score leads receive instant 1-click booking link',
      'Lead record and call notes synced to CRM before the call'
    ],
    hoursSaved: '22+ hours / week Virtual Assistant time reclaimed',
    responseTimeImprovement: 'From 3.5 hours down to 85 seconds',
    primaryOutcome: 'Zero lead drop-off during evening hours; consultation booking rate climbed significantly without adding headcount.',
    keyLearnings: 'Speed-to-lead is the single highest leverage lever in coaching funnels. Conversational qualification on WhatsApp converts at more than triple the rate of static form redirect pages.',
    quote: {
      text: 'Our calendar filled up while I was asleep. The system doesn’t feel robotic—prospects arrive on my strategy calls already primed and qualified.',
      author: 'Rajesh V.',
      role: 'Executive Leadership Coach (Hyderabad)'
    }
  },
  {
    id: 'webinar-attendance-build',
    badge: 'Internal Production Build',
    title: 'Webinar Attendance + No-Show Recovery Engine',
    clientType: 'Workshop & Masterclass Live Accelerator',
    problem: 'Consistently drove 600–800 registrations per 3-day live workshop, but live show-up rates hovered around 18–22%. Replays had minimal engagement and post-webinar pitch conversion was inconsistent.',
    beforeState: 'Standard email reminders sent via email marketing tool. Many landed in Promotions or Spam. No automated tracking of who stayed until the pitch.',
    whatWeDiscovered: 'Email open rates for event reminders were below 19%. Attendees missed start times because they had no frictionless calendar invite or WhatsApp ping with a direct join link.',
    whatWeBuilt: 'A comprehensive Webinar Revenue Engine with automated WhatsApp calendar booking, 15-minute AI voice reminder calls, Zoom webhook tracking for exact join/leave duration, and tiered post-webinar nurture paths.',
    toolsConnected: ['Zoom API', 'Twilio Voice AI', 'WhatsApp Cloud API', 'Stripe / Razorpay', 'PostgreSQL'],
    automationFlow: [
      'Registration creates auto-synced Google/Apple calendar file',
      'WhatsApp countdown dispatched at T-24h, T-2h, and T-15m',
      'Voice AI agent places 20-second reminder call to registered numbers',
      'Zoom attendance webhook logs exact minutes attended',
      'Full-watchers receive immediate VIP application link',
      'No-shows receive tailored 24-hour replay access sequence'
    ],
    hoursSaved: '18 hours of manual list segmenting and broadcasting',
    responseTimeImprovement: 'Immediate attendance categorization at session end',
    primaryOutcome: 'Live room attendance increased to 34%; recovered 42 additional consult bookings from targeted no-show workflows.',
    keyLearnings: 'Multi-channel reinforcement (WhatsApp + Voice) creates professional urgency. Segmenting follow-ups based on actual minutes watched yields dramatically higher conversion than generic blast emails.',
    quote: {
      text: 'The voice reminder alone paid for the entire implementation. People joined saying they appreciated the direct phone call reminder right before we went live.',
      author: 'Kiran S.',
      role: 'Online Education Director'
    }
  },
  {
    id: 'client-onboarding-prototype',
    badge: 'Validated Prototype',
    title: 'Client Onboarding + 24/7 AI Student Assistant',
    clientType: '12-Week High-Ticket Transformation Program',
    problem: 'Coach and community manager spent 3+ hours every day answering the same 25 foundational questions about curriculum access, assignment formats, and schedule dates in the community group.',
    beforeState: 'Manual onboarding email sent within 24 hours of payment. Students frequently asked where to start. Community was cluttered with operational questions rather than transformative discussion.',
    whatWeDiscovered: 'Students felt overwhelmed during the first 72 hours. When they encountered a minor hurdle (e.g. finding a spreadsheet template), momentum stalled for days.',
    whatWeBuilt: 'An integrated Client Onboarding Engine coupled with a Private AI Knowledge Assistant trained strictly on course transcripts, worksheets, and SOPs. Directly accessible inside their student portal and WhatsApp.',
    toolsConnected: ['Razorpay Webhook', 'Claude 3.5 Sonnet RAG Core', 'Supabase Vector DB', 'Google Drive API', 'WhatsApp Community'],
    automationFlow: [
      'Successful payment triggers instant welcome dossier and credentials',
      'Custom client portal created with pre-filled progress roadmap',
      'Student receives WhatsApp welcome message with assistant access',
      'Assistant answers student questions citing exact lesson timestamps',
      'Complex coaching edge-cases trigger alert to head coach'
    ],
    hoursSaved: '14+ hours / week of coach repetitive messaging eliminated',
    responseTimeImprovement: 'Student FAQ resolution dropped from 4 hours to 5 seconds',
    primaryOutcome: 'Student onboarding completion reached 96% within first 48 hours; community focus returned to high-value masterminding.',
    keyLearnings: 'AI assistance in student delivery must be grounded strictly in your proprietary material. Hallucinations destroy coaching authority; verified retrieval creates deep trust.',
    quote: {
      text: 'My students feel supported at midnight on a Sunday. And my community manager can finally focus on client engagement instead of resetting passwords.',
      author: 'Pooja M.',
      role: 'Career & Mindset Coach'
    }
  }
];

export const DIFFERENTIATION_DATA = {
  traditional: [
    'Sells disconnected AI tools & software licenses',
    'Builds isolated, fragile automations with no central state',
    'Technology-first: forces you to adapt your coaching to their tools',
    'Leaves as soon as initial setup scripts are connected',
    'Uses generic one-size-fits-all templates from YouTube tutorials',
    'Measures vanity metrics like total messages sent',
    'Demands you replace your entire tech stack with unfamiliar platforms'
  ],
  kiranOS: [
    'Solves root business bottlenecks and protects founder time',
    'Architects one unified, connected operating system with shared data',
    'Business-first: customizes systems to match your exact coaching journey',
    'Continuously monitors, maintains, and optimizes operating workflows',
    'Custom-engineers end-to-end pipelines tailored to your methodology',
    'Measures real business outcomes: response speed, show-up rates, hours saved',
    'Integrates seamlessly with the tools you and your clients already use'
  ]
};

export const INTEGRATIONS_DATA = [
  { name: 'WhatsApp Business API', category: 'Messaging & Outreach', description: 'Approved official API integration for instant lead capture, reminders, and nurture.' },
  { name: 'Claude (Anthropic)', category: 'AI & Intelligence', description: 'Nuanced reasoning for qualification, sales intelligence, and client assistance.' },
  { name: 'ChatGPT / OpenAI', category: 'AI & Intelligence', description: 'Rapid content drafting, transcript parsing, and conversational agents.' },
  { name: 'Gemini (Google)', category: 'AI & Intelligence', description: 'Multimodal processing of workshop video, slides, and audio recordings.' },
  { name: 'n8n Workflow Engine', category: 'Automation Core', description: 'Self-hosted, robust orchestration connecting webhooks, APIs, and databases.' },
  { name: 'Supabase / PostgreSQL', category: 'Database & State', description: 'Enterprise data layer storing lead profiles, vector embeddings, and metrics.' },
  { name: 'Google Sheets', category: 'Business Operations', description: 'Live two-way spreadsheet sync for team visibility without platform lock-in.' },
  { name: 'Google Calendar', category: 'Business Operations', description: 'Real-time appointment scheduling, buffer management, and conflict checks.' },
  { name: 'Zoom API', category: 'Webinars & Meetings', description: 'Automated meeting room generation and attendee engagement timestamp capture.' },
  { name: 'Calendly', category: 'Appointments', description: 'Seamless booking webhook routing into qualification and pre-call workflows.' },
  { name: 'Stripe', category: 'Payments', description: 'Instant webhook trigger for contract dispatch, LMS access, and student setup.' },
  { name: 'Razorpay', category: 'Payments', description: 'Complete India payment gateway automation for courses, coaching, and subscriptions.' },
  { name: 'Twilio Voice', category: 'Voice AI', description: 'Programmable voice infrastructure for reminder calls and attendance boosts.' },
  { name: 'Gmail / Google Workspace', category: 'Communication', description: 'Transactional emails, onboarding digests, and daily management briefings.' }
];

export const FAQ_DATA: FaqItem[] = [
  {
    question: 'What type of businesses do you work with?',
    answer: 'We primarily work with coaches, consultants, course creators and online education businesses that already generate leads or serve customers and want to eliminate repetitive operational work. Whether you are running high-ticket 1:1 coaching, group masterminds, or hybrid cohort programs, our systems are built specifically around your delivery model.'
  },
  {
    question: 'Do I need technical knowledge?',
    answer: 'No. You and your team do not need any coding or technical background. We map your current business processes, design the architecture, build the AI agents and workflows, integrate your tools, and provide simple operational runbooks. We build and maintain the engine so you can focus entirely on coaching and client transformation.'
  },
  {
    question: 'Will you replace my existing tools?',
    answer: 'Usually not. Where possible, we connect and enhance the tools you already rely on—including your current CRM, Google Workspace, WhatsApp, Zoom, payment gateways (Razorpay/Stripe), and calendar systems. We only recommend adding or changing software when an existing tool is a verified bottleneck to scaling.'
  },
  {
    question: 'Can you work with WhatsApp?',
    answer: 'Yes. We build compliant, approved WhatsApp Business API integrations. This allows you to handle lead capture, conversational qualification, event reminder broadcasts, and student support directly inside the channel where your prospects and clients are most responsive, without risk of number bans.'
  },
  {
    question: 'Do you only build automations?',
    answer: 'No. Depending on the problem, our solutions range across workflow automation, conversational AI agents, private RAG knowledge assistants, custom databases, centralized dashboards, and bespoke full-stack applications. We build whatever is necessary to solve the operational bottleneck permanently.'
  },
  {
    question: 'How do we start?',
    answer: 'We begin with an AI Growth & Operations Audit. During this 30-minute structured session, we map your end-to-end customer journey from lead acquisition to client delivery, identify the highest-friction bottlenecks, and deliver a prioritized AI Opportunity Map showing exactly what to automate first.'
  },
  {
    question: 'Do you automate everything immediately?',
    answer: 'No. We follow a strict phased methodology: MAP → BUILD → CONNECT → SCALE. We first build and validate the single highest-impact workflow (typically lead response or onboarding), prove its stability and ROI, and then methodically connect the remaining engines into one unified operating system.'
  }
];
