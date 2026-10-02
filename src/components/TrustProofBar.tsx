import React from 'react';
import { Award, Cpu, Wrench, Globe2 } from 'lucide-react';

export const TrustProofBar: React.FC = () => {
  const trustPoints = [
    {
      icon: Award,
      title: 'Tested on 480K+ Learners',
      subtitle: 'Battle-tested under real production traffic before client deployment'
    },
    {
      icon: Cpu,
      title: 'At Half the Traditional Cost',
      subtitle: 'Standardized productized modules eliminate custom agency bloat'
    },
    {
      icon: Wrench,
      title: 'Voice, Content & Sales Workflows',
      subtitle: 'Pre-engineered engines ready to plug into your coaching model'
    },
    {
      icon: Globe2,
      title: '10+ Years Software Engineering',
      subtitle: 'Engineered by Uday Kiran for high reliability and zero downtime'
    }
  ];

  return (
    <section className="bg-[#0b1b32] border-y border-slate-800/80 py-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {trustPoints.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="flex items-start gap-3.5 group"
              >
                <div className="w-9 h-9 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-[#22D3EE] shrink-0 group-hover:border-[#2563EB]/60 group-hover:bg-[#2563EB]/10 transition-colors">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white font-['Plus_Jakarta_Sans'] leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
