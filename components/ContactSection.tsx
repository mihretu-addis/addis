'use client';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertTriangle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ContactSection() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg(t('contact.fieldsRequired'));
      return;
    }

    setLoading(true);

    // Simulate robust API interaction
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 1200);
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-blue-50/20 dark:bg-neutral-950 transition-colors duration-300 relative border-t border-blue-100/60 dark:border-neutral-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Coordinates / Info details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-neutral-50 animate-fade-in">
                {t('contact.title')}
              </h2>
              <p className="text-base text-slate-500 dark:text-neutral-400 leading-relaxed font-sans">
                {t('contact.subtitle')}
              </p>
            </div>

            {/* Structured Quick Cards */}
            <div className="space-y-4">
              {/* Target 1: HQ */}
              <motion.div 
                id="contact-info-hq"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ y: -4, scale: 1.01 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="p-5 rounded-xl bg-gradient-to-br from-blue-50/30 to-blue-50/10 hover:from-blue-50/50 hover:to-blue-50/30 dark:bg-gradient-to-br dark:from-neutral-900/90 dark:to-neutral-900/50 dark:hover:from-neutral-900/60 dark:hover:to-neutral-850/60 border border-blue-200/80 hover:border-blue-500 dark:border-neutral-800 dark:hover:border-blue-800/80 flex items-start space-x-4 shadow-[0_8px_30px_rgb(0,53,128,0.015),0_1px_3px_rgb(0,0,0,0.01)] hover:shadow-[0_20px_45px_-8px_rgba(0,53,128,0.05)] transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 bottom-0 left-0 w-1 bg-blue-600" />
                <div className="p-3 bg-blue-50/50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 border border-blue-100 rounded-lg shrink-0">
                  <MapPin className="h-5 w-5 text-blue-600" />
                </div>
                <div className="space-y-1">
                  <span className="block text-xs uppercase font-bold font-mono tracking-wider text-slate-400 dark:text-slate-400">{t('contact.hq')}</span>
                  <span className="block text-sm sm:text-base font-bold text-slate-900 dark:text-neutral-50">{t('contact.address')}</span>
                  <span className="block text-xs text-slate-650 dark:text-neutral-300 font-medium">{t('contact.boleDistrict')}</span>
                </div>
              </motion.div>

              {/* Target 2: Phone */}
              <motion.a 
                id="contact-info-phone"
                href="tel:+251911505992"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ y: -4, scale: 1.01 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="p-5 rounded-xl bg-gradient-to-br from-blue-50/30 to-blue-50/10 hover:from-blue-50/50 hover:to-blue-50/30 dark:bg-gradient-to-br dark:from-neutral-900/90 dark:to-neutral-900/50 dark:hover:from-neutral-900/60 dark:hover:to-neutral-850/60 border border-blue-200/80 hover:border-amber-500/80 dark:border-neutral-800 dark:hover:border-amber-500/40 transition-all flex items-start space-x-4 group shadow-[0_8px_30px_rgb(0,53,128,0.015),0_1px_3px_rgb(0,0,0,0.01)] hover:shadow-[0_20px_45px_-8px_rgba(0,53,128,0.05)] duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 bottom-0 left-0 w-1 bg-amber-500" />
                <div className="p-3 bg-amber-50/50 dark:bg-neutral-800 text-amber-600 dark:text-amber-450 border border-amber-100 rounded-lg shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="h-5 w-5 text-amber-600" />
                </div>
                <div className="space-y-1">
                  <span className="block text-xs uppercase font-bold font-mono tracking-wider text-slate-400 dark:text-slate-400">{t('contact.callUs')}</span>
                  <span className="block text-sm sm:text-base font-bold text-slate-900 dark:text-neutral-50 group-hover:text-blue-600 dark:group-hover:text-amber-400 transition-colors">+251 911 505992</span>
                  <span className="block text-xs text-slate-650 dark:text-neutral-300 font-medium">{t('contact.hours')}</span>
                </div>
              </motion.a>

              {/* Target 3: Email */}
              <motion.a 
                id="contact-info-email"
                href="mailto:info@addistechplc.com"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ y: -4, scale: 1.01 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="p-5 rounded-xl bg-gradient-to-br from-blue-50/30 to-blue-50/10 hover:from-blue-50/50 hover:to-blue-50/30 dark:bg-gradient-to-br dark:from-neutral-900/90 dark:to-neutral-900/50 dark:hover:from-neutral-900/60 dark:hover:to-neutral-850/60 border border-blue-200/80 hover:border-blue-500 dark:border-neutral-800 dark:hover:border-blue-800/80 transition-all flex items-start space-x-4 group shadow-[0_8px_30px_rgb(0,53,128,0.015),0_1px_3px_rgb(0,0,0,0.01)] hover:shadow-[0_20px_45px_-8px_rgba(0,53,128,0.05)] duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 bottom-0 left-0 w-1 bg-blue-600" />
                <div className="p-3 bg-blue-50/50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 border border-blue-100 rounded-lg shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="h-5 w-5 text-blue-600" />
                </div>
                <div className="space-y-1">
                  <span className="block text-xs uppercase font-bold font-mono tracking-wider text-slate-400 dark:text-slate-400">{t('contact.writeUs')}</span>
                  <span className="block text-sm sm:text-base font-bold text-slate-900 dark:text-neutral-50 group-hover:text-blue-600 dark:group-hover:text-amber-400 transition-colors">info@addistechplc.com</span>
                  <span className="block text-xs text-slate-650 dark:text-neutral-300 font-medium">{t('contact.rfpResponse')}</span>
                </div>
              </motion.a>
            </div>
          </div>

          {/* Right Column: Interaction Form */}
          <div className="lg:col-span-7 w-full bg-white dark:bg-neutral-900 border border-slate-100 dark:border-neutral-800/80 p-6 sm:p-10 rounded-2xl shadow-[0_12px_40px_-10px_rgba(0,53,128,0.035),0_1px_3px_rgba(0,0,0,0.015)] dark:shadow-none relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 to-blue-800" />
            <form id="contact-interaction-form" onSubmit={handleSubmit} className="space-y-6">
              
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    id="contact-success-notification"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-6 bg-blue-50 dark:bg-blue-950/20 border border-blue-200/55 dark:border-blue-850 text-blue-900 dark:text-blue-300 rounded-xl flex flex-col items-center justify-center text-center space-y-4 py-12"
                  >
                    <CheckCircle2 className="h-12 w-12 text-blue-600 animate-bounce" />
                    <p className="text-base sm:text-lg font-extrabold">{t('contact.successTitle')}</p>
                    <p className="text-sm text-slate-600 dark:text-neutral-300 max-w-sm font-semibold">
                      {t('contact.successMsg')}
                    </p>
                    <button
                      id="reset-form-btn"
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded text-xs transition-colors"
                    >
                      {t('contact.logAnother')}
                    </button>
                  </motion.div>
                ) : (
                  <div className="space-y-5">
                    {errorMsg && (
                      <div id="contact-form-error" className="p-4 bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 rounded-lg text-xs sm:text-sm font-semibold flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4" />
                        <span>{errorMsg}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name input */}
                      <div className="space-y-1.5">
                        <label htmlFor="name-input" className="block text-[11px] font-mono font-bold uppercase text-slate-450 dark:text-slate-400">{t('contact.nameLabel')}</label>
                        <input
                          id="name-input"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder={t('contact.namePlaceholder')}
                          className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-neutral-950 border-2 border-slate-200 dark:border-neutral-800 text-slate-900 dark:text-neutral-50 placeholder-slate-400 text-sm focus:border-blue-600 dark:focus:border-blue-400 focus:outline-none transition-colors"
                          required
                        />
                      </div>

                      {/* Phone Input */}
                      <div className="space-y-1.5">
                        <label htmlFor="phone-input" className="block text-[11px] font-mono font-bold uppercase text-slate-450 dark:text-slate-400">{t('contact.phoneLabel')}</label>
                        <input
                          id="phone-input"
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder={t('contact.phonePlaceholder')}
                          className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-neutral-950 border-2 border-slate-200 dark:border-neutral-800 text-slate-900 dark:text-neutral-50 placeholder-slate-400 text-sm focus:border-blue-600 dark:focus:border-blue-400 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Email Input */}
                    <div className="space-y-1.5">
                      <label htmlFor="email-input" className="block text-[11px] font-mono font-bold uppercase text-slate-450 dark:text-slate-400">{t('contact.emailLabel')}</label>
                      <input
                        id="email-input"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder={t('contact.emailPlaceholder')}
                        className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-neutral-950 border-2 border-slate-200 dark:border-neutral-800 text-slate-900 dark:text-neutral-50 placeholder-slate-400 text-sm focus:border-blue-600 dark:focus:border-blue-400 focus:outline-none transition-colors"
                        required
                      />
                    </div>

                    {/* Message input */}
                    <div className="space-y-1.5">
                      <label htmlFor="message-input" className="block text-[11px] font-mono font-bold uppercase text-slate-450 dark:text-slate-400">{t('contact.messageLabel')}</label>
                      <textarea
                        id="message-input"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder={t('contact.messagePlaceholder')}
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-neutral-950 border-2 border-slate-200 dark:border-neutral-800 text-slate-900 dark:text-neutral-50 placeholder-slate-400 text-sm focus:border-blue-600 dark:focus:border-blue-400 focus:outline-none transition-colors resize-none"
                        required
                      />
                    </div>

                    <button
                      id="contact-submit-btn"
                      type="submit"
                      disabled={loading}
                      className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-extrabold rounded hover:shadow-md transition-all flex items-center justify-center space-x-2 text-sm select-none disabled:opacity-50"
                    >
                      {loading ? (
                        <span className="inline-block animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                      ) : (
                        <>
                          <span>{t('contact.submitBtn')}</span>
                          <Send className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </div>
                )}
              </AnimatePresence>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
