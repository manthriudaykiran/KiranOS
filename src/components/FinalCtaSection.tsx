import React from 'react';
import { ArrowRight } from 'lucide-react';

interface FinalCtaSectionProps {
  onOpenAudit: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenAudit }) => {
  return (
    <section className="py-24 md:py-32 bg-[#071426] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-gradient-to-r from-[#2563EB]/20 via-[#22D3EE]/15 to-[#2563EB]/20 rounded-full blur-3xl pointer-events-none" />

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px)`,
          backgroundSize: '36px 36px'
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#22D3EE] font-['Plus_Jakarta_Sans']">
          <span className="w-2 h-2 rounded-full bg-[#22D3EE] animate-pulse" />
          <span>Transform Fragmented Operations</span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white font-['Plus_Jakarta_Sans'] leading-[1.1] text-balance">
          Your Recruiters Should Recruit.{' '}
          <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#22D3EE]">
            Your Systems Should Handle the Repetition.
          </span>
        </h2>

        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed font-normal">
          Find the repetitive workflows, communication gaps and disconnected processes slowing down your recruitment operation.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenAudit}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 text-base font-semibold text-white bg-gradient-to-r from-[#2563EB] to-[#059669] hover:from-[#1D4ED8] hover:to-[#047857] rounded-xl transition-all shadow-xl shadow-blue-600/30 hover:shadow-2xl hover:shadow-emerald-900/30 active:scale-[0.98] cursor-pointer"
          >
            <span>Book My Recruitment Workflow Audit</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <a
            href="#case-studies"
            className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-slate-900/80 hover:bg-slate-800 rounded-xl border border-slate-700/80 transition-all cursor-pointer text-center"
          >
            See Our Prototypes
          </a>
        </div>

        {/* Microcopy with typographic dots */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm text-slate-400 font-medium">
          <span>30 minutes</span>
          <span className="text-slate-600">·</span>
          <span>Business-first</span>
          <span className="text-slate-600">·</span>
          <span>No technical preparation required</span>
        </div>
      </div>
    </section>
  );
};
