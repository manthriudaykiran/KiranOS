import React, { useState } from 'react';
import { PRODUCTIZED_SYSTEMS } from '../data/systemsData';
import { ProductizedSystem } from '../types';
import { 
  ArrowRight, 
  Check, 
  Workflow, 
  Sparkles, 
  Layers, 
  Sliders, 
  ShieldCheck, 
  X,
  PhoneCall,
  UserCheck,
  Video,
  FileText,
  HeartHandshake,
  Bot,
  Code2
} from 'lucide-react';

interface ProductizedSystemsProps {
  onOpenAudit: () => void;
}

const SYSTEM_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  'lead-conversion': UserCheck,
  'voice-agent': PhoneCall,
  'webinar-revenue': Video,
  'sales-intelligence': FileText,
  'client-success': HeartHandshake,
  'knowledge-assistant': Bot,
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
            Production-Grade Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#111827] font-['Plus_Jakarta_Sans'] leading-tight">
            Productized AI Systems
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
            Standardized architectures customized to your methodology. Implemented end-to-end, tested with real leads, and continuously optimized.
          </p>
        </div>

        {/* Productized Systems Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTIZED_SYSTEMS.map((system) => {
            const Icon = SYSTEM_ICONS[system.id] || Layers;
            return (
              <div
                key={system.id}
                className="bg-white border border-[#E2E8F0] rounded-2xl p-7 flex flex-col justify-between shadow-sm hover:shadow-md transition-all group"
              >
                <div className="space-y-5">
                  {/* Top Bar with Icon & Highlight */}
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                      {system.highlight}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#2563EB] font-['Plus_Jakarta_Sans'] block mb-1">
                      {system.tagline}
                    </span>
                    <h3 className="text-xl font-bold text-[#111827] font-['Plus_Jakarta_Sans']">
                      {system.title}
                    </h3>
                  </div>

                  <p className="text-sm text-[#475569] leading-relaxed">
                    {system.description}
                  </p>

                  {/* Flow Steps Preview */}
                  <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-2">
                      Operational Flow
                    </span>
                    <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-700">
                      {system.flow.map((step, idx) => (
                        <React.Fragment key={idx}>
                          <span className="font-medium bg-white px-2 py-0.5 rounded border border-slate-200 text-[11px]">
                            {step}
                          </span>
                          {idx < system.flow.length - 1 && (
                            <span className="text-slate-400 text-[10px]">→</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2 pt-1">
                    <span className="text-xs font-semibold text-slate-700 block">
                      Core Implementation Includes:
                    </span>
                    <ul className="space-y-1.5">
                      {system.features.slice(0, 3).map((feat, i) => (
                        <li key={i} className="text-xs text-slate-600 flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#2563EB] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setActiveModalSystem(system)}
                    className="text-xs font-semibold text-[#2563EB] hover:text-[#1D4ED8] flex items-center gap-1 transition-colors"
                  >
                    <span>View Architecture Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={onOpenAudit}
                    className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors"
                  >
                    Discuss System →
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Single Detailed Blueprint Modal */}
        {activeModalSystem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
            <div className="bg-white border border-slate-200 rounded-2xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl relative">
              <button
                onClick={() => setActiveModalSystem(null)}
                className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
                aria-label="Close Modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-5">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#2563EB]">
                    System Architecture
                  </span>
                  <h3 className="text-2xl font-bold text-[#111827] mt-1 font-['Plus_Jakarta_Sans']">
                    {activeModalSystem.title}
                  </h3>
                  <p className="text-sm text-slate-500 font-medium">
                    {activeModalSystem.tagline}
                  </p>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {activeModalSystem.description}
                </p>

                {/* Complete Flow */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <h4 className="text-xs font-semibold text-slate-900 mb-2">
                    End-to-End Operational Pipeline:
                  </h4>
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    {activeModalSystem.flow.map((step, idx) => (
                      <React.Fragment key={idx}>
                        <span className="bg-white border border-slate-300 text-slate-800 font-medium px-2.5 py-1 rounded-md shadow-xs">
                          {step}
                        </span>
                        {idx < activeModalSystem.flow.length - 1 && (
                          <span className="text-slate-400 font-bold">→</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* All Features */}
                <div>
                  <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-2">
                    Standard Implementation Scope
                  </h4>
                  <ul className="space-y-2">
                    {activeModalSystem.features.map((feat, idx) => (
                      <li key={idx} className="text-xs text-slate-600 flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Measurable Outcomes */}
                <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-xl p-4">
                  <h4 className="text-xs font-semibold text-emerald-900 uppercase tracking-wider mb-2">
                    Target Business Outcomes
                  </h4>
                  <ul className="space-y-1.5">
                    {activeModalSystem.outcomes.map((outcome, idx) => (
                      <li key={idx} className="text-xs text-emerald-800 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0 mt-1.5" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    onClick={() => setActiveModalSystem(null)}
                    className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      setActiveModalSystem(null);
                      onOpenAudit();
                    }}
                    className="px-5 py-2.5 text-xs font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl transition-colors shadow-sm"
                  >
                    Deploy This System
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
