import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ArrowRight,
  Clock,
  Layers,
  Search,
  Calendar
} from 'lucide-react';

interface RoiCalculatorSectionProps {
  onOpenAudit: () => void;
}

export const RoiCalculatorSection: React.FC<RoiCalculatorSectionProps> = ({ onOpenAudit }) => {
  const [openRequirements, setOpenRequirements] = useState<number>(15);
  const [resumesScreened, setResumesScreened] = useState<number>(300);
  const [interviewsCoordinated, setInterviewsCoordinated] = useState<number>(45);

  // Honest, qualitative operational time estimate
  // Manual resume parsing/screening: approx 6-8 minutes saved per profile with structured context
  const screeningHoursSaved = Math.round((resumesScreened * 6) / 60);
  // Interview coordination: approx 20 minutes back-and-forth per interview round
  const schedulingHoursSaved = Math.round((interviewsCoordinated * 20) / 60);
  // Requirement intake & ATS manual updating: approx 3 hours per open job requirement
  const atsAdminHoursSaved = Math.round(openRequirements * 2.5);

  const totalMonthlyHoursReclaimed = screeningHoursSaved + schedulingHoursSaved + atsAdminHoursSaved;

  // The 10 qualitative outcomes required by the prompt
  const qualitativeOutcomes = [
    { title: 'Faster Candidate Response', desc: 'Engage qualified talent immediately when interest is highest, rather than lagging by hours.' },
    { title: 'More Consistent Follow-Up', desc: 'Maintain candidate responsiveness through structured outreach cadences across all open roles.' },
    { title: 'Less Repetitive Administration', desc: 'Free recruiters from recurring status messages, screening questionnaires, and scheduling coordination.' },
    { title: 'Better Pipeline Visibility', desc: 'Real-time pipeline movement across requirements without chasing recruiters for manual updates.' },
    { title: 'Fewer Manual System Updates', desc: 'Automate status stage movement and interview notes across your ATS, CRM, and databases.' },
    { title: 'More Structured Resume Review', desc: 'Recruiters review standardized candidate context cards instead of parsing unstructured documents.' },
    { title: 'Better Interview Coordination', desc: 'Eliminate multi-day scheduling delays between candidates, recruiters, and hiring managers.' },
    { title: 'Clearer Operational Reporting', desc: 'Leadership stays informed with automated daily recruitment intelligence and bottleneck alerts.' },
    { title: 'Reduced Dependence on Memory', desc: 'Prevent candidate drops by embedding systematic reminders and follow-up loops into workflows.' },
    { title: 'More Time for Relationships', desc: 'Recruiters focus their time where human judgment counts: candidate trust, client alignment, and placements.' }
  ];

  return (
    <section className="py-24 md:py-32 bg-white text-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#2563EB] font-['Plus_Jakarta_Sans']">
            Operational Outcomes
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#111827] font-['Plus_Jakarta_Sans'] leading-tight">
            Less Administrative Work.{' '}
            <br className="hidden sm:block" />
            More Recruiting Capacity.
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
            The purpose of an AI Recruitment Operating System is to remove repetitive clerical friction so recruiters can dedicate their full attention to candidate judgment, client relationships, and closed placements.
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
              Operational Capacity Estimator
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-['Plus_Jakarta_Sans'] mt-1">
              Estimate Your Team’s Reclaimed Recruiting Capacity
            </h3>
            <p className="text-sm text-slate-300 mt-2">
              Adjust the sliders based on your monthly recruitment volume to estimate the administrative hours that can be shifted from manual coordination to candidate and client conversations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Sliders Area */}
            <div className="lg:col-span-7 space-y-6">
              {/* Slider 1: Open Requirements */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-medium">
                  <span className="text-slate-300">Active Monthly Job Requirements Managed</span>
                  <span className="text-[#22D3EE] font-mono text-sm font-bold">{openRequirements} open roles</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="60"
                  step="1"
                  value={openRequirements}
                  onChange={(e) => setOpenRequirements(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#2563EB]"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>2 roles</span>
                  <span>60+ roles</span>
                </div>
              </div>

              {/* Slider 2: Resumes Screened */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-medium">
                  <span className="text-slate-300">Resumes Screened & Evaluated Monthly</span>
                  <span className="text-[#22D3EE] font-mono text-sm font-bold">{resumesScreened} resumes / mo</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="1500"
                  step="25"
                  value={resumesScreened}
                  onChange={(e) => setResumesScreened(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#2563EB]"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>50 resumes</span>
                  <span>1,500+ resumes</span>
                </div>
              </div>

              {/* Slider 3: Interviews Coordinated */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-medium">
                  <span className="text-slate-300">Monthly Interviews Coordinated (Candidate / Client)</span>
                  <span className="text-[#22D3EE] font-mono text-sm font-bold">{interviewsCoordinated} interviews / mo</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="200"
                  step="5"
                  value={interviewsCoordinated}
                  onChange={(e) => setInterviewsCoordinated(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#2563EB]"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>10 interviews</span>
                  <span>200+ interviews</span>
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
                  Reclaimed From Repetitive Admin Monthly
                </div>
              </div>

              <div className="space-y-2 text-left text-xs text-slate-300 border-t border-slate-800 pt-3">
                <div className="flex justify-between">
                  <span className="text-slate-400">Structured Resume Screening:</span>
                  <span className="text-emerald-400 font-mono font-medium">~{screeningHoursSaved} hrs/mo</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Interview Scheduling Logistics:</span>
                  <span className="text-emerald-400 font-mono font-medium">~{schedulingHoursSaved} hrs/mo</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">ATS / CRM Manual Record Sync:</span>
                  <span className="text-emerald-400 font-mono font-medium">~{atsAdminHoursSaved} hrs/mo</span>
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
