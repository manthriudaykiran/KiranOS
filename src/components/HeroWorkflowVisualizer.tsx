import React, { useState, useEffect } from 'react';
import { 
  UserCheck, 
  MessageSquare, 
  Target, 
  PhoneCall, 
  CreditCard, 
  CheckCircle2, 
  GraduationCap, 
  HelpCircle, 
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
    id: 'lead',
    name: 'Lead Capture',
    shortName: 'Lead',
    icon: UserCheck,
    role: 'Multi-Channel Inbound',
    status: 'Captured & Enriched',
    channel: 'Meta Ads / Instagram DM / Web Form',
    latency: '0.4s ingestion',
    payload: 'Name: Rajesh K. · Source: Masterclass Ad · Phone verified'
  },
  {
    id: 'followup',
    name: 'AI Follow-Up',
    shortName: 'AI Follow-Up',
    icon: MessageSquare,
    role: 'Conversational Nurture',
    status: 'Active Engagement',
    channel: 'Approved WhatsApp Cloud API',
    latency: '82s response time',
    payload: '"Hi Rajesh, noticed your registration for the Scaling Cohort..."'
  },
  {
    id: 'qualification',
    name: 'Lead Qualification',
    shortName: 'Qualification',
    icon: Target,
    role: 'Intent & Budget Scoring',
    status: 'Criteria Verified',
    channel: 'AI Dynamic Dialogue Engine',
    latency: 'Instant evaluation',
    payload: 'Revenue: $15k/mo · Bottleneck: Fulfillment · Fit Score: 94/100'
  },
  {
    id: 'sales',
    name: 'Sales Consultation',
    shortName: 'Sales Call',
    icon: PhoneCall,
    role: 'High-Intent Calendar Booking',
    status: 'Booked & Reminded',
    channel: 'Google Calendar + WhatsApp SMS Alert',
    latency: 'Auto-buffered',
    payload: 'Date: Tomorrow 11:30 AM · Pre-call dossier sent to coach'
  },
  {
    id: 'client',
    name: 'Payment & Conversion',
    shortName: 'Client',
    icon: CreditCard,
    role: 'Frictionless Transaction',
    status: 'Payment Succeeded',
    channel: 'Razorpay / Stripe Webhook',
    latency: 'Webhook confirmed',
    payload: 'Plan: 12-Week Transformation · Invoice generated'
  },
  {
    id: 'onboarding',
    name: 'Automated Onboarding',
    shortName: 'Onboarding',
    icon: CheckCircle2,
    role: 'Day-1 Student Activation',
    status: 'Provisioned',
    channel: 'LMS + Community Portal API',
    latency: '< 3 minutes',
    payload: 'Curriculum access sent · WhatsApp cohort invite dispatched'
  },
  {
    id: 'delivery',
    name: 'Curriculum Delivery',
    shortName: 'Delivery',
    icon: GraduationCap,
    role: 'Structured Learning & Milestones',
    status: 'In Progress',
    channel: 'Student Dashboard + Progress Tracker',
    latency: 'Live tracking',
    payload: 'Module 1 completed · Milestone worksheet submitted'
  },
  {
    id: 'support',
    name: '24/7 AI Knowledge Assistant',
    shortName: 'Support',
    icon: HelpCircle,
    role: 'Instant Curriculum Support',
    status: 'Always Online',
    channel: 'Private RAG Assistant',
    latency: '4.2s resolution',
    payload: 'Student asked: "How to configure n8n webhook?" → Answered with SOP link'
  },
  {
    id: 'upsell',
    name: 'Retention & Expansion',
    shortName: 'Upsell',
    icon: TrendingUp,
    role: 'Continuity & Mastermind',
    status: 'Signals Triggered',
    channel: 'Automated CRM Opportunity',
    latency: 'At week 10 milestone',
    payload: 'Student achieved KPI → Invite dispatched for Annual Inner Circle'
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
            End-to-End Coaching Business Operating Flow
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs text-slate-400 tabular-nums">
            Step {activeStageIndex + 1} of {STAGES.length}
          </span>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-1.5 px-2.5 py-1 text-xs text-slate-300 bg-slate-800/80 hover:bg-slate-700 hover:text-white rounded-md border border-slate-700 transition-colors"
            title={isPlaying ? 'Pause live flow simulation' : 'Resume live flow simulation'}
          >
            {isPlaying ? (
              <>
                <Pause className="w-3 h-3 text-[#22D3EE]" />
                <span>Pause</span>
              </>
            ) : (
              <>
                <Play className="w-3 h-3 text-[#22D3EE]" />
                <span>Auto-Run</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Interactive Workflow Node Chain */}
      <div className="relative z-10 py-6 overflow-x-auto no-scrollbar">
        <div className="min-w-[760px] flex items-center justify-between relative px-2">
          {/* Connecting Track Line */}
          <div className="absolute top-1/2 left-6 right-6 h-[2px] bg-slate-800 -translate-y-1/2 z-0" />
          
          {/* Active progress track */}
          <div 
            className="absolute top-1/2 left-6 h-[2px] bg-gradient-to-r from-[#2563EB] to-[#22D3EE] -translate-y-1/2 z-0 transition-all duration-500"
            style={{ width: `${(activeStageIndex / (STAGES.length - 1)) * 92}%` }}
          />

          {STAGES.map((stage, idx) => {
            const Icon = stage.icon;
            const isActive = idx === activeStageIndex;
            const isCompleted = idx < activeStageIndex;

            return (
              <button
                key={stage.id}
                onClick={() => {
                  setActiveStageIndex(idx);
                  setIsPlaying(false);
                }}
                className="group relative z-10 flex flex-col items-center focus:outline-none"
              >
                {/* Node Circle */}
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    isActive
                      ? 'bg-[#2563EB] text-white ring-4 ring-[#22D3EE]/30 shadow-lg shadow-blue-500/30 scale-110'
                      : isCompleted
                      ? 'bg-[#0f2238] border border-[#2563EB]/60 text-[#22D3EE]'
                      : 'bg-slate-900 border border-slate-800 text-slate-500 hover:text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <Icon className="w-5 h-5 transition-transform group-hover:scale-105" />
                </div>

                {/* Node Label */}
                <div className="mt-2.5 text-center">
                  <span
                    className={`block text-[11px] font-medium transition-colors whitespace-nowrap ${
                      isActive
                        ? 'text-white font-semibold'
                        : isCompleted
                        ? 'text-slate-300'
                        : 'text-slate-500'
                    }`}
                  >
                    {stage.shortName}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Node Live Telemetry / Detail Card */}
      <div className="relative z-10 mt-2 bg-slate-900/90 border border-slate-800 rounded-xl p-4 sm:p-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-800/80">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#2563EB]/20 border border-[#2563EB]/40 flex items-center justify-center text-[#22D3EE]">
              <currentStage.icon className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-sm font-semibold text-white font-['Plus_Jakarta_Sans']">
                  {currentStage.name}
                </h4>
                <span className="text-[11px] text-[#22D3EE] bg-[#22D3EE]/10 px-2 py-0.5 rounded border border-[#22D3EE]/30">
                  {currentStage.status}
                </span>
              </div>
              <p className="text-xs text-slate-400">{currentStage.role}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs text-slate-400">
            <div>
              <span className="text-slate-500 block text-[10px] uppercase">Channel</span>
              <span className="text-slate-200 font-medium">{currentStage.channel}</span>
            </div>
            <div className="border-l border-slate-800 pl-4">
              <span className="text-slate-500 block text-[10px] uppercase">Speed</span>
              <span className="text-emerald-400 font-medium">{currentStage.latency}</span>
            </div>
          </div>
        </div>

        {/* Live Payload Stream Preview */}
        <div className="mt-3 bg-[#071426] border border-slate-800/80 rounded-lg p-3">
          <div className="flex items-center justify-between text-[11px] text-slate-500 mb-1 font-mono">
            <span>AUTOMATION EVENT DISPATCH</span>
            <span className="text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              Synchronized
            </span>
          </div>
          <p className="text-xs text-slate-300 font-mono leading-relaxed">
            {currentStage.payload}
          </p>
        </div>

        {/* Mini quick jump controls */}
        <div className="mt-3 flex items-center justify-between pt-2 text-xs">
          <button
            onClick={() => {
              setActiveStageIndex((prev) => (prev > 0 ? prev - 1 : STAGES.length - 1));
              setIsPlaying(false);
            }}
            className="text-slate-400 hover:text-white transition-colors"
          >
            ← Previous Stage
          </button>
          <span className="text-slate-500 text-[11px]">
            Click any stage above to inspect live pipeline data
          </span>
          <button
            onClick={() => {
              setActiveStageIndex((prev) => (prev + 1) % STAGES.length);
              setIsPlaying(false);
            }}
            className="text-[#22D3EE] hover:text-white transition-colors flex items-center gap-1 font-medium"
          >
            Next Stage <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};
