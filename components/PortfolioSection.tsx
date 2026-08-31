'use client';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Building2, Truck, Car, ShoppingBag, Landmark, Monitor, ShieldCheck, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';

export default function PortfolioSection() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<'all' | 'enterprise' | 'logistics' | 'custom'>('all');

  const portfolioItems = [
    {
      id: "hotel-booking",
      icon: Building2,
      category: "enterprise",
      title: t('portfolio.item1.title'),
      isFeatured: true,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop",
      data: {
        vision: t('portfolio.item1.visionText'),
        solution: t('portfolio.item1.solutionText'),
        payment: t('portfolio.item1.paymentText')
      },
      tags: ["Next.js", "PostgreSQL", "Stripe", "Telebirr", "CBE Birr", "AWS"],
      borderLeftClass: "border-l-blue-600 dark:border-l-blue-500"
    },
    {
      id: "smart-logistics",
      icon: Truck,
      category: "logistics",
      title: t('portfolio.item2.title'),
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop",
      isFeatured: false,
      data: {
        vision: t('portfolio.item2.visionText'),
        solution: t('portfolio.item2.solutionText'),
        impact: t('portfolio.item2.impactText')
      },
      tags: ["FastAPI", "MongoDB", "Real-time GPS", "Cloud Run"],
      borderLeftClass: "border-l-indigo-500 dark:border-l-indigo-400"
    },
    {
      id: "ride-sharing",
      icon: Car,
      category: "logistics",
      title: t('portfolio.item3.title'),
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=600&auto=format&fit=crop",
      isFeatured: false,
      data: {
        solution: t('portfolio.item3.solutionText')
      },
      tags: ["Flutter", "Go (Golang)", "WebSockets", "Redis"],
      borderLeftClass: "border-l-sky-500 dark:border-l-sky-400"
    },
    {
      id: "intelligent-delivery",
      icon: ShoppingBag,
      category: "logistics",
      title: t('portfolio.item4.title'),
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=600&auto=format&fit=crop",
      isFeatured: false,
      data: {
        solution: t('portfolio.item4.solutionText')
      },
      tags: ["Python", "OpenStreetMap", "Route Optimization"],
      borderLeftClass: "border-l-teal-600 dark:border-l-teal-400"
    },
    {
      id: "odoo-erp",
      icon: Landmark,
      category: "enterprise",
      title: t('portfolio.item5.title'),
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
      isFeatured: false,
      data: {
        solution: t('portfolio.item5.solutionText')
      },
      tags: ["Odoo v17", "Python", "PostgreSQL", "ERP Custom Module"],
      borderLeftClass: "border-l-amber-500 dark:border-l-amber-400"
    },
    {
      id: "custom-websites",
      icon: Monitor,
      category: "custom",
      title: t('portfolio.item6.title'),
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600&auto=format&fit=crop",
      isFeatured: false,
      data: {
        solution: t('portfolio.item6.solutionText')
      },
      tags: ["React.js", "Directus", "SEO Engine", "Tailwind CSS"],
      borderLeftClass: "border-l-purple-500 dark:border-l-purple-400"
    }
  ];

  const filteredItems = activeTab === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeTab);

  const featuredProject = portfolioItems.find(item => item.isFeatured);
  const otherProjects = filteredItems.filter(item => !item.isFeatured);

  return (
    <section
      id="portfolio"
      className="py-20 md:py-28 bg-slate-50/60 dark:bg-neutral-900 transition-colors duration-300 relative border-t border-slate-200/40 dark:border-neutral-800/40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 sm:mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center space-x-1.5 text-xs font-semibold py-1 px-3 bg-blue-105 text-blue-700 dark:text-blue-300 rounded-full border border-blue-200 dark:border-blue-800">
              <ShieldCheck className="h-3 w-3 text-blue-600" />
              <span>{t('portfolio.badge')}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-sans font-extrabold tracking-tight text-slate-900 dark:text-neutral-50">
              {t('portfolio.title')}
            </h2>
            <p className="text-sm sm:text-base text-slate-550 dark:text-neutral-400">
              {t('portfolio.subtitle')}
            </p>
          </div>

          {/* Filtering Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-white/85 dark:bg-neutral-950/80 rounded-xl relative border border-slate-200/40 dark:border-neutral-800/80 shadow-sm shrink-0">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'enterprise', label: 'Enterprise & ERP' },
              { id: 'logistics', label: 'Logistics & Mobility' },
              { id: 'custom', label: 'Custom Portals' }
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  id={`tab-${tab.id}`}
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all relative select-none cursor-pointer ${
                    isActive
                      ? 'text-white font-extrabold'
                      : 'text-slate-600 dark:text-neutral-300 hover:text-slate-800 dark:hover:text-neutral-100'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-portfolio-indicator"
                      className="absolute inset-0 bg-blue-600 rounded-lg shadow-md shadow-blue-600/10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 1. FEATURED PROJECT (Next-Gen Hotel Ecosystem) */}
        {featuredProject && (activeTab === 'all' || activeTab === 'enterprise') && (
          <motion.div
            id={featuredProject.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-12 bg-gradient-to-br from-blue-50/30 to-blue-50/10 hover:from-blue-50/50 hover:to-blue-50/30 dark:bg-gradient-to-br dark:from-neutral-950 dark:to-neutral-950 dark:hover:from-neutral-900 dark:hover:to-neutral-900/80 rounded-2xl border-l-4 border-l-blue-600 dark:border-l-blue-500 border-y border-r border-blue-200/80 dark:border-y-neutral-800/80 dark:border-r-neutral-800/80 hover:border-t-blue-500 hover:border-r-blue-500 hover:border-b-blue-500 dark:hover:border-t-blue-800 dark:hover:border-r-blue-800 dark:hover:border-b-blue-800 p-6 md:p-10 shadow-[0_10px_40px_-10px_rgba(0,53,128,0.015),0_1px_3px_rgba(0,0,0,0.01)] hover:shadow-[0_25px_60px_-12px_rgba(0,53,128,0.065)] transition-all duration-300 overflow-hidden relative group"
          >
            {/* Custom glowing background circle */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[35%] h-[60%] rounded-full bg-blue-500/5 dark:bg-blue-500/10 blur-[90px] pointer-events-none group-hover:bg-blue-500/15 transition-all duration-500" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
              
              {/* Left text panel */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-amber-500/10 text-amber-700 dark:text-amber-400 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  <span>Flagship Project</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-sans font-extrabold text-slate-900 dark:text-neutral-50 group-hover:text-blue-600 transition-colors">
                  {featuredProject.title}
                </h3>

                {/* Subsections: Vision, Solution, Payments */}
                <div className="space-y-4">
                  <div className="space-y-1">
                    <p className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
                      <Check className="h-3 w-3 stroke-[3]" />
                      {t('portfolio.vision')}
                    </p>
                    <p className="text-sm sm:text-base text-slate-605 dark:text-neutral-200 font-sans leading-relaxed">
                      {featuredProject.data.vision}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <p className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
                      <Check className="h-3 w-3 stroke-[3]" />
                      {t('portfolio.solution')}
                    </p>
                    <p className="text-sm sm:text-base text-slate-605 dark:text-neutral-200 font-sans leading-relaxed">
                      {featuredProject.data.solution}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <p className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
                      <Check className="h-3 w-3 stroke-[3]" />
                      {t('portfolio.p_integration')}
                    </p>
                    <p className="text-sm sm:text-base text-slate-605 dark:text-neutral-200 font-sans leading-relaxed">
                      {featuredProject.data.payment}
                    </p>
                  </div>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {featuredProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-mono bg-blue-50/50 dark:bg-neutral-800 text-slate-500 dark:text-neutral-300 border border-blue-100/30 dark:border-neutral-700/50 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right decorative premium visual illustration with real image */}
              <div className="lg:col-span-5 h-[340px] sm:h-[380px] w-full rounded-xl bg-slate-50 dark:from-neutral-900 dark:to-neutral-950 border border-slate-100 dark:border-neutral-800/80 p-6 flex flex-col justify-between shadow-sm relative overflow-hidden">
                <Image 
                  src={featuredProject.image!}
                  alt={featuredProject.title}
                  fill
                  sizes="(max-w-768px) 100vw, 40vw"
                  className="object-cover opacity-10 group-hover:opacity-20 transition-all duration-700 pointer-events-none"
                  referrerPolicy="no-referrer"
                />
                
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center space-x-2">
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                    </span>
                    <span className="text-[10px] font-mono font-bold text-slate-700">Live booking_core_engine</span>
                  </div>
                  <Building2 className="h-5 w-5 text-blue-600" />
                </div>

                {/* Simulated booking calendar dashboard interface representation */}
                <div className="space-y-3 flex-1 mt-6 relative z-10">
                  <div className="bg-white/95 dark:bg-neutral-900 border border-slate-150 dark:border-neutral-850 rounded-lg p-3 space-y-1.5 shadow-sm">
                    <div className="flex justify-between items-center text-[10px] text-slate-400 font-mono">
                      <span>Room availability</span>
                      <span className="text-emerald-600 font-bold">100% active</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 dark:bg-neutral-800 rounded overflow-hidden">
                      <div className="h-full w-full bg-gradient-to-r from-blue-600 to-indigo-600" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/95 dark:bg-neutral-900 border border-slate-150 dark:border-neutral-800 rounded-lg p-3 space-y-1 shadow-sm">
                      <span className="block text-[9px] text-slate-400 uppercase font-bold font-mono">Telemetry latency</span>
                      <span className="block text-sm font-extrabold font-mono text-slate-900 dark:text-neutral-100">0.08s</span>
                    </div>
                    <div className="bg-white/95 dark:bg-neutral-900 border border-slate-150 dark:border-neutral-800 rounded-lg p-3 space-y-1 shadow-sm">
                      <span className="block text-[9px] text-slate-400 uppercase font-bold font-mono">Payments sync</span>
                      <span className="block text-xs font-bold text-blue-600 dark:text-blue-400 font-mono">SECURE</span>
                    </div>
                  </div>
                </div>

                {/* Logos and accents in design */}
                <div className="pt-4 border-t border-slate-200 dark:border-neutral-800/60 flex items-center justify-between text-[11px] font-mono text-slate-700 relative z-10 font-bold">
                  <div className="flex items-center space-x-2">
                    <span className="px-1.5 py-0.5 rounded bg-blue-600/10 text-blue-600 dark:text-blue-400 font-bold">W-STACK</span>
                    <span>Global Gateway API</span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        )}

        {/* 2. SECONDARY PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {otherProjects.map((item, index) => {
              const IconComponent = item.icon;

              return (
                <motion.div
                  id={item.id}
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ duration: 0.4 }}
                  className={`bg-gradient-to-br from-blue-50/30 to-blue-50/10 hover:from-blue-50/50 hover:to-blue-50/30 dark:bg-gradient-to-br dark:from-neutral-950 dark:to-neutral-950 dark:hover:from-neutral-900 dark:hover:to-neutral-900/80 rounded-xl border-l-4 ${item.borderLeftClass || 'border-l-blue-600'} border-y border-r border-blue-200/80 dark:border-y-neutral-800/80 dark:border-r-neutral-800/80 hover:border-t-blue-500 hover:border-r-blue-500 hover:border-b-blue-500 dark:hover:border-t-blue-800 dark:hover:border-r-blue-800 dark:hover:border-b-blue-800 shadow-[0_8px_30px_rgb(0,53,128,0.015),0_1px_3px_rgb(0,0,0,0.01)] hover:shadow-[0_20px_45px_-8px_rgba(0,53,128,0.055)] dark:hover:shadow-none transition-all duration-300 flex flex-col justify-between overflow-hidden`}
                >
                  {/* Card Cover Image */}
                  <div className="relative w-full h-44 overflow-hidden bg-slate-100">
                    <Image 
                      src={item.image!}
                      alt={item.title}
                      fill
                      sizes="(max-w-768px) 100vw, 33vw"
                      className="object-cover hover:scale-105 transition-transform duration-500 pointer-events-none select-none"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-neutral-900 via-transparent to-transparent opacity-90" />
                    
                    {/* Floating Icon accent */}
                    <div className="absolute bottom-4 left-6 z-20">
                      <div className="p-2.5 rounded-xl bg-white/95 backdrop-blur-md text-blue-600 dark:bg-neutral-900/95 dark:text-blue-400 border border-slate-200/50 shadow-sm">
                        <IconComponent className="h-5 w-5" />
                      </div>
                    </div>

                    {/* Category overlay */}
                    <div className="absolute top-4 right-4 z-20">
                      <span className="text-[9px] font-mono font-extrabold py-1 px-2.5 bg-white/90 backdrop-blur-md text-slate-705 dark:bg-neutral-900/90 rounded-full border border-slate-200/20 uppercase">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 pt-4 flex-1 flex flex-col justify-between">
                    <div className="space-y-4">
                      {/* Interactive block accent spacing */}
                      <div className="relative pl-3 border-l-2 border-transparent hover:border-blue-500 transition-all">
                        <h4 className="text-lg font-extrabold text-slate-900 dark:text-neutral-50 font-sans tracking-tight leading-snug">
                          {item.title}
                        </h4>
                      </div>
                      
                      {item.data.vision && (
                        <p className="text-xs text-slate-600 dark:text-neutral-300 font-sans leading-relaxed">
                          <strong className="text-slate-800 dark:text-neutral-100 font-bold">{t('portfolio.vision')}:</strong> {item.data.vision}
                        </p>
                      )}
                      
                      <p className="text-sm text-slate-700 dark:text-neutral-200 font-sans leading-relaxed">
                        {item.data.solution}
                      </p>

                      {item.data.impact && (
                        <p className="text-xs text-slate-600 dark:text-neutral-305 font-sans leading-relaxed">
                          <strong className="text-slate-800 dark:text-neutral-100 font-bold">{t('portfolio.impact')}:</strong> {item.data.impact}
                        </p>
                      )}
                    </div>

                    <div className="pt-6 border-t border-slate-100 dark:border-neutral-805/55 mt-6 space-y-3">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 text-[10px] font-mono bg-blue-50/60 dark:bg-neutral-900 border border-blue-105/40 dark:border-neutral-800 text-slate-600 dark:text-neutral-300 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
