import React, { useState, useEffect } from 'react';
import { ArrowRight, Compass } from 'lucide-react';
import { HeroWorkflowVisualizer } from './HeroWorkflowVisualizer';

interface HeroSectionProps {
  onOpenAudit: () => void;
}

const PHRASES = [
  'While You Sleep',
  'Without Extra Hires',
  '24/7, Non - Stop',
  'In Weeks, Not Months',
  'At Half the Cost'
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenAudit }) => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  // Blinking cursor effect matching the screenshot's teal cursor '|'
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  // Premium continuous typewriter rotation effect
  useEffect(() => {
    const currentTarget = PHRASES[phraseIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      // Typing mode
      if (displayedText.length < currentTarget.length) {
        timer = setTimeout(() => {
          setDisplayedText(currentTarget.slice(0, displayedText.length + 1));
        }, 65);
      } else {
        // Finished typing full phrase, pause for viewer to read
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 1800);
      }
    } else {
      // Deleting mode
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(currentTarget.slice(0, displayedText.length - 1));
        }, 35);
      } else {
        // Finished deleting, switch to next phrase
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
        timer = setTimeout(() => {}, 200);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, phraseIndex]);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#071426] text-white overflow-hidden">
      {/* Background radial ambient glow directly matching the screenshot */}
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
          
          {/* Main Headline */}
          <div className="space-y-1 sm:space-y-2">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-['Plus_Jakarta_Sans'] leading-[1.08]">
              We Build AI Systems That <br className="hidden sm:inline" />
              Run Your Business
            </h1>
            
            {/* Third Line with Rotating Statements, Premium Gradient & Blinking Cursor */}
            <div className="pt-1.5 min-h-[1.25em] flex items-center justify-center">
              <span className="inline-block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight font-['Plus_Jakarta_Sans'] leading-[1.08] text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] via-[#22D3EE] to-[#10B981]">
                {displayedText || '\u00A0'}
              </span>
              <span 
                className={`inline-block ml-1 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#22D3EE] transition-opacity duration-150 select-none ${
                  cursorVisible ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ verticalAlign: '0.04em' }}
                aria-hidden="true"
              >
                |
              </span>
            </div>
          </div>

          {/* Subheadline - Word-for-word copy from screenshot */}
          <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed text-balance">
            Productized AI systems — voice agents, content automation, sales workflows — built for coaches and online businesses. Not custom projects. Standardized systems tested on our own 480K+ learner platform first.
          </p>

          {/* Action CTAs - Exactly matching button styling and text from screenshot */}
          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary Button: Gradient from Blue to Emerald/Teal */}
            <button
              onClick={onOpenAudit}
              className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-[#2563EB] to-[#059669] hover:from-[#1D4ED8] hover:to-[#047857] rounded-xl transition-all shadow-lg shadow-blue-900/30 hover:shadow-xl hover:shadow-emerald-900/20 active:scale-[0.98] cursor-pointer"
            >
              Book a Free AI Strategy Call
            </button>

            {/* Secondary Button: Dark slate with clean border */}
            <a
              href="#case-studies"
              className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-slate-900/80 hover:bg-slate-800 rounded-xl border border-slate-700/80 transition-all cursor-pointer"
            >
              See Our Case Studies
            </a>
          </div>

          {/* Supporting Trust Markers */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm text-slate-400 font-medium">
            <span>Tested on 480K+ Learner Platform</span>
            <span className="text-slate-600">·</span>
            <span>Standardized Systems</span>
            <span className="text-slate-600">·</span>
            <span>No Custom Project Headaches</span>
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
