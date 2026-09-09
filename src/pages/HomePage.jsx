import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import WhySakhamSection from '../components/WhySakhamSection';
import ProjectsSection from '../components/ProjectsSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';

/**
 * HomePage — assembles all sections of the Team SAKSHAM home screen.
 * Mirrors the Stitch design: Hero → Services → Why SAKSHAM → Projects → About → Contact
 */
const HomePage = () => {
  return (
    <div className="flex flex-col w-full text-on-surface">
      <HeroSection />
      <ServicesSection />
      <WhySakhamSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
