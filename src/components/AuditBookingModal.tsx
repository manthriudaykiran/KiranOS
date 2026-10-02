import React, { useState } from 'react';
import { 
  X, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  Calendar,
  Layers,
  HelpCircle,
  TrendingUp,
  FileCheck
} from 'lucide-react';
import { KiranForgeLogo } from './KiranForgeLogo';

interface AuditBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuditBookingModal: React.FC<AuditBookingModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<number>(1);
  const [businessType, setBusinessType] = useState<string>('High-Ticket 1:1 Coaching');
  const [leadVolume, setLeadVolume] = useState<string>('100 - 300 leads / month');
  const [leadSource, setLeadSource] = useState<string>('Instagram Reels & Meta Ads');
  const [primaryBottleneck, setPrimaryBottleneck] = useState<string>('Slow lead follow-up & missed inquiries');
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
            <div className="flex items-start gap-4 pb-5 border-b border-slate-100">
              <div className="relative shrink-0">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#22D3EE]/25 to-[#2563EB]/25 rounded-xl blur-sm" />
                <div className="relative w-12 h-12 rounded-xl bg-[#030914] p-1.5 flex items-center justify-center border border-cyan-500/40 shadow-lg shadow-cyan-950/70">
                  <KiranForgeLogo className="w-full h-full drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB]">
                  <Clock className="w-3.5 h-3.5" />
                  <span>30-Minute Business-First Session</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#111827] font-['Plus_Jakarta_Sans']">
                  Book Your Free AI Strategy Call
                </h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  Answer 3 quick questions to help us prepare your custom AI Opportunity Map before the call.
                </p>
              </div>
            </div>

            {/* Step Progress Bar */}
            <div className="flex items-center justify-between my-5 text-xs text-slate-400">
              <span className={`font-semibold ${step >= 1 ? 'text-[#2563EB]' : ''}`}>
                1. Model
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
                    What best describes your business model?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      'High-Ticket 1:1 Coaching',
                      'Group Mastermind & Mentorship',
                      'Live Workshops & Cohorts',
                      'Online Education / Hybrid Course'
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
                    Estimated monthly inbound lead volume:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      'Under 100 leads / mo',
                      '100 - 300 leads / mo',
                      '300 - 1,000 leads / mo',
                      '1,000+ leads / mo'
                    ].map((vol) => (
                      <button
                        type="button"
                        key={vol}
                        onClick={() => setLeadVolume(vol)}
                        className={`p-2.5 rounded-xl border text-center text-xs font-medium transition-all ${
                          leadVolume === vol
                            ? 'bg-blue-50 border-[#2563EB] text-[#2563EB]'
                            : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        {vol}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-3 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl transition-colors shadow-sm"
                  >
                    <span>Next: Select Friction Point</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Primary Bottleneck */}
            {step === 2 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 font-['Plus_Jakarta_Sans']">
                    Where is the biggest operational leak right now?
                  </label>
                  <div className="space-y-2">
                    {[
                      'Slow lead follow-up & missed inquiries',
                      'Low webinar show-up rates & poor no-show follow-up',
                      'Manual client onboarding & contract headaches',
                      'Repetitive student curriculum questions draining coach time',
                      'Disconnected tools & spreadsheet copy-pasting'
                    ].map((b) => (
                      <button
                        type="button"
                        key={b}
                        onClick={() => setPrimaryBottleneck(b)}
                        className={`w-full p-3 rounded-xl border text-left text-xs font-semibold transition-all flex items-center justify-between ${
                          primaryBottleneck === b
                            ? 'bg-blue-50 border-[#2563EB] text-[#2563EB]'
                            : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        <span>{b}</span>
                        {primaryBottleneck === b && (
                          <CheckCircle2 className="w-4 h-4 text-[#2563EB]" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-3 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-xs text-slate-500 hover:text-slate-800"
                  >
                    ← Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl transition-colors shadow-sm"
                  >
                    <span>Next: Contact Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Contact & Submission */}
            {step === 3 && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Sravani Rao"
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#2563EB] text-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Work Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@yourcompany.com"
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#2563EB] text-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    WhatsApp Phone Number (for Audit confirmation)
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#2563EB] text-slate-900"
                  />
                </div>

                <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl text-[11px] text-slate-500 space-y-1">
                  <div className="font-semibold text-slate-700">Audit Profile Summary:</div>
                  <div>• Model: {businessType}</div>
                  <div>• Volume: {leadVolume}</div>
                  <div>• Bottleneck: {primaryBottleneck}</div>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="text-xs text-slate-500 hover:text-slate-800"
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
                Thank You, {name || 'Coach'}!
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto mt-1">
                We’ve received your operational profile. A calendar invite and pre-audit brief have been dispatched to <span className="font-semibold text-slate-800">{email}</span> and WhatsApp at <span className="font-semibold text-slate-800">{phone}</span>.
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
                    {primaryBottleneck.includes('follow-up') ? 'Engine 01 (Lead Engine) + Engine 02 (Follow-Up Engine)' : 'Engine 05 (Onboarding Engine) + Engine 06 (Student Assistant)'}
                  </span>
                </div>
                <div>
                  <span className="font-semibold text-slate-900">Target Time Savings: </span>
                  <span className="text-emerald-600 font-semibold font-mono">15 - 25 hours per week</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-900">Lead Response Goal: </span>
                  <span className="font-mono">Under 90 seconds (24/7 coverage)</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="px-6 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
            >
              Return to Website
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
