import React from 'react';
import { Layers, CheckCircle2, XCircle, ArrowRight, Check } from 'lucide-react';

interface DeliveryPathsSectionProps {
  onOpenAudit: () => void;
}

export const DeliveryPathsSection: React.FC<DeliveryPathsSectionProps> = ({ onOpenAudit }) => {
  const goodFitItems = [
    'IT staffing firms with active recruiting operations',
    'Recruitment agencies processing recurring job requirements',
    'Recruiting teams managing significant candidate communication',
    'Businesses using ATS / CRM systems but still performing many manual tasks',
    'Firms experiencing recruiter administration overload',
    'Organizations that want to improve operations before simply adding more headcount'
  ];

  const notIdealFitItems = [
    'Businesses with almost no recruiting volume',
    'Teams looking only for a generic chatbot',
    'Companies wanting fully autonomous hiring decisions without human oversight',
    'Businesses unwilling to review or redesign existing workflows'
  ];

  return (
    <section className="py-24 md:py-32 bg-white text-[#111827] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#2563EB] font-['Plus_Jakarta_Sans']">
            Operational Qualification
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#111827] font-['Plus_Jakarta_Sans'] leading-tight">
            Built for Recruitment Firms Ready to Improve Operations.
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
            We partner with IT staffing companies and recruitment agencies that want to scale through operational leverage and connected systems.
          </p>
        </div>

        {/* Two Pathway Cards: Good Fit / Not Fit & Turnkey Implementation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 1: Turnkey Implementation */}
          <div className="bg-[#071426] text-white border border-slate-800 rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-60 h-60 bg-[#2563EB]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#22D3EE] bg-[#22D3EE]/10 px-3 py-1 rounded-md border border-[#22D3EE]/30">
                  TURNKEY IMPLEMENTATION
                </span>
                <div className="w-10 h-10 rounded-xl bg-[#2563EB]/20 border border-[#2563EB]/40 flex items-center justify-center text-[#22D3EE]">
                  <Layers className="w-5 h-5" />
                </div>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-['Plus_Jakarta_Sans'] text-white">
                  Turnkey Deployment
                </h3>
                <p className="text-sm text-slate-300 font-medium mt-1">
                  We Build & Connect Your Recruitment Operating System.
                </p>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                For staffing founders and recruitment directors who want seamless end-to-end execution. We audit your workflows, design the architecture, build the AI modules, connect your ATS/CRM, and provide operational continuity.
              </p>

              <div className="space-y-2.5 pt-3 border-t border-slate-800">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                  Implementation Scope:
                </span>
                {[
                  'Deep recruitment workflow audit and opportunity mapping',
                  'Sourcing, screening, and qualification pipeline automation',
                  'Two-way synchronization with your existing ATS and CRM',
                  'Automated candidate follow-up and multi-party interview scheduling',
                  'Zero technical bandwidth required from your recruiters'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                    <Check className="w-4 h-4 text-[#22D3EE] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 mt-8 pt-6 border-t border-slate-800">
              <button
                onClick={onOpenAudit}
                className="w-full py-3.5 px-4 text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
              >
                <span>Book My Recruitment Workflow Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 2: Good Fit vs Not An Ideal Fit */}
          <div className="bg-[#F6F9FC] border border-[#E2E8F0] rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB] bg-blue-50 px-3 py-1 rounded-md border border-blue-200">
                  CRITERIA & FIT
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold font-['Plus_Jakarta_Sans'] text-[#111827] mt-3">
                  Who We Work Best With
                </h3>
              </div>

              {/* Good Fit Section */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-emerald-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Good Fit:</span>
                </div>
                <div className="space-y-2">
                  {goodFitItems.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Not Ideal Fit Section */}
              <div className="space-y-3 pt-4 border-t border-slate-200">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-rose-700">
                  <XCircle className="w-4 h-4 text-rose-600" />
                  <span>Not An Ideal Fit:</span>
                </div>
                <div className="space-y-2">
                  {notIdealFitItems.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-500">
                      <span className="text-rose-500 font-bold mt-0.5">✕</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200">
              <button
                onClick={onOpenAudit}
                className="w-full py-3.5 px-4 text-sm font-semibold text-slate-900 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl transition-all shadow-xs flex items-center justify-center gap-2"
              >
                <span>Verify Your Operational Fit</span>
                <ArrowRight className="w-4 h-4 text-slate-600" />
              </button>
            </div>
          </div>
        </div>

        {/* The Cohesive Recruitment Progression */}
        <div className="mt-14 max-w-4xl mx-auto bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center">
          <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block mb-2">
            The Full Recruitment Workflow
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 text-xs font-semibold text-slate-800 font-mono">
            <span>Job Intake</span>
            <span className="text-slate-400">→</span>
            <span>Sourcing</span>
            <span className="text-slate-400">→</span>
            <span>Resume Screening</span>
            <span className="text-slate-400">→</span>
            <span>Candidate Matching</span>
            <span className="text-slate-400">→</span>
            <span>Outreach</span>
            <span className="text-slate-400">→</span>
            <span>Interviews</span>
            <span className="text-slate-400">→</span>
            <span>Submission</span>
            <span className="text-slate-400">→</span>
            <span>Placement & Onboarding</span>
            <span className="text-slate-400">→</span>
            <span className="text-[#2563EB] bg-blue-50 px-2 py-0.5 rounded border border-blue-100 font-bold">
              ATS Sync & Intelligence
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
