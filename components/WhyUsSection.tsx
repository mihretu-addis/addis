'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Lightbulb, Rocket, ShieldAlert, Award, Compass, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhyUsSection() {
  const { t } = useTranslation();

  const points = [
    {
      id: "why-agile",
      icon: Lightbulb,
      title: t('whyUs.item1Title'),
      desc: t('whyUs.item1Desc'),
      accent: "text-amber-500 bg-amber-500/10 border-amber-500/15",
      borderLeftClass: "border-l-amber-600 dark:border-l-amber-500"
    },
    {
      id: "why-scalability",
      icon: Rocket,
      title: t('whyUs.item2Title'),
      desc: t('whyUs.item2Desc'),
      accent: "text-indigo-500 bg-indigo-500/10 border-indigo-500/15",
      borderLeftClass: "border-l-indigo-500 dark:border-l-indigo-400"
    },
    {
      id: "why-security",
      icon: ShieldAlert,
      title: t('whyUs.item3Title'),
      desc: t('whyUs.item3Desc'),
      accent: "text-red-500 bg-red-500/10 border-red-500/15",
      borderLeftClass: "border-l-red-500 dark:border-l-red-400"
    },
    {
      id: "why-local-global",
      icon: Compass,
      title: t('whyUs.item4Title'),
      desc: t('whyUs.item4Desc'),
      accent: "text-blue-500 bg-blue-500/10 border-blue-500/15",
      borderLeftClass: "border-l-blue-500 dark:border-l-blue-400"
    }
  ];

  return (
    <section
      id="why-us"
      className="py-20 md:py-28 bg-slate-50 dark:bg-neutral-900 transition-colors duration-300 relative border-t border-slate-200/40 dark:border-neutral-800/40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
          
          {/* Left panel */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 rounded-full text-xs font-semibold">
              <TrendingUp className="h-3 w-3 text-blue-600" />
              <span>{t('whyUs.philosophy')}</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold tracking-tight text-slate-800 dark:text-neutral-50 leading-tight">
              {t('whyUs.title')}
            </h2>
            
            <p className="text-base text-slate-500 dark:text-neutral-300 font-sans leading-relaxed">
              {t('whyUs.subtitle')}
            </p>

            {/* Micro branding visual */}
            <motion.div 
              whileHover={{ scale: 1.01, y: -2 }}
              className="p-5 rounded-2xl bg-gradient-to-br from-blue-50/30 to-blue-50/10 hover:from-blue-50/50 hover:to-blue-50/30 dark:bg-gradient-to-br dark:from-neutral-950 dark:to-neutral-950 dark:hover:from-neutral-900 dark:hover:to-neutral-900/80 border-l-4 border-l-amber-500 dark:border-l-amber-500 border-y border-r border-blue-200/80 dark:border-y-neutral-800 dark:border-r-neutral-800 hover:border-t-amber-500/50 hover:border-r-amber-500/50 hover:border-b-amber-500/50 dark:hover:border-y-amber-500/30 dark:hover:border-r-amber-500/30 shadow-[0_8px_30px_rgb(0,53,128,0.015),0_1px_3px_rgb(0,0,0,0.01)] hover:shadow-[0_20px_45px_-8px_rgba(0,53,128,0.05)] flex items-center space-x-4 transition-all duration-350"
            >
              <Award className="h-10 w-10 text-amber-500 shrink-0 animate-pulse" />
              <div>
                <span className="block text-sm font-bold text-slate-900 dark:text-neutral-50">{t('whyUs.highlightTitle')}</span>
                <span className="block text-xs text-slate-600 dark:text-neutral-300">{t('whyUs.highlightDesc')}</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right grid panel (4 points) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {points.map((pt, index) => {
              const IconComponent = pt.icon;
              
              return (
                <motion.div
                  id={pt.id}
                  key={pt.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -6, scale: 1.01 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className={`p-6 bg-gradient-to-br from-blue-50/30 to-blue-50/10 hover:from-blue-50/50 hover:to-blue-50/30 dark:bg-gradient-to-br dark:from-neutral-950 dark:to-neutral-950 dark:hover:from-neutral-900 dark:hover:to-neutral-900/80 border-l-4 ${pt.borderLeftClass} border-y border-r border-blue-200/80 dark:border-y-neutral-800/80 dark:border-r-neutral-800/80 rounded-xl hover:border-t-blue-500 hover:border-r-blue-500 hover:border-b-blue-500 dark:hover:border-t-blue-800 dark:hover:border-r-blue-800 dark:hover:border-b-blue-800 shadow-[0_8px_30px_rgb(0,53,128,0.012),0_1px_3px_rgb(0,0,0,0.01)] hover:shadow-[0_20px_45px_-8px_rgba(0,53,128,0.055)] transition-all duration-300 group overflow-hidden relative`}
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-blue-400/5 rounded-bl-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className={`p-3 rounded-xl border w-fit ${pt.accent} group-hover:scale-108 group-hover:rotate-6 transition-transform duration-300`}>
                    <IconComponent className="h-5 w-5" />
                  </div>
                  
                  <h3 className="text-base sm:text-lg font-bold text-slate-800 dark:text-neutral-50 mt-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors font-sans">
                    {pt.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-neutral-200 font-sans leading-relaxed mt-2 p-0">
                    {pt.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
