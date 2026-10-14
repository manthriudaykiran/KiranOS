import React, { useState } from 'react';
import { 
  X, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  Printer, 
  RotateCcw, 
  Mail, 
  Calendar, 
  FileText, 
  ShieldCheck, 
  Sparkles,
  BarChart3,
  HelpCircle,
  ExternalLink
} from 'lucide-react';
import { 
  CATEGORIES_DATA, 
  ADVICE_DATA, 
  BAND_DESCRIPTIONS, 
  calculateScorecardResult, 
  ScorecardResult 
} from '../data/scorecardData';

interface RecruitmentScorecardModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenAudit: () => void;
  onOpenImplementationGuide: () => void;
}

export const RecruitmentScorecardModal: React.FC<RecruitmentScorecardModalProps> = ({
  isOpen,
  onClose,
  onOpenAudit,
  onOpenImplementationGuide
}) => {
  const [step, setStep] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [validationMsg, setValidationMsg] = useState<string>('');
  const [result, setResult] = useState<ScorecardResult | null>(null);

  // Lead Form States
  const [showLeadForm, setShowLeadForm] = useState<boolean>(false);
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [jobTitle, setJobTitle] = useState<string>('Founder / Owner');
  const [recruiters, setRecruiters] = useState<string>('5–10');
  const [ats, setAts] = useState<string>('Bullhorn');
  const [website, setWebsite] = useState<string>('');
  const [challenge, setChallenge] = useState<string>('Candidate follow-up');
  const [auditInterest, setAuditInterest] = useState<string>('Yes');
  const [newsletterConsent, setNewsletterConsent] = useState<boolean>(false);
  const [reportConsent, setReportConsent] = useState<boolean>(true);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const currentCategory = CATEGORIES_DATA[step];

  const handleOptionChange = (questionId: string, val: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: val }));
    setValidationMsg('');
  };

  const handleNext = () => {
    // Validate current category
    const missing = [1, 2, 3].some((i) => !Number.isInteger(answers[currentCategory.key + i]));
    if (missing) {
      setValidationMsg('Please answer all three questions in this area to continue.');
      return;
    }

    if (step < CATEGORIES_DATA.length - 1) {
      setStep((prev) => prev + 1);
      setValidationMsg('');
    } else {
      // Calculate
      try {
        const computed = calculateScorecardResult(answers);
        setResult(computed);
      } catch (e) {
        setValidationMsg('Please ensure all 15 questions are answered.');
      }
    }
  };

  const handlePrevious = () => {
    if (step > 0) {
      setStep((prev) => prev - 1);
      setValidationMsg('');
    }
  };

  const handleRestart = () => {
    setAnswers({});
    setResult(null);
    setStep(0);
    setShowLeadForm(false);
    setFormSubmitted(false);
    setValidationMsg('');
  };

  const handlePrint = () => {
    window.print();
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!result) return;

    const leadPayload = {
      fullName,
      email,
      company,
      jobTitle,
      recruiters,
      ats,
      website,
      challenge,
      auditInterest,
      newsletterConsent,
      reportConsent,
      score: result.score,
      band: result.band,
      priorities: result.priorities,
      submittedAt: new Date().toISOString()
    };

    // Store in localStorage for persistence
    try {
      localStorage.setItem('kiranforge_scorecard_lead', JSON.stringify(leadPayload));
    } catch (_) {}

    setFormSubmitted(true);
  };

  const bandColors: Record<string, { bg: string; text: string; border: string }> = {
    'Critical Friction': { bg: 'bg-rose-50', text: 'text-rose-700', border: 'border-rose-200' },
    'High Improvement Potential': { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200' },
    'Developing Operations': { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
    'Well-Structured Operations': { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200' },
    'Highly Optimized Operations': { bg: 'bg-emerald-100', text: 'text-emerald-800', border: 'border-emerald-300' }
  };

  const currentBandStyle = result ? bandColors[result.band] : bandColors['Developing Operations'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-fadeIn print:p-0 print:bg-white">
      <div className="bg-white border border-slate-200 rounded-3xl max-w-3xl w-full p-6 sm:p-9 shadow-2xl relative my-auto max-h-[94vh] overflow-y-auto print:max-h-none print:shadow-none print:border-none print:p-0">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-100 transition-colors print:hidden"
          aria-label="Close Scorecard"
        >
          <X className="w-5 h-5" />
        </button>

        {!result ? (
          /* ================= STEP-BY-STEP ASSESSMENT ================= */
          <div className="space-y-6">
            {/* Header Banner */}
            <div className="bg-[#071426] text-white p-6 rounded-2xl relative overflow-hidden border border-slate-800">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#2563EB]/20 rounded-full blur-2xl pointer-events-none" />
              
              <div className="relative z-10 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#22D3EE] bg-[#22D3EE]/10 px-2.5 py-0.5 rounded border border-[#22D3EE]/30">
                    KiranForge / Free Diagnostic
                  </span>
                  <span className="text-[11px] text-slate-400">· 15 Questions · 5 Workflow Areas</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold font-['Plus_Jakarta_Sans'] leading-tight">
                  Recruitment Workflow Efficiency Scorecard
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                  Discover where your IT staffing firm is losing recruiter time, which workflows need attention, and what to improve first.
                </p>
              </div>
            </div>

            {/* Step & Category Info */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono font-bold text-[#2563EB]">
                <span>AREA {step + 1} OF 5</span>
                <span className="text-slate-400">{Object.keys(answers).length} of 15 answered</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#111827] font-['Plus_Jakarta_Sans']">
                {currentCategory.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                {currentCategory.intro}
              </p>

              {/* Progress Bar */}
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden mt-3">
                <div 
                  className="h-full bg-gradient-to-r from-[#2563EB] to-[#22D3EE] transition-all duration-300 rounded-full"
                  style={{ width: `${((step + 1) / 5) * 100}%` }}
                />
              </div>
            </div>

            {/* Questions Container */}
            <div className="space-y-6 pt-2">
              {currentCategory.questions.map((q, idx) => (
                <div key={q.id} className="pt-4 border-t border-slate-100 first:border-t-0 first:pt-0 space-y-3">
                  <p className="text-xs sm:text-sm font-bold text-[#111827]">
                    <span className="text-[#2563EB] font-mono mr-1">{step * 3 + idx + 1}.</span> {q.question}
                  </p>

                  <div className="space-y-2">
                    {q.options.map((opt, optIdx) => {
                      const isSelected = answers[q.id] === optIdx;
                      return (
                        <label
                          key={optIdx}
                          onClick={() => handleOptionChange(q.id, optIdx)}
                          className={`flex items-start gap-3 p-3 rounded-xl border text-xs cursor-pointer transition-all ${
                            isSelected
                              ? 'bg-blue-50/80 border-[#2563EB] text-[#111827] font-medium shadow-2xs'
                              : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50/50'
                          }`}
                        >
                          <input
                            type="radio"
                            name={q.id}
                            value={optIdx}
                            checked={isSelected}
                            onChange={() => handleOptionChange(q.id, optIdx)}
                            className="mt-0.5 accent-[#2563EB]"
                          />
                          <span className="leading-relaxed">{opt}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Validation Message */}
            {validationMsg && (
              <p className="text-xs font-semibold text-rose-600 bg-rose-50 p-2.5 rounded-lg border border-rose-200">
                {validationMsg}
              </p>
            )}

            {/* Action Bar */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={handlePrevious}
                disabled={step === 0}
                className={`px-4 py-2 text-xs font-semibold rounded-xl border transition-colors ${
                  step === 0 
                    ? 'opacity-40 cursor-not-allowed border-slate-200 text-slate-400' 
                    : 'border-slate-300 text-slate-700 hover:bg-slate-50'
                }`}
              >
                ← Back
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="inline-flex items-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#2563EB] to-[#059669] hover:from-[#1D4ED8] hover:to-[#047857] rounded-xl transition-all shadow-md active:scale-[0.98]"
              >
                <span>{step === 4 ? 'See My Results & Priorities →' : 'Continue to Next Area →'}</span>
              </button>
            </div>
          </div>
        ) : (
          /* ================= DETAILED RESULTS SCREEN ================= */
          <div className="space-y-8">
            {/* Results Header Banner */}
            <div className="bg-[#071426] text-white p-6 sm:p-8 rounded-2xl relative overflow-hidden border border-slate-800">
              <div className="absolute top-0 right-0 w-72 h-72 bg-[#2563EB]/25 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#22D3EE] bg-[#22D3EE]/10 px-2.5 py-0.5 rounded border border-[#22D3EE]/30">
                    Diagnostic Completed
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold font-['Plus_Jakarta_Sans'] text-white mt-1">
                    Your Recruitment Workflow Efficiency Score
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-md">
                    Self-reported operational evaluation across job intake, candidate screening, engagement, ATS data, and governance.
                  </p>
                </div>

                <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl text-center min-w-[170px] shadow-lg">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-0.5">
                    Efficiency Score
                  </span>
                  <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-[#22D3EE] font-mono leading-none">
                    {result.score}
                    <span className="text-xl text-slate-400 font-sans font-normal">/100</span>
                  </div>
                  <span className={`inline-block mt-2 px-2.5 py-0.5 rounded text-[11px] font-bold border ${currentBandStyle.bg} ${currentBandStyle.text} ${currentBandStyle.border}`}>
                    {result.band}
                  </span>
                </div>
              </div>
            </div>

            {/* Band Description */}
            <div className={`p-4 rounded-xl border text-xs sm:text-sm leading-relaxed ${currentBandStyle.bg} ${currentBandStyle.text} ${currentBandStyle.border}`}>
              <strong>Assessment Finding: </strong>{BAND_DESCRIPTIONS[result.band]}
            </div>

            {/* Governance Warning if GOV3 is 0 */}
            {result.securityWarning && (
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-300 text-amber-900 text-xs sm:text-sm flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-amber-950 font-bold mb-0.5">
                    Governance Checkpoint:
                  </strong>
                  Your answers indicate that security and human-review controls may need attention before introducing AI into sensitive candidate workflows. Begin with access permissions, candidate consent, auditability, and clear human approval gates.
                </div>
              </div>
            )}

            {/* Workflow Category Breakdown Meters */}
            <div className="space-y-3">
              <h3 className="text-base font-bold text-[#111827] font-['Plus_Jakarta_Sans'] flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-[#2563EB]" />
                <span>5-Area Workflow Breakdown</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {CATEGORIES_DATA.map((cat) => {
                  const catScore = result.categories[cat.key];
                  return (
                    <div key={cat.key} className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-[#111827] truncate mr-2">{cat.title}</span>
                        <span className="font-mono font-bold text-[#2563EB]">{catScore}/100</span>
                      </div>
                      <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-[#2563EB] to-[#22D3EE] rounded-full"
                          style={{ width: `${catScore}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 3 Top Improvement Priorities */}
            <div className="space-y-4">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB]">
                  Tailored Action Plan
                </span>
                <h3 className="text-lg font-bold text-[#111827] font-['Plus_Jakarta_Sans'] mt-0.5">
                  Your 3 Highest-Priority Workflow Improvements
                </h3>
              </div>

              <div className="space-y-3">
                {result.priorities.map((key, idx) => {
                  const advice = ADVICE_DATA[key];
                  const catScore = result.categories[key];
                  const isEstablished = catScore >= 75;

                  return (
                    <div 
                      key={key}
                      className="border-l-4 border-[#2563EB] bg-[#F6F9FC] border-y border-r border-slate-200/80 rounded-r-2xl p-4 sm:p-5 space-y-2.5 shadow-2xs"
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-bold text-[#111827] font-['Plus_Jakarta_Sans']">
                          Priority {idx + 1}: {advice.name}
                        </h4>
                        <span className="text-[11px] font-mono text-[#2563EB] bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                          Score: {catScore}/100
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-700 pt-1">
                        <div>
                          <strong className="text-slate-900">Observation: </strong>
                          {isEstablished 
                            ? 'Your self-report suggests this area is relatively established; examine targeted optimization opportunities.'
                            : advice.finding}
                        </div>
                        <div>
                          <strong className="text-slate-900">Quick Win: </strong>
                          {advice.action}
                        </div>
                        <div>
                          <strong className="text-slate-900">Metric to Track: </strong>
                          <span className="font-mono text-slate-600">{advice.metric}</span>
                        </div>
                        <div>
                          <strong className="text-slate-900">Potential AI System: </strong>
                          <span className="font-semibold text-[#2563EB]">{advice.opportunity}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Disclaimer */}
            <p className="text-[11px] text-slate-500 bg-slate-50 p-3 rounded-xl border border-slate-200 leading-relaxed">
              * Self-reported operational planning tool. These scores reflect your team's answers and are not an independently audited benchmark or guaranteed financial projection.
            </p>

            {/* Action Buttons Hub */}
            <div className="pt-2 flex flex-wrap gap-2.5 print:hidden">
              <button
                type="button"
                onClick={() => setShowLeadForm(!showLeadForm)}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl transition-all shadow-sm"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{showLeadForm ? 'Hide Report Form' : 'Email My Detailed Scorecard Report →'}</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenAudit();
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-[#2563EB] to-[#059669] hover:from-[#1D4ED8] hover:to-[#047857] rounded-xl transition-all shadow-sm"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book My AI Workflow Discovery Call</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenImplementationGuide();
                }}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-800 bg-amber-50 hover:bg-amber-100 border border-amber-300 rounded-xl transition-all"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>Paid AI Workflow Implementation Guide</span>
              </button>

              <button
                type="button"
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl transition-colors"
              >
                <Printer className="w-3.5 h-3.5 text-slate-500" />
                <span>Print / Save PDF</span>
              </button>

              <button
                type="button"
                onClick={handleRestart}
                className="inline-flex items-center gap-1.5 px-3 py-2.5 text-xs font-medium text-slate-500 hover:text-slate-800"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Retake</span>
              </button>
            </div>

            {/* Optional Lead Form Section */}
            {showLeadForm && (
              <div className="bg-[#F6F9FC] border border-slate-200 rounded-2xl p-5 sm:p-7 space-y-4 pt-5 print:hidden">
                {!formSubmitted ? (
                  <form onSubmit={handleLeadSubmit} className="space-y-4">
                    <div>
                      <h4 className="text-base font-bold text-[#111827] font-['Plus_Jakarta_Sans']">
                        Receive Your Personalized Scorecard Report
                      </h4>
                      <p className="text-xs text-slate-500">
                        Share your details to request your official assessment report with detailed metric definitions. Marketing communications are optional.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="e.g. John Doe"
                          className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white"
                        />
                      </div>
                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">Work Email *</label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="john@staffingagency.com"
                          className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white"
                        />
                      </div>
                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">Company Name *</label>
                        <input
                          type="text"
                          required
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          placeholder="Apex IT Staffing"
                          className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white"
                        />
                      </div>
                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">Job Title *</label>
                        <select
                          value={jobTitle}
                          onChange={(e) => setJobTitle(e.target.value)}
                          className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white"
                        >
                          <option>Founder / Owner</option>
                          <option>CEO / President</option>
                          <option>Head of Recruiting</option>
                          <option>Operations Leader</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">Number of Recruiters *</label>
                        <select
                          value={recruiters}
                          onChange={(e) => setRecruiters(e.target.value)}
                          className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white"
                        >
                          <option>1–4</option>
                          <option>5–10</option>
                          <option>11–20</option>
                          <option>21–30</option>
                          <option>31–50</option>
                          <option>51+</option>
                        </select>
                      </div>
                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">Current ATS (Optional)</label>
                        <select
                          value={ats}
                          onChange={(e) => setAts(e.target.value)}
                          className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white"
                        >
                          <option>Bullhorn</option>
                          <option>Ceipal</option>
                          <option>JobDiva</option>
                          <option>Recruit CRM</option>
                          <option>Zoho Recruit</option>
                          <option>Other</option>
                          <option>None / Not sure</option>
                        </select>
                      </div>
                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">Company Website (Optional)</label>
                        <input
                          type="url"
                          value={website}
                          onChange={(e) => setWebsite(e.target.value)}
                          placeholder="https://..."
                          className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white"
                        />
                      </div>
                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">Biggest Challenge (Optional)</label>
                        <select
                          value={challenge}
                          onChange={(e) => setChallenge(e.target.value)}
                          className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white"
                        >
                          <option>Candidate follow-up</option>
                          <option>Screening & matching</option>
                          <option>ATS data / reporting</option>
                          <option>Job order intake</option>
                          <option>Multiple areas</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-slate-200 text-xs">
                      <label className="flex items-start gap-2 cursor-pointer text-slate-600">
                        <input
                          type="checkbox"
                          checked={newsletterConsent}
                          onChange={(e) => setNewsletterConsent(e.target.checked)}
                          className="mt-0.5 accent-[#2563EB]"
                        />
                        <span>I'd like occasional KiranForge recruitment operations and AI implementation insights. I can unsubscribe at any time.</span>
                      </label>
                      <label className="flex items-start gap-2 cursor-pointer text-slate-700 font-medium">
                        <input
                          type="checkbox"
                          required
                          checked={reportConsent}
                          onChange={(e) => setReportConsent(e.target.checked)}
                          className="mt-0.5 accent-[#2563EB]"
                        />
                        <span>I agree that KiranForge may use the contact details I provide to respond to my report request. *</span>
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="px-6 py-2.5 text-xs font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl transition-all shadow-sm"
                    >
                      Request My Official Report →
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-4 space-y-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 font-['Plus_Jakarta_Sans']">
                        Report Request Dispatched!
                      </h4>
                      <p className="text-xs text-slate-600 max-w-md mx-auto mt-0.5">
                        Your efficiency diagnostic report and custom priority worksheet have been sent to <span className="font-semibold text-slate-800">{email}</span>.
                      </p>
                    </div>
                    <div className="pt-2 flex justify-center gap-3">
                      <button
                        onClick={() => {
                          onClose();
                          onOpenAudit();
                        }}
                        className="px-5 py-2 text-xs font-semibold text-white bg-gradient-to-r from-[#2563EB] to-[#059669] rounded-xl shadow-xs"
                      >
                        Book Discovery Call
                      </button>
                      <button
                        onClick={() => {
                          onClose();
                          onOpenImplementationGuide();
                        }}
                        className="px-5 py-2 text-xs font-semibold text-slate-800 bg-white border border-slate-300 rounded-xl"
                      >
                        Explore Paid Implementation Guide
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
