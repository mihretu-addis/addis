'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Star, CheckCircle, Smartphone, Cpu, Layers3 } from 'lucide-react';
import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import TechStack from '@/components/TechStack';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div id="home-wrapper" className="min-h-screen text-slate-800 dark:text-neutral-50 bg-blue-50/30 dark:bg-neutral-950 transition-colors duration-300">
      <main id="primary-main-content">
        <HeroSection />
        
        {/* Compact Services Highlights */}
        <section className="py-20 bg-white dark:bg-neutral-950 border-t border-blue-100 dark:border-neutral-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center md:text-left md:flex md:items-end md:justify-between mb-12">
              <div className="max-w-2xl space-y-4">
                <span className="text-xs uppercase font-mono font-bold tracking-wider text-blue-600 dark:text-blue-400">
                  {t('services.title')}
                </span>
                <h2 className="text-3xl sm:text-4xl font-sans font-extrabold tracking-tight text-slate-900 dark:text-neutral-50">
                  Engineering Digital Ecosystems
                </h2>
              </div>
              <Link 
                href="/services" 
                className="inline-flex items-center space-x-2 text-sm font-bold text-blue-600 dark:text-blue-400 mt-4 md:mt-0 hover:underline"
              >
                <span>View All Services & Odoo Customizations</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="p-6 sm:p-8 rounded-xl bg-gradient-to-br from-blue-50/30 to-blue-50/10 hover:from-blue-50/50 hover:to-blue-50/30 dark:bg-gradient-to-br dark:from-neutral-900 dark:to-neutral-900 border border-blue-100/60 hover:border-blue-500 dark:border-neutral-800/80 flex flex-col justify-between h-64 shadow-[0_8px_30px_rgb(0,53,128,0.015),0_1px_3px_rgb(0,0,0,0.01)] hover:shadow-[0_20px_40px_-8px_rgba(0,53,128,0.06)] dark:hover:border-blue-900/50 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 bottom-0 left-0 w-[3px] bg-transparent group-hover:bg-blue-600 transition-colors duration-300" />
                <div className="space-y-4">
                  <div className="p-3 bg-blue-50/40 dark:bg-neutral-800 text-blue-600 dark:text-blue-400 border border-blue-100/55 dark:border-neutral-700 rounded-xl w-12 h-12 flex items-center justify-center group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 group-hover:border-blue-200/50 transition-all duration-300">
                    <Smartphone className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-neutral-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{t('services.customApp')}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-neutral-350 leading-relaxed line-clamp-2">{t('services.customAppDesc')}</p>
                </div>
                <Link href="/services" className="text-xs font-bold text-blue-600 dark:text-blue-400 inline-flex items-center space-x-1.5 group/link">
                  <span>Learn more</span>
                  <ArrowRight className="h-3 w-3 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>

              {/* Card 2 */}
              <div className="p-6 sm:p-8 rounded-xl bg-gradient-to-br from-blue-50/30 to-blue-50/10 hover:from-blue-50/50 hover:to-blue-50/30 dark:bg-gradient-to-br dark:from-neutral-900 dark:to-neutral-900 border border-blue-100/60 hover:border-blue-500 dark:border-neutral-800/80 flex flex-col justify-between h-64 shadow-[0_8px_30px_rgb(0,53,128,0.015),0_1px_3px_rgb(0,0,0,0.01)] hover:shadow-[0_20px_40px_-8px_rgba(0,53,128,0.06)] dark:hover:border-blue-900/50 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 bottom-0 left-0 w-[3px] bg-transparent group-hover:bg-blue-600 transition-colors duration-300" />
                <div className="space-y-4">
                  <div className="p-3 bg-blue-50/40 dark:bg-neutral-800 text-blue-600 dark:text-blue-400 border border-blue-100/55 dark:border-neutral-700 rounded-xl w-12 h-12 flex items-center justify-center group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 group-hover:border-blue-200/50 transition-all duration-300">
                     <Cpu className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-neutral-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{t('services.aiImpl')}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-neutral-350 leading-relaxed line-clamp-2">{t('services.aiImplDesc')}</p>
                </div>
                <Link href="/services" className="text-xs font-bold text-blue-600 dark:text-blue-400 inline-flex items-center space-x-1.5 group/link">
                  <span>Learn more</span>
                  <ArrowRight className="h-3 w-3 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>

              {/* Card 3 */}
              <div className="p-6 sm:p-8 rounded-xl bg-gradient-to-br from-blue-50/30 to-blue-50/10 hover:from-blue-50/50 hover:to-blue-50/30 dark:bg-gradient-to-br dark:from-neutral-900 dark:to-neutral-900 border border-blue-100/60 hover:border-blue-500 dark:border-neutral-800/80 flex flex-col justify-between h-64 shadow-[0_8px_30px_rgb(0,53,128,0.015),0_1px_3px_rgb(0,0,0,0.01)] hover:shadow-[0_20px_40px_-8px_rgba(0,53,128,0.06)] dark:hover:border-blue-900/50 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 bottom-0 left-0 w-[3px] bg-transparent group-hover:bg-blue-600 transition-colors duration-300" />
                <div className="space-y-4">
                  <div className="p-3 bg-blue-50/40 dark:bg-neutral-800 text-blue-600 dark:text-blue-400 border border-blue-100/55 dark:border-neutral-700 rounded-xl w-12 h-12 flex items-center justify-center group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 group-hover:border-blue-200/50 transition-all duration-300">
                    <Layers3 className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-neutral-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{t('services.erpImpl')}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-neutral-350 leading-relaxed line-clamp-2">{t('services.erpImplDesc')}</p>
                </div>
                <Link href="/services" className="text-xs font-bold text-blue-600 dark:text-blue-400 inline-flex items-center space-x-1.5 group/link">
                  <span>Learn more</span>
                  <ArrowRight className="h-3 w-3 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic Interactive Tech Stack Bento Grid */}
        <TechStack />

        {/* High-Impact Success Summary / Portfolio teaser */}
        <section className="py-20 bg-blue-50/10 dark:bg-neutral-950 border-t border-slate-100 dark:border-neutral-900/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 dark:from-neutral-900 dark:to-neutral-950 border-2 border-blue-600 text-white p-8 sm:p-12 md:p-16 rounded-2xl relative overflow-hidden shadow-xl">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,#fff_0%,transparent_100%)]" />
              
              <div className="relative z-10 max-w-2xl space-y-6">
                <span className="text-xs uppercase font-mono font-bold tracking-widest text-amber-400">
                  Featured Client Engagements
                </span>
                <h2 className="text-3xl sm:text-4xl font-sans font-extrabold tracking-tight pt-1">
                  High-Performance Software Delivered On-Budget & On-Time.
                </h2>
                <p className="text-sm sm:text-base text-blue-100 dark:text-neutral-400 leading-relaxed font-sans">
                  From sub-second latency rental ecosystems supporting Telebirr & Visa, to freight logistics fleet orchestrations, we deploy reliable, production-ready enterprise technology.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/portfolio" 
                    className="px-6 py-3 bg-white hover:bg-slate-150 text-blue-600 text-sm font-bold rounded flex items-center justify-center space-x-2 transition-all shadow-md"
                  >
                    <span>{t('hero.ctaSecondary')}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link 
                    href="/why-us" 
                    className="px-6 py-3 bg-blue-700/50 hover:bg-blue-700 text-white text-sm font-bold border border-white/20 rounded flex items-center justify-center transition-all"
                  >
                    <span>Read Partner Philosophy</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
