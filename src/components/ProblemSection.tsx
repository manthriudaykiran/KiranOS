import React from 'react';
import { Clock, Repeat, Unlink2, BarChart2, AlertCircle } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      number: '01',
      icon: Clock,
      title: 'Leads Are Slipping Away',
      description:
        'Someone registers, comments on a reel, sends a direct message, or downloads a resource—but follow-up happens hours later. In a high-speed market, delayed response means lost revenue.',
      friction: 'Warm buyers cool down before your team opens their chat.'
    },
    {
      number: '02',
      icon: Repeat,
      title: 'Your Team Repeats the Same Work',
      description:
        'FAQs, appointment reminders, CRM updates, manual onboarding checklists, spreadsheet reports, scheduling links, and routine student support are handled manually every single day.',
      friction: 'High-value talent trapped doing repetitive low-leverage typing.'
    },
    {
      number: '03',
      icon: Unlink2,
      title: 'Your Tools Don’t Talk to Each Other',
      description:
        'Instagram, WhatsApp, email service, Google Calendars, CRM, webinar software, spreadsheets, and payment gateways remain disconnected silos. Data is copied and pasted by hand.',
      friction: 'Fragile operations with constant blind spots and human error.'
    },
    {
      number: '04',
      icon: BarChart2,
      title: 'You Have Data But No Intelligence',
      description:
        'Webinars, sales calls, ad campaigns, and student drop-offs generate hundreds of valuable behavioral signals every week—but nobody synthesizes them into immediate corrective decisions.',
      friction: 'Founders flying blind without a clear daily pulse on operations.'
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#F6F9FC] text-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#2563EB] font-['Plus_Jakarta_Sans']">
            Operational Bottlenecks
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#111827] font-['Plus_Jakarta_Sans'] leading-tight">
            Your Business Is Growing.{' '}
            <br className="hidden sm:block" />
            Your Operations Haven’t Caught Up.
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
            Coaches don’t stall because of a lack of knowledge or passion. They stall because day-to-day manual firefighting drains the energy required to scale.
          </p>
        </div>

        {/* 4 Premium Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {problems.map((problem) => {
            const Icon = problem.icon;
            return (
              <div
                key={problem.number}
                className="bg-white border border-[#E2E8F0] rounded-2xl p-7 sm:p-9 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#2563EB]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-bold text-slate-400 font-mono">
                      {problem.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#111827] font-['Plus_Jakarta_Sans']">
                    {problem.title}
                  </h3>

                  <p className="text-[#475569] text-base leading-relaxed">
                    {problem.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-start gap-2.5 text-xs text-rose-700 font-medium bg-rose-50/50 p-3 rounded-xl border border-rose-100/60">
                  <AlertCircle className="w-4 h-4 shrink-0 text-rose-500 mt-0.5" />
                  <span>{problem.friction}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing Strong Statement Callout */}
        <div className="mt-16 max-w-3xl mx-auto bg-[#071426] text-white rounded-2xl p-8 sm:p-10 text-center shadow-lg border border-slate-800 relative overflow-hidden">
          <div className="absolute top-0 right-1/3 w-60 h-60 bg-[#2563EB]/15 rounded-full blur-2xl pointer-events-none" />
          
          <div className="relative z-10 space-y-3">
            <p className="text-xs uppercase tracking-widest text-[#22D3EE] font-semibold font-['Plus_Jakarta_Sans']">
              The Fundamental Shift
            </p>
            <p className="text-2xl sm:text-3xl font-extrabold tracking-tight font-['Plus_Jakarta_Sans'] leading-snug">
              You don’t need another AI tool.{' '}
              <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#22D3EE]">
                You need your business to operate as one system.
              </span>
            </p>
            <p className="text-sm text-slate-400 max-w-xl mx-auto pt-1">
              Adding ten separate subscriptions creates complexity. Building one connected intelligence backbone creates freedom.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
