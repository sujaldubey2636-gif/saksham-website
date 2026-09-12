import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import FounderVideoSection from '../components/FounderVideoSection';
import ServicesSection from '../components/ServicesSection';
import BeforeAfterSection from '../components/BeforeAfterSection';
import ProjectsSection from '../components/ProjectsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ProjectEstimator from '../components/ProjectEstimator';
import ProcessTimelineSection from '../components/ProcessTimelineSection';
import TrustMatrixSection from '../components/TrustMatrixSection';
import WhySakhamSection from '../components/WhySakhamSection';
import AboutSection from '../components/AboutSection';
import FaqSection from '../components/FaqSection';
import ContactSection from '../components/ContactSection';

export default function HomePage() {
  const [selectedScope, setSelectedScope] = useState('');

  return (
    <div className="flex flex-col w-full bg-[#121316] text-[#F0F1F3]">
      <HeroSection />
      <FounderVideoSection />
      <ServicesSection />
      <BeforeAfterSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ProjectEstimator onSelectScope={setSelectedScope} />
      <ProcessTimelineSection />
      <TrustMatrixSection />
      <WhySakhamSection />
      <AboutSection />
      <FaqSection />
      <ContactSection selectedScope={selectedScope} />
    </div>
  );
}
