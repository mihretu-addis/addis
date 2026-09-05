"use client";

import { useEffect, useRef, useState } from "react";

import svgPaths from "./svg-ww4f5k9fbe";
import { PillButton } from "./ui/PillButton";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
] as const;

function Frame() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="16"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
        width="16"
      >
        <g id="Frame">
          <path
            d={svgPaths.p210ab600}
            id="Vector"
            stroke="#FFA600"
            strokeLinecap="round"
            strokeWidth="1.67"
          />
          <path
            d="M10 15.834H16.6667"
            id="Vector_2"
            stroke="#FFA600"
            strokeLinecap="round"
            strokeWidth="1.67"
          />
        </g>
      </svg>
    </div>
  );
}

function LogoSymbol() {
  return (
    <div
      className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-start p-[6px] relative rounded-[6px] shrink-0"
      data-name="Logo Symbol"
    >
      <div
        aria-hidden
        className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[6px]"
      />
      <Frame />
    </div>
  );
}

function LogoGroup() {
  return (
    <a
      href="#about"
      className="content-stretch flex gap-[10px] items-center relative shrink-0"
      data-name="Logo-Group"
    >
      <LogoSymbol />
      <p className="[word-break:break-word] font-['Outfit:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[18px] text-white whitespace-nowrap">
        <span className="leading-[normal]">Addis</span>
        <span className="leading-[normal] text-[#ffa600]">Tech</span>
      </p>
    </a>
  );
}

function NavLinks({
  isMobile = false,
  onNavigate,
}: {
  isMobile?: boolean;
  onNavigate?: () => void;
}) {
  if (isMobile) {
    return (
      <div className="flex flex-col gap-4 py-4" data-name="Mobile Nav Links">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className="[word-break:break-word] font-['Outfit:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f0f0ff] text-[16px]"
          >
            {item.label}
          </a>
        ))}
      </div>
    );
  }

  return (
    <div
      className="[word-break:break-word] content-stretch hidden md:flex font-['Outfit:Bold',sans-serif] font-bold gap-[24px] items-center leading-[normal] relative shrink-0 text-[#f0f0ff] text-[14px] whitespace-nowrap"
      data-name="Nav Links"
    >
      {NAV_ITEMS.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="relative shrink-0 hover:text-white"
        >
          {item.label}
        </a>
      ))}
    </div>
  );
}

function HamburgerButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Toggle navigation menu"
      className="bg-[rgba(255,255,255,0.08)] content-stretch flex flex-col justify-center items-center p-[8px] relative rounded-[8px] shrink-0 size-[36px] md:hidden"
      data-name="Hamburger"
    >
      <div
        className="flex flex-col justify-center items-center gap-[5px] relative shrink-0"
        data-name="menu"
      >
        <div className="w-[20px] h-[2px] bg-white rounded" />
        <div className="w-[20px] h-[2px] bg-white rounded" />
        <div className="w-[20px] h-[2px] bg-white rounded" />
      </div>
    </button>
  );
}

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const scrollingDown = currentY > lastScrollY.current;

      setIsScrolled(currentY > 10);

      // Always show near the top of the page
      if (currentY < 24) {
        setIsVisible(true);
      } else if (Math.abs(currentY - lastScrollY.current) > 4) {
        // Scroll down → hide, scroll up → show
        setIsVisible(!scrollingDown);
        if (scrollingDown) {
          setIsMobileMenuOpen(false);
        }
      }

      lastScrollY.current = currentY;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 bg-[#1b1464] content-stretch flex items-center justify-between px-[20px] md:px-12 lg:px-16 xl:px-20 py-[16px] w-full transition-transform duration-300 ease-out ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${isScrolled ? "shadow-lg" : ""}`}
        data-name="Header"
      >
        <div
          aria-hidden
          className="absolute border-[rgba(0,86,179,0.2)] border-b border-solid inset-0 pointer-events-none"
        />
        <LogoGroup />
        <NavLinks />
        <div className="hidden md:block">
          <PillButton label={`Let's Build`} href="#contact" />
        </div>
        <HamburgerButton
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />
      </header>

      {/* Keeps page content below the fixed header */}
      <div className="h-[68px] shrink-0 w-full" aria-hidden />

      {isMobileMenuOpen && isVisible && (
        <div className="fixed top-[68px] left-0 right-0 z-40 bg-[#1b1464] px-[20px] py-4 md:hidden shadow-lg">
          <NavLinks isMobile={true} onNavigate={closeMobileMenu} />
          <div className="mt-4">
            <PillButton
              label={`Let's Build`}
              href="#contact"
              onClick={closeMobileMenu}
            />
          </div>
        </div>
      )}
    </>
  );
}
