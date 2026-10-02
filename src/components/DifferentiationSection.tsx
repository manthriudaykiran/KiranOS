import React from 'react';
import { DIFFERENTIATION_DATA } from '../data/systemsData';
import { XCircle, CheckCircle2, UserCheck, Cpu, ArrowRight } from 'lucide-react';

interface DifferentiationSectionProps {
  onOpenAudit: () => void;
}

export const DifferentiationSection: React.FC<DifferentiationSectionProps> = ({ onOpenAudit }) => {
  const aiCanSupport = [
    'Repetitive data processing',
    'Resume structuring & extraction',
    'Workflow routing & alerts',
    'Interview reminders & confirmations',
    'Candidate follow-up coordination',
    'Scheduling logistics',
    'Candidate status updates',
    'ATS / CRM synchronization',
    'Operational reporting & briefings'
  ];

  const recruitersResponsible = [
    'Candidate judgment & empathy',
    'Deep relationship building',
    'Client strategy & consultations',
    'Offer negotiation & closing',
    'Nuanced technical & behavioral qualification',
    'Cultural and team alignment assessment',
    'High-trust human communication',
    'Final hiring & placement decisions'
  ];

  return (
    <section className="py-24 md:py-32 bg-white text-[#111827] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#2563EB] font-['Plus_Jakarta_Sans']">
            Clear Differentiation
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#111827] font-['Plus_Jakarta_Sans'] leading-tight">
            Not Another Recruitment Tool.{' '}
            <br className="hidden sm:block" />
            A Connected Recruitment Operating System.
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
            The goal is not to remove recruiters. The goal is to remove repetitive work around recruiters so they can focus on candidate relationships, client trust, and placements.
          </p>
        </div>

        {/* Side-by-Side Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          {/* Traditional Approach Card */}
          <div className="bg-[#F6F9FC] border border-slate-200/90 rounded-2xl p-7 sm:p-9 space-y-6">
            <div className="pb-4 border-b border-slate-200 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block mb-1">
                  The Industry Default
                </span>
                <h3 className="text-xl font-bold text-slate-800 font-['Plus_Jakarta_Sans']">
                  Traditional Approach
                </h3>
              </div>
              <div className="w-9 h-9 rounded-full bg-slate-200/80 flex items-center justify-center text-slate-500">
                <XCircle className="w-5 h-5" />
              </div>
            </div>

            <ul className="space-y-3.5">
              {DIFFERENTIATION_DATA.traditional.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                  <XCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-slate-200 text-xs text-slate-500 italic">
              Result: Disconnected tools, administrative bloat, and recruiters spending hours managing software instead of recruiting.
            </div>
          </div>

          {/* Our Approach Card */}
          <div className="bg-[#071426] text-white border border-slate-800 rounded-2xl p-7 sm:p-9 space-y-6 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#2563EB]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 pb-4 border-b border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#22D3EE] font-bold block mb-1">
                  Connected Architecture
                </span>
                <h3 className="text-xl font-bold text-white font-['Plus_Jakarta_Sans']">
                  Our Approach
                </h3>
              </div>
              <div className="w-9 h-9 rounded-full bg-[#2563EB]/20 border border-[#2563EB]/40 flex items-center justify-center text-[#22D3EE]">
                <CheckCircle2 className="w-5 h-5" />
              </div>
            </div>

            <ul className="relative z-10 space-y-3.5">
              {DIFFERENTIATION_DATA.kiranOS.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-200 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#22D3EE] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="relative z-10 pt-4 border-t border-slate-800 text-xs text-emerald-400 font-mono flex items-center gap-1.5">
              <span>✓ Focus on the problem, not the tool: We build connected recruitment operations.</span>
            </div>
          </div>
        </div>

        {/* HUMAN + AI SECTION from prompt */}
        <div className="max-w-5xl mx-auto bg-[#F6F9FC] border border-[#E2E8F0] rounded-3xl p-8 sm:p-12 shadow-sm">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#2563EB] font-bold">
              The Fundamental Operating Division
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111827] font-['Plus_Jakarta_Sans'] leading-tight">
              AI Handles the Repetitive Work.{' '}
              <br className="hidden sm:block" />
              Recruiters Handle the Relationships.
            </h3>
            <p className="text-xs sm:text-sm text-[#475569]">
              We establish clear operational boundaries so automation provides leverage without ever replacing critical human judgment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* AI Can Support */}
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#2563EB]">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#111827] font-['Plus_Jakarta_Sans']">
                    What AI Can Support
                  </h4>
                  <span className="text-[11px] text-slate-500">Autonomous operational execution</span>
                </div>
              </div>

              <ul className="space-y-2.5">
                {aiCanSupport.map((task, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <span className="text-[#2563EB] font-bold">→</span>
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recruiters Remain Responsible */}
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#111827] font-['Plus_Jakarta_Sans']">
                    Recruiters Remain Responsible For
                  </h4>
                  <span className="text-[11px] text-slate-500">High-leverage human judgment</span>
                </div>
              </div>

              <ul className="space-y-2.5">
                {recruitersResponsible.map((role, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>{role}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
