'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Star, Shield, Activity, Code } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-br from-blue-500 to-blue-700 dark:from-neutral-900 dark:to-neutral-950 text-white transition-colors duration-300"
    >
      {/* Background glowing rings / grids */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-40 dark:opacity-75">
        <motion.div 
          id="glow-circle-1" 
          animate={{
            scale: [1, 1.1, 0.9, 1],
            x: [0, 40, -20, 0],
            y: [0, -30, 20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] rounded-full bg-blue-400/20 dark:bg-blue-500/10 blur-[130px]" 
        />
        <motion.div 
          id="glow-circle-2" 
          animate={{
            scale: [1, 0.9, 1.1, 1],
            x: [0, -30, 40, 0],
            y: [0, 40, -30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -bottom-[10%] -right-[10%] w-[60%] h-[60%] rounded-full bg-indigo-400/20 dark:bg-indigo-500/10 blur-[130px]" 
        />
        
        {/* Floating abstract decorative micro-particles */}
        <motion.div
          animate={{ y: [0, -15, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[25%] w-3 h-3 rounded-full bg-blue-300/40 blur-[1px]"
        />
        <motion.div
          animate={{ y: [0, 20, 0], opacity: [0.15, 0.35, 0.15] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[30%] left-[15%] w-4 h-4 rounded-full bg-indigo-300/40 blur-[1px]"
        />

        {/* Fine grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(255,255,255,0.03)_1.5px,transparent_1.5px)] bg-[size:32px_32px] pointer-events-none opacity-40 dark:opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <motion.div
              id="hero-badge-container"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="inline-flex items-center space-x-2 bg-white/10 dark:bg-blue-900/30 border border-white/20 dark:border-blue-800 text-amber-300 dark:text-blue-300 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider"
            >
              <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
              <span>{t('hero.badge')}</span>
            </motion.div>

            <motion.div
              id="hero-headings"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              className="space-y-4"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-extrabold tracking-tight text-white leading-tight">
                {t('hero.title')}{' '}
                <span className="text-amber-400">
                  {t('hero.titleAccent')}
                </span>
              </h1>
              <p className="text-base sm:text-lg text-blue-100 dark:text-neutral-300 max-w-2xl mx-auto lg:mx-0 font-sans leading-relaxed">
                {t('hero.description')}
              </p>
            </motion.div>

            <motion.div
              id="hero-ctas"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Link
                id="hero-cta-btn-primary"
                href="/contact"
                className="w-full sm:w-auto px-8 py-3.5 bg-amber-400 hover:bg-amber-500 text-blue-950 font-bold rounded shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2 group"
              >
                <span>{t('hero.ctaPrimary')}</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                id="hero-cta-btn-secondary"
                href="/portfolio"
                className="w-full sm:w-auto px-8 py-3.5 bg-blue-700/50 hover:bg-blue-700 text-white border border-white/25 rounded font-bold transition-all flex items-center justify-center"
              >
                {t('hero.ctaSecondary')}
              </Link>
            </motion.div>

            {/* Quick Metrics (Bento-style layout in columns info) */}
            <motion.div
              id="hero-quick-metrics"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10 dark:border-neutral-800/70"
            >
              <div className="text-center lg:text-left">
                <p className="text-2xl sm:text-3xl font-bold font-mono text-amber-400">45+</p>
                <p className="text-[10px] sm:text-xs text-blue-100 dark:text-neutral-400 font-medium tracking-wide mt-1 uppercase">
                  {t('hero.statsCompleted')}
                </p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-2xl sm:text-3xl font-bold font-mono text-white">5+</p>
                <p className="text-[10px] sm:text-xs text-blue-100 dark:text-neutral-400 font-medium tracking-wide mt-1 uppercase">
                  {t('hero.statsYears')}
                </p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-2xl sm:text-3xl font-bold font-mono text-amber-400">99.9%</p>
                <p className="text-[10px] sm:text-xs text-blue-100 dark:text-neutral-400 font-medium tracking-wide mt-1 uppercase">
                  {t('hero.statsReliability')}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Hero Right Visual Column */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <motion.div
              id="hero-tech-illustration"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-[340px] sm:max-w-[420px] aspect-square rounded-xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 dark:bg-neutral-900/80 dark:border-neutral-800/80 p-6 flex flex-col justify-between shadow-2xl"
            >
              {/* Geometric elements / Tech-focused terminal card style */}
              <div className="flex items-center justify-between border-b border-white/10 dark:border-neutral-800 pb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="font-mono text-[10px] text-blue-200 dark:text-neutral-500">addistech_runtime_v2.sh</div>
              </div>

              <div id="hero-code-snippet" className="flex-1 py-6 flex flex-col justify-center font-mono text-xs sm:text-sm space-y-3 text-white dark:text-neutral-300">
                <motion.p initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="text-amber-400">const addisTechInstance = {`{`}</motion.p>
                <motion.p initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }} className="pl-4">headquarters: <span className="text-blue-105">&quot;Addis Ababa, ET&quot;</span>,</motion.p>
                <motion.p initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.9 }} className="pl-4">founded: <span className="text-amber-400">2021</span>,</motion.p>
                <motion.p initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.1 }} className="pl-4">vision: <span className="text-blue-105">&quot;Transforming Ideas to Reality&quot;</span>,</motion.p>
                <motion.p initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.3 }} className="pl-4">architectures: [<span className="text-blue-200">&quot;Ecosystems&quot;</span>, <span className="text-blue-200">&quot;Scalability&quot;</span>]</motion.p>
                <motion.p initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.5 }} className="text-amber-400">{`};`}</motion.p>
              </div>

              <div className="border-t border-white/10 dark:border-neutral-800 pt-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
                  </span>
                  <span className="text-[10px] font-mono text-blue-200">System Synced: Latency &lt;0.1s</span>
                </div>
                <Code className="h-4 w-4 text-blue-100 dark:text-neutral-500" />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
