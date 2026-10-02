import React, { useState } from 'react';
import { CASE_STUDIES_DATA } from '../data/systemsData';
import { 
  Clock, 
  ArrowUpRight, 
  Layers, 
  CheckCircle2, 
  Search, 
  Wrench, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface CaseStudiesSectionProps {
  onOpenAudit: () => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onOpenAudit }) => {
  const [activeCaseIndex, setActiveCaseIndex] = useState<number>(0);

  const activeCase = CASE_STUDIES_DATA[activeCaseIndex];

  return (
    <section id="case-studies" className="scroll-mt-24 py-24 md:py-32 bg-[#F6F9FC] text-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#2563EB] font-['Plus_Jakarta_Sans']">
            Architecture In Practice
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#111827] font-['Plus_Jakarta_Sans'] leading-tight">
            Recruitment Prototypes & Systems Proof
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
            Transparent technical breakdowns of recruitment workflow implementations, clearly categorized by architecture phase.
          </p>
        </div>

        {/* Case Study Switcher Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CASE_STUDIES_DATA.map((study, idx) => (
            <button
              key={study.id}
              onClick={() => setActiveCaseIndex(idx)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeCaseIndex === idx
                  ? 'bg-[#2563EB] text-white shadow-md shadow-blue-600/20'
                  : 'bg-white border border-[#E2E8F0] text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <span>{study.title.split('&')[0].trim()}</span>
              <span className={`text-[10px] px-2 py-0.5 rounded font-mono ${
                activeCaseIndex === idx ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
              }`}>
                {study.badge}
              </span>
            </button>
          ))}
        </div>

        {/* Detailed Case Study Card */}
        <div className="bg-white border border-[#E2E8F0] rounded-2xl shadow-sm overflow-hidden">
          {/* Top Banner with Badge & Operational Domain */}
          <div className="p-6 sm:p-8 bg-[#071426] text-white flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <span className="text-xs font-mono font-semibold text-[#22D3EE] bg-[#22D3EE]/10 px-2.5 py-1 rounded border border-[#22D3EE]/30">
                  {activeCase.badge}
                </span>
                <span className="text-xs text-slate-400">·</span>
                <span className="text-xs text-slate-300 font-medium">
                  {activeCase.clientType}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-['Plus_Jakarta_Sans']">
                {activeCase.title}
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl text-left">
                <span className="text-[10px] font-mono uppercase text-slate-400 block">Workflow Velocity</span>
                <span className="text-xs sm:text-sm font-bold text-[#22D3EE] font-mono">{activeCase.responseTimeImprovement}</span>
              </div>
            </div>
          </div>

          {/* Deep Dive Body */}
          <div className="p-6 sm:p-8 lg:p-10 space-y-8">
            {/* The Operational Dilemma vs Discovery */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-3 bg-[#F6F9FC] p-6 rounded-xl border border-[#E2E8F0]">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-slate-500">
                  <Clock className="w-4 h-4 text-slate-400" />
                  <span>The Operational Friction</span>
                </div>
                <h4 className="text-base font-bold text-[#111827] font-['Plus_Jakarta_Sans']">
                  Manual Bottleneck & Latency
                </h4>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {activeCase.problem}
                </p>
                <div className="pt-2 text-xs text-slate-500 border-t border-slate-200">
                  <span className="font-semibold text-slate-700">Baseline Workflow: </span>
                  {activeCase.beforeState}
                </div>
              </div>

              <div className="space-y-3 bg-blue-50/60 p-6 rounded-xl border border-blue-100">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#2563EB]">
                  <Search className="w-4 h-4 text-[#2563EB]" />
                  <span>What The Workflow Audit Revealed</span>
                </div>
                <h4 className="text-base font-bold text-[#111827] font-['Plus_Jakarta_Sans']">
                  Root Cause Analysis
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {activeCase.whatWeDiscovered}
                </p>
                <div className="pt-2 text-xs text-blue-900 border-t border-blue-100/80">
                  <span className="font-semibold text-blue-950">Architectural Solution: </span>
                  {activeCase.whatWeBuilt}
                </div>
              </div>
            </div>

            {/* Architecture: Tools Connected & Execution Sequence */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-4 border-t border-slate-100">
              {/* Sequence */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-slate-700">
                  <Layers className="w-4 h-4 text-[#2563EB]" />
                  <span>Automated Workflow Sequence</span>
                </div>
                <div className="space-y-2.5">
                  {activeCase.automationFlow.map((step, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 text-xs sm:text-sm text-[#475569] bg-slate-50/70 p-3 rounded-xl border border-slate-200/70"
                    >
                      <span className="w-5 h-5 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-[10px] font-mono shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools & Key Architectural Learning */}
              <div className="lg:col-span-5 space-y-6">
                <div className="space-y-3">
                  <span className="text-xs font-mono font-bold uppercase text-slate-700 block">
                    Supported Systems Connected
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeCase.toolsConnected.map((tool, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-mono bg-white border border-slate-200 px-3 py-1 rounded-lg text-slate-700 shadow-2xs"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-[#071426] text-white p-5 rounded-xl border border-slate-800 space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#22D3EE] font-bold block">
                    Key Architectural Takeaway
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {activeCase.keyLearnings}
                  </p>
                </div>

                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-xs text-emerald-900">
                  <span className="font-bold block mb-0.5">Primary Operational Outcome:</span>
                  <span>{activeCase.primaryOutcome}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Case Studies Footer CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenAudit}
            className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-[#2563EB] hover:text-[#1D4ED8] bg-blue-50/80 hover:bg-blue-100/80 rounded-xl transition-colors border border-blue-200"
          >
            <span>Discuss These Architectures in a Recruitment Workflow Audit</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
