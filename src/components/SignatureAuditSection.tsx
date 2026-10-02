import React, { useState } from 'react';
import { OPPORTUNITY_MAP_DATA } from '../data/systemsData';
import { 
  ArrowRight, 
  Search, 
  SlidersHorizontal, 
  Clock, 
  AlertTriangle, 
  Sparkles, 
  Gauge, 
  TrendingUp,
  CheckCircle2,
  FileSpreadsheet
} from 'lucide-react';

interface SignatureAuditSectionProps {
  onOpenAudit: () => void;
}

export const SignatureAuditSection: React.FC<SignatureAuditSectionProps> = ({ onOpenAudit }) => {
  const [filterPriority, setFilterPriority] = useState<string>('all');

  const journeyStages = [
    'Lead Acquisition',
    'Lead Response',
    'Nurture',
    'Sales Consultation',
    'Payment Processing',
    'Onboarding',
    'Delivery',
    'Student Support',
    'Retention',
    'Referral / Upsell'
  ];

  const filteredOpportunities = filterPriority === 'all'
    ? OPPORTUNITY_MAP_DATA
    : OPPORTUNITY_MAP_DATA.filter((row) => row.priority.toLowerCase() === filterPriority.toLowerCase());

  return (
    <section id="audit" className="py-24 md:py-32 bg-white text-[#111827] border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#2563EB] font-['Plus_Jakarta_Sans']">
            Signature Entry Offer
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#111827] font-['Plus_Jakarta_Sans'] leading-tight">
            AI Growth & Operations Audit
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
            A comprehensive 30-minute operational evaluation. We map your entire coaching journey, identify revenue leaks, quantify manual hours, and construct your custom AI Opportunity Map.
          </p>
        </div>

        {/* 10-Stage Customer Journey Horizon */}
        <div className="mb-14 bg-[#F6F9FC] border border-[#E2E8F0] rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-2 mb-6">
            <div>
              <h3 className="text-sm font-bold text-[#111827] font-['Plus_Jakarta_Sans']">
                Complete 10-Stage Business Journey Mapped During The Audit
              </h3>
              <p className="text-xs text-[#475569]">
                We examine every operational phase to isolate friction, tool disconnects, and staff bottlenecks.
              </p>
            </div>
            <span className="text-xs font-mono font-medium text-[#2563EB] bg-blue-50 px-2.5 py-1 rounded border border-blue-100 self-start sm:self-auto">
              10 End-to-End Stages
            </span>
          </div>

          {/* Journey Steps Visualizer */}
          <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-2">
            {journeyStages.map((stage, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E2E8F0] rounded-xl p-3 text-center flex flex-col justify-between hover:border-[#2563EB]/40 transition-colors shadow-2xs"
              >
                <span className="text-[10px] font-mono text-slate-400 block mb-1">
                  0{idx + 1}
                </span>
                <span className="text-xs font-bold text-[#111827] leading-tight">
                  {stage}
                </span>
                <span className="mt-2 text-[9px] text-[#2563EB] font-medium bg-blue-50/80 py-0.5 rounded">
                  Analyzed
                </span>
              </div>
            ))}
          </div>

          {/* 7 Dimensions Examined for Each Stage */}
          <div className="mt-6 pt-5 border-t border-slate-200">
            <span className="text-xs font-semibold text-slate-600 block mb-3 font-['Plus_Jakarta_Sans']">
              The 7 Core Metrics Evaluated at Each Stage:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 text-xs">
              {[
                { label: 'Manual Hours', desc: 'Time spent per week' },
                { label: 'Tools Used', desc: 'Software subscription overlap' },
                { label: 'Bottlenecks', desc: 'Where deals stall' },
                { label: 'Revenue Leakage', desc: 'Missed opportunities' },
                { label: 'AI Opportunities', desc: 'Agent & model leverage' },
                { label: 'Automation Complexity', desc: 'Low, Medium, High' },
                { label: 'Potential Impact', desc: 'Immediate ROI yield' }
              ].map((dim, i) => (
                <div key={i} className="bg-white p-2.5 rounded-lg border border-slate-200/80">
                  <div className="font-semibold text-slate-800">{dim.label}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">{dim.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* The Deliverable: AI OPPORTUNITY MAP Dashboard Preview */}
        <div className="bg-white border border-[#E2E8F0] rounded-2xl shadow-sm overflow-hidden">
          <div className="bg-slate-900 text-white p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600/30 border border-blue-400/40 flex items-center justify-center text-[#22D3EE]">
                <FileSpreadsheet className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#22D3EE]">
                  Audit Deliverable
                </span>
                <h3 className="text-lg font-bold font-['Plus_Jakarta_Sans']">
                  Your AI Opportunity Map
                </h3>
              </div>
            </div>

            {/* Filter buttons */}
            <div className="flex items-center gap-1.5 bg-slate-800 p-1 rounded-lg self-start sm:self-auto text-xs">
              <span className="text-slate-400 px-2 text-[11px]">Filter Priority:</span>
              {['all', 'Immediate', 'High', 'Strategic'].map((p) => (
                <button
                  key={p}
                  onClick={() => setFilterPriority(p)}
                  className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
                    filterPriority === p
                      ? 'bg-[#2563EB] text-white shadow-xs'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {p === 'all' ? 'All' : p}
                </button>
              ))}
            </div>
          </div>

          {/* Table Visual */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/70 text-slate-600 text-xs font-semibold uppercase tracking-wider font-['Plus_Jakarta_Sans']">
                  <th className="py-3.5 px-5">Operational Workflow</th>
                  <th className="py-3.5 px-5">Current Friction & Loss</th>
                  <th className="py-3.5 px-5">Recommended AI System</th>
                  <th className="py-3.5 px-4 text-center">Priority</th>
                  <th className="py-3.5 px-5">Expected Business Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredOpportunities.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-5 font-semibold text-slate-900 whitespace-nowrap">
                      <div>{row.workflow}</div>
                      <span className="text-[11px] font-normal text-slate-400">
                        {row.category}
                      </span>
                    </td>
                    <td className="py-4 px-5 text-rose-700 text-xs max-w-xs leading-relaxed">
                      {row.currentProblem}
                    </td>
                    <td className="py-4 px-5 text-slate-800 font-medium text-xs max-w-xs leading-relaxed">
                      <div className="flex items-center gap-1.5 text-[#2563EB]">
                        <Sparkles className="w-3.5 h-3.5 shrink-0" />
                        <span>{row.automationOpportunity}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center whitespace-nowrap">
                      <span
                        className={`text-[11px] font-semibold px-2.5 py-1 rounded-md ${
                          row.priority === 'Immediate'
                            ? 'bg-rose-50 text-rose-700 border border-rose-200'
                            : row.priority === 'High'
                            ? 'bg-amber-50 text-amber-700 border border-amber-200'
                            : 'bg-blue-50 text-blue-700 border border-blue-200'
                        }`}
                      >
                        {row.priority}
                      </span>
                    </td>
                    <td className="py-4 px-5 text-slate-600 text-xs leading-relaxed">
                      {row.impact}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bottom Audit CTA bar */}
          <div className="bg-[#F6F9FC] border-t border-slate-200 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-500">
              <span className="font-semibold text-slate-800">No generic templates:</span> Every Opportunity Map is tailored directly to your specific lead channels, offer pricing, and team capacity.
            </div>
            <button
              onClick={onOpenAudit}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl transition-all shadow-sm hover:shadow-md whitespace-nowrap"
            >
              <span>Get Your AI Opportunity Map</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
