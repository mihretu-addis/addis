'use client';

import React from 'react';
import WhyUsSection from '@/components/WhyUsSection';
import TechStack from '@/components/TechStack';

export default function WhyUsPage() {
  return (
    <div id="why-us-page-wrap" className="pt-24 md:pt-28 pb-12 bg-blue-50/30 dark:bg-neutral-950 min-h-screen space-y-12">
      <WhyUsSection />
      <TechStack />
    </div>
  );
}
