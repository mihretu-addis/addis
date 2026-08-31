'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Github, Linkedin, MessageSquare, Heart } from 'lucide-react';
import Link from 'next/link';
import BrandLogo from '@/components/BrandLogo';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      id="main-footer" 
      className="bg-blue-900 dark:bg-neutral-950 text-blue-200 dark:text-neutral-400 py-16 border-t border-blue-950 dark:border-neutral-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Logo / Branding */}
          <div className="md:col-span-5 space-y-4">
            <BrandLogo id="footer-logo" />
            
            <p className="text-sm font-sans max-w-sm leading-relaxed text-blue-100 dark:text-neutral-400" id="footer-slogan">
              {t('footer.slogan')}
            </p>
          </div>
 
          {/* Sitemaps */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4">
            <div>
              <span className="block text-xs uppercase font-extrabold font-mono tracking-wider text-amber-450 dark:text-amber-400 mb-3" id="footer-cap-link">{t('footer.ecosystem')}</span>
              <ul className="space-y-2 text-xs font-semibold">
                <li><Link href="/services" className="text-white hover:text-amber-400 hover:underline transition-all" id="foo-link-srv">{t('nav.services')}</Link></li>
                <li><Link href="/portfolio" className="text-white hover:text-amber-400 hover:underline transition-all" id="foo-link-ptf">{t('nav.portfolio')}</Link></li>
                <li><Link href="/#tech-stack" className="text-white hover:text-amber-400 hover:underline transition-all" id="foo-link-tech">{t('nav.techStack')}</Link></li>
              </ul>
            </div>
            <div>
              <span className="block text-xs uppercase font-extrabold font-mono tracking-wider text-amber-450 dark:text-amber-400 mb-3" id="footer-cap-corp">{t('footer.company')}</span>
              <ul className="space-y-2 text-xs font-semibold">
                <li><Link href="/why-us" className="text-white hover:text-amber-400 hover:underline transition-all" id="foo-link-why">{t('nav.whyUs')}</Link></li>
                <li><Link href="/contact" className="text-white hover:text-amber-400 hover:underline transition-all" id="foo-link-cont">{t('nav.contact')}</Link></li>
              </ul>
            </div>
          </div>
 
          {/* Social connections */}
          <div className="md:col-span-3 space-y-4">
            <span className="block text-xs uppercase font-extrabold font-mono tracking-wider text-amber-450 dark:text-amber-400" id="foo-cap-social">{t('footer.connect')}</span>
            <div className="flex items-center space-x-3 text-white">
              <a 
                id="footer-social-li"
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 bg-white/5 border border-white/10 rounded-lg hover:text-amber-400 hover:bg-white/10 shadow-sm transition-all"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a 
                id="footer-social-gh"
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 bg-white/5 border border-white/10 rounded-lg hover:text-amber-400 hover:bg-white/10 shadow-sm transition-all"
              >
                <Github className="h-4 w-4" />
              </a>
              <a 
                id="footer-social-msg"
                href="mailto:info@addistechplc.com" 
                className="p-2 bg-white/5 border border-white/10 rounded-lg hover:text-amber-400 hover:bg-white/10 shadow-sm transition-all"
              >
                <MessageSquare className="h-4 w-4" />
              </a>
            </div>
            
            <span className="block text-[11px] text-blue-200 dark:text-neutral-500 font-mono" id="foo-company-status">
              Addis Tech Software PLC <br />
              Registration No. 3432/2013 <br />
              Ethiopia
            </span>
          </div>
 
         </div>
 
         {/* Outer details */}
         <div className="pt-8 border-t border-white/10 dark:border-neutral-800/60 mt-10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-blue-200 space-y-4 sm:space-y-0" id="footer-copyright-panel">
          <span id="footer-ref-copyright">
            © {currentYear} Addis Tech. {t('footer.rights')}
          </span>
          <div className="flex items-center space-x-1.5" id="footer-ref-credit">
            <span>{t('footer.renaissance')}</span>
            <Heart className="h-3 w-3 text-red-500 fill-red-500 animate-pulse" />
            <span>{t('footer.inAddis')}</span>
          </div>
         </div>
      </div>
    </footer>
  );
}
