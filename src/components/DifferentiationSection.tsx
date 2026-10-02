import React from 'react';
import { DIFFERENTIATION_DATA } from '../data/systemsData';
import { XCircle, CheckCircle2, Target, ArrowRight } from 'lucide-react';

interface DifferentiationSectionProps {
  onOpenAudit: () => void;
}

export const DifferentiationSection: React.FC<DifferentiationSectionProps> = ({ onOpenAudit }) => {
  return (
    <section className="py-24 md:py-32 bg-white text-[#111827] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#2563EB] font-['Plus_Jakarta_Sans']">
            Clear Differentiation
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#111827] font-['Plus_Jakarta_Sans'] leading-tight">
            Not Another AI Agency.{' '}
            <br className="hidden sm:block" />
            Your AI Implementation Partner.
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
            Most agencies sell hype and leave you with broken scripts. We engineer, integrate, and continuously optimize connected business operating systems.
          </p>
        </div>

        {/* Side-by-Side Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Traditional Agency Card */}
          <div className="bg-[#F6F9FC] border border-slate-200/90 rounded-2xl p-7 sm:p-9 space-y-6">
            <div className="pb-4 border-b border-slate-200 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block mb-1">
                  The Industry Standard
                </span>
                <h3 className="text-xl font-bold text-slate-800 font-['Plus_Jakarta_Sans']">
                  Traditional AI Agency
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
              Result: Disconnected tools, confusion, and fragile maintenance burden pushed back onto the coach.
            </div>
          </div>

          {/* KiranOS Partner Approach Card */}
          <div className="bg-[#071426] text-white border border-slate-800 rounded-2xl p-7 sm:p-9 space-y-6 shadow-xl relative overflow-hidden">
            {/* Subtle glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#2563EB]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 pb-4 border-b border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#22D3EE] font-bold block mb-1">
                  Our Engineering Model
                </span>
                <h3 className="text-xl font-bold text-white font-['Plus_Jakarta_Sans']">
                  KiranOS Implementation
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
              <span>✓ Guaranteed continuity: We manage & refine your operating system.</span>
            </div>
          </div>
        </div>

        {/* Core Philosophy Callout */}
        <div className="mt-14 max-w-2xl mx-auto text-center space-y-3 bg-blue-50/70 border border-blue-100 rounded-2xl p-6 sm:p-8">
          <span className="text-xs font-mono uppercase tracking-widest text-[#2563EB] font-bold">
            The Fundamental Directive
          </span>
          <p className="text-xl sm:text-2xl font-bold text-[#111827] font-['Plus_Jakarta_Sans']">
            “Focus on the problem. <br /> Not the tool.”
          </p>
          <p className="text-xs text-slate-600 max-w-md mx-auto">
            Tools change every three months. Your customer journey and operational clarity are the enduring assets of your business.
          </p>
        </div>
      </div>
    </section>
  );
};
