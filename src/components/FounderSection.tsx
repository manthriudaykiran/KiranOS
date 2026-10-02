import React from 'react';
import { Terminal, Shield, Code, Cpu, ArrowRight, CheckCircle2 } from 'lucide-react';

interface FounderSectionProps {
  onOpenAudit: () => void;
}

export const FounderSection: React.FC<FounderSectionProps> = ({ onOpenAudit }) => {
  return (
    <section id="about" className="scroll-mt-24 py-24 md:py-32 bg-[#F6F9FC] text-[#111827] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-white border border-[#E2E8F0] rounded-3xl p-8 sm:p-12 lg:p-14 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Founder Persona & Engineering Credentials Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative mx-auto lg:mx-0 max-w-sm rounded-2xl bg-[#071426] p-6 text-white border border-slate-800 shadow-xl overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#2563EB]/20 rounded-full blur-2xl pointer-events-none" />

                <div className="relative z-10 space-y-4">
                  {/* Clean Technical Avatar Block */}
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-[#2563EB] to-[#22D3EE] p-[2px] flex items-center justify-center">
                    <div className="w-full h-full bg-[#071426] rounded-[14px] flex items-center justify-center">
                      <Terminal className="w-9 h-9 text-[#22D3EE]" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold font-['Plus_Jakarta_Sans'] text-white">
                      Uday Kiran
                    </h3>
                    <p className="text-xs font-mono text-[#22D3EE] mt-0.5">
                      Founder & Principal Systems Architect
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-slate-800 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#22D3EE] shrink-0" />
                      <span>10+ Years Complex Software & Systems Engineering</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#22D3EE] shrink-0" />
                      <span>Specialized in AI Operating Systems & Workflow Automation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#22D3EE] shrink-0" />
                      <span>Hands-on Systems Architect, Not an Agency Middleman</span>
                    </div>
                  </div>

                  <div className="pt-2 text-[11px] font-mono text-slate-400 bg-slate-900 p-2.5 rounded-lg border border-slate-800">
                    mudaykiran.8801@gmail.com · Hyderabad / Global Deployment
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Founder Narrative from Prompt */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <span className="text-xs font-semibold tracking-wider uppercase text-[#2563EB] font-['Plus_Jakarta_Sans']">
                  Engineering Leadership
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111827] font-['Plus_Jakarta_Sans'] tracking-tight mt-1 leading-tight">
                  Built by an Engineer.{' '}
                  <br />
                  Focused on Recruitment Operations.
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-[#475569] leading-relaxed">
                <p>
                  Kiran Forge was created around a simple belief: Businesses do not need more disconnected AI tools. They need well-designed operating systems.
                </p>
                <p>
                  With more than a decade of experience in software, engineering, testing and complex technical systems, the focus is now on applying practical AI, automation and custom software to real operational problems.
                </p>
                <p className="bg-blue-50/80 border-l-4 border-[#2563EB] p-4 text-[#111827] font-medium rounded-r-xl">
                  For staffing and recruitment firms, that means studying the complete recruiting workflow, identifying repetitive work and building connected systems that support recruiters from requirement intake to placement.
                </p>
                <p className="font-semibold text-slate-900">
                  The technology is important. The business workflow comes first.
                </p>
              </div>

              <div className="pt-3">
                <button
                  onClick={onOpenAudit}
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl transition-all shadow-sm"
                >
                  <span>Book a Recruitment Workflow Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
