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
        {/* 2. Hero Section with Interactive 9-Stage Workflow Visualizer */}
        <HeroSection onOpenAudit={handleOpenAudit} />

        {/* 3. Trust / Proof Bar */}
        <TrustProofBar />

        {/* 4. Business Problems Section */}
        <ProblemSection />

        {/* 5. Coaching AI Operating System (8 Connected Engines) */}
        <FlagshipOperatingSystem />

        {/* 6. Productized AI Systems */}
        <ProductizedSystems onOpenAudit={handleOpenAudit} />

        {/* 7. How It Works / Methodology (MAP → BUILD → CONNECT → SCALE) */}
        <MethodologySection onOpenAudit={handleOpenAudit} />

        {/* 8. Workflow & System Architecture Blueprint */}
        <ArchitectureSection />

        {/* 9. Signature Audit (AI Growth & Operations Audit + Opportunity Map) */}
        <SignatureAuditSection onOpenAudit={handleOpenAudit} />

        {/* 10. Case Studies Section (Pilot, Internal Build, Prototype) */}
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
