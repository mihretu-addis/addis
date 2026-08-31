'use client';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Layers, Database, ShieldAlert, Cpu, Laptop, Workflow, CheckCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function TechStack() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<'all' | 'frontend' | 'backend' | 'data' | 'erp' | 'ai'>('all');

  const categories = [
    { id: 'all', label: 'All Tech' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'data', label: 'Database & Cloud' },
    { id: 'erp', label: 'ERP Deployment' },
    { id: 'ai', label: 'AI/ML Systems' }
  ];

  const technologies = [
    { name: "React.js", category: "frontend", icon: Laptop, version: "v19", level: "Core Architecture" },
    { name: "Next.js", category: "frontend", icon: Laptop, version: "v15", level: "Production Standard" },
    { name: "Flutter", category: "frontend", icon: Laptop, version: "Mobile iOS/Android", level: "Hybrid Mobile Core" },
    
    { name: "Node.js", category: "backend", icon: Layers, version: "ESM / NextGen", level: "Real-time Operations" },
    { name: "Python (Django/FastAPI)", category: "backend", icon: Layers, version: "FastAPI Async", level: "Enterprise APIs" },
    { name: "Go (Golang)", category: "backend", icon: Layers, version: "v1.22", level: "Microservices Latency" },
    
    { name: "PostgreSQL", category: "data", icon: Database, version: "SQL Relational", level: "Secure Persistence" },
    { name: "MongoDB", category: "data", icon: Database, version: "NoSQL DB", level: "Dynamic Schema" },
    { name: "AWS", category: "data", icon: Database, version: "Cloud Platform", level: "Global Scale Hosting" },
    { name: "Google Cloud", category: "data", icon: Database, version: "GCP Cloud Run", level: "Container Architectures" },
    
    { name: "Odoo ERP", category: "erp", icon: Workflow, version: "Odoo v17 (Enterprise)", level: "Custom Module Engineering" },
    { name: "Odoo CRM / Finance", category: "erp", icon: Workflow, version: "Automation Layers", level: "Workflow Optimization" },
    
    { name: "TensorFlow", category: "ai", icon: Cpu, version: "Deep Learning", level: "Custom Model Architectures" },
    { name: "PyTorch", category: "ai", icon: Cpu, version: "Neural Networks", level: "Predictive Analytics" },
    { name: "OpenAI Integration", category: "ai", icon: Cpu, version: "GPT-4o APIs", level: "Intelligent Workflows" }
  ];

  const filteredTech = activeCategory === 'all' 
    ? technologies 
    : technologies.filter(tech => tech.category === activeCategory);

  return (
    <section
      id="tech-stack"
      className="py-20 md:py-28 bg-white dark:bg-neutral-950 transition-colors duration-300 relative border-t border-slate-100 dark:border-neutral-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-sans font-extrabold tracking-tight text-slate-900 dark:text-neutral-50 animate-fade-in">
            {t('techStack.title')}
          </h2>
          <p className="text-base sm:text-lg text-slate-500 dark:text-neutral-400 font-sans leading-relaxed">
            {t('techStack.subtitle')}
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 bg-slate-100 dark:bg-neutral-950/80 rounded-full max-w-3xl mx-auto mb-12 border border-slate-200/40 dark:border-neutral-800/80">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                id={`tech-cat-${cat.id}`}
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all relative select-none cursor-pointer ${
                  isActive
                    ? 'text-white'
                    : 'text-slate-600 dark:text-neutral-300 hover:text-slate-800 dark:hover:text-neutral-100'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-tech-indicator"
                    className="absolute inset-0 bg-blue-600 rounded-full shadow-lg shadow-blue-600/15"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTech.map((tech, index) => {
            const IconComp = tech.icon;

            return (
              <motion.div
                id={`tech-card-${tech.name.replace(/\s+/g, '-').toLowerCase()}`}
                key={tech.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="p-5 bg-white dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_24px_rgba(0,3,15,0.05)] hover:border-blue-400 dark:hover:border-blue-900 hover:-translate-y-0.5 transition-all duration-300 flex items-start gap-4"
              >
                <div className="p-2.5 rounded-lg bg-white dark:bg-neutral-800 text-blue-600 dark:text-blue-400 border border-slate-200/50 dark:border-neutral-700/60 shadow-sm">
                  <IconComp className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-slate-800 dark:text-neutral-50">
                    <span className="font-bold text-sm sm:text-base leading-none">{tech.name}</span>
                    <span className="text-[10px] bg-slate-100 dark:bg-neutral-800 text-slate-500 dark:text-neutral-400 px-1.5 py-0.5 rounded border border-slate-200/40 dark:border-neutral-700/40 font-mono font-bold leading-none">{tech.version}</span>
                  </div>
                  <span className="block text-xs text-slate-500 dark:text-neutral-400 font-sans tracking-wide">
                    {tech.level}
                  </span>
                  <div className="flex items-center gap-1 text-[10px] text-blue-600 dark:text-blue-400 font-bold font-mono uppercase mt-1">
                    <CheckCheck className="h-3 w-3" />
                    <span>Active Production Built</span>
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
