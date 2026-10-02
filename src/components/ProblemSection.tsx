import React from 'react';
import { 
  UserX, 
  FileSearch, 
  CalendarClock, 
  Database, 
  FileQuestion, 
  Repeat, 
  EyeOff, 
  Layers, 
  AlertCircle 
} from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      number: '01',
      icon: UserX,
      title: 'Candidates Go Cold',
      description:
        'Candidate interest drops when follow-up depends on recruiters manually remembering every message, update and reminder across multiple conversations.',
      friction: 'Warm candidate interest fades during operational delays.'
    },
    {
      number: '02',
      icon: FileSearch,
      title: 'Too Much Resume Screening',
      description:
        'Recruiters spend valuable time reviewing large volumes of resumes before reaching the candidates who deserve human attention and judgment.',
      friction: 'Hours spent on document triage instead of speaking with candidates.'
    },
    {
      number: '03',
      icon: CalendarClock,
      title: 'Interview Coordination Takes Too Long',
      description:
        'Scheduling between candidates, recruiters and hiring teams creates unnecessary messages, delays and rescheduling work.',
      friction: 'Multi-day scheduling lag causes candidates to accept other offers.'
    },
    {
      number: '04',
      icon: Database,
      title: 'ATS / CRM Updates Are Manual',
      description:
        'Recruiters repeatedly copy candidate information, interview status and follow-up notes between disconnected business systems.',
      friction: 'Fragmented records and valuable recruiter time lost to clerical data entry.'
    },
    {
      number: '05',
      icon: FileQuestion,
      title: 'Client Requirements Get Lost in Translation',
      description:
        'Job requirements are not always converted into clear, structured candidate qualification criteria, leading to misaligned sourcing.',
      friction: 'Submissions rejected due to avoidable requirement misunderstandings.'
    },
    {
      number: '06',
      icon: Repeat,
      title: 'Recruiters Repeat the Same Communication',
      description:
        'Candidate updates, reminders, screening questions and status messages consume hours of recurring, administrative communication daily.',
      friction: 'Recurring administrative messaging drains recruiter energy.'
    },
    {
      number: '07',
      icon: EyeOff,
      title: 'Pipeline Visibility Is Limited',
      description:
        'Managers often need to ask recruiters manually for status because operational data is fragmented across emails, sheets, and individual inboxes.',
      friction: 'Leadership lacks real-time insight into requirement velocity.'
    },
    {
      number: '08',
      icon: Layers,
      title: 'More Volume Creates More Administration',
      description:
        'As jobs, candidates and clients increase, repetitive coordination increases too—forcing firms to add headcount just to manage the paperwork.',
      friction: 'Operational overhead scales faster than actual placement capacity.'
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#F6F9FC] text-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#2563EB] font-['Plus_Jakarta_Sans']">
            Recruitment Operational Bottlenecks
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#111827] font-['Plus_Jakarta_Sans'] leading-tight">
            Your Recruiters Are Busy.{' '}
            <br className="hidden sm:block" />
            But Too Much of Their Time Is Not Recruiting.
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
            Staffing and recruitment firms do not struggle because recruiters lack talent. They struggle because repetitive coordination and administrative friction consume the hours needed for building relationships and closing placements.
          </p>
        </div>

        {/* 8 Premium Problem Cards in 2x4 / 4x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem) => {
            const Icon = problem.icon;
            return (
              <div
                key={problem.number}
                className="bg-white border border-[#E2E8F0] rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#2563EB]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-slate-400 font-mono">
                      {problem.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#111827] font-['Plus_Jakarta_Sans'] leading-snug">
                    {problem.title}
                  </h3>

                  <p className="text-[#475569] text-xs sm:text-sm leading-relaxed">
                    {problem.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-start gap-2 text-xs text-rose-700 font-medium bg-rose-50/50 p-2.5 rounded-xl border border-rose-100/60">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0 text-rose-500 mt-0.5" />
                  <span className="text-[11px] leading-tight">{problem.friction}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Closing Message Callout from Prompt */}
        <div className="mt-16 max-w-3xl mx-auto bg-[#071426] text-white rounded-2xl p-8 sm:p-10 text-center shadow-lg border border-slate-800 relative overflow-hidden">
          <div className="absolute top-0 right-1/3 w-60 h-60 bg-[#2563EB]/15 rounded-full blur-2xl pointer-events-none" />
          
          <div className="relative z-10 space-y-3">
            <p className="text-xs uppercase tracking-widest text-[#22D3EE] font-semibold font-['Plus_Jakarta_Sans']">
              The Root Cause
            </p>
            <p className="text-2xl sm:text-3xl font-extrabold tracking-tight font-['Plus_Jakarta_Sans'] leading-snug">
              The problem is not your recruiters.{' '}
              <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#22D3EE]">
                The problem is the amount of repetitive operational work surrounding them.
              </span>
            </p>
            <p className="text-sm text-slate-400 max-w-xl mx-auto pt-1">
              When you eliminate manual screening, scheduling back-and-forth, and clerical system updates, recruiters spend their full energy on candidate relationships, client trust, and placements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
