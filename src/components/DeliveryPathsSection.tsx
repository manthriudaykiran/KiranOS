import React from 'react';
import { Layers, GraduationCap, ArrowRight, Check, Sparkles } from 'lucide-react';

interface DeliveryPathsSectionProps {
  onOpenAudit: () => void;
}

export const DeliveryPathsSection: React.FC<DeliveryPathsSectionProps> = ({ onOpenAudit }) => {
  return (
    <section className="py-24 md:py-32 bg-white text-[#111827] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#2563EB] font-['Plus_Jakarta_Sans']">
            Engagement Models
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#111827] font-['Plus_Jakarta_Sans'] leading-tight">
            Two Delivery Paths. One Standard of Excellence.
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
            Whether you want full-service turnkey implementation or structured coaching to empower your in-house team, both paths utilize identical architectures and proven IP.
          </p>
        </div>

        {/* Two Pathway Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Path 1: Done For You */}
          <div className="bg-[#071426] text-white border border-slate-800 rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-60 h-60 bg-[#2563EB]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#22D3EE] bg-[#22D3EE]/10 px-3 py-1 rounded-md border border-[#22D3EE]/30">
                  PATH 01 · TURNKEY
                </span>
                <div className="w-10 h-10 rounded-xl bg-[#2563EB]/20 border border-[#2563EB]/40 flex items-center justify-center text-[#22D3EE]">
                  <Layers className="w-5 h-5" />
                </div>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-['Plus_Jakarta_Sans'] text-white">
                  Done For You
                </h3>
                <p className="text-sm text-slate-300 font-medium mt-1">
                  We Build Your AI Business Operating System.
                </p>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                For established coaches and online education businesses that want end-to-end execution. We audit, design, build, test, integrate, and continuously monitor your systems.
              </p>

              <div className="space-y-2.5 pt-3 border-t border-slate-800">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                  Turnkey Deliverables:
                </span>
                {[
                  'Complete custom AI architecture & script development',
                  'Approved WhatsApp Business API setup & qualification prompts',
                  'Full integration of CRM, Calendars, Payments, & LMS',
                  'Continuous proactive monitoring & monthly optimization',
                  'Zero technical bandwidth required from your team'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                    <Check className="w-4 h-4 text-[#22D3EE] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 mt-8 pt-6 border-t border-slate-800">
              <button
                onClick={onOpenAudit}
                className="w-full py-3.5 px-4 text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
              >
                <span>Apply for Done-For-You Implementation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Path 2: Build With You */}
          <div className="bg-[#F6F9FC] border border-[#E2E8F0] rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB] bg-blue-50 px-3 py-1 rounded-md border border-blue-200">
                  PATH 02 · GUIDED
                </span>
                <div className="w-10 h-10 rounded-xl bg-blue-100/70 border border-blue-200 flex items-center justify-center text-[#2563EB]">
                  <GraduationCap className="w-5 h-5" />
                </div>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-['Plus_Jakarta_Sans'] text-[#111827]">
                  Build With You
                </h3>
                <p className="text-sm text-[#475569] font-medium mt-1">
                  AI Implementation Coaching & Mentorship.
                </p>
              </div>

              <p className="text-sm text-[#475569] leading-relaxed">
                For online business owners, technical operators, and growth consultants who want to understand AI deeply and build these systems in-house under senior architectural guidance.
              </p>

              <div className="space-y-2.5 pt-3 border-t border-slate-200">
                <span className="text-xs font-semibold text-slate-700 uppercase tracking-wider block">
                  Mentorship Scope:
                </span>
                {[
                  '1:1 architectural blueprinting sessions with Uday Kiran',
                  'Access to proprietary production templates, prompts & n8n flows',
                  'Live code and workflow review to prevent costly bugs',
                  'Strategic coaching on pricing and packaging AI inside your offers',
                  'Direct asynchronous Slack/WhatsApp architectural support'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <Check className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200">
              <button
                onClick={onOpenAudit}
                className="w-full py-3.5 px-4 text-sm font-semibold text-slate-900 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl transition-all shadow-xs flex items-center justify-center gap-2"
              >
                <span>Apply for Build-With-You Mentorship</span>
                <ArrowRight className="w-4 h-4 text-slate-600" />
              </button>
            </div>
          </div>
        </div>

        {/* The Cohesive Ecosystem Progression */}
        <div className="mt-14 max-w-4xl mx-auto bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center">
          <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block mb-2">
            The KiranOS Ecosystem Journey
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-semibold text-slate-800">
            <span>High-Value Content</span>
            <span className="text-slate-400">→</span>
            <span>Live Workshops</span>
            <span className="text-slate-400">→</span>
            <span>AI Education</span>
            <span className="text-slate-400">→</span>
            <span className="text-[#2563EB] bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
              AI Growth Audit
            </span>
            <span className="text-slate-400">→</span>
            <span>Build With You / Done For You</span>
          </div>
        </div>
      </div>
    </section>
  );
};
