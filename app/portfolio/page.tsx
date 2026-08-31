'use client';

import React from 'react';
import PortfolioSection from '@/components/PortfolioSection';

export default function PortfolioPage() {
  return (
    <div id="portfolio-page-wrap" className="pt-24 md:pt-28 pb-12 bg-blue-50/30 dark:bg-neutral-950 min-h-screen">
      <PortfolioSection />
    </div>
  );
}
