import { ArrowRight, Cpu, Database, HelpCircle } from "lucide-react";

import { PillButton } from "./ui/PillButton";

function SectionHeaders() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] md:gap-[16px] items-start min-w-px relative w-full"
      data-name="Section Headers"
    >
      <PillButton variant="onLight" label="Our Core Services" />
      <p className="[word-break:break-word] font-['Outfit:Bold',sans-serif] font-bold leading-[1.3] md:leading-[1.25] min-w-full relative shrink-0 text-[#1b1464] text-[26px] md:text-[36px] w-[min-content]">
        Engineering Digital Ecosystems
      </p>
    </div>
  );
}

function Link() {
  return (
    <div className="h-[20px] relative shrink-0 w-[301.84px]" data-name="Link">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] left-0 not-italic text-[#003b95] text-[13.7px] top-1/2 w-[278.04px]">
        <p className="leading-[20px]">{`View All Services & Odoo Customizations`}</p>
      </div>
      <ArrowRight className="-translate-y-1/2 absolute right-0 size-[16px] top-1/2 text-[#003b95]" />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col md:flex-row gap-[12px] md:gap-[48px] items-start md:items-center relative shrink-0 w-full">
      <SectionHeaders />
      <Link />
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div
      className="border border-[rgba(229,240,252,0.6)] border-solid h-auto md:h-[256px] overflow-clip relative rounded-[12px] shadow-[0px_8px_30px_0px_rgba(0,53,128,0.02),0px_1px_3px_0px_rgba(0,0,0,0.01)] shrink-0 w-full md:w-[384px]"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgb(240, 240, 255) 0%, rgba(242, 246, 250, 0.1) 100%)",
      }}
      data-name="Background+Border+Shadow"
    >
      <div className="flex flex-col md:relative p-[20px] md:p-0 gap-[16px] md:gap-0">
        <div className="bg-[#4e4eae] border border-[rgba(229,240,252,0.55)] border-solid h-[48px] md:absolute md:left-[33px] md:top-[33px] md:w-[48px] rounded-[12px] flex items-center justify-center shrink-0 w-[48px]">
          <HelpCircle className="size-[20px] text-white" />
        </div>
        <div className="flex flex-col gap-[12px] md:absolute md:top-[102px] md:left-[33px] md:right-[69px] md:h-[46px] md:justify-center">
          <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.3] md:leading-[28px] text-[#000c1e] text-[18px] md:text-[17.6px]">{`Custom Software & Mobile Development`}</p>
        </div>
        <div className="flex flex-col gap-[8px] md:absolute md:top-[169px] md:left-[33px] md:right-[33px] md:h-[45.5px] md:justify-center">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] text-[#262626] text-[13px] md:text-[12.9px]">
            High-performance web and mobile apps (iOS/Android) built with modern
            architectures.
          </p>
        </div>
        <div className="flex items-center gap-[8px] md:absolute md:top-[214.5px] md:left-[33px] md:right-[33px] md:h-[16px]">
          <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] text-[#003b95] text-[12px] md:text-[11.8px]">
            Learn more
          </p>
          <ArrowRight className="size-[12px] text-[#003b95]" />
        </div>
      </div>
    </div>
  );
}

