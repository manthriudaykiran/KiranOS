import React from 'react';
import { ArrowUpRight, Mail, MapPin, Globe } from 'lucide-react';
import { KiranForgeLogo } from './KiranForgeLogo';

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
            <a href="#" className="flex items-center gap-3 text-white group">
              <div className="relative flex items-center justify-center">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#22D3EE]/25 to-[#2563EB]/25 rounded-xl blur-md opacity-60 group-hover:opacity-100 transition-opacity" />
                <div className="relative w-11 h-11 rounded-xl bg-[#030914] p-1.5 flex items-center justify-center border border-cyan-500/30 shadow-lg shadow-cyan-950/80 group-hover:border-cyan-400/60 transition-colors">
                  <KiranForgeLogo className="w-full h-full drop-shadow-[0_0_10px_rgba(34,211,238,0.5)] group-hover:scale-105 transition-transform" />
                </div>
              </div>
              <span className="text-2xl font-bold tracking-tight text-white font-['Plus_Jakarta_Sans'] flex items-center gap-1.5">
                <span>Kiran</span>
                <span className="text-[#22D3EE]">Forge</span>
              </span>
            </a>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              AI Business Operating Systems for Coaches & Online Businesses. We design, build, and manage intelligent systems that automate repetitive work across the entire customer lifecycle.
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
              Operating Engines
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#operating-system" className="hover:text-white transition-colors">
                  Lead Engine
                </a>
              </li>
              <li>
                <a href="#operating-system" className="hover:text-white transition-colors">
                  Follow-Up Engine
                </a>
              </li>
              <li>
                <a href="#operating-system" className="hover:text-white transition-colors">
                  Sales & Calendar Engine
                </a>
              </li>
              <li>
                <a href="#operating-system" className="hover:text-white transition-colors">
                  Webinar Revenue Engine
                </a>
              </li>
              <li>
                <a href="#operating-system" className="hover:text-white transition-colors">
                  Client Onboarding Engine
                </a>
              </li>
              <li>
                <a href="#operating-system" className="hover:text-white transition-colors">
                  Student Success Engine
                </a>
              </li>
              <li>
                <a href="#operating-system" className="hover:text-white transition-colors">
                  Intelligence Engine
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
                <a href="#methodology" className="hover:text-white transition-colors">
                  MAP: AI Growth Audit
                </a>
              </li>
              <li>
                <a href="#methodology" className="hover:text-white transition-colors">
                  BUILD: High-Impact Agents
                </a>
              </li>
              <li>
                <a href="#methodology" className="hover:text-white transition-colors">
                  CONNECT: Unified Operating System
                </a>
              </li>
              <li>
                <a href="#methodology" className="hover:text-white transition-colors">
                  SCALE: Continuous Optimization
                </a>
              </li>
              <li>
                <a href="#architecture" className="hover:text-white transition-colors">
                  System Architecture Blueprint
                </a>
              </li>
              <li>
                <a href="#case-studies" className="hover:text-white transition-colors">
                  Production Case Studies
                </a>
              </li>
            </ul>
          </div>

          {/* Company & Offerings */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Company & Contact
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#founder" className="hover:text-white transition-colors">
                  About Founder (Uday Kiran)
                </a>
              </li>
              <li>
                <button onClick={onOpenAudit} className="hover:text-white transition-colors text-left">
                  Book AI Growth Audit
                </button>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Implementation FAQ
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>X / Twitter</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1 text-[#22D3EE]">
                  <span>WhatsApp Business Inquiries</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Kiran Forge. All rights reserved. One Business. One Connected AI Operating System.
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-slate-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-slate-400 transition-colors">
              Security Protocol
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
