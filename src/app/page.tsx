'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AdmissionsMarquee from '@/components/AdmissionsMarquee';
import TrustStrip from '@/components/TrustStrip';
import WhyVidhyanagari from '@/components/WhyVidhyanagari';
import ProgramExplorer from '@/components/ProgramExplorer';
import FeaturedPrograms from '@/components/FeaturedPrograms';
import CampusExperience from '@/components/CampusExperience';
import EducationAndSkills from '@/components/EducationAndSkills';
import CampusLife from '@/components/CampusLife';
import FaqSection from '@/components/FaqSection';
import AdmissionsSection from '@/components/AdmissionsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import EnquiryModal from '@/components/EnquiryModal';
import BrochureModal from '@/components/BrochureModal';
import ConversionWidgets from '@/components/ConversionWidgets';

export default function Home() {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [brochureModalOpen, setBrochureModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<string>('');

  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const handleOpenEnquiry = (programName?: string) => {
    if (programName) {
      setSelectedProgram(programName);
    }
    setEnquiryModalOpen(true);
  };

  const handleCloseEnquiry = () => {
    setEnquiryModalOpen(false);
  };

  const handleOpenBrochure = () => {
    setBrochureModalOpen(true);
  };

  const handleCloseBrochure = () => {
    setBrochureModalOpen(false);
  };

  const handleProgramSelectFromExplorer = (programName: string) => {
    setSelectedProgram(programName);
    setEnquiryModalOpen(true);
  };

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    const el = document.getElementById('programs');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen">
      {/* 1. Sticky Navigation Header with Official Logo & Actions */}
      <Header
        onOpenEnquiry={handleOpenEnquiry}
        onOpenBrochure={handleOpenBrochure}
      />

      {/* 2. Hero Section with Quick Lead Capture Box */}
      <Hero
        onOpenEnquiry={handleOpenEnquiry}
        onOpenBrochure={handleOpenBrochure}
      />

      {/* 3. Dynamic Admissions Announcement Marquee */}
      <AdmissionsMarquee />

      {/* 4. Trust & Institutional Heritage Strip */}
      <TrustStrip />

      {/* 5. Why Vidhyanagari Pillars */}
      <WhyVidhyanagari />

      {/* 6. Comprehensive Programs Explorer with Live Search & Tabs */}
      <ProgramExplorer
        onSelectProgram={handleProgramSelectFromExplorer}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      {/* 7. Curated Flagship Featured Programs (Dark Mode Showcase) */}
      <FeaturedPrograms onSelectProgram={handleProgramSelectFromExplorer} />

      {/* 8. Riverside Campus & Infrastructure Experience + Real Photo Gallery */}
      <CampusExperience />

      {/* 9. Education & Practical Skills Philosophy (Learn, Develop, Grow) */}
      <EducationAndSkills />

      {/* 10. Campus Life & Community Ethos */}
      <CampusLife />

      {/* 11. Frequently Asked Questions (FAQ Accordion) */}
      <FaqSection />

      {/* 12. Admissions Conversion & Direct Inquiry Form */}
      <AdmissionsSection
        selectedProgramPrefill={selectedProgram}
        onOpenEnquiryModal={() => handleOpenEnquiry()}
      />

      {/* 13. Campus Contact & Regional Transit */}
      <ContactSection onOpenEnquiry={() => handleOpenEnquiry()} />

      {/* 14. Academic Footer with Official Logo & Links */}
      <Footer onSelectCategory={handleCategorySelect} />

      {/* Desktop Floating Right Tab & Mobile Sticky Action Bar */}
      <ConversionWidgets onOpenEnquiry={() => handleOpenEnquiry()} />

      {/* Interactive Global Enquiry Modal */}
      <EnquiryModal
        isOpen={enquiryModalOpen}
        prefilledProgram={selectedProgram}
        onClose={handleCloseEnquiry}
      />

      {/* Interactive Brochure Download Modal */}
      <BrochureModal
        isOpen={brochureModalOpen}
        onClose={handleCloseBrochure}
      />
    </main>
  );
}
