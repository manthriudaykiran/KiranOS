import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { TrustProofBar } from './components/TrustProofBar';
import { ProblemSection } from './components/ProblemSection';
import { FlagshipOperatingSystem } from './components/FlagshipOperatingSystem';
import { ProductizedSystems } from './components/ProductizedSystems';
import { MethodologySection } from './components/MethodologySection';
import { ArchitectureSection } from './components/ArchitectureSection';
import { SignatureAuditSection } from './components/SignatureAuditSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { DifferentiationSection } from './components/DifferentiationSection';
import { IntegrationsSection } from './components/IntegrationsSection';
import { RoiCalculatorSection } from './components/RoiCalculatorSection';
import { FounderSection } from './components/FounderSection';
import { DeliveryPathsSection } from './components/DeliveryPathsSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { AuditBookingModal } from './components/AuditBookingModal';
import { RecruitmentScorecardModal } from './components/RecruitmentScorecardModal';
import { ImplementationGuideModal } from './components/ImplementationGuideModal';
import { Sparkles, ArrowRight, X } from 'lucide-react';

export default function App() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [isScorecardOpen, setIsScorecardOpen] = useState(false);
  const [isImplementationGuideOpen, setIsImplementationGuideOpen] = useState(false);
  const [showTopBanner, setShowTopBanner] = useState(true);

  // Auto-open scorecard if arrived via feature link (hash or query)
  useEffect(() => {
    const handleUrlCheck = () => {
      const hash = window.location.hash.toLowerCase();
      const search = window.location.search.toLowerCase();
      if (
        hash === '#scorecard' || 
        hash === '#assessment' || 
        search.includes('assessment=true') || 
        search.includes('scorecard=true')
      ) {
        setIsScorecardOpen(true);
      }
    };

    handleUrlCheck();
    window.addEventListener('hashchange', handleUrlCheck);
    return () => window.removeEventListener('hashchange', handleUrlCheck);
  }, []);

  const handleOpenAudit = () => {
    setIsAuditModalOpen(true);
  };

  const handleCloseAudit = () => {
    setIsAuditModalOpen(false);
  };

  const handleOpenScorecard = () => {
    setIsScorecardOpen(true);
  };

  const handleCloseScorecard = () => {
    setIsScorecardOpen(false);
  };

  const handleOpenImplementationGuide = () => {
    setIsImplementationGuideOpen(true);
  };

  const handleCloseImplementationGuide = () => {
    setIsImplementationGuideOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F6F9FC] text-[#111827] font-['Inter'] selection:bg-[#2563EB] selection:text-white">
      
      {/* Top Lead Magnet Announcement Ribbon */}
      {showTopBanner && (
        <aside 
          aria-label="Free Diagnostic Announcement"
          className="bg-gradient-to-r from-[#071426] via-[#102f58] to-[#071426] text-white border-b border-cyan-500/20 py-2.5 px-4 text-xs font-medium relative z-50 text-center"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 sm:gap-3 flex-wrap pr-8">
            <span className="flex items-center gap-1.5 text-[#22D3EE] font-bold font-mono tracking-wide">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span>FREE ASSESSMENT</span>
            </span>
            <span className="hidden sm:inline text-slate-300">·</span>
            <span className="text-slate-200">
              How efficient is your IT recruitment operation? Find where your agency loses recruiter hours.
            </span>
            <button
              onClick={handleOpenScorecard}
              className="inline-flex items-center gap-1 text-[#22D3EE] hover:text-white font-bold underline underline-offset-4 cursor-pointer"
            >
              <span>Get Your Score (/100) & 3 Priorities</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          <button
            onClick={() => setShowTopBanner(false)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white p-1 rounded transition-colors"
            aria-label="Dismiss banner"
          >
            <X className="w-4 h-4" />
          </button>
        </aside>
      )}

      {/* 1. Sticky Navigation */}
      <Navigation 
        onOpenAudit={handleOpenAudit} 
        onOpenScorecard={handleOpenScorecard}
        onOpenImplementationGuide={handleOpenImplementationGuide}
      />

      <main>
        {/* 2. Hero Section with Interactive Recruitment Workflow Visualizer */}
        <HeroSection 
          onOpenAudit={handleOpenAudit} 
          onOpenScorecard={handleOpenScorecard}
        />

        {/* 3. Trust / Proof Bar */}
        <TrustProofBar />

        {/* 4. Recruitment Operational Bottlenecks Section */}
        <ProblemSection />

        {/* 5. AI Recruitment Operating System (12 Connected Modules) */}
        <FlagshipOperatingSystem />

        {/* 6. Productized Recruitment AI Systems */}
        <ProductizedSystems onOpenAudit={handleOpenAudit} />

        {/* 7. How It Works / Methodology (MAP → BUILD → CONNECT → SCALE) */}
        <MethodologySection onOpenAudit={handleOpenAudit} />

        {/* 8. Recruitment Workflow & System Architecture Blueprint */}
        <ArchitectureSection />

        {/* 9. AI Recruitment Workflow Audit + Opportunity Map */}
        <SignatureAuditSection 
          onOpenAudit={handleOpenAudit} 
          onOpenScorecard={handleOpenScorecard}
        />

        {/* 10. Recruitment Prototypes & Systems Proof */}
        <CaseStudiesSection onOpenAudit={handleOpenAudit} />

        {/* 11. Why Us / Differentiation (Agency vs KiranOS Implementation Partner) */}
        <DifferentiationSection onOpenAudit={handleOpenAudit} />

        {/* 12. Integrations Ecosystem */}
        <IntegrationsSection />

        {/* 13. Business Outcomes & ROI / Operations Time Calculator */}
        <RoiCalculatorSection onOpenAudit={handleOpenAudit} />

        {/* 14. Founder Section (Built by an Engineer: Uday Kiran) */}
        <FounderSection onOpenAudit={handleOpenAudit} />

        {/* 15. Two Delivery Paths (Done For You vs Build With You) */}
        <DeliveryPathsSection onOpenAudit={handleOpenAudit} />

        {/* 16. Frequently Asked Questions */}
        <FaqSection onOpenAudit={handleOpenAudit} />

        {/* 17. Final High-Converting Midnight Navy CTA */}
        <FinalCtaSection 
          onOpenAudit={handleOpenAudit} 
          onOpenScorecard={handleOpenScorecard}
        />
      </main>

      {/* 18. Enterprise Footer */}
      <Footer 
        onOpenAudit={handleOpenAudit} 
        onOpenScorecard={handleOpenScorecard}
        onOpenImplementationGuide={handleOpenImplementationGuide}
      />

      {/* Interactive Audit Booking Modal */}
      <AuditBookingModal
        isOpen={isAuditModalOpen}
        onClose={handleCloseAudit}
      />

      {/* Interactive Recruitment Workflow Efficiency Scorecard (Lead Magnet) */}
      <RecruitmentScorecardModal
        isOpen={isScorecardOpen}
        onClose={handleCloseScorecard}
        onOpenAudit={handleOpenAudit}
        onOpenImplementationGuide={handleOpenImplementationGuide}
      />

      {/* Paid AI Workflow Implementation Guide Modal */}
      <ImplementationGuideModal
        isOpen={isImplementationGuideOpen}
        onClose={handleCloseImplementationGuide}
        onOpenAudit={handleOpenAudit}
      />
    </div>
  );
}
