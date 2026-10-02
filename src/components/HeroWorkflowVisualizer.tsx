import React, { useState, useEffect } from 'react';
import { 
  Briefcase,
  Search,
  FileText,
  Target,
  UserCheck,
  MessageSquare,
  Calendar,
  Share2,
  CheckCircle2,
  Sparkles,
  Database,
  TrendingUp,
  Play,
  Pause,
  ArrowRight
} from 'lucide-react';

interface StageDetail {
  id: string;
  name: string;
  shortName: string;
  icon: React.ComponentType<{ className?: string }>;
  role: string;
  status: string;
  channel: string;
  latency: string;
  payload: string;
}

const STAGES: StageDetail[] = [
  {
    id: 'intake',
    name: 'Client Requirement & Intake',
    shortName: 'Intake',
    icon: Briefcase,
    role: 'Requirement Breakdown',
    status: 'Structured Criteria',
    channel: 'Client Brief / Hiring Manager Intake',
    latency: 'Instant normalization',
    payload: 'Role: Senior Cloud Architect · Stack: AWS, Kubernetes, Go · Level: Lead · Priority: Immediate'
  },
  {
    id: 'sourcing',
    name: 'Candidate Sourcing',
    shortName: 'Sourcing',
    icon: Search,
    role: 'Discovery & Pipeline Ingestion',
    status: 'Ingestion Active',
    channel: 'Job Portals / Talent Database / Inbound',
    latency: 'Automated deduplication',
    payload: '42 candidate profiles captured · Contact details enriched · Duplicate profiles merged'
  },
  {
    id: 'screening',
    name: 'Resume Screening',
    shortName: 'Screening',
    icon: FileText,
    role: 'Resume Intelligence',
    status: 'Taxonomy Mapped',
    channel: 'Document Extraction Engine',
    latency: '3.4s parsing time',
    payload: 'Skills extracted: Go, AWS EKS, Terraform · Tenure: 7.5 yrs · Standardized snapshot ready'
  },
  {
    id: 'matching',
    name: 'Candidate Matching',
    shortName: 'Matching',
    icon: Target,
    role: 'Criteria Alignment',
    status: 'Scorecard Created',
    channel: 'Alignment Engine',
    latency: 'Real-time comparison',
    payload: 'Match: 94% · Must-haves verified · Strengths: Distributed Systems · Review queue prioritized'
  },
  {
    id: 'qualification',
    name: 'Candidate Qualification',
    shortName: 'Qualification',
    icon: UserCheck,
    role: 'Baseline Screening',
    status: 'Criteria Confirmed',
    channel: 'Conversational Pre-Screening',
    latency: 'Candidate verified',
    payload: 'Notice: 2 weeks · Target Salary: $165k · Work Authorization: Citizen · Location: Hybrid / Remote'
  },
  {
    id: 'outreach',
    name: 'Candidate Outreach & Follow-Up',
    shortName: 'Follow-Up',
    icon: MessageSquare,
    role: 'Multi-Channel Cadence',
    status: 'Active Engagement',
    channel: 'Email / Approved WhatsApp API',
    latency: 'Contextual reminder',
    payload: '"Hi Sarah, your experience in Cloud Infrastructure aligns with our client’s Lead opening..."'
  },
  {
    id: 'scheduling',
    name: 'Interview Coordination',
    shortName: 'Scheduling',
    icon: Calendar,
    role: 'Scheduling & Reminders',
    status: 'Interview Confirmed',
    channel: 'Calendar Integration + SMS Reminders',
    latency: 'Zero-back-and-forth',
    payload: 'Round 1 Technical Screen · Tomorrow 2:00 PM EST · Prep kit and dial-in dispatched'
  },
  {
    id: 'submission',
    name: 'Client Submission',
    shortName: 'Submission',
    icon: Share2,
    role: 'Candidate Pack Delivery',
    status: 'Submitted to Client',
    channel: 'Client Submission Portal / Email Pack',
    latency: 'Standardized dossier',
    payload: 'Submission packet sent to Hiring VP · Recruiter executive summary & salary expectations attached'
  },
  {
    id: 'offer',
    name: 'Offer & Placement',
    shortName: 'Placement',
    icon: CheckCircle2,
    role: 'Offer Tracking & Placement',
    status: 'Offer Accepted',
    channel: 'Placement Tracking Workflow',
    latency: 'Milestone verified',
    payload: 'Offer extended: $160k base · Accepted · Joining date confirmed: Nov 15th'
  },
  {
    id: 'onboarding',
    name: 'Post-Placement Onboarding',
    shortName: 'Onboarding',
    icon: Sparkles,
    role: 'Document Coordination',
    status: 'Documents Verified',
    channel: 'Compliance & Onboarding Flow',
    latency: 'Checklist completed',
    payload: 'Identity, I-9, background check verified · Day-1 orientation instructions dispatched'
  },
  {
    id: 'ats',
    name: 'ATS / CRM Automation',
    shortName: 'ATS Sync',
    icon: Database,
    role: 'Two-Way Synchronization',
    status: 'Records Synchronized',
    channel: 'ATS & CRM API Connector',
    latency: 'Real-time event sync',
    payload: 'Candidate status updated to Placed · Recruiter notes appended · Zero manual data entry'
  },
  {
    id: 'intelligence',
    name: 'Recruitment Intelligence',
    shortName: 'Intelligence',
    icon: TrendingUp,
    role: 'Operational Reporting',
    status: 'Daily Brief Generated',
    channel: 'Executive Reporting Bus',
    latency: 'Automated rollup',
    payload: 'Active Jobs: 14 · Submissions: 28 · Interviews: 18 · Bottlenecks identified: 0'
  }
];

