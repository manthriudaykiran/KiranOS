import React from 'react';
import { ArrowRight, ShieldCheck, Clock, Sparkles } from 'lucide-react';

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
          Your Business Doesn’t Need More AI Tools.{' '}
          <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#22D3EE]">
            It Needs a System.
          </span>
        </h2>

        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed font-normal">
          Discover where AI can save time, recover lost opportunities and remove repetitive work across your coaching or online business.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenAudit}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 text-base font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl transition-all shadow-xl shadow-blue-600/30 hover:shadow-2xl hover:shadow-blue-600/40 active:scale-[0.98]"
          >
            <span>Book My AI Growth Audit</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Microcopy with typographic dots */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm text-slate-400 font-medium">
          <span>30 Minutes</span>
          <span className="text-slate-600">·</span>
          <span>Business-First</span>
          <span className="text-slate-600">·</span>
          <span>No Technical Preparation Required</span>
        </div>
      </div>
    </section>
  );
};
