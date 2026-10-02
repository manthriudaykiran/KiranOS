import React, { useState } from 'react';
import { 
  Zap, 
  Clock, 
  TrendingUp, 
  ShieldCheck, 
  CheckCircle2, 
  Sliders, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface RoiCalculatorSectionProps {
  onOpenAudit: () => void;
}

export const RoiCalculatorSection: React.FC<RoiCalculatorSectionProps> = ({ onOpenAudit }) => {
  const [monthlyLeads, setMonthlyLeads] = useState<number>(250);
  const [supportHoursPerWeek, setSupportHoursPerWeek] = useState<number>(12);
  const [monthlyConsults, setMonthlyConsults] = useState<number>(30);

  // Transparent, honest operational time calculation
  // Follow-up & qualification: approx 10 minutes per lead manually vs 0 minutes automated
  const leadHoursSavedPerMonth = Math.round((monthlyLeads * 8) / 60);
  // Support FAQs: approx 65% automated
  const supportHoursSavedPerMonth = Math.round(supportHoursPerWeek * 4 * 0.65);
  // Post-consult admin: approx 30 minutes saved per consult
  const consultHoursSavedPerMonth = Math.round((monthlyConsults * 25) / 60);

  const totalMonthlyHoursReclaimed = leadHoursSavedPerMonth + supportHoursSavedPerMonth + consultHoursSavedPerMonth;

  const qualitativeOutcomes = [
    { title: 'Sub-2-Minute Lead Response', desc: 'No leads cooling off during evenings or weekends while ad spend is running.' },
    { title: 'Fewer Missed Inbound Leads', desc: 'Eliminate human drop-off from unread Instagram DMs, form errors, or buried chats.' },
    { title: 'Reduced Repetitive Typing', desc: 'Free your team from answering the same onboarding and payment questions 50x daily.' },
    { title: 'Relentless Follow-Up Discipline', desc: 'Every registered prospect receives structured multi-day nurture without staff fatigue.' },
    { title: 'Higher Webinar Show-Up Rates', desc: 'Frictionless calendar links and 15-minute voice reminders bring registered buyers into the room.' },
    { title: 'Instant Zero-Lag Onboarding', desc: 'Paying clients receive immediate LMS credentials, invoices, and community invites.' },
    { title: 'Radically Lower Admin Overhead', desc: 'Scale client intake from 10 to 100 per month without ballooning your virtual assistant payroll.' },
    { title: 'Actionable Sales Call Visibility', desc: 'Every consultation call parsed for objections, intent signals, and CRM task updates.' },
    { title: '24/7 Private Student Support', desc: 'Students unblocked at midnight through verified, grounded knowledge retrieval.' },
    { title: 'Unified Business Intelligence', desc: 'Start every morning with an executive summary of pipeline health, ad spend, and delivery.' }
  ];

  return (
    <section className="py-24 md:py-32 bg-white text-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#2563EB] font-['Plus_Jakarta_Sans']">
            Operational Transformation
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#111827] font-['Plus_Jakarta_Sans'] leading-tight">
            Automate Work. Protect Time. Scale Smarter.
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
            The goal of an AI Operating System is not novelty—it is reclaiming founder focus, shortening response cycles, and creating clean operational leverage.
          </p>
        </div>

        {/* 10 Qualitative Outcomes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
          {qualitativeOutcomes.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#F6F9FC] border border-[#E2E8F0] rounded-xl p-5 hover:border-[#2563EB]/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="w-7 h-7 rounded-lg bg-blue-100/70 text-[#2563EB] flex items-center justify-center mb-3">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-[#111827] font-['Plus_Jakarta_Sans'] mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-[#475569] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Operations Time Estimator */}
        <div className="bg-[#071426] text-white border border-slate-800 rounded-2xl p-7 sm:p-10 shadow-xl">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono uppercase tracking-wider text-[#22D3EE] font-bold">
              Interactive Time Reclaim Estimator
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-['Plus_Jakarta_Sans'] mt-1">
              Estimate Your Team’s Reclaimed Capacity
            </h3>
            <p className="text-sm text-slate-300 mt-2">
              Adjust the sliders based on your coaching volume to see how many manual hours can be shifted from repetitive typing to high-leverage growth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Sliders Area */}
            <div className="lg:col-span-7 space-y-6">
              {/* Slider 1: Monthly Leads */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-medium">
                  <span className="text-slate-300">Monthly Inbound Leads (Ads / Social / Funnels)</span>
                  <span className="text-[#22D3EE] font-mono text-sm font-bold">{monthlyLeads} leads</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="1500"
                  step="25"
                  value={monthlyLeads}
                  onChange={(e) => setMonthlyLeads(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#2563EB]"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>50 leads</span>
                  <span>1,500+ leads</span>
                </div>
              </div>

              {/* Slider 2: Repetitive Support Hours */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-medium">
                  <span className="text-slate-300">Weekly Hours Spent on Repetitive Student FAQs & Admin</span>
                  <span className="text-[#22D3EE] font-mono text-sm font-bold">{supportHoursPerWeek} hrs / week</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="40"
                  step="1"
                  value={supportHoursPerWeek}
                  onChange={(e) => setSupportHoursPerWeek(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#2563EB]"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>2 hours</span>
                  <span>40 hours</span>
                </div>
              </div>

              {/* Slider 3: Sales Consultations */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-medium">
                  <span className="text-slate-300">Monthly Sales Calls / Consultations Conducted</span>
                  <span className="text-[#22D3EE] font-mono text-sm font-bold">{monthlyConsults} calls</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="120"
                  step="5"
                  value={monthlyConsults}
                  onChange={(e) => setMonthlyConsults(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#2563EB]"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>5 calls</span>
                  <span>120 calls</span>
                </div>
              </div>
            </div>

            {/* Yield Output Card */}
            <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-xl p-6 text-center space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Estimated Operational Leverage
              </span>

              <div className="py-2">
                <div className="text-4xl sm:text-5xl font-extrabold text-[#22D3EE] font-mono tracking-tight">
                  ~{totalMonthlyHoursReclaimed} hrs
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  Reclaimed Every Month
                </div>
              </div>

              <div className="space-y-2 text-left text-xs text-slate-300 border-t border-slate-800 pt-3">
                <div className="flex justify-between">
                  <span className="text-slate-400">Lead Follow-Up & Qualification:</span>
                  <span className="text-emerald-400 font-mono font-medium">+{leadHoursSavedPerMonth} hrs/mo</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">24/7 Curriculum Support:</span>
                  <span className="text-emerald-400 font-mono font-medium">+{supportHoursSavedPerMonth} hrs/mo</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Pre-Call & CRM Data Sync:</span>
                  <span className="text-emerald-400 font-mono font-medium">+{consultHoursSavedPerMonth} hrs/mo</span>
                </div>
              </div>

              <button
                onClick={onOpenAudit}
                className="w-full py-3 px-4 text-xs font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Reclaim These Hours With An Audit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
