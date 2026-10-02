import React, { useState } from 'react';
import { 
  X, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Calendar,
  FileCheck
} from 'lucide-react';

interface AuditBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuditBookingModal: React.FC<AuditBookingModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<number>(1);
  const [businessType, setBusinessType] = useState<string>('IT Staffing & Contract Staffing');
  const [jobVolume, setJobVolume] = useState<string>('10 - 25 open jobs / mo');
  const [outreachChannel, setOutreachChannel] = useState<string>('LinkedIn & Job Portals');
  const [primaryBottleneck, setPrimaryBottleneck] = useState<string>('Too much manual resume screening');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white border border-slate-200 rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
          aria-label="Close Audit Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Modal Header */}
            <div className="space-y-1.5 pb-5 border-b border-slate-100">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB]">
                <Clock className="w-3.5 h-3.5" />
                <span>30-Minute Business-First Session</span>
              </div>
              <h3 className="text-2xl font-extrabold text-[#111827] font-['Plus_Jakarta_Sans']">
                Book My Recruitment Workflow Audit
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                Answer 3 quick questions to help us prepare your custom AI Recruitment Opportunity Map before the call.
              </p>
            </div>

            {/* Step Progress Bar */}
            <div className="flex items-center justify-between my-5 text-xs text-slate-400">
              <span className={`font-semibold ${step >= 1 ? 'text-[#2563EB]' : ''}`}>
                1. Operation
              </span>
              <span className="w-8 h-[1px] bg-slate-200" />
              <span className={`font-semibold ${step >= 2 ? 'text-[#2563EB]' : ''}`}>
                2. Bottleneck
              </span>
              <span className="w-8 h-[1px] bg-slate-200" />
              <span className={`font-semibold ${step >= 3 ? 'text-[#2563EB]' : ''}`}>
                3. Schedule
              </span>
            </div>

            {/* Step 1: Model & Volume */}
            {step === 1 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 font-['Plus_Jakarta_Sans']">
                    What best describes your staffing & recruitment business?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      'IT Staffing & Contract Staffing',
                      'Direct Hire & Technical Search',
                      'Recruitment Agency / RPO',
                      'Technical Talent Acquisition Firm'
                    ].map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setBusinessType(type)}
                        className={`p-3 rounded-xl border text-left text-xs font-semibold transition-all ${
                          businessType === type
                            ? 'bg-blue-50 border-[#2563EB] text-[#2563EB] shadow-xs'
                            : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 font-['Plus_Jakarta_Sans']">
                    Active monthly job requirements managed:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      'Under 10 open jobs / mo',
                      '10 - 25 open jobs / mo',
                      '25 - 60 open jobs / mo',
                      '60+ open jobs / mo'
                    ].map((vol) => (
                      <button
                        type="button"
                        key={vol}
                        onClick={() => setJobVolume(vol)}
                        className={`p-2.5 rounded-xl border text-center text-xs font-medium transition-all ${
                          jobVolume === vol
                            ? 'bg-blue-50 border-[#2563EB] text-[#2563EB]'
                            : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        {vol}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl transition-colors shadow-sm"
                  >
                    <span>Next: Identify Bottlenecks</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Bottleneck & Sourcing */}
            {step === 2 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 font-['Plus_Jakarta_Sans']">
                    Primary operational bottleneck in your recruitment workflow:
                  </label>
                  <div className="space-y-2">
                    {[
                      'Candidates go cold / slow manual follow-up',
                      'Too much manual resume screening before speaking to talent',
                      'Interview coordination takes too long (repeated scheduling back-and-forth)',
                      'ATS / CRM updates are manual & records remain fragmented',
                      'Client requirements get lost in translation into sourcing criteria',
                      'Recruiter administrative overload as job volume scales'
                    ].map((issue) => (
                      <button
                        type="button"
                        key={issue}
                        onClick={() => setPrimaryBottleneck(issue)}
                        className={`w-full p-2.5 rounded-xl border text-left text-xs font-medium transition-all ${
                          primaryBottleneck === issue
                            ? 'bg-blue-50 border-[#2563EB] text-[#2563EB] font-semibold'
                            : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        {issue}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 font-['Plus_Jakarta_Sans']">
                    Primary candidate discovery & sourcing channels:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      'LinkedIn & Job Portals',
                      'Inbound Applications & Portal',
                      'WhatsApp / SMS Direct Outreach',
                      'Internal Talent Pool & Referrals'
                    ].map((src) => (
                      <button
                        type="button"
                        key={src}
                        onClick={() => setOutreachChannel(src)}
                        className={`p-2.5 rounded-xl border text-center text-xs font-medium transition-all ${
                          outreachChannel === src
                            ? 'bg-blue-50 border-[#2563EB] text-[#2563EB]'
                            : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        {src}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-4 py-2 text-xs font-medium text-slate-500 hover:text-slate-800"
                  >
                    ← Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl transition-colors shadow-sm"
                  >
                    <span>Next: Select Date & Time</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Recruiter Details & Cal.com Placeholder */}
            {step === 3 && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. David Vance"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Work Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="david@staffingfirm.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Direct Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 234-5678"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                    />
                  </div>
                </div>

                {/* Calendar Schedule Simulation Block */}
                <div className="bg-[#F6F9FC] border border-slate-200 rounded-xl p-4 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-700">
                    <Calendar className="w-3.5 h-3.5 text-[#2563EB]" />
                    <span>Selected Session Window: Next Available Slot</span>
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Duration: 30 minutes · 1-on-1 with Uday Kiran · Direct screen-share workflow analysis
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {['Tomorrow 10:00 AM', 'Tomorrow 2:30 PM', 'Thursday 11:00 AM'].map((time, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 bg-white border border-slate-200 rounded text-[11px] font-mono text-slate-700 shadow-2xs"
                      >
                        {time}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 flex justify-between items-center">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-4 py-2 text-xs font-medium text-slate-500 hover:text-slate-800"
                  >
                    ← Back
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl transition-colors shadow-md"
                  >
                    <span>Confirm Audit Booking</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        ) : (
          /* Instant Post-Submission Diagnostic Brief */
          <div className="space-y-5 text-center py-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600">
                Audit Scheduled Successfully
              </span>
              <h3 className="text-2xl font-extrabold text-[#111827] mt-1 font-['Plus_Jakarta_Sans']">
                Thank You, {name || 'Recruitment Leader'}!
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto mt-1">
                We’ve received your recruitment workflow profile. A calendar invite and pre-audit brief have been dispatched to <span className="font-semibold text-slate-800">{email}</span> and direct notification to <span className="font-semibold text-slate-800">{phone}</span>.
              </p>
            </div>

            {/* Preliminary Diagnostic Preview Card */}
            <div className="bg-[#F6F9FC] border border-[#E2E8F0] rounded-2xl p-5 text-left space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#2563EB]">
                <FileCheck className="w-4 h-4" />
                <span>Preliminary System Diagnostic</span>
              </div>

              <div className="space-y-2 text-xs text-slate-700">
                <div>
                  <span className="font-semibold text-slate-900">Priority Engine Recommendation: </span>
                  <span className="text-[#2563EB] font-medium">
                    {primaryBottleneck.includes('follow-up') 
                      ? 'Module 06 (Follow-Up Engine) + Module 07 (Interview Coordination Engine)' 
                      : 'Module 03 (Resume Intelligence Engine) + Module 04 (Matching & Screening Engine)'}
                  </span>
                </div>
                <div>
                  <span className="font-semibold text-slate-900">Operational Target: </span>
                  <span className="text-emerald-600 font-semibold font-mono">Reduce manual resume triage & coordination latency</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-900">Recruiter Capacity Reclaim: </span>
                  <span className="text-slate-600">Shift administrative typing to high-touch candidate relationships</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
              >
                Close & Return to Site
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
