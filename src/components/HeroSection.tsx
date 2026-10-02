import React from 'react';
import { ArrowRight, Compass, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import { HeroWorkflowVisualizer } from './HeroWorkflowVisualizer';

interface HeroSectionProps {
  onOpenAudit: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenAudit }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#071426] text-white overflow-hidden">
      {/* Subtle background ambient mesh */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-b from-[#2563EB]/15 via-[#22D3EE]/5 to-transparent blur-3xl pointer-events-none -z-0" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Eyebrow: Clean typographic line, no static pill capsule */}
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#22D3EE] font-['Plus_Jakarta_Sans']">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] inline-block animate-pulse" />
            <span>AI Operating Systems for Coaches & Online Businesses</span>
          </div>

          {/* Primary Hero Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-['Plus_Jakarta_Sans'] leading-[1.08] text-balance">
            Scale Your Coaching Business.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400">
              Not Your Team.
            </span>
          </h1>

          {/* Supporting Message */}
          <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed">
            We design, build and manage intelligent systems that automate the repetitive work behind your business—from the first lead to the long-term client relationship.
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenAudit}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl transition-all shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 active:scale-[0.98]"
            >
              <span>Book My AI Growth Audit</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href="#operating-system"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 hover:text-white rounded-xl border border-slate-700/80 transition-all"
            >
              <Compass className="w-4 h-4 text-[#22D3EE]" />
              <span>Explore Our Systems</span>
            </a>
          </div>

          {/* Supporting Trust Message (Clean metadata text with dot separators) */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm text-slate-400 font-medium">
            <span>Business-first AI automation</span>
            <span className="text-slate-600">·</span>
            <span>End-to-end implementation</span>
            <span className="text-slate-600">·</span>
            <span>Built for growing online businesses</span>
          </div>
        </div>

        {/* Hero Interactive Workflow Visualizer */}
        <div className="mt-14 lg:mt-18">
          <HeroWorkflowVisualizer />
        </div>
      </div>
    </section>
  );
};
