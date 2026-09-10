import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ServicesSection from '../components/ServicesSection';
import ProjectEstimator from '../components/ProjectEstimator';
import ProjectsSection from '../components/ProjectsSection';
import TrustMatrixSection from '../components/TrustMatrixSection';
import ProcessTimelineSection from '../components/ProcessTimelineSection';
import WhySakhamSection from '../components/WhySakhamSection';
import AboutSection from '../components/AboutSection';
import FaqSection from '../components/FaqSection';
import ContactSection from '../components/ContactSection';

export default function HomePage() {
  const [selectedScope, setSelectedScope] = useState('');

  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <ServicesSection />
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
