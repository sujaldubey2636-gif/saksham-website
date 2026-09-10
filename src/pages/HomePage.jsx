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

/**
 * HomePage — High-trust psychological customer experience for Team SAKSHAM.
 * Narrative progression:
 * 1. Hero (Clear outcome-focused value proposition + live availability)
 * 2. Proof & Social Validation (Metrics banner + grounded client outcomes)
 * 3. Services (Modular Growth Engines)
 * 4. Interactive Estimator (Customer empowerment & timeline clarity)
 * 5. Concept Projects (Demonstrated engineering craft)
 * 6. Trust Matrix (Radical transparency vs agencies & freelancers)
 * 7. Process Roadmap (Demystifying the 14-day sprint)
 * 8. Triple Guarantee (Eliminating buyer anxiety)
 * 9. Founder Story (Human connection & values)
 * 10. FAQs (Overcoming final objections)
 * 11. Contact & Discovery (Frictionless conversion)
 */
const HomePage = () => {
  const [selectedScope, setSelectedScope] = useState('');

  const handleSelectScope = (scopeSummary) => {
    setSelectedScope(scopeSummary);
  };

  return (
    <div className="flex flex-col w-full text-on-surface">
      <HeroSection />
      <TestimonialsSection />
      <ServicesSection />
      <ProjectEstimator onSelectScope={handleSelectScope} />
      <ProjectsSection />
      <TrustMatrixSection />
      <ProcessTimelineSection />
      <WhySakhamSection />
      <AboutSection />
      <FaqSection />
      <ContactSection selectedScope={selectedScope} />
    </div>
  );
};

export default HomePage;
