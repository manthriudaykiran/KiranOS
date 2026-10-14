import React, { useState, useEffect } from 'react';
import { Menu, X, Layers, Sparkles } from 'lucide-react';

interface NavigationProps {
  onOpenAudit: () => void;
  onOpenScorecard: () => void;
  onOpenImplementationGuide: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ 
  onOpenAudit, 
  onOpenScorecard,
  onOpenImplementationGuide 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'About', href: '#about' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#071426]/95 backdrop-blur-md border-b border-slate-800/80 py-3.5 shadow-md'
          : 'bg-[#071426] border-b border-slate-800/40 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Clean Brand Wordmark */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-white hover:opacity-95 transition-opacity group"
            aria-label="Kiran Forge Home"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#2563EB] to-[#22D3EE] p-[1.5px] flex items-center justify-center">
              <div className="w-full h-full bg-[#071426] rounded-[7px] flex items-center justify-center">
                <Layers className="w-4 h-4 text-[#22D3EE] group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <span className="text-xl font-bold tracking-tight text-white font-['Plus_Jakarta_Sans']">
              Kiran <span className="text-[#22D3EE]">Forge</span>
            </span>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative py-1 hover:underline underline-offset-8 decoration-[#22D3EE]"
              >
                {link.label}
              </a>
            ))}

            {/* Featured Lead Magnet Button in Nav */}
            <button
              onClick={onOpenScorecard}
              className="text-xs font-semibold text-[#22D3EE] bg-cyan-950/70 hover:bg-cyan-900/60 border border-cyan-500/30 px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all shadow-xs cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#22D3EE] animate-pulse" />
              <span>Free Scorecard (15 Qs)</span>
            </button>
          </nav>

          {/* Zone 3: Primary Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={onOpenScorecard}
              className="inline-flex lg:hidden items-center justify-center px-3.5 py-2 text-xs font-semibold text-[#22D3EE] bg-cyan-950/60 border border-cyan-500/30 rounded-xl hover:bg-cyan-900/60 transition-all cursor-pointer"
            >
              Free Assessment
            </button>

            <button
              onClick={onOpenAudit}
              className="inline-flex items-center justify-center px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#2563EB] to-[#059669] hover:from-[#1D4ED8] hover:to-[#047857] rounded-xl transition-all shadow-sm hover:shadow-md hover:shadow-emerald-900/20 whitespace-nowrap active:scale-[0.98] cursor-pointer"
            >
              Book My Recruitment Workflow Audit
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenScorecard}
              className="px-2.5 py-1.5 text-xs font-semibold text-[#22D3EE] bg-cyan-950 border border-cyan-500/40 rounded-lg"
            >
              Scorecard
            </button>
            <button
              onClick={onOpenAudit}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-[#2563EB] to-[#059669] rounded-lg"
            >
              Audit
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white rounded-lg focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#071426] border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenScorecard();
              }}
              className="text-left text-sm font-bold text-[#22D3EE] bg-cyan-950/60 p-2.5 rounded-lg border border-cyan-500/30 flex items-center justify-between"
            >
              <span>Take Free Recruitment Scorecard</span>
              <Sparkles className="w-4 h-4" />
            </button>

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-300 hover:text-white px-2 py-1.5"
              >
                {link.label}
              </a>
            ))}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenImplementationGuide();
              }}
              className="text-left text-sm font-medium text-slate-300 hover:text-white px-2 py-1.5"
            >
              Paid Implementation Guide
            </button>
          </div>

          <div className="pt-2 border-t border-slate-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAudit();
              }}
              className="w-full py-2.5 text-center text-xs font-semibold text-white bg-gradient-to-r from-[#2563EB] to-[#059669] rounded-xl"
            >
              Book My Recruitment Workflow Audit
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
