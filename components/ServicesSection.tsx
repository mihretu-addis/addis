'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Smartphone, Cpu, Layers3, Database, Workflow, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';

export default function ServicesSection() {
  const { t } = useTranslation();

  const services = [
    {
      id: "service-custom-software",
      icon: Smartphone,
      title: t('services.customApp'),
      desc: t('services.customAppDesc'),
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop",
      color: "from-blue-500/10 to-indigo-500/5",
      accent: "text-blue-600 dark:text-blue-400 border-blue-500/20",
      badge: "Scale Architecture",
      subBar: "bg-blue-600",
      techs: ["React.js", "Next.js", "Flutter"],
      borderLeftClass: "border-l-blue-600 dark:border-l-blue-500"
    },
    {
      id: "service-ai",
      icon: Cpu,
      title: t('services.aiImpl'),
      desc: t('services.aiImplDesc'),
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop",
      color: "from-amber-500/10 to-orange-500/5",
      accent: "text-amber-600 dark:text-amber-400 border-amber-500/20",
      badge: "Intelligent Systems",
      subBar: "bg-amber-500",
      techs: ["TensorFlow", "PyTorch", "OpenAI"],
      borderLeftClass: "border-l-amber-500 dark:border-l-amber-450"
    },
    {
      id: "service-erp",
      icon: Layers3,
      title: t('services.erpImpl'),
      desc: t('services.erpImplDesc'),
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
      color: "from-purple-500/10 to-blue-500/5",
      accent: "text-purple-600 dark:text-purple-400 border-purple-500/20",
      badge: "Custom Odoo ERP",
      subBar: "bg-purple-600",
      techs: ["Odoo Modules", "Supply Chain", "CRM"],
      borderLeftClass: "border-l-purple-550 dark:border-l-purple-400"
    },
    {
      id: "service-data",
      icon: Database,
      title: t('services.dataStrategy'),
      desc: t('services.dataStrategyDesc'),
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=600&auto=format&fit=crop",
      color: "from-blue-500/10 to-cyan-500/5",
      accent: "text-blue-600 dark:text-blue-300 border-blue-500/20",
      badge: "Security & BI",
      subBar: "bg-blue-600",
      techs: ["PostgreSQL", "MongoDB", "AWS/GCP"],
      borderLeftClass: "border-l-teal-550 dark:border-l-teal-400"
    },
    {
      id: "service-automation",
      icon: Workflow,
      title: t('services.autoServices'),
      desc: t('services.autoServicesDesc'),
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=600&auto=format&fit=crop",
      color: "from-indigo-500/10 to-purple-500/5",
      accent: "text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
      badge: "Auto-Pilot",
      subBar: "bg-indigo-600",
      techs: ["Node.js", "FastAPI", "Workflows"],
      borderLeftClass: "border-l-indigo-500 dark:border-l-indigo-400"
    }
  ];

  return (
    <section
      id="services"
      className="py-20 md:py-28 bg-white dark:bg-neutral-950 transition-colors duration-300 relative border-t border-slate-100 dark:border-neutral-900 overflow-hidden"
    >
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 dark:opacity-40">
        <div className="absolute top-[10%] right-[10%] w-72 h-72 rounded-full bg-blue-400/10 dark:bg-blue-400/5 blur-[90px]" />
        <div className="absolute bottom-[20%] left-[5%] w-80 h-80 rounded-full bg-indigo-400/10 dark:bg-indigo-400/5 blur-[90px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <span className="inline-block text-xs uppercase font-mono font-bold tracking-widest text-blue-600 dark:text-blue-400 bg-blue-100/40 dark:bg-blue-900/20 px-3 py-1.5 rounded-full border border-blue-500/10">
            {t('services.title')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold tracking-tight text-slate-900 dark:text-neutral-50 pt-2 leading-tight">
            Engineering Digital Ecosystems
          </h2>
          <p className="text-base sm:text-lg text-slate-500 dark:text-neutral-400 font-sans leading-relaxed">
            {t('services.subtitle')}
          </p>
        </motion.div>

        {/* Bento/Flexible Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc, index) => {
            const IconComponent = svc.icon;
            
            return (
              <motion.div
                id={svc.id}
                key={svc.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6, scale: 1.01 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`group relative rounded-xl bg-gradient-to-br from-blue-50/30 to-blue-50/10 hover:from-blue-50/50 hover:to-blue-50/30 dark:bg-gradient-to-br dark:from-neutral-950 dark:to-neutral-950 dark:hover:from-neutral-900 dark:hover:to-neutral-900/80 border border-blue-200/80 dark:border-neutral-800/80 hover:border-blue-500 dark:hover:border-blue-800 shadow-[0_4px_12px_rgba(0,53,128,0.008)] hover:shadow-[0_12px_24px_-10px_rgba(0,53,128,0.03)] dark:shadow-none dark:hover:shadow-none transition-all duration-300 flex flex-col justify-between overflow-hidden`}
              >
                {/* Image Section at Top */}
                <div className="relative w-full h-48 overflow-hidden bg-slate-50">
                  <Image 
                    src={svc.image}
                    alt={svc.title}
                    fill
                    sizes="(max-w-768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 select-none"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle gradient overlay to blend */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-neutral-950 via-transparent to-transparent opacity-90" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${svc.color} opacity-20 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`} />
                  
                  {/* Floating Action badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <span className="text-[10px] font-mono font-extrabold py-1 px-2.5 rounded-full bg-white/95 backdrop-blur-md dark:bg-neutral-900/95 text-slate-700 dark:text-neutral-300 shadow-sm border border-slate-200/20">
                      {svc.badge}
                    </span>
                  </div>

                  {/* Icon container positioned beautifully */}
                  <div className="absolute bottom-4 left-6 z-20">
                    <div className={`p-3 rounded-xl bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border ${svc.accent} shadow-md group-hover:scale-105 transition-transform duration-300`}>
                      <IconComponent className="h-5 w-5" />
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div className="p-6 md:p-8 pt-4 flex-1 flex flex-col justify-between bg-transparent dark:bg-transparent">
                  <div className="space-y-4">
                    {/* Side Accent line on hover */}
                    <div className="relative pl-3 border-l-2 border-transparent group-hover:border-blue-500 transition-all duration-300">
                      <h3 className="text-xl font-extrabold text-slate-900 dark:text-neutral-50 group-hover:text-blue-600 dark:group-hover:text-amber-400 transition-colors font-sans">
                        {svc.title}
                      </h3>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-neutral-300 font-sans leading-relaxed">
                      {svc.desc}
                    </p>

                    {/* Micro Tech Tags */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {svc.techs.map((tech) => (
                        <span 
                          key={tech} 
                          className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-50/60 dark:bg-neutral-850 text-blue-750 dark:text-blue-200 border border-blue-100/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-100 dark:border-neutral-800/50 mt-6 flex items-center justify-between text-slate-450 dark:text-neutral-300 group-hover:text-blue-600 dark:group-hover:text-amber-400 transition-colors">
                    <span className="text-xs font-bold font-sans">Explore tech specification</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1.5" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
