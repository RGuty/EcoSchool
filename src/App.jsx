
import React from 'react';
import AppHeader from '@/components/AppHeader';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import BenefitsSection from '@/components/BenefitsSection';
import CtaSection from '@/components/CtaSection';
import AppFooter from '@/components/AppFooter';

function App() {
  return (
    <div className="app">
      <AppHeader />
      <HeroSection />
      <FeaturesSection />
      <BenefitsSection />
      <CtaSection />
      <AppFooter />
    </div>
  );
}

export default App;