export const HeroWorkflowVisualizer: React.FC = () => {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveStageIndex((prev) => (prev + 1) % STAGES.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const currentStage = STAGES[activeStageIndex];

  return (
    <div className="w-full bg-[#071426] border border-slate-800 rounded-2xl p-5 lg:p-7 shadow-2xl relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#2563EB]/15 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-10 w-64 h-64 bg-[#22D3EE]/10 rounded-full blur-3xl pointer-events-none -z-0" />

      {/* Header bar of visualizer */}
      <div className="relative z-10 flex flex-wrap items-center justify-between pb-5 border-b border-slate-800/80 gap-3">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-[#22D3EE] animate-pulse" />
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-300 font-['Plus_Jakarta_Sans']">
            Connected Recruitment Operating Flow (Requirement to Placement)
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-medium text-slate-300 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-colors"
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5 text-[#22D3EE]" />
                <span>Pause Cycle</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 text-emerald-400" />
                <span>Play Live Flow</span>
              </>
            )}
          </button>
          <span className="text-[11px] font-mono text-slate-500 hidden sm:inline">
            Stage {activeStageIndex + 1} of {STAGES.length}
          </span>
        </div>
      </div>

      {/* Interactive Horizontal Workflow Bar */}
      <div className="relative z-10 my-6">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-1.5">
          {STAGES.map((stage, idx) => {
            const Icon = stage.icon;
            const isActive = idx === activeStageIndex;
            return (
              <button
                key={stage.id}
                onClick={() => {
                  setActiveStageIndex(idx);
                  setIsPlaying(false);
                }}
                className={`group relative p-2 rounded-xl text-center transition-all duration-200 flex flex-col items-center justify-between min-h-[72px] border ${
                  isActive
                    ? 'bg-[#2563EB] border-[#22D3EE] shadow-lg shadow-blue-600/30 scale-[1.04]'
                    : 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700 hover:bg-slate-800/60 text-slate-400'
                }`}
              >
                <div className="flex items-center justify-between w-full px-1">
                  <span className={`text-[9px] font-mono font-bold ${isActive ? 'text-white/80' : 'text-slate-600'}`}>
                    0{idx + 1}
                  </span>
                  <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-[#22D3EE] animate-ping' : 'bg-slate-700'}`} />
                </div>

                <Icon className={`w-4 h-4 my-1 ${isActive ? 'text-white' : 'text-[#22D3EE]/80 group-hover:text-[#22D3EE]'}`} />

                <span className={`text-[10px] font-bold font-['Plus_Jakarta_Sans'] leading-tight truncate w-full ${
                  isActive ? 'text-white' : 'text-slate-300'
                }`}>
                  {stage.shortName}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Stage Live Telemetry Terminal */}
      <div className="relative z-10 bg-slate-950/80 border border-slate-800 rounded-xl p-4 sm:p-5 shadow-inner">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-3 border-b border-slate-800/80">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#2563EB]/20 border border-[#2563EB]/40 flex items-center justify-center text-[#22D3EE]">
              {React.createElement(currentStage.icon, { className: 'w-4 h-4' })}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-sm font-bold text-white font-['Plus_Jakarta_Sans']">
                  {currentStage.name}
                </h4>
                <span className="text-[10px] font-mono uppercase bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/30">
                  {currentStage.status}
                </span>
              </div>
              <p className="text-xs text-slate-400">
                {currentStage.role} · {currentStage.channel}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-slate-400 self-end md:self-auto">
            <span className="text-[#22D3EE]">Throughput: {currentStage.latency}</span>
            <span className="text-slate-600">|</span>
            <span className="text-emerald-400">Zero Recruiter Friction</span>
          </div>
        </div>

        {/* Live Payload Preview */}
        <div className="mt-3 bg-slate-900/90 rounded-lg p-3 font-mono text-xs text-slate-300 flex items-start gap-2.5 overflow-x-auto border border-slate-800/50">
          <span className="text-[#22D3EE] font-bold shrink-0">$ live_telemetry:</span>
          <span className="text-slate-200 truncate">{currentStage.payload}</span>
        </div>
      </div>
    </div>
  );
};
