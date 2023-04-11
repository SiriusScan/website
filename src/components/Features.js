// src/components/Features.js
import React from 'react';
import FeaturesIntroSection from './sections/FeaturesIntroSection';
import FeaturesHighlightsSection from './sections/FeaturesHighlightsSection';
import BenefitsSection from './sections/BenefitsSection';
import FooterSection from './sections/FooterSection';


const Features = () => {
  return (
    <div>
      <FeaturesIntroSection />
      <FeaturesHighlightsSection />
      <BenefitsSection />
      <FooterSection />
      
      {/* Add more sections here */}
    </div>
  );
};

export default Features;
