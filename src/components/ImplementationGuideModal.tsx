import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Layers, 
  Cpu, 
  Database, 
  Calendar, 
  ShieldCheck, 
  Clock, 
  Download,
  Printer
} from 'lucide-react';

interface ImplementationGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenAudit: () => void;
}

export const ImplementationGuideModal: React.FC<ImplementationGuideModalProps> = ({
  isOpen,
  onClose,
  onOpenAudit
}) => {
  const [activeTab, setActiveTab] = useState<'blueprint' | 'phases' | 'packages'>('blueprint');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-fadeIn print:p-0 print:bg-white">
      <div className="bg-white border border-slate-200 rounded-3xl max-w-4xl w-full p-6 sm:p-9 shadow-2xl relative my-auto max-h-[94vh] overflow-y-auto print:max-h-none print:shadow-none print:border-none print:p-0">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-100 transition-colors print:hidden"
          aria-label="Close Guide"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Header */}
        <div className="bg-[#071426] text-white p-6 sm:p-8 rounded-2xl relative overflow-hidden border border-slate-800">
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#2563EB]/25 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#22D3EE] bg-[#22D3EE]/10 px-2.5 py-0.5 rounded border border-[#22D3EE]/30 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#22D3EE]" />
                Paid Implementation Guide & Architecture
              </span>
              <span className="text-[11px] text-slate-400">· Turnkey Delivery Blueprint</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-['Plus_Jakarta_Sans'] text-white">
              AI Workflow Implementation Guide for IT Staffing Firms
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              The operational and architectural blueprint to execute your Scorecard priorities. Transition from disconnected tools and manual data entry to one connected recruitment operating system.
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-200 gap-6 mt-6 text-xs sm:text-sm font-semibold print:hidden">
          <button
            onClick={() => setActiveTab('blueprint')}
            className={`pb-3 border-b-2 transition-colors ${
              activeTab === 'blueprint' 
                ? 'border-[#2563EB] text-[#2563EB]' 
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            1. Executive Blueprint
          </button>
          <button
            onClick={() => setActiveTab('phases')}
            className={`pb-3 border-b-2 transition-colors ${
              activeTab === 'phases' 
                ? 'border-[#2563EB] text-[#2563EB]' 
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            2. The 4 Implementation Phases
          </button>
          <button
            onClick={() => setActiveTab('packages')}
            className={`pb-3 border-b-2 transition-colors ${
              activeTab === 'packages' 
                ? 'border-[#2563EB] text-[#2563EB]' 
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            3. Turnkey Engagement Models
          </button>
        </div>

        {/* Tab 1: Executive Blueprint */}
        {activeTab === 'blueprint' && (
          <div className="space-y-6 pt-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <div className="bg-[#F6F9FC] p-5 rounded-2xl border border-slate-200 space-y-3">
              <h3 className="text-base font-bold text-[#111827] font-['Plus_Jakarta_Sans']">
                The Engineering Philosophy: Workflow First, Technology Second
              </h3>
              <p>
                Staffing firms fail with AI when they buy fragmented chatbot tools or hire agencies that string together fragile scripts without understanding the recruitment lifecycle.
              </p>
              <p>
                KiranForge implementations are engineered as <strong>One Connected Operating System</strong>: requirements become structured data upon arrival, candidates are matched against auditable criteria, multi-channel outreach keeps conversations warm, interviews are booked without multi-day lag, and your ATS stays continuously updated in the background.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-2">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#2563EB] flex items-center justify-center font-bold">
                  01
                </div>
                <h4 className="font-bold text-[#111827] font-['Plus_Jakarta_Sans']">Deterministic Inputs</h4>
                <p className="text-xs text-slate-500">
                  Every client job brief is validated for mandatory vs preferred skills, compensation range, and location rules before sourcing starts.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                  02
                </div>
                <h4 className="font-bold text-[#111827] font-['Plus_Jakarta_Sans']">Human In Control</h4>
                <p className="text-xs text-slate-500">
                  AI handles extraction, synthesis, reminder broadcasts, and system updates. Recruiters maintain 100% control over interview decisions and offers.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-2">
                <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
                  03
                </div>
                <h4 className="font-bold text-[#111827] font-['Plus_Jakarta_Sans']">Zero Data Re-Entry</h4>
                <p className="text-xs text-slate-500">
                  Two-way API and webhook synchronization ensures status changes, notes, and call outcomes reflect immediately in your primary ATS/CRM.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: The 4 Implementation Phases */}
        {activeTab === 'phases' && (
          <div className="space-y-4 pt-6 text-xs sm:text-sm">
            {[
              {
                phase: 'Phase 01',
                title: 'Job Intake & Sourcing Normalization',
                timeline: 'Week 1–2',
                items: [
                  'Automated intake brief parser that normalizes hiring manager requests',
                  'Standardized skill taxonomy extraction (languages, cloud stacks, certifications)',
                  'Automated recruiter assignment based on specialization and active capacity',
                  'Integration with inbound job boards and talent database inboxes'
                ]
              },
              {
                phase: 'Phase 02',
                title: 'Resume Intelligence & Pre-Screening Scorecards',
                timeline: 'Week 2–3',
                items: [
                  'Document extraction model producing standardized 1-page Recruiter Snapshots',
                  'Semantic matching engine comparing applicant profiles with client mandatory criteria',
                  'Compensation expectation, notice period, and work authorization validation',
                  'Prioritized candidate queue surfacing top matches for immediate recruiter calls'
                ]
              },
              {
                phase: 'Phase 03',
                title: 'Candidate Engagement & Interview Coordination',
                timeline: 'Week 3–4',
                items: [
                  'Automated multi-channel outreach cadences over email and approved messaging',
                  'Multi-party interview scheduling with automatic buffer management across time zones',
                  'Pre-interview prep kits and dial-in links dispatched to candidates automatically',
                  'Candidate status update broadcasts preventing talent leakage between interview rounds'
                ]
              },
              {
                phase: 'Phase 04',
                title: 'Two-Way ATS/CRM Automation & Governance Controls',
                timeline: 'Week 4–5',
                items: [
                  'Bi-directional synchronization with Bullhorn, Ceipal, JobDiva, Recruit CRM, or Zoho',
                  'Automated interview notes, candidate status movement, and client submission logging',
                  'Audit logs, role-based access controls, and data privacy safeguards',
                  'Executive dashboard showing open requirement velocity and recruiter throughput'
                ]
              }
            ].map((p, idx) => (
              <div key={idx} className="bg-[#F6F9FC] border border-slate-200 p-5 rounded-2xl space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#2563EB] uppercase">
                    {p.phase} · {p.timeline}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                    Production Milestone
                  </span>
                </div>
                <h4 className="text-base font-bold text-[#111827] font-['Plus_Jakarta_Sans']">
                  {p.title}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  {p.items.map((it, itIdx) => (
                    <div key={itIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{it}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Turnkey Engagement Packages */}
        {activeTab === 'packages' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
            {/* Package 1 */}
            <div className="border border-slate-200 rounded-2xl p-6 bg-[#F6F9FC] space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold uppercase text-[#2563EB] bg-blue-50 px-2.5 py-1 rounded border border-blue-200 inline-block">
                  Sprint Package
                </span>
                <h4 className="text-xl font-bold text-[#111827] font-['Plus_Jakarta_Sans']">
                  30-Day Targeted Workflow Sprint
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Engineered to solve your single highest-priority operational bottleneck identified on your scorecard (e.g. Resume Screening overload or Candidate Follow-Up lag).
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-200 text-xs text-slate-700">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                    <span>Detailed workflow mapping of the target bottleneck</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                    <span>Custom AI agent, prompt matrix, and validation rules</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                    <span>Direct integration with your existing ATS / CRM</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                    <span>Recruiter team onboarding and 30-day monitoring</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <button
                  onClick={() => {
                    onClose();
                    onOpenAudit();
                  }}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl transition-all shadow-2xs"
                >
                  Scope 30-Day Sprint on Discovery Call →
                </button>
              </div>
            </div>

            {/* Package 2 */}
            <div className="border border-slate-800 rounded-2xl p-6 bg-[#071426] text-white space-y-4 flex flex-col justify-between shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#2563EB]/20 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 space-y-3">
                <span className="text-xs font-mono font-bold uppercase text-[#22D3EE] bg-[#22D3EE]/10 px-2.5 py-1 rounded border border-[#22D3EE]/30 inline-block">
                  Turnkey Flagship
                </span>
                <h4 className="text-xl font-bold text-white font-['Plus_Jakarta_Sans']">
                  Full AI Recruitment Operating System
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  End-to-end architecture connecting intake, sourcing, screening, outreach, scheduling, client submissions, and real-time ATS synchronization.
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-800 text-xs text-slate-200">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#22D3EE] shrink-0 mt-0.5" />
                    <span>Full deployment of all 12 Recruitment Engines</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#22D3EE] shrink-0 mt-0.5" />
                    <span>Bi-directional real-time ATS, CRM, and calendar synchronization</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#22D3EE] shrink-0 mt-0.5" />
                    <span>Executive analytics briefing & pipeline bottleneck alerts</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#22D3EE] shrink-0 mt-0.5" />
                    <span>Ongoing engineering partnership & continuous optimization</span>
                  </div>
                </div>
              </div>

              <div className="relative z-10 pt-4 border-t border-slate-800">
                <button
                  onClick={() => {
                    onClose();
                    onOpenAudit();
                  }}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-gradient-to-r from-[#2563EB] to-[#059669] hover:from-[#1D4ED8] hover:to-[#047857] rounded-xl transition-all shadow-md"
                >
                  Schedule Discovery Call to Scope Full OS →
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Modal Bottom CTA */}
        <div className="mt-8 pt-5 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 print:hidden">
          <div className="text-xs text-slate-500">
            Have questions about your specific ATS APIs or team size? We review technical feasibility during your call.
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="px-3.5 py-2 text-xs font-medium text-slate-700 bg-white border border-slate-300 rounded-xl hover:bg-slate-50 flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Blueprint</span>
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenAudit();
              }}
              className="px-5 py-2 text-xs font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl transition-all shadow-sm"
            >
              Book Discovery Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
