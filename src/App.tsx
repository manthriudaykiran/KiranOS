import React, { useState } from 'react';
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

export default function App() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  const handleOpenAudit = () => {
    setIsAuditModalOpen(true);
  };

  const handleCloseAudit = () => {
    setIsAuditModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F6F9FC] text-[#111827] font-['Inter'] selection:bg-[#2563EB] selection:text-white">
      {/* 1. Sticky Navigation */}
      <Navigation onOpenAudit={handleOpenAudit} />

      <main>
        {/* 2. Hero Section with Interactive Recruitment Workflow Visualizer */}
        <HeroSection onOpenAudit={handleOpenAudit} />

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
        <SignatureAuditSection onOpenAudit={handleOpenAudit} />

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
        <FinalCtaSection onOpenAudit={handleOpenAudit} />
      </main>

      {/* 18. Enterprise Footer */}
      <Footer onOpenAudit={handleOpenAudit} />

      {/* Interactive Audit Booking Modal */}
      <AuditBookingModal
        isOpen={isAuditModalOpen}
        onClose={handleCloseAudit}
      />
    </div>
  );
}
