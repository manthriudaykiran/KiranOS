import React, { useState, useEffect } from 'react';
import { ArrowRight, Compass, Sparkles } from 'lucide-react';
import { HeroWorkflowVisualizer } from './HeroWorkflowVisualizer';

interface HeroSectionProps {
  onOpenAudit: () => void;
  onOpenScorecard: () => void;
}

const PHRASES = [
  'Across Candidate Sourcing',
  'Across Resume Screening',
  'Across Candidate Follow-Up',
  'Across Interview Scheduling',
  'From Intake to Placement'
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenAudit, onOpenScorecard }) => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  // Blinking cursor effect matching the teal cursor '|'
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  // Continuous typewriter rotation effect
  useEffect(() => {
    const currentTarget = PHRASES[phraseIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayedText.length < currentTarget.length) {
        timer = setTimeout(() => {
          setDisplayedText(currentTarget.slice(0, displayedText.length + 1));
        }, 65);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 1800);
      }
    } else {
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(currentTarget.slice(0, displayedText.length - 1));
        }, 35);
      } else {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
        timer = setTimeout(() => {}, 200);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, phraseIndex]);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#071426] text-white overflow-hidden">
      {/* Background radial ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-gradient-to-b from-[#1e3a8a]/20 via-[#0284c7]/10 to-transparent rounded-full blur-3xl pointer-events-none -z-0" />
      
      {/* Subtle background grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
          backgroundSize: '36px 36px'
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-7">
          
          {/* Eyebrow badge matching prompt requirement */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs sm:text-sm font-semibold text-[#22D3EE] font-['Plus_Jakarta_Sans'] tracking-wide shadow-sm">
            <span>AI Recruitment Operating Systems for IT Staffing & Recruitment Firms</span>
          </div>

          {/* Featured Free Lead Magnet Assessment Callout */}
          <div>
            <button 
              type="button"
              onClick={onOpenScorecard}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-gradient-to-r from-[#2563EB]/20 via-[#22D3EE]/20 to-[#059669]/20 border border-cyan-400/40 hover:border-cyan-300 transition-all cursor-pointer shadow-lg shadow-cyan-950/40 group text-left sm:text-center"
            >
              <span className="w-2 h-2 rounded-full bg-[#22D3EE] animate-ping" />
              <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-[#22D3EE] transition-colors">
                Free Assessment: How efficient is your recruitment operation? (15 Questions · Score /100)
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-[#22D3EE] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Main Headline */}
          <div className="space-y-1 sm:space-y-2">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-['Plus_Jakarta_Sans'] leading-[1.08]">
              Build a Recruitment Operation <br className="hidden sm:inline" />
              That Runs Smarter.
            </h1>
            
            {/* Dynamic Line with Rotating Statements, Premium Gradient & Blinking Cursor */}
            <div className="pt-1.5 min-h-[1.25em] flex items-center justify-center">
              <span className="inline-block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight font-['Plus_Jakarta_Sans'] leading-[1.08] text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] via-[#22D3EE] to-[#10B981]">
                {displayedText || '\u00A0'}
              </span>
              <span 
                className={`inline-block ml-1 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-[#22D3EE] transition-opacity duration-150 select-none ${
                  cursorVisible ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ verticalAlign: '0.04em' }}
                aria-hidden="true"
              >
                |
              </span>
            </div>
          </div>

          {/* Supporting Text from Prompt */}
          <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed text-balance">
            We design and implement connected AI systems that reduce repetitive recruiting work across sourcing, screening, candidate follow-up, interviews, ATS updates, placement and onboarding.
          </p>

          {/* Action CTAs - Featuring the Free Assessment Lead Magnet & Audit Booking */}
          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button
              onClick={onOpenScorecard}
              className="w-full sm:w-auto px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-[#2563EB] to-[#059669] hover:from-[#1D4ED8] hover:to-[#047857] rounded-xl transition-all shadow-lg shadow-blue-900/40 hover:shadow-xl hover:shadow-emerald-900/30 active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2.5"
            >
              <span>Start Free Assessment (Get Score /100)</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenAudit}
              className="w-full sm:w-auto px-7 py-4 text-base font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 hover:text-white rounded-xl border border-slate-700/80 transition-all cursor-pointer"
            >
              Book My Recruitment Workflow Audit
            </button>
          </div>

          {/* Sub-links & Microcopy */}
          <div className="pt-2 space-y-2">
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-400">
              <a href="#case-studies" className="hover:text-white transition-colors underline-offset-4 hover:underline">
                See Architecture & Prototypes →
              </a>
              <span className="text-slate-600">·</span>
              <span>15 questions</span>
              <span className="text-slate-600">·</span>
              <span>~5-10 minutes</span>
              <span className="text-slate-600">·</span>
              <span className="text-emerald-400 font-medium">100% Free · No Work Email Required to View Score</span>
            </div>
            <p className="text-xs text-slate-500 font-normal">
              One connected operating system for recruiters, candidates, clients, data and workflows.
            </p>
          </div>
        </div>

        {/* Hero Interactive Workflow Visualizer below */}
        <div className="mt-14 lg:mt-18">
          <HeroWorkflowVisualizer />
        </div>
      </div>
    </section>
  );
};
