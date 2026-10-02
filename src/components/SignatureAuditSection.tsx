import React, { useState } from 'react';
import { OPPORTUNITY_MAP_DATA } from '../data/systemsData';
import { 
  ArrowRight, 
  Search, 
  Clock, 
  AlertTriangle, 
  Sparkles, 
  TrendingUp,
  CheckCircle2,
  FileSpreadsheet
} from 'lucide-react';

interface SignatureAuditSectionProps {
  onOpenAudit: () => void;
}

export const SignatureAuditSection: React.FC<SignatureAuditSectionProps> = ({ onOpenAudit }) => {
  const [filterPriority, setFilterPriority] = useState<string>('all');

  const auditStages = [
    'Client Requirement Intake',
    'Candidate Sourcing',
    'Resume Screening',
    'Candidate Qualification',
    'Outreach',
    'Candidate Follow-Up',
    'Interview Scheduling',
    'Client Submission',
    'Offer Workflow',
    'Onboarding',
    'ATS / CRM Updates',
    'Reporting'
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
            AI Recruitment Workflow Audit
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#111827] font-['Plus_Jakarta_Sans'] leading-tight">
            Find the Work Your Recruiters <br className="hidden sm:block" />
            Should Not Be Doing Manually.
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
            We map your recruitment operation from client requirement to placement and identify repetitive work, workflow gaps, communication delays and automation opportunities.
          </p>
        </div>

        {/* 12 Audit Areas Horizon Grid */}
        <div className="mb-14 bg-[#F6F9FC] border border-[#E2E8F0] rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-2 mb-6">
            <div>
              <h3 className="text-sm font-bold text-[#111827] font-['Plus_Jakarta_Sans']">
                Complete 12-Stage Recruitment Workflow Mapped During The Audit
              </h3>
              <p className="text-xs text-[#475569]">
                For every stage we examine what happens today, who performs the work, tools involved, delays, candidate drop points, and where human judgment must remain.
              </p>
            </div>
            <span className="text-xs font-mono font-medium text-[#2563EB] bg-blue-50 px-2.5 py-1 rounded border border-blue-100 self-start sm:self-auto">
              12 Recruitment Stages
            </span>
          </div>

          {/* Journey Steps Visualizer */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-2">
            {auditStages.map((stage, idx) => (
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
                  Evaluated
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* What Happens On The Call (3-Step Roadmap) */}
        <div className="mb-16 bg-[#071426] text-white rounded-2xl p-8 sm:p-10 border border-slate-800 shadow-xl">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono uppercase tracking-wider text-[#22D3EE] font-bold">
              30-Minute Structured Session
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-['Plus_Jakarta_Sans'] text-white mt-1">
              What Happens During Your Recruitment Workflow Audit?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
              30 minutes. No pitch deck. No technical preparation required. We focus on real operational friction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 space-y-3">
              <span className="text-xs font-mono font-bold text-[#22D3EE]">
                PHASE 01
              </span>
              <h4 className="text-base font-bold text-white font-['Plus_Jakarta_Sans']">
                1. Map the Current Workflow
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                We understand how a requirement moves from client intake to candidate placement across your team and existing tools.
              </p>
            </div>

            <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 space-y-3">
              <span className="text-xs font-mono font-bold text-[#22D3EE]">
                PHASE 02
              </span>
              <h4 className="text-base font-bold text-white font-['Plus_Jakarta_Sans']">
                2. Identify the Bottleneck
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                We identify repetitive work, communication delays, duplicate data entry and disconnected handoffs causing candidate leakage.
              </p>
            </div>

            <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 space-y-3">
              <span className="text-xs font-mono font-bold text-[#22D3EE]">
                PHASE 03
              </span>
              <h4 className="text-base font-bold text-white font-['Plus_Jakarta_Sans']">
                3. Prioritize One Opportunity
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                We pinpoint where automation creates the clearest operational improvement first, without trying to overhaul everything at once.
              </p>
            </div>
          </div>
        </div>

        {/* Live Opportunity Map Interactive Sample Table */}
        <div className="bg-white border border-[#E2E8F0] rounded-2xl shadow-sm overflow-hidden mb-12">
          {/* Table Toolbar */}
          <div className="p-5 sm:p-6 bg-slate-50/70 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <FileSpreadsheet className="w-5 h-5 text-[#2563EB]" />
                <h3 className="text-lg font-bold text-[#111827] font-['Plus_Jakarta_Sans']">
                  Deliverable: AI Recruitment Opportunity Map
                </h3>
              </div>
              <p className="text-xs text-[#475569] mt-0.5">
                Every audit delivers a clear matrix highlighting current workflow friction, automation opportunities, and prioritized first implementation areas.
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex items-center gap-1.5 self-start sm:self-auto">
              <span className="text-xs text-slate-500 mr-1 hidden sm:inline">Priority:</span>
              {['all', 'Immediate', 'High', 'Strategic'].map((p) => (
                <button
                  key={p}
                  onClick={() => setFilterPriority(p)}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                    filterPriority.toLowerCase() === p.toLowerCase()
                      ? 'bg-[#2563EB] text-white shadow-2xs'
                      : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {p === 'all' ? 'All' : p}
                </button>
              ))}
            </div>
          </div>

          {/* Table Content */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100/70 border-b border-slate-200 text-slate-700 font-mono uppercase tracking-wider">
                <tr>
                  <th className="py-3 px-4 font-semibold">Workflow Stage</th>
                  <th className="py-3 px-4 font-semibold">Current Problem & Friction</th>
                  <th className="py-3 px-4 font-semibold">Automation Opportunity</th>
                  <th className="py-3 px-4 font-semibold">Priority</th>
                  <th className="py-3 px-4 font-semibold">Operational Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {filteredOpportunities.map((row, idx) => (
                  <tr key={idx} className="hover:bg-blue-50/30 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-[#111827] whitespace-nowrap">
                      <div>{row.workflow}</div>
                      <span className="text-[10px] font-mono text-slate-400 font-normal">
                        {row.category}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 max-w-xs text-slate-600">
                      {row.currentProblem}
                    </td>
                    <td className="py-3.5 px-4 max-w-xs font-medium text-[#2563EB]">
                      {row.automationOpportunity}
                    </td>
                    <td className="py-3.5 px-4 whitespace-nowrap">
                      <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold font-mono ${
                        row.priority === 'Immediate'
                          ? 'bg-rose-100 text-rose-800'
                          : row.priority === 'High'
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {row.priority}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-emerald-700 font-medium">
                      {row.impact}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Call to Action Bar */}
        <div className="text-center space-y-3">
          <button
            onClick={onOpenAudit}
            className="inline-flex items-center gap-2.5 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-[#2563EB] to-[#059669] hover:from-[#1D4ED8] hover:to-[#047857] rounded-xl transition-all shadow-md active:scale-[0.98]"
          >
            <span>Book My Recruitment Workflow Audit</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <div className="flex items-center justify-center gap-3 text-xs text-slate-400">
            <span>30 minutes</span>
            <span>·</span>
            <span>No pitch deck</span>
            <span>·</span>
            <span>Leave with a clear workflow map</span>
          </div>
        </div>
      </div>
    </section>
  );
};
