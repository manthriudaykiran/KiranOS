import React, { useState } from 'react';
import { PRODUCTIZED_SYSTEMS } from '../data/systemsData';
import { ProductizedSystem } from '../types';
import { 
  ArrowRight, 
  Check, 
  Workflow, 
  Layers, 
  X,
  Search,
  FileText,
  Target,
  MessageSquare,
  Calendar,
  Database,
  TrendingUp,
  Code2
} from 'lucide-react';

interface ProductizedSystemsProps {
  onOpenAudit: () => void;
}

const SYSTEM_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  'candidate-sourcing': Search,
  'resume-screening': FileText,
  'candidate-matching': Target,
  'candidate-follow-up': MessageSquare,
  'interview-scheduling': Calendar,
  'ats-crm-automation': Database,
  'recruitment-intelligence': TrendingUp,
  'custom-applications': Code2
};

export const ProductizedSystems: React.FC<ProductizedSystemsProps> = ({ onOpenAudit }) => {
  const [activeModalSystem, setActiveModalSystem] = useState<ProductizedSystem | null>(null);

  return (
    <section id="services" className="scroll-mt-24 py-24 md:py-32 bg-[#F6F9FC] text-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#2563EB] font-['Plus_Jakarta_Sans']">
            Recruitment Systems & Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#111827] font-['Plus_Jakarta_Sans'] leading-tight">
            Connected Recruitment Systems
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
            Standardized architectures customized to your firm's specific operating process. Implemented end-to-end, integrated with your ATS and CRM, and continuously refined.
          </p>
        </div>

        {/* Productized Systems Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTIZED_SYSTEMS.map((system) => {
            const Icon = SYSTEM_ICONS[system.id] || Layers;
            return (
              <div
                key={system.id}
                className="bg-white border border-[#E2E8F0] rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-md transition-all group"
              >
                <div className="space-y-4">
                  {/* Top Bar with Icon & Highlight */}
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                      {system.highlight}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[#111827] font-['Plus_Jakarta_Sans'] leading-snug">
                      {system.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#2563EB] mt-1 line-clamp-2">
                      {system.tagline}
                    </p>
                  </div>

                  <p className="text-xs text-[#475569] leading-relaxed line-clamp-3">
                    {system.description}
                  </p>

                  {/* Flow Pills */}
                  <div className="pt-2 border-t border-slate-100">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-2">
                      System Flow
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {system.flow.map((step, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] bg-slate-50 border border-slate-200/80 px-2 py-0.5 rounded text-slate-600 font-mono"
                        >
                          {step}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setActiveModalSystem(system)}
                    className="text-xs font-semibold text-[#2563EB] hover:text-[#1D4ED8] flex items-center gap-1 group-hover:underline"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={onOpenAudit}
                    className="text-xs font-medium text-slate-400 hover:text-slate-700"
                  >
                    Audit
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Recruitment Applications Banner Callout */}
        <div className="mt-14 max-w-4xl mx-auto bg-[#071426] text-white rounded-2xl p-8 border border-slate-800 text-center shadow-lg">
          <span className="text-xs font-mono uppercase tracking-widest text-[#22D3EE] font-bold block mb-1">
            Tailored Engineering
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold font-['Plus_Jakarta_Sans'] text-white">
            If Your Workflow Needs Custom Software, We Build It.
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto mt-2 leading-relaxed">
            Recruiter dashboards, candidate submission portals, screening workbenches, recruitment CRM extensions, and post-placement onboarding systems built around your firm's exact operating workflow.
          </p>
          <div className="mt-5">
            <button
              onClick={onOpenAudit}
              className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl transition-all shadow-sm"
            >
              <span>Explore Custom Recruitment Software in an Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* System Details Modal */}
        {activeModalSystem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
            <div className="bg-white border border-slate-200 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setActiveModalSystem(null)}
                className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#2563EB] font-['Plus_Jakarta_Sans'] block mb-1">
                    System Architecture Dossier
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#111827] font-['Plus_Jakarta_Sans']">
                    {activeModalSystem.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-[#2563EB] mt-1">
                    {activeModalSystem.tagline}
                  </p>
                </div>

                <p className="text-sm text-[#475569] leading-relaxed">
                  {activeModalSystem.description}
                </p>

                {/* Workflow Sequence */}
                <div className="space-y-2 bg-[#F6F9FC] p-4 rounded-xl border border-[#E2E8F0]">
                  <span className="text-xs font-mono font-bold uppercase text-slate-500 block">
                    Execution Pipeline
                  </span>
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    {activeModalSystem.flow.map((step, idx) => (
                      <React.Fragment key={idx}>
                        <span className="text-xs font-semibold bg-white border border-slate-200 px-3 py-1 rounded-md text-slate-800 shadow-2xs font-mono">
                          {step}
                        </span>
                        {idx < activeModalSystem.flow.length - 1 && (
                          <span className="text-slate-400 text-xs">→</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Features & Deliverables */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono font-bold uppercase text-slate-500">
                    System Capabilities:
                  </h4>
                  <ul className="space-y-2">
                    {activeModalSystem.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <Check className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Target Outcomes */}
                <div className="space-y-3 pt-3 border-t border-slate-100">
                  <h4 className="text-xs font-mono font-bold uppercase text-slate-500">
                    Operational Outcomes:
                  </h4>
                  <ul className="space-y-2">
                    {activeModalSystem.outcomes.map((outcome, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-emerald-800 bg-emerald-50/70 p-2.5 rounded-lg border border-emerald-100">
                        <span className="text-emerald-600 font-bold">✓</span>
                        <span className="font-medium">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-100">
                  <button
                    onClick={() => setActiveModalSystem(null)}
                    className="px-5 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-800"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      setActiveModalSystem(null);
                      onOpenAudit();
                    }}
                    className="px-6 py-2.5 text-xs font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl transition-all shadow-sm"
                  >
                    Book My Recruitment Workflow Audit
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
