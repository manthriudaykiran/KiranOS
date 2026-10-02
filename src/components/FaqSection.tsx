import React, { useState } from 'react';
import { FAQ_DATA } from '../data/systemsData';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';

interface FaqSectionProps {
  onOpenAudit: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenAudit }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 md:py-32 bg-[#F6F9FC] text-[#111827]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#2563EB] font-['Plus_Jakarta_Sans']">
            Clear Answers
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#111827] font-['Plus_Jakarta_Sans'] leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about how we engineer, deploy, and support AI Operating Systems for coaches and online businesses.
          </p>
        </div>

        {/* Accordions Container */}
        <div className="space-y-3.5">
          {FAQ_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden transition-all duration-200 shadow-2xs"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-5 px-6 sm:px-7 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-[#111827] font-['Plus_Jakarta_Sans']">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-blue-50 text-[#2563EB] rotate-180'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 sm:px-7 text-sm sm:text-base text-[#475569] leading-relaxed border-t border-slate-100 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom prompt for unaddressed questions */}
        <div className="mt-12 text-center bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left text-xs sm:text-sm text-slate-600">
            <span className="font-semibold text-slate-900">Have a specific technical or workflow question?</span> We address unique systems during the AI Growth Audit.
          </div>
          <button
            onClick={onOpenAudit}
            className="text-xs sm:text-sm font-semibold text-[#2563EB] hover:text-[#1D4ED8] flex items-center gap-1.5 whitespace-nowrap"
          >
            <span>Ask During Your Audit</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
