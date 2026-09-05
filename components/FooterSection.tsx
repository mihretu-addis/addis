import { Github, Linkedin, Twitter } from "lucide-react";

function LogoSymbol1() {
  return (
    <div
      className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-center p-[8px] relative rounded-[8px] shrink-0"
      data-name="Logo Symbol"
    >
      <div
        aria-hidden
        className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]"
      />
      <svg className="size-[20px]" viewBox="0 0 20 20" fill="none">
        <path
          d="M3.333 15.834H16.666"
          stroke="#FFA600"
          strokeLinecap="round"
          strokeWidth="1.67"
        />
        <path
          d="M3.333 10H16.666"
          stroke="#FFA600"
          strokeLinecap="round"
          strokeWidth="1.67"
        />
        <path
          d="M3.333 4.166H16.666"
          stroke="#FFA600"
          strokeLinecap="round"
          strokeWidth="1.67"
        />
      </svg>
    </div>
  );
}

function FooterLogo() {
  return (
    <div
      className="content-stretch flex gap-[12px] items-center relative shrink-0"
      data-name="Footer Logo"
    >
      <LogoSymbol1 />
      <p className="[word-break:break-word] font-['Outfit:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[19.4px] text-white whitespace-nowrap">
        <span className="leading-[normal]">Addis</span>
        <span className="leading-[normal] text-[#ffa600]">Tech</span>
      </p>
    </div>
  );
}

function BrandSection() {
  return (
    <div
      className="content-stretch flex flex-col gap-[12px] md:gap-[16px] items-start md:col-[1/span_5] md:row-1 md:justify-self-stretch md:self-start relative shrink-0 w-full"
      data-name="Brand Section"
    >
      <FooterLogo />
      <p className="[word-break:break-word] font-['Outfit:Regular',sans-serif] font-normal leading-[1.6] min-w-full relative shrink-0 text-[#e5f0fc] text-[12px] md:text-[13.3px] w-[min-content]">
        Empowering the Digital Renaissance in East Africa with state-of-the-art
        enterprise engineering standards.
      </p>
    </div>
  );
}

function FooterNavColumn() {
  return (
    <div
      className="[word-break:break-word] content-stretch flex flex-col font-['Outfit:Bold',sans-serif] font-bold gap-[10px] md:gap-[12px] items-start md:col-[6/span_2] md:row-1 md:justify-self-stretch leading-[normal] md:self-start relative shrink-0 w-full"
      data-name="Footer Nav Column"
    >
      <p className="relative shrink-0 text-[#b3d4f8] text-[10px] md:text-[11.4px] uppercase w-full">
        Ecosystem
      </p>
      <p className="relative shrink-0 text-[11px] md:text-[12px] text-white w-full">
        Services
      </p>
      <p className="relative shrink-0 text-[11px] md:text-[12px] text-white w-full">
        Portfolio
      </p>
      <p className="relative shrink-0 text-[11px] md:text-[12px] text-white w-full">
        Tech Stack
      </p>
    </div>
  );
}

function FooterCompanyColumn() {
  return (
    <div
      className="[word-break:break-word] content-stretch flex flex-col font-['Outfit:Bold',sans-serif] font-bold gap-[10px] md:gap-[12px] items-start md:col-[8/span_2] md:row-1 md:justify-self-stretch leading-[normal] md:self-start relative shrink-0 w-full"
      data-name="Footer Company Column"
    >
      <p className="relative shrink-0 text-[#b3d4f8] text-[10px] md:text-[11.4px] uppercase w-full">
        Company
      </p>
      <p className="relative shrink-0 text-[11px] md:text-[12px] text-white w-full">
        Why Choose Us
      </p>
      <p className="relative shrink-0 text-[11px] md:text-[12px] text-white w-full">
        Contact Us
      </p>
    </div>
  );
}

function Frame41() {
  return (
    <div
      className="bg-[rgba(255,255,255,0.05)] content-stretch flex items-center justify-center p-[8px] relative rounded-[8px] shrink-0"
      data-name="Frame"
    >
      <div
        aria-hidden
        className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]"
      />
      <Linkedin className="size-[16px] text-white" />
    </div>
  );
}

function Frame42() {
  return (
    <div
      className="bg-[rgba(255,255,255,0.05)] content-stretch flex items-center justify-center p-[8px] relative rounded-[8px] shrink-0"
      data-name="Frame"
    >
      <div
        aria-hidden
        className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]"
      />
      <Twitter className="size-[16px] text-white" />
    </div>
  );
}

function Frame43() {
  return (
    <div
      className="bg-[rgba(255,255,255,0.05)] content-stretch flex items-center justify-center p-[8px] relative rounded-[8px] shrink-0"
      data-name="Frame"
    >
      <div
        aria-hidden
        className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]"
      />
      <Github className="size-[16px] text-white" />
    </div>
  );
}

function SocialLinks() {
  return (
    <div
      className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full"
      data-name="Social Links"
    >
      <Frame41 />
      <Frame42 />
      <Frame43 />
    </div>
  );
}

function RightConnectSection() {
  return (
    <div
      className="content-stretch flex flex-col gap-[12px] md:gap-[16px] items-start md:col-[10/span_3] md:row-1 md:justify-self-stretch md:self-start relative shrink-0 w-full"
      data-name="Right Connect Section"
    >
      <p className="[word-break:break-word] font-['Outfit:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#b3d4f8] text-[10px] md:text-[11.4px] uppercase w-full">
        Connect Globally
      </p>
      <SocialLinks />
      <div className="[word-break:break-word] font-['Outfit:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#b3d4f8] text-[10px] md:text-[11px] w-full">
        <p className="leading-[1.5] mb-0">Addis Tech Software PLC</p>
        <p className="leading-[1.5] mb-0">Registration No. 3432/2013</p>
        <p className="leading-[1.5]">Ethiopia</p>
      </div>
    </div>
  );
}

function FooterColumns() {
  return (
    <div
      className="flex flex-col md:grid gap-[24px] md:gap-x-[32px] md:gap-y-[32px] md:grid-cols-[repeat(12,minmax(0,1fr))] md:grid-rows-[repeat(1,fit-content(100%))] relative shrink-0 w-full"
      data-name="Footer Columns"
    >
      <BrandSection />
      <FooterNavColumn />
      <FooterCompanyColumn />
      <RightConnectSection />
    </div>
  );
}

function HorizontalDividerWrap() {
  return (
    <div
      className="content-stretch flex items-center pt-[24px] md:pt-[32px] relative shrink-0 w-full"
      data-name="Horizontal Divider Wrap"
    >
      <div
        aria-hidden
        className="absolute border-[rgba(255,255,255,0.1)] border-solid border-t inset-0 pointer-events-none"
      />
      <p className="[word-break:break-word] font-['Outfit:Regular',sans-serif] font-normal leading-[1.5] relative w-full max-w-full text-[#b3d4f8] text-[10px] md:text-[11px] whitespace-normal">
        © 2026 Addis Tech. All rights reserved. Engineering high-performance
        tech since 2021.
      </p>
    </div>
  );
}

export function FooterSection() {
  return (
    <div
      className="bg-[#1b1464] content-stretch flex flex-col gap-[32px] md:gap-[40px] items-start px-[20px] md:px-12 lg:px-16 xl:px-20 py-[48px] md:py-[64px] relative shrink-0 w-full"
      data-name="Footer Section"
    >
      <div
        aria-hidden
        className="absolute border-[#000c1d] border-solid border-t inset-0 pointer-events-none"
      />
      <FooterColumns />
      <HorizontalDividerWrap />
    </div>
  );
}
