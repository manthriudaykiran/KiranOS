import React, { useState } from 'react';
import { CASE_STUDIES_DATA } from '../data/systemsData';
import { 
  Clock, 
  ArrowUpRight, 
  Layers, 
  CheckCircle2, 
  Quote, 
  Search, 
  Wrench, 
  Sparkles,
  Zap,
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
            Case Studies & Architecture Proof
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
            Transparent operational breakdowns. Every implementation is grounded in real coaching workflows, clearly marked by implementation phase.
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
              <span>{study.title.split('+')[0].trim()}</span>
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
          {/* Top Banner with Badge & Client Type */}
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

            {/* Quick Metrics */}
            <div className="flex items-center gap-4 self-start md:self-auto bg-slate-900/90 border border-slate-800 p-3.5 rounded-xl">
              <div>
                <span className="text-[10px] font-mono uppercase text-slate-400 block">
                  Speed Improvement
                </span>
                <span className="text-sm font-bold text-emerald-400 font-mono">
                  {activeCase.responseTimeImprovement}
                </span>
              </div>
              <div className="border-l border-slate-700 pl-4">
                <span className="text-[10px] font-mono uppercase text-slate-400 block">
                  Operational Yield
                </span>
                <span className="text-sm font-bold text-[#22D3EE] font-mono">
                  {activeCase.hoursSaved.split('/')[0]}
                </span>
              </div>
            </div>
          </div>

          {/* Deep Content Grid */}
          <div className="p-6 sm:p-8 lg:p-10 space-y-8">
            {/* The Challenge & Discovery */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-3 bg-[#F6F9FC] border border-[#E2E8F0] rounded-xl p-6">
                <div className="flex items-center gap-2 text-rose-700 font-bold text-xs uppercase tracking-wider font-['Plus_Jakarta_Sans']">
                  <Search className="w-4 h-4" />
                  <span>The Operational Bottleneck & Before State</span>
                </div>
                <p className="text-sm text-[#475569] leading-relaxed">
                  {activeCase.problem}
                </p>
                <div className="pt-2 text-xs text-slate-500 border-t border-slate-200">
                  <span className="font-semibold text-slate-700">Before: </span>
                  {activeCase.beforeState}
                </div>
              </div>

              <div className="space-y-3 bg-blue-50/60 border border-blue-100 rounded-xl p-6">
                <div className="flex items-center gap-2 text-[#2563EB] font-bold text-xs uppercase tracking-wider font-['Plus_Jakarta_Sans']">
                  <Sparkles className="w-4 h-4" />
                  <span>What We Discovered During The Audit</span>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {activeCase.whatWeDiscovered}
                </p>
                <div className="pt-2 text-xs text-[#2563EB] font-medium border-t border-blue-200/60">
                  Root Cause: Time-to-touch mismatch between ad peak and team availability.
                </div>
              </div>
            </div>

            {/* What We Built & Tools Connected */}
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-bold text-[#111827] uppercase tracking-wider font-['Plus_Jakarta_Sans']">
                  What We Engineered & Deployed
                </h4>
                <p className="text-sm text-[#475569] mt-1 leading-relaxed">
                  {activeCase.whatWeBuilt}
                </p>
              </div>

              {/* Tools Connected Pills */}
              <div>
                <span className="text-xs font-semibold text-slate-700 block mb-2">
                  Ecosystem Tools Integrated:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeCase.toolsConnected.map((tool, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono font-medium text-slate-700 bg-slate-100 border border-slate-200 px-3 py-1 rounded-md"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Automation Step-by-Step Flow */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold block">
                Deployed Automation Flow Sequence
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {activeCase.automationFlow.map((step, idx) => (
                  <div key={idx} className="bg-white border border-slate-200 p-3 rounded-lg flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-[#2563EB] font-mono text-[11px] font-bold flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <span className="text-xs text-slate-700 font-medium leading-relaxed">
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Outcomes, Key Learning & Testimonial */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
              <div className="lg:col-span-7 space-y-4">
                <div className="bg-emerald-50/80 border border-emerald-200 rounded-xl p-5 space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-emerald-800 font-bold block">
                    Verified Outcome
                  </span>
                  <p className="text-sm font-semibold text-emerald-900 leading-relaxed">
                    {activeCase.primaryOutcome}
                  </p>
                  <p className="text-xs text-emerald-700">
                    Calculated Time Savings: {activeCase.hoursSaved}
                  </p>
                </div>

                <div className="text-xs text-slate-500 bg-slate-100/80 p-4 rounded-xl">
                  <span className="font-semibold text-slate-700 block mb-1">Architectural Takeaway:</span>
                  {activeCase.keyLearnings}
                </div>
              </div>

              {activeCase.quote && (
                <div className="lg:col-span-5 bg-[#071426] text-white rounded-xl p-6 border border-slate-800 relative">
                  <Quote className="w-6 h-6 text-[#22D3EE] opacity-50 mb-3" />
                  <p className="text-sm text-slate-200 italic leading-relaxed mb-4">
                    “{activeCase.quote.text}”
                  </p>
                  <div className="border-t border-slate-800 pt-3">
                    <div className="text-xs font-bold text-white font-['Plus_Jakarta_Sans']">
                      {activeCase.quote.author}
                    </div>
                    <div className="text-[11px] text-slate-400">
                      {activeCase.quote.role}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Callout Below Case Studies */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenAudit}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#2563EB] hover:text-[#1D4ED8] transition-colors"
          >
            <span>Want a customized operating system for your specific model? Book an AI Growth Audit</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
