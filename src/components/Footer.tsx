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
                Kiran<span className="text-[#22D3EE]">OS</span>
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
            © {new Date().getFullYear()} KiranOS. All rights reserved. One Business. One Connected AI Operating System.
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
