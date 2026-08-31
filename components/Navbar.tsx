'use client';

import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/context/ThemeContext';
import { Menu, X, Sun, Moon, Globe, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const navItems = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.services'), href: '/services' },
    { name: t('nav.portfolio'), href: '/portfolio' },
    { name: t('nav.whyUs'), href: '/why-us' },
    { name: t('nav.contact'), href: '/contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-blue-600 dark:bg-neutral-900/95 border-b border-blue-700 dark:border-neutral-855 py-3 shadow-md'
          : 'bg-blue-600 dark:bg-neutral-900 border-b border-blue-500/20 dark:border-neutral-800/40 py-4 shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link
            id="nav-logo"
            href="/"
            className="flex items-center space-x-2 text-xl font-bold tracking-tight text-white transition-all hover:opacity-90"
          >
            <div className="p-2 rounded-lg bg-white/10 dark:bg-blue-600/25 border border-white/10 text-amber-400">
              <Terminal className="h-5 w-5" />
            </div>
            <span>
              Addis<span className="text-amber-400">Tech</span>
            </span>
          </Link>
 
          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                id={`nav-item-${item.href.replace('#', '')}`}
                key={item.name}
                href={item.href}
                className="text-sm font-semibold text-blue-100 hover:text-white hover:underline underline-offset-4 transition-all duration-150"
              >
                {item.name}
              </Link>
            ))}
          </nav>
 
          {/* Controls (Theme Toggle, Lang Switcher, CTA) */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="flex items-center bg-blue-700/50 dark:bg-neutral-800 p-1 rounded-full border border-white/10 dark:border-neutral-700">
              <button
                id="lang-en-btn"
                onClick={() => changeLanguage('en')}
                className={`px-3 py-1 text-xs font-bold rounded-full transition-all duration-200 ${
                  i18n.language === 'en'
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-blue-100 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                id="lang-am-btn"
                onClick={() => changeLanguage('am')}
                className={`px-3 py-1 text-xs font-bold rounded-full font-sans transition-all duration-200 ${
                  i18n.language === 'am'
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-blue-100 hover:text-white'
                }`}
              >
                አማ
              </button>
            </div>
 
            {/* Theme Toggle */}
            <button
              id="theme-toggle-btn"
              onClick={toggleTheme}
              className="p-2 rounded-full border border-white/10 dark:border-neutral-700 text-blue-100 hover:text-white hover:bg-white/10 dark:hover:bg-neutral-800 transition-colors bg-transparent"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? (
                <Moon className="h-4 w-4 text-white" />
              ) : (
                <Sun className="h-4 w-4 text-amber-400" />
              )}
            </button>
 
            {/* CTA Button */}
            <Link
              id="nav-cta"
              href="/contact"
              className="bg-white hover:bg-blue-50 text-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 dark:text-white text-xs font-bold px-4 py-2 rounded transition-all shadow-sm border border-transparent hover:shadow"
            >
              {t('nav.getStarted')}
            </Link>
          </div>
 
          {/* Mobile hamburger menu toggle */}
          <div className="flex items-center space-x-2 md:hidden">
            {/* Language Pill Mobile */}
            <button
              id="mobile-lang-pill"
              onClick={() => changeLanguage(i18n.language === 'en' ? 'am' : 'en')}
              className="p-2 rounded-full border border-white/10 dark:border-neutral-800 text-blue-100 hover:text-white hover:bg-white/10 dark:hover:bg-neutral-850 transition-colors bg-transparent flex items-center space-x-1"
            >
              <Globe className="h-4 w-4" />
              <span className="text-[10px] font-bold uppercase">{i18n.language}</span>
            </button>
 
            {/* Theme toggle mobile */}
            <button
              id="mobile-theme-toggle"
              onClick={toggleTheme}
              className="p-2 rounded-full border border-white/10 dark:border-neutral-800 text-blue-100 hover:text-white hover:bg-white/10 dark:hover:bg-neutral-850 transition-colors bg-transparent"
            >
              {theme === 'light' ? <Moon className="h-4 w-4 text-white" /> : <Sun className="h-4 w-4 text-amber-400" />}
            </button>
            
            {/* Menu toggle */}
            <button
              id="hamburger-menu-btn"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-blue-100 hover:text-white hover:bg-white/10 focus:outline-none"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>
 
      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-dropdown-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-blue-600 dark:bg-neutral-900 border-b border-blue-700 dark:border-neutral-800"
          >
            <div className="px-4 pt-2 pb-6 space-y-2 mt-1">
              {navItems.map((item) => (
                <Link
                  id={`mobile-nav-item-${item.href.replace('#', '')}`}
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-base font-semibold text-blue-100 hover:bg-blue-700 dark:hover:bg-neutral-800 hover:text-white transition-all"
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-blue-500/20 dark:border-neutral-800 px-3">
                <Link
                  id="mobile-nav-cta"
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center block bg-white text-blue-600 dark:bg-blue-600 dark:text-white font-bold py-3 rounded transition-all"
                >
                  {t('nav.getStarted')}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