function BackgroundBorderShadow1() {
  return (
    <div
      className="border border-[rgba(229,240,252,0.6)] border-solid h-auto md:h-[256px] overflow-clip relative rounded-[12px] shadow-[0px_8px_30px_0px_rgba(0,53,128,0.02),0px_1px_3px_0px_rgba(0,0,0,0.01)] shrink-0 w-full md:w-[384px]"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(242, 246, 250, 0.3) 0%, rgba(242, 246, 250, 0.1) 100%)",
      }}
      data-name="Background+Border+Shadow"
    >
      <div className="flex flex-col md:relative p-[20px] md:p-0 gap-[16px] md:gap-0">
        <div className="bg-[rgba(242,246,250,0.4)] border border-[rgba(229,240,252,0.55)] border-solid h-[48px] md:absolute md:left-[33px] md:top-[33px] md:w-[48px] rounded-[12px] flex items-center justify-center shrink-0 w-[48px]">
          <Cpu className="size-[20px] text-[#003b95]" />
        </div>
        <div className="flex flex-col gap-[12px] md:absolute md:top-[97px] md:left-[33px] md:right-[194.75px] md:h-[28px] md:justify-center">
          <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.3] md:leading-[28px] text-[#000c1e] text-[18px] md:text-[17.4px]">
            AI Implementation
          </p>
        </div>
        <div className="flex flex-col gap-[8px] md:absolute md:top-[141px] md:left-[33px] md:right-[33px] md:h-[45.5px] md:justify-center">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] text-[#262626] text-[13px] md:text-[13px]">
            Deploying and integrating AI tools to automate and streamline
            business operations.
          </p>
        </div>
        <div className="flex items-center gap-[8px] md:absolute md:top-[207px] md:left-[33px] md:right-[33px] md:h-[16px]">
          <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] text-[#003b95] text-[12px] md:text-[11.8px]">
            Learn more
          </p>
          <ArrowRight className="size-[12px] text-[#003b95]" />
        </div>
      </div>
    </div>
  );
}

function BackgroundBorderShadow2() {
  return (
    <div
      className="border border-[rgba(229,240,252,0.6)] border-solid h-auto md:h-[256px] overflow-clip relative rounded-[12px] shadow-[0px_8px_30px_0px_rgba(0,53,128,0.02),0px_1px_3px_0px_rgba(0,0,0,0.01)] shrink-0 w-full md:w-[384px]"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(242, 246, 250, 0.3) 0%, rgba(242, 246, 250, 0.1) 100%)",
      }}
      data-name="Background+Border+Shadow"
    >
      <div className="flex flex-col md:relative p-[20px] md:p-0 gap-[16px] md:gap-0">
        <div className="bg-[rgba(242,246,250,0.4)] border border-[rgba(229,240,252,0.55)] border-solid h-[48px] md:absolute md:left-[33px] md:top-[33px] md:w-[48px] rounded-[12px] flex items-center justify-center shrink-0 w-[48px]">
          <Database className="size-[20px] text-[#003b95]" />
        </div>
        <div className="flex flex-col gap-[12px] md:absolute md:top-[97px] md:left-[33px] md:right-[97.75px] md:h-[28px] md:justify-center">
          <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.3] md:leading-[28px] text-[#000c1e] text-[18px] md:text-[17.9px]">{`ERP & Digital Implementation`}</p>
        </div>
        <div className="flex flex-col gap-[8px] md:absolute md:top-[141px] md:left-[33px] md:right-[33px] md:h-[45.5px] md:justify-center">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] text-[#262626] text-[13px] md:text-[13.2px]">
            Specialized Odoo ERP deployments to streamline finance, HR, and
            supply chains.
          </p>
        </div>
        <div className="flex items-center gap-[8px] md:absolute md:top-[207px] md:left-[33px] md:right-[33px] md:h-[16px]">
          <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] text-[#003b95] text-[12px] md:text-[11.8px]">
            Learn more
          </p>
          <ArrowRight className="size-[12px] text-[#003b95]" />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col md:flex-row gap-[20px] md:gap-[32px] items-center relative shrink-0">
      <BackgroundBorderShadow />
      <BackgroundBorderShadow1 />
      <BackgroundBorderShadow2 />
    </div>
  );
}

export function ServicesSection() {
  return (
    <div
      id="services"
      className="content-stretch flex flex-col gap-[32px] md:gap-[48px] items-start px-[20px] md:px-12 lg:px-16 xl:px-20 py-[48px] md:py-[112px] relative shrink-0 w-full scroll-mt-[68px]"
      data-name="Services Section"
    >
      <Frame6 />
      <Frame5 />
    </div>
  );
}
