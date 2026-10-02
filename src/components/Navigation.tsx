import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Layers } from 'lucide-react';

interface NavigationProps {
  onOpenAudit: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onOpenAudit }) => {
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
    { label: 'Operating System', href: '#operating-system' },
    { label: 'Systems', href: '#systems' },
    { label: 'How It Works', href: '#methodology' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Audit', href: '#audit' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'About', href: '#founder' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#071426]/95 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-md'
          : 'bg-[#071426] border-b border-slate-800/40 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Clean Brand Wordmark */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-white hover:opacity-95 transition-opacity group"
            aria-label="KiranOS Home"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#2563EB] to-[#22D3EE] p-[1.5px] flex items-center justify-center">
              <div className="w-full h-full bg-[#071426] rounded-[7px] flex items-center justify-center">
                <Layers className="w-4 h-4 text-[#22D3EE] group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <span className="text-xl font-bold tracking-tight text-white font-['Plus_Jakarta_Sans']">
              Kiran<span className="text-[#22D3EE]">OS</span>
            </span>
          </a>

          {/* Zone 2: Navigation Links (Clean text with hover state) */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative py-1 hover:underline underline-offset-4 decoration-[#22D3EE]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenAudit}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl transition-all shadow-sm hover:shadow-md hover:shadow-blue-900/30 whitespace-nowrap active:scale-[0.98]"
            >
              <span>Book My AI Growth Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenAudit}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-[#2563EB] rounded-lg"
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
        <div className="lg:hidden bg-[#071426] border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-300 hover:text-white py-2 px-3 rounded-lg hover:bg-slate-800/60"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-slate-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAudit();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl"
            >
              <span>Book My AI Growth Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
