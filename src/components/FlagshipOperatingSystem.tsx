import React, { useState } from 'react';
import { ENGINES_DATA } from '../data/systemsData';
import { 
  Zap, 
  ArrowRight, 
  CheckCircle, 
  Database, 
  Activity, 
  Radio,
  Share2,
  Workflow
} from 'lucide-react';

export const FlagshipOperatingSystem: React.FC = () => {
  const [selectedEngineId, setSelectedEngineId] = useState<string>('client-requirement-engine');

  const selectedEngine = ENGINES_DATA.find((e) => e.id === selectedEngineId) || ENGINES_DATA[0];

  return (
    <section id="operating-system" className="py-24 md:py-32 bg-[#071426] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-[#2563EB]/10 via-[#22D3EE]/5 to-transparent blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#22D3EE] font-['Plus_Jakarta_Sans']">
            One Connected Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-['Plus_Jakarta_Sans'] leading-tight">
            The AI Recruitment Operating System
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            A connected operating layer across the complete recruitment journey — designed to reduce repetitive work while keeping recruiters in control of judgment and relationships.
          </p>
        </div>

        {/* Central Interconnection Indicator Bar */}
        <div className="mb-10 bg-slate-900/80 border border-slate-800 rounded-xl px-5 py-3.5 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-slate-300">
            <Database className="w-4 h-4 text-[#22D3EE]" />
            <span className="font-semibold font-['Plus_Jakarta_Sans']">One Connected Operating System:</span>
            <span className="text-slate-400">All 12 modules share continuous pipeline state, candidate dossiers, and client telemetry</span>
          </div>
          <div className="flex items-center gap-3 text-slate-400">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              Synchronized Pipeline
            </span>
            <span>·</span>
            <span>Zero Manual Data Re-Entry</span>
          </div>
        </div>

        {/* 12 Connected Engines Grid Navigator */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5 mb-8">
          {ENGINES_DATA.map((engine) => {
            const isSelected = engine.id === selectedEngineId;
            return (
              <button
                key={engine.id}
                onClick={() => setSelectedEngineId(engine.id)}
                className={`relative p-3.5 rounded-xl text-left transition-all duration-200 flex flex-col justify-between border ${
                  isSelected
                    ? 'bg-[#2563EB] border-[#22D3EE]/80 shadow-lg shadow-blue-600/30 scale-[1.02]'
                    : 'bg-slate-900/80 border-slate-800 hover:border-slate-700 hover:bg-slate-800/80 text-slate-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[10px] font-mono font-bold ${isSelected ? 'text-white/80' : 'text-slate-500'}`}>
                      MODULE {engine.number}
                    </span>
                    <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-[#22D3EE]' : 'bg-slate-600'}`} />
                  </div>
                  <h4 className={`text-xs font-bold font-['Plus_Jakarta_Sans'] line-clamp-1 ${isSelected ? 'text-white' : 'text-slate-200'}`}>
                    {engine.name}
                  </h4>
                </div>
                <div className="mt-3 flex items-center gap-1 text-[10px] text-slate-400">
                  <Activity className={`w-3 h-3 ${isSelected ? 'text-white' : 'text-[#22D3EE]'}`} />
                  <span className={isSelected ? 'text-white/90' : 'text-slate-400'}>Active Module</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Interactive Engine Deep Dive Panel */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Description & System Role */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold text-[#22D3EE] bg-[#22D3EE]/10 px-2.5 py-1 rounded border border-[#22D3EE]/30">
                  MODULE {selectedEngine.number}
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {selectedEngine.tagline}
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Plus_Jakarta_Sans']">
                  {selectedEngine.name}
                </h3>
                <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                  {selectedEngine.description}
                </p>
              </div>

              {/* Connected Engines Pathway */}
              <div className="space-y-2 pt-2 border-t border-slate-800">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                  Synchronized With Other Modules:
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedEngine.connectedEngines.map((connected) => (
                    <span
                      key={connected}
                      className="text-xs text-slate-300 bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700/80 flex items-center gap-1.5"
                    >
                      <Workflow className="w-3 h-3 text-[#22D3EE]" />
                      <span>{connected}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Inputs, Outputs & Automated Tasks */}
            <div className="lg:col-span-6 space-y-6 bg-slate-950/70 p-6 rounded-xl border border-slate-800/80">
              {/* Inputs & Outputs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Inputs */}
                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                    Workflow Inputs
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {selectedEngine.inputs.map((input, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-slate-500 font-mono">→</span>
                        <span>{input}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outputs */}
                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    Engine Outputs
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {selectedEngine.outputs.map((output, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-emerald-500 font-mono">✓</span>
                        <span>{output}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Core Autonomous Subroutines */}
              <div className="pt-4 border-t border-slate-800/80 space-y-2.5">
                <span className="text-xs font-mono uppercase tracking-wider text-purple-400 font-semibold flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-purple-400" />
                  Automated Subroutines
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  {selectedEngine.automations.map((automation, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-900 px-3 py-2 rounded-lg border border-slate-800/80 flex items-center gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#22D3EE]" />
                      <span className="truncate">{automation}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
