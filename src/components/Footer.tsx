import React from 'react';
import { Layers, ArrowUpRight, Mail, MapPin, Globe } from 'lucide-react';

interface FooterProps {
  onOpenAudit: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAudit }) => {
  return (
    <footer className="bg-[#050e1a] text-slate-400 border-t border-slate-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand & Positioning */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-2.5 text-white">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#2563EB] to-[#22D3EE] p-[1.5px] flex items-center justify-center">
                <div className="w-full h-full bg-[#071426] rounded-[7px] flex items-center justify-center">
                  <Layers className="w-4 h-4 text-[#22D3EE]" />
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-['Plus_Jakarta_Sans']">
                Kiran <span className="text-[#22D3EE]">Forge</span>
              </span>
            </a>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              AI Recruitment Operating Systems for IT Staffing & Recruitment Firms. We design and implement connected AI systems that reduce repetitive recruiting work across sourcing, screening, candidate follow-up, interviews, ATS updates, placement and onboarding.
            </p>

            <div className="pt-2 text-xs text-slate-500 space-y-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#22D3EE]" />
                <span>Hyderabad, India · Global Remote Deployment</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#22D3EE]" />
                <span>mudaykiran.8801@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Systems Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Recruitment Modules
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#operating-system" className="hover:text-white transition-colors">
                  Requirement Engine
                </a>
              </li>
              <li>
                <a href="#operating-system" className="hover:text-white transition-colors">
                  Candidate Sourcing Engine
                </a>
              </li>
              <li>
                <a href="#operating-system" className="hover:text-white transition-colors">
                  Resume Intelligence Engine
                </a>
              </li>
              <li>
                <a href="#operating-system" className="hover:text-white transition-colors">
                  Matching & Screening
                </a>
              </li>
              <li>
                <a href="#operating-system" className="hover:text-white transition-colors">
                  Candidate Follow-Up
                </a>
              </li>
              <li>
                <a href="#operating-system" className="hover:text-white transition-colors">
                  Interview Coordination
                </a>
              </li>
              <li>
                <a href="#operating-system" className="hover:text-white transition-colors">
                  ATS / CRM Automation
                </a>
              </li>
              <li>
                <a href="#operating-system" className="hover:text-white transition-colors">
                  Recruitment Intelligence
                </a>
              </li>
            </ul>
          </div>

          {/* Architecture & Methodology */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Methodology
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  MAP: Workflow Audit
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  BUILD: High-Impact Modules
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  CONNECT: Recruitment OS
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  SCALE: Expand What Works
                </a>
              </li>
              <li>
                <a href="#case-studies" className="hover:text-white transition-colors">
                  Systems Proof & Prototypes
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Engineering Leadership
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Action Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Recruitment Audit
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Find the repetitive workflows, communication gaps and disconnected processes slowing down your recruitment operation.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenAudit}
                className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-sm"
              >
                <span>Book Workflow Audit</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="text-[11px] text-slate-500 font-mono pt-1">
              30 mins · No pitch deck
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Principles */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Kiran Forge. Built by an Engineer. Focused on Recruitment Operations. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>AI Handles the Repetition</span>
            <span>·</span>
            <span>Recruiters Handle the Relationships</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
