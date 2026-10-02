import React from 'react';
import { Compass, Hammer, Network, TrendingUp, ArrowRight } from 'lucide-react';

interface MethodologySectionProps {
  onOpenAudit: () => void;
}

export const MethodologySection: React.FC<MethodologySectionProps> = ({ onOpenAudit }) => {
  const steps = [
    {
      step: '01',
      phase: 'MAP',
      title: 'Recruitment Workflow Audit',
      icon: Compass,
      description:
        'Map the entire recruiting journey from client requirement intake to placement and identify high-value operational bottlenecks.',
      deliverable: 'AI Recruitment Opportunity Map & Systems Audit'
    },
    {
      step: '02',
      phase: 'BUILD',
      title: 'Highest-Impact Workflow',
      icon: Hammer,
      description:
        'Start with one repetitive, measurable workflow rather than trying to automate everything at once.',
      deliverable: 'Verified workflow agents, prompt models & data pipelines'
    },
    {
      step: '03',
      phase: 'CONNECT',
      title: 'Recruitment Operating System',
      icon: Network,
      description:
        'Connect the workflow to the ATS, CRM, communication tools, calendars, databases and internal systems already used by the firm where technically appropriate.',
      deliverable: 'Real-time record synchronization & zero manual data copying'
    },
    {
      step: '04',
      phase: 'SCALE',
      title: 'Expand What Works',
      icon: TrendingUp,
      description:
        'Measure the workflow, improve it and then move to the next high-value operational problem across the recruitment lifecycle.',
      deliverable: 'Ongoing operational telemetry & system expansions'
    }
  ];

  return (
    <section id="how-it-works" className="scroll-mt-24 py-24 md:py-32 bg-[#F6F9FC] text-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#2563EB] font-['Plus_Jakarta_Sans']">
            Implementation Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#111827] font-['Plus_Jakarta_Sans'] leading-tight">
            Map. Build. Connect. Scale.
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
            We don’t experiment with random tools. We follow an engineering-tested deployment roadmap that minimizes operational disruption while delivering measurable recruiting throughput.
          </p>
        </div>

        {/* Desktop Horizontal Process / Mobile Vertical Process */}
        <div className="relative">
          {/* Subtle connector line on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-0.5 bg-slate-200 -translate-y-8 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  className="bg-white border border-[#E2E8F0] rounded-2xl p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#2563EB]">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-400">
                        STEP {item.step}
                      </span>
                    </div>

                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] font-['Plus_Jakarta_Sans'] block">
                        {item.phase}
                      </span>
                      <h3 className="text-lg font-bold text-[#111827] font-['Plus_Jakarta_Sans'] mt-0.5">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-sm text-[#475569] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                      Deliverable
                    </span>
                    <p className="text-xs font-medium text-slate-800">
                      {item.deliverable}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section Closing Statement Banner */}
        <div className="mt-16 max-w-4xl mx-auto bg-[#071426] text-white rounded-2xl p-8 sm:p-10 border border-slate-800 text-center shadow-xl">
          <p className="text-xs uppercase tracking-widest text-[#22D3EE] font-semibold font-['Plus_Jakarta_Sans'] mb-2">
            The Kiran Forge Standard
          </p>
          <blockquote className="text-2xl sm:text-3xl font-extrabold tracking-tight font-['Plus_Jakarta_Sans'] leading-snug">
            “We do not automate random recruiting tasks.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#22D3EE]">
              We build connected recruitment operations.”
            </span>
          </blockquote>
          <div className="pt-6">
            <button
              onClick={onOpenAudit}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl transition-all shadow-sm"
            >
              <span>Begin With Step 01: The Recruitment Workflow Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
