import React, { useState, useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import FounderVideoSection from '../components/FounderVideoSection';
import ServicesSection from '../components/ServicesSection';
import BeforeAfterSection from '../components/BeforeAfterSection';
import LiveFeedbackSection from '../components/LiveFeedbackSection';
import ProjectEstimator from '../components/ProjectEstimator';
import TrustMatrixSection from '../components/TrustMatrixSection';
import WhySakhamSection from '../components/WhySakhamSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';

export default function HomePage() {
  const [selectedScope, setSelectedScope] = useState('');

  // High-performance scroll animation engine
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Optional: stop observing once it has animated in
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    // Give React a tiny tick to paint the DOM, then grab all animated elements
    setTimeout(() => {
      document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        observer.observe(el);
      });
    }, 100);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col w-full bg-[#121316] text-[#F0F1F3]">
      <HeroSection />
      <FounderVideoSection />
      <ServicesSection />
      <BeforeAfterSection />
      <LiveFeedbackSection />
      <ProjectEstimator onSelectScope={setSelectedScope} />
      <TrustMatrixSection />
      <WhySakhamSection />
      <AboutSection />
      <ContactSection selectedScope={selectedScope} />
    </div>
  );
}
