import React, { useState } from 'react';
import { 
  Share2, 
  Filter, 
  Database, 
  MessageSquare, 
  Briefcase, 
  CreditCard, 
  Sparkles, 
  GraduationCap, 
  HelpCircle, 
  RefreshCw, 
  BarChart3,
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
  const [activeLayer, setActiveLayer] = useState<string>('qualification');

  const layers: LayerItem[] = [
    {
      id: 'traffic',
      name: 'Traffic & Inbound Channels',
      category: 'Top of Funnel',
      icon: Share2,
      tools: 'Meta Ads, Reels, YouTube, Google Ads, Organic Inbound, Website Opt-ins',
      dataTransferred: 'Click IDs, UTM parameters, lead form inputs, direct messages'
    },
    {
      id: 'capture',
      name: 'Lead Capture Layer',
      category: 'Real-Time Ingestion',
      icon: Filter,
      tools: 'Webhook Listeners, Form Integrations, Meta Graph API, WhatsApp Inbound',
      dataTransferred: 'Instant lead normalization, deduplication, phone verification'
    },
    {
      id: 'qualification',
      name: 'AI Qualification Layer',
      category: 'Intent Engine',
      icon: Cpu,
      tools: 'Conversational LLM Reasoning (Claude/GPT), Dynamic Prompt Scoring Matrix',
      dataTransferred: 'Budget qualification, timeline, current revenue tier, intent score'
    },
    {
      id: 'crm',
      name: 'Central CRM & Database',
      category: 'Single Source of Truth',
      icon: Database,
      tools: 'Supabase PostgreSQL, HubSpot/GoHighLevel API, Two-Way Sheet Sync',
      dataTransferred: 'Unified contact ledger, conversation logs, deal stages, activity timeline'
    },
    {
      id: 'nurture',
      name: 'WhatsApp + Email + Voice AI',
      category: 'Multi-Channel Outreach',
      icon: MessageSquare,
      tools: 'WhatsApp Business API, Twilio Voice Agent, Transactional Email',
      dataTransferred: 'Tailored follow-ups, workshop join links, appointment reminders'
    },
    {
      id: 'sales',
      name: 'Sales Consultation',
      category: 'High-Touch Closing',
      icon: Briefcase,
      tools: 'Google Calendar, Zoom API, Real-Time Meeting Summarizer',
      dataTransferred: 'Meeting recording, objection taxonomy, action items, closing notes'
    },
    {
      id: 'payment',
      name: 'Payment Processing',
      category: 'Transaction Gateway',
      icon: CreditCard,
      tools: 'Razorpay / Stripe Webhooks, Invoicing Engine',
      dataTransferred: 'Transaction verification, billing metadata, subscription status'
    },
    {
      id: 'onboarding',
      name: 'Automated Onboarding',
      category: 'Day-1 Activation',
      icon: Sparkles,
      tools: 'Contract E-Signature, LMS Account Generator, Drive Folder Provisioner',
      dataTransferred: 'Access credentials, personalized onboarding checklist, welcome video'
    },
    {
      id: 'delivery',
      name: 'Delivery, Community & Course',
      category: 'Core Transformation',
      icon: GraduationCap,
      tools: 'Skool, Circle, Teachable/Kajabi, Custom Student Portals',
      dataTransferred: 'Lesson completion logs, assignment submissions, attendance records'
    },
    {
      id: 'support',
      name: '24/7 AI Support & Knowledge',
      category: 'Curriculum Assistance',
      icon: HelpCircle,
      tools: 'Private RAG Vector Database, Embedded Community Bot',
      dataTransferred: 'Grounded SOP answers, timestamped video citations, coach escalation flags'
    },
    {
      id: 'retention',
      name: 'Retention, Expansion & Upsell',
      category: 'Client Lifetime Value',
      icon: RefreshCw,
      tools: 'Milestone Tracking Logic, Churn Early-Warning Predictor',
      dataTransferred: 'Program renewal signals, mastermind invites, referral invitations'
    },
    {
      id: 'intelligence',
      name: 'Cross-System Intelligence',
      category: 'Executive Cockpit',
      icon: BarChart3,
      tools: 'Automated Telemetry Consolidator, Daily Executive Telegram/WhatsApp Brief',
      dataTransferred: 'CAC vs LTV, funnel conversion rates, coach capacity metrics'
    }
  ];

  const currentLayer = layers.find((l) => l.id === activeLayer) || layers[2];

  return (
    <section id="architecture" className="py-24 md:py-32 bg-[#071426] text-white relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-[#2563EB]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#22D3EE] font-['Plus_Jakarta_Sans']">
            Technical Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-['Plus_Jakarta_Sans'] leading-tight">
            System Architecture Blueprint
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            How data moves seamlessly from the first social interaction through sales, onboarding, delivery, and automated retention—with a central AI intelligence layer coordinating every event.
          </p>
        </div>

        {/* The Central AI Intelligence Spine Callout */}
        <div className="mb-10 bg-gradient-to-r from-[#2563EB]/20 via-[#22D3EE]/20 to-[#2563EB]/20 border border-[#22D3EE]/40 rounded-xl p-4 sm:p-5 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#22D3EE]/20 flex items-center justify-center text-[#22D3EE]">
              <Cpu className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#22D3EE] font-bold">
                Centralized AI Intelligence Layer
              </span>
              <p className="text-xs text-slate-300">
                Monitors data transitions between all layers in real-time, enforcing business logic and alerting when friction occurs.
              </p>
            </div>
          </div>
          <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-800">
            Active Event Bus
          </span>
        </div>

        {/* Interactive Architecture Flow View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Layer Chain */}
          <div className="lg:col-span-7 space-y-2">
            {layers.map((layer, idx) => {
              const Icon = layer.icon;
              const isSelected = layer.id === activeLayer;

              return (
                <React.Fragment key={layer.id}>
                  <button
                    onClick={() => setActiveLayer(layer.id)}
                    className={`w-full text-left p-3.5 sm:p-4 rounded-xl border transition-all duration-200 flex items-center justify-between ${
                      isSelected
                        ? 'bg-[#2563EB] border-[#22D3EE] shadow-lg shadow-blue-600/30 text-white'
                        : 'bg-slate-900/80 border-slate-800 hover:border-slate-700 hover:bg-slate-800/80 text-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                          isSelected ? 'bg-white/20 text-white' : 'bg-slate-800 text-[#22D3EE]'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-[10px] font-mono uppercase ${
                              isSelected ? 'text-white/80' : 'text-slate-400'
                            }`}
                          >
                            Layer {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                          </span>
                          <span className="text-[10px] text-slate-400">·</span>
                          <span
                            className={`text-[10px] ${
                              isSelected ? 'text-white/90' : 'text-[#22D3EE]'
                            }`}
                          >
                            {layer.category}
                          </span>
                        </div>
                        <h4 className="text-sm font-bold truncate font-['Plus_Jakarta_Sans']">
                          {layer.name}
                        </h4>
                      </div>
                    </div>

                    <span
                      className={`text-xs font-semibold px-2 py-1 rounded shrink-0 hidden sm:inline-block ${
                        isSelected ? 'bg-white/20 text-white' : 'text-slate-400'
                      }`}
                    >
                      {isSelected ? 'Inspecting' : 'Inspect →'}
                    </span>
                  </button>

                  {idx < layers.length - 1 && (
                    <div className="flex justify-center my-0.5">
                      <div className="w-[1.5px] h-3 bg-slate-800 flex items-center justify-center">
                        <div className="w-1 h-1 rounded-full bg-[#22D3EE]/50" />
                      </div>
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Right Column: Active Layer Deep Inspection Card (Sticky) */}
          <div className="lg:col-span-5 sticky top-28 space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-7 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs font-mono uppercase tracking-wider text-[#22D3EE]">
                  Node Telemetry Inspector
                </span>
                <span className="text-[11px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                  {currentLayer.category}
                </span>
              </div>

              <div className="mt-5 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[#2563EB]/20 border border-[#2563EB]/40 flex items-center justify-center text-[#22D3EE]">
                    <currentLayer.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-['Plus_Jakarta_Sans']">
                      {currentLayer.name}
                    </h3>
                    <p className="text-xs text-slate-400">Layer Specification</p>
                  </div>
                </div>

                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1.5">
                    Integrated Tooling & Protocols:
                  </span>
                  <div className="bg-[#071426] p-3 rounded-lg border border-slate-800 text-xs text-slate-200 font-mono">
                    {currentLayer.tools}
                  </div>
                </div>

                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1.5">
                    Data Payload Passed to Next Engine:
                  </span>
                  <div className="bg-[#071426] p-3 rounded-lg border border-slate-800 text-xs text-emerald-300 font-mono">
                    {currentLayer.dataTransferred}
                  </div>
                </div>

                <div className="pt-2 text-xs text-slate-400 leading-relaxed">
                  Every layer maintains transactional logs. If an external API or webhook fails, intelligent retry queues and coach alerts prevent lost leads or delayed onboarding.
                </div>
              </div>
            </div>

            {/* Quick architectural assurance */}
            <div className="bg-[#0b1b32] border border-slate-800 rounded-xl p-4 text-xs text-slate-300 space-y-2">
              <span className="font-semibold text-white block font-['Plus_Jakarta_Sans']">
                Zero Fragile Zapier Spaghetti
              </span>
              <p className="text-slate-400">
                Unlike fragile point-to-point triggers that break when a tool updates, KiranOS utilizes decoupled webhooks, centralized database state, and idempotent execution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
