import React, { useState } from 'react';
import { INTEGRATIONS_DATA } from '../data/systemsData';
import { 
  Network, 
  Database, 
  Calendar, 
  Mail, 
  MessageSquare,
  Search,
  FileSpreadsheet,
  CheckCircle,
  Code
} from 'lucide-react';

export const IntegrationsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'Applicant Tracking', 'Client & Deal Management', 'Communication', 'Direct Messaging', 'Scheduling', 'Data & Reporting'];

  const filteredIntegrations = selectedCategory === 'all'
    ? INTEGRATIONS_DATA
    : INTEGRATIONS_DATA.filter((i) => i.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <section className="py-24 md:py-32 bg-[#F6F9FC] text-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#2563EB] font-['Plus_Jakarta_Sans']">
            Seamless Interoperability
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#111827] font-['Plus_Jakarta_Sans'] leading-tight">
            Keep the Systems You Already Use.{' '}
            <br className="hidden sm:block" />
            Connect the Work Around Them.
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
            We don’t force you to rip out your existing software. We connect your ATS, CRM, email, calendar, and messaging tools into one coordinated operating system.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-[#2563EB] text-white shadow-xs'
                  : 'bg-white border border-[#E2E8F0] text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {cat === 'all' ? 'All Supported Systems' : cat}
            </button>
          ))}
        </div>

        {/* Integration Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {filteredIntegrations.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E2E8F0] rounded-xl p-5 hover:border-[#2563EB]/40 hover:shadow-sm transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50/80 border border-blue-100 flex items-center justify-center text-[#2563EB] font-mono text-xs font-bold group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                    {item.name.substring(0, 2).toUpperCase()}
                  </div>
                  <span className="flex items-center gap-1 text-[10px] font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    Connected
                  </span>
                </div>

                <h3 className="text-sm font-bold text-[#111827] font-['Plus_Jakarta_Sans'] group-hover:text-[#2563EB] transition-colors">
                  {item.name}
                </h3>
                <span className="text-[11px] text-slate-400 font-medium block mb-2">
                  {item.category}
                </span>

                <p className="text-xs text-[#475569] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[10px] text-slate-400">
                <Network className="w-3 h-3 text-[#2563EB]" />
                <span>Two-way workflow sync</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 bg-white border border-slate-200 rounded-xl p-5 text-center max-w-2xl mx-auto shadow-xs text-xs text-slate-500">
          <span className="font-semibold text-slate-800">Proprietary In-House Stack?</span> We connect through standardized REST APIs, webhooks, and secure database protocols.
        </div>
      </div>
    </section>
  );
};
