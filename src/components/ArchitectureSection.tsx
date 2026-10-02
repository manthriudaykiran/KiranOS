import React, { useState } from 'react';
import { 
  Briefcase, 
  Search, 
  FileText, 
  Target, 
  UserCheck, 
  MessageSquare, 
  Calendar, 
  Share2, 
  CheckCircle2, 
  Sparkles, 
  Database, 
  TrendingUp,
  Cpu,
  Layers,
  ArrowDown
} from 'lucide-react';

interface LayerItem {
  id: string;
  name: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  tools: string;
  dataTransferred: string;
}

export const ArchitectureSection: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<string>('matching');

  const layers: LayerItem[] = [
    {
      id: 'intake',
      name: 'Client Requirement & Job Intake',
      category: 'Requirement Layer',
      icon: Briefcase,
      tools: 'Client Intake Briefs, Hiring Manager Calls, Role Criteria Engine',
      dataTransferred: 'Skill hierarchy, required vs preferred experience, compensation bounds, priority'
    },
    {
      id: 'sourcing',
      name: 'Multi-Source Candidate Ingestion',
      category: 'Sourcing Layer',
      icon: Search,
      tools: 'Job Portals, Direct Inbound, In-House Talent Pool, Referrals',
      dataTransferred: 'Candidate contact details, portfolio links, raw resumes, source attribution'
    },
    {
      id: 'screening',
      name: 'Resume Intelligence & Extraction',
      category: 'Parsing Layer',
      icon: FileText,
      tools: 'Document Extraction Models, OCR Normalization, Skill Taxonomy Core',
      dataTransferred: 'Normalized tenure, tech stack proficiency, project scale, education history'
    },
    {
      id: 'matching',
      name: 'Contextual Candidate Matching',
      category: 'Alignment Layer',
      icon: Target,
      tools: 'Semantic Match Engine, Requirement Alignment Matrix',
      dataTransferred: 'Match scorecards, must-have verification, gap indicators, talking points'
    },
    {
      id: 'qualification',
      name: 'Candidate Qualification & Pre-Screen',
      category: 'Qualification Layer',
      icon: UserCheck,
      tools: 'Conversational Pre-Screening, Interactive Qualification Forms',
      dataTransferred: 'Notice period, compensation expectations, work authorization, interview availability'
    },
    {
      id: 'outreach',
      name: 'Multi-Channel Outreach & Follow-Up',
      category: 'Engagement Layer',
      icon: MessageSquare,
      tools: 'Approved WhatsApp Business API, Transactional Email, SMS Gateway',
      dataTransferred: 'Personalized outreach, status updates, candidate replies, reminder cadences'
    },
    {
      id: 'scheduling',
      name: 'Interview Coordination & Reminders',
      category: 'Coordination Layer',
      icon: Calendar,
      tools: 'Calendar Integrations, Multi-Timezone Buffer Manager, Automated Reminders',
      dataTransferred: 'Confirmed interview slots, prep kits, meeting room dial-ins, reschedule handlers'
    },
    {
      id: 'submission',
      name: 'Client Submission & Feedback',
      category: 'Client Presentation',
      icon: Share2,
      tools: 'Formatted Submission Packet Generator, Client Feedback Loops',
      dataTransferred: 'Standardized candidate dossiers, recruiter notes, client review status'
    },
    {
      id: 'offer',
      name: 'Offer Tracking & Placement',
      category: 'Placement Layer',
      icon: CheckCircle2,
      tools: 'Offer Status Ledger, Notice Period Check-in Prompts',
      dataTransferred: 'Offer details, candidate acceptance progress, start dates, counter-offer signals'
    },
    {
      id: 'onboarding',
      name: 'Post-Placement Onboarding',
      category: 'Onboarding Layer',
      icon: Sparkles,
      tools: 'Compliance Checklists, Document Ingestion, Day-1 Hand-off Alerts',
      dataTransferred: 'Background check verification, identity documents, first-day instructions'
    },
    {
      id: 'ats',
      name: 'Two-Way ATS & CRM Automation',
      category: 'Data Persistence Layer',
      icon: Database,
      tools: 'ATS REST APIs, Recruitment CRM Connectors, PostgreSQL Ledger',
      dataTransferred: 'Two-way candidate status sync, activity notes, stage transitions, audit logs'
    },
    {
      id: 'intelligence',
      name: 'Recruitment Intelligence & Reporting',
      category: 'Executive Visibility',
      icon: TrendingUp,
      tools: 'Cross-System Analytics Bus, Daily Management Briefing Engine',
      dataTransferred: 'Open requirement velocity, submission ratios, interviewer latency, bottleneck alerts'
    }
  ];

  const currentLayer = layers.find((l) => l.id === activeLayer) || layers[3];

  return (
    <section className="py-24 md:py-32 bg-[#071426] text-white relative overflow-hidden border-t border-slate-800">
      <div className="absolute top-1/4 left-1/3 w-[800px] h-[500px] bg-[#2563EB]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#22D3EE] font-['Plus_Jakarta_Sans']">
            Systems Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-['Plus_Jakarta_Sans'] leading-tight">
            The Complete Recruitment Operating Architecture
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Every layer in your staffing workflow is intentionally connected into one data and automation fabric—eliminating isolated tools, lost candidate context, and manual clerical repetition.
          </p>
        </div>

        {/* Blueprint Layout: Vertical Flow on Left, Active Layer Deep Dive on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive 12-Layer Stack */}
          <div className="lg:col-span-6 space-y-2">
            <div className="text-xs font-mono font-bold text-slate-400 mb-3 px-1 flex items-center justify-between">
              <span>RECRUITMENT LIFECYCLE LAYERS</span>
              <span className="text-[#22D3EE]">CLICK LAYER TO INSPECT DATA</span>
            </div>

            <div className="space-y-1.5">
              {layers.map((layer, index) => {
                const Icon = layer.icon;
                const isActive = layer.id === activeLayer;
                return (
                  <button
                    key={layer.id}
                    onClick={() => setActiveLayer(layer.id)}
                    className={`w-full p-3 rounded-xl border text-left transition-all duration-200 flex items-center justify-between gap-3 ${
                      isActive
                        ? 'bg-[#2563EB] border-[#22D3EE] text-white shadow-md shadow-blue-600/30'
                        : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:bg-slate-800/80 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                        isActive ? 'bg-white/20 text-white' : 'bg-slate-800 text-[#22D3EE]'
                      }`}>
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <div className="min-w-0">
                        <span className={`text-[10px] font-mono block ${isActive ? 'text-white/80' : 'text-slate-400'}`}>
                          0{index + 1} · {layer.category}
                        </span>
                        <h4 className="text-xs sm:text-sm font-bold truncate font-['Plus_Jakarta_Sans']">
                          {layer.name}
                        </h4>
                      </div>
                    </div>

                    <span className={`w-2 h-2 rounded-full shrink-0 ${isActive ? 'bg-[#22D3EE]' : 'bg-slate-700'}`} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Deep-Dive Protocol Inspector */}
          <div className="lg:col-span-6 sticky top-24 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="pb-4 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#2563EB]/20 border border-[#2563EB]/40 flex items-center justify-center text-[#22D3EE]">
                  {React.createElement(currentLayer.icon, { className: 'w-5 h-5' })}
                </div>
                <div>
                  <span className="text-xs font-mono text-[#22D3EE] font-bold">
                    LAYER TELEMETRY INSPECTOR
                  </span>
                  <h3 className="text-xl font-bold text-white font-['Plus_Jakarta_Sans']">
                    {currentLayer.name}
                  </h3>
                </div>
              </div>
              <span className="text-xs font-mono uppercase bg-emerald-500/10 text-emerald-400 px-2.5 py-1 rounded border border-emerald-500/30">
                Connected
              </span>
            </div>

            {/* Architecture Role */}
            <div className="space-y-1.5">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                System Role & Boundary
              </span>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed bg-slate-950/60 p-3.5 rounded-xl border border-slate-800/80">
                Operates autonomously within defined validation guardrails, routing candidate and requirement records to the next recruiting stage while keeping recruiters in control of judgment.
              </p>
            </div>

            {/* Systems & Protocols Involved */}
            <div className="space-y-1.5">
              <span className="text-xs font-mono uppercase tracking-wider text-[#22D3EE]">
                Supported Tools & Integrations
              </span>
              <div className="bg-slate-950/60 p-3.5 rounded-xl border border-slate-800/80 font-mono text-xs text-slate-300">
                {currentLayer.tools}
              </div>
            </div>

            {/* Data Payload Moving Through Layer */}
            <div className="space-y-1.5">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
                Payload Synchronized Through System Bus
              </span>
              <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800/80 font-mono text-xs text-emerald-300 flex items-start gap-2">
                <span className="text-[#22D3EE] font-bold shrink-0">$ payload:</span>
                <span className="leading-relaxed">{currentLayer.dataTransferred}</span>
              </div>
            </div>

            {/* Data Hygiene Guarantee */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>Recruiter Judgment: Required</span>
              <span>Clerical Data Entry: 0%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
