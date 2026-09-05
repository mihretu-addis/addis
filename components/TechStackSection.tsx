import {
  Cloud,
  Database,
  Folder,
  Globe,
  Phone,
  Settings,
  ShieldCheck,
  X,
} from "lucide-react";

import { Eyebrow } from "./ui/Eyebrow";

function SectionInfo() {
  return (
    <div
      className="content-stretch flex flex-col gap-[12px] md:gap-[16px] items-center relative shrink-0 w-full"
      data-name="Section Info"
    >
      <Eyebrow variant="onLight">Robust Technology</Eyebrow>
      <p className="[word-break:break-word] font-['Outfit:Bold',sans-serif] font-bold leading-[1.3] md:leading-[1.25] min-w-full relative shrink-0 text-[#1b1464] text-[26px] md:text-[36px] text-center w-[min-content]">
        Our Standard Tech Stack
      </p>
      <p className="[word-break:break-word] font-['Outfit:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#959595] text-[13px] md:text-[15px] text-center w-full md:w-[600px]">
        We build only with industry-standard technologies to ensure modularity,
        fast support, and infinite maintenance horizons.
      </p>
    </div>
  );
}

function IconContainer() {
  return (
    <div
      className="bg-[rgba(27,20,100,0.05)] content-stretch flex items-center justify-center p-[10px] relative rounded-[8px] shrink-0"
      data-name="Icon Container"
    >
      <Globe className="size-[20px] text-[#1B1464]" />
    </div>
  );
}

function VersionBadge() {
  return (
    <div
      className="bg-[#f0f0ff] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0"
      data-name="Version Badge"
    >
      <p className="[word-break:break-word] font-['Outfit:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1b1464] text-[10px] whitespace-nowrap">
        v15
      </p>
    </div>
  );
}

function CardTop() {
  return (
    <div
      className="content-stretch flex items-center justify-between relative shrink-0 w-full"
      data-name="Card Top"
    >
      <IconContainer />
      <VersionBadge />
    </div>
  );
}

function CardText() {
  return (
    <div
      className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] relative shrink-0 w-full"
      data-name="Card Text"
    >
      <p className="font-['Outfit:Bold',sans-serif] font-bold relative shrink-0 text-[#1f1f1f] text-[16px] w-full">
        Next.js
      </p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal relative shrink-0 text-[#959595] text-[12px] w-full">
        Frontend UI Framework
      </p>
    </div>
  );
}

function CardFooter() {
  return (
    <div
      className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full"
      data-name="Card Footer"
    >
      <ShieldCheck className="size-[12px] text-[#06a225]" />
      <p className="[word-break:break-word] font-['Outfit:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#06a225] text-[10px] uppercase whitespace-nowrap">
        Core Frontend Platform
      </p>
    </div>
  );
}

function TechCard() {
  return (
    <div
      className="bg-white content-stretch drop-shadow-[0px_2px_4px_rgba(0,0,0,0.02)] flex flex-col gap-[12px] items-start p-[24px] md:col-1 md:justify-self-stretch md:row-1 md:self-start relative rounded-[12px] shrink-0 w-full"
      data-name="Tech Card"
    >
      <div
        aria-hidden
        className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[12px]"
      />
      <CardTop />
      <CardText />
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg
            className="block size-full"
            fill="none"
            height="1"
            preserveAspectRatio="none"
            viewBox="0 0 214 1"
            width="214"
          >
            <line id="Line" stroke="#E5E5E5" x2="214" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <CardFooter />
    </div>
  );
}

function IconContainer1() {
  return (
    <div
      className="bg-[rgba(27,20,100,0.05)] content-stretch flex items-center justify-center p-[10px] relative rounded-[8px] shrink-0"
      data-name="Icon Container"
    >
      <X className="size-[20px] text-[#1B1464]" />
    </div>
  );
}

function VersionBadge1() {
  return (
    <div
      className="bg-[#f0f0ff] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0"
      data-name="Version Badge"
    >
      <p className="[word-break:break-word] font-['Outfit:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1b1464] text-[10px] whitespace-nowrap">
        v19
      </p>
    </div>
  );
}

function CardTop1() {
  return (
    <div
      className="content-stretch flex items-center justify-between relative shrink-0 w-full"
      data-name="Card Top"
    >
      <IconContainer1 />
      <VersionBadge1 />
    </div>
  );
}

function CardText1() {
  return (
    <div
      className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] relative shrink-0 w-full"
      data-name="Card Text"
    >
      <p className="font-['Outfit:Bold',sans-serif] font-bold relative shrink-0 text-[#1f1f1f] text-[16px] w-full">
        React.js
      </p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal relative shrink-0 text-[#959595] text-[12px] w-full">
        Frontend UI Engine
      </p>
    </div>
  );
}

function CardFooter1() {
  return (
    <div
      className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full"
      data-name="Card Footer"
    >
      <ShieldCheck className="size-[12px] text-[#06a225]" />
      <p className="[word-break:break-word] font-['Outfit:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#06a225] text-[10px] uppercase whitespace-nowrap">
        Active Production
      </p>
    </div>
  );
}

function TechCard1() {
  return (
    <div
      className="bg-white content-stretch drop-shadow-[0px_2px_4px_rgba(0,0,0,0.02)] flex flex-col gap-[12px] items-start p-[24px] md:col-2 md:justify-self-stretch md:row-1 md:self-start relative rounded-[12px] shrink-0 w-full"
      data-name="Tech Card"
    >
      <div
        aria-hidden
        className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[12px]"
      />
      <CardTop1 />
      <CardText1 />
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg
            className="block size-full"
            fill="none"
            height="1"
            preserveAspectRatio="none"
            viewBox="0 0 214 1"
            width="214"
          >
            <line id="Line" stroke="#E5E5E5" x2="214" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <CardFooter1 />
    </div>
  );
}

function IconContainer2() {
  return (
    <div
      className="bg-[rgba(27,20,100,0.05)] content-stretch flex items-center justify-center p-[10px] relative rounded-[8px] shrink-0"
      data-name="Icon Container"
    >
      <Phone className="size-[20px] text-[#1B1464]" />
    </div>
  );
}

function VersionBadge2() {
  return (
    <div
      className="bg-[#f0f0ff] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0"
      data-name="Version Badge"
    >
      <p className="[word-break:break-word] font-['Outfit:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1b1464] text-[10px] whitespace-nowrap">
        Production v3
      </p>
    </div>
  );
}

function CardTop2() {
  return (
    <div
      className="content-stretch flex items-center justify-between relative shrink-0 w-full"
      data-name="Card Top"
    >
      <IconContainer2 />
      <VersionBadge2 />
    </div>
  );
}

function CardText2() {
  return (
    <div
      className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] relative shrink-0 w-full"
      data-name="Card Text"
    >
      <p className="font-['Outfit:Bold',sans-serif] font-bold relative shrink-0 text-[#1f1f1f] text-[16px] w-full">
        Flutter
      </p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal relative shrink-0 text-[#959595] text-[12px] w-full">
        Hybrid Mobile Core
      </p>
    </div>
  );
}

function CardFooter2() {
  return (
    <div
      className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full"
      data-name="Card Footer"
    >
      <ShieldCheck className="size-[12px] text-[#06a225]" />
      <p className="[word-break:break-word] font-['Outfit:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#06a225] text-[10px] uppercase whitespace-nowrap">
        Mobile iOS/Android
      </p>
    </div>
  );
}

function TechCard2() {
  return (
    <div
      className="bg-white content-stretch drop-shadow-[0px_2px_4px_rgba(0,0,0,0.02)] flex flex-col gap-[12px] items-start p-[24px] md:col-3 md:justify-self-stretch md:row-1 md:self-start relative rounded-[12px] shrink-0 w-full"
      data-name="Tech Card"
    >
      <div
        aria-hidden
        className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[12px]"
      />
      <CardTop2 />
      <CardText2 />
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg
            className="block size-full"
            fill="none"
            height="1"
            preserveAspectRatio="none"
            viewBox="0 0 214 1"
            width="214"
          >
            <line id="Line" stroke="#E5E5E5" x2="214" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <CardFooter2 />
    </div>
  );
}

function IconContainer3() {
  return (
    <div
      className="bg-[rgba(27,20,100,0.05)] content-stretch flex items-center justify-center p-[10px] relative rounded-[8px] shrink-0"
      data-name="Icon Container"
    >
      <Settings className="size-[20px] text-[#1B1464]" />
    </div>
  );
}

function VersionBadge3() {
  return (
    <div
      className="bg-[#f0f0ff] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0"
      data-name="Version Badge"
    >
      <p className="[word-break:break-word] font-['Outfit:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1b1464] text-[10px] whitespace-nowrap">
        v20 ESM
      </p>
    </div>
  );
}

function CardTop3() {
  return (
    <div
      className="content-stretch flex items-center justify-between relative shrink-0 w-full"
      data-name="Card Top"
    >
      <IconContainer3 />
      <VersionBadge3 />
    </div>
  );
}

function CardText3() {
  return (
    <div
      className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] relative shrink-0 w-full"
      data-name="Card Text"
    >
      <p className="font-['Outfit:Bold',sans-serif] font-bold relative shrink-0 text-[#1f1f1f] text-[16px] w-full">
        Node.js
      </p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal relative shrink-0 text-[#959595] text-[12px] w-full">
        Backend Services
      </p>
    </div>
  );
}

function CardFooter3() {
  return (
    <div
      className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full"
      data-name="Card Footer"
    >
      <ShieldCheck className="size-[12px] text-[#06a225]" />
      <p className="[word-break:break-word] font-['Outfit:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#06a225] text-[10px] uppercase whitespace-nowrap">
        Next-gen Architecture
      </p>
    </div>
  );
}

function TechCard3() {
  return (
    <div
      className="bg-white content-stretch drop-shadow-[0px_2px_4px_rgba(0,0,0,0.02)] flex flex-col gap-[12px] items-start p-[24px] md:col-4 md:justify-self-stretch md:row-1 md:self-start relative rounded-[12px] shrink-0 w-full"
      data-name="Tech Card"
    >
      <div
        aria-hidden
        className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[12px]"
      />
      <CardTop3 />
      <CardText3 />
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg
            className="block size-full"
            fill="none"
            height="1"
            preserveAspectRatio="none"
            viewBox="0 0 214 1"
            width="214"
          >
            <line id="Line" stroke="#E5E5E5" x2="214" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <CardFooter3 />
    </div>
  );
}

function IconContainer4() {
  return (
    <div
      className="bg-[rgba(27,20,100,0.05)] content-stretch flex items-center justify-center p-[10px] relative rounded-[8px] shrink-0"
      data-name="Icon Container"
    >
      <Cloud className="size-[20px] text-[#1B1464]" />
    </div>
  );
}

function VersionBadge4() {
  return (
    <div
      className="bg-[#f0f0ff] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0"
      data-name="Version Badge"
    >
      <p className="[word-break:break-word] font-['Outfit:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1b1464] text-[10px] whitespace-nowrap">
        Async Model
      </p>
    </div>
  );
}

function CardTop4() {
  return (
    <div
      className="content-stretch flex items-center justify-between relative shrink-0 w-full"
      data-name="Card Top"
    >
      <IconContainer4 />
      <VersionBadge4 />
    </div>
  );
}

function CardText4() {
  return (
    <div
      className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] relative shrink-0 w-full"
      data-name="Card Text"
    >
      <p className="font-['Outfit:Bold',sans-serif] font-bold relative shrink-0 text-[#1f1f1f] text-[16px] w-full">
        FastAPI
      </p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal relative shrink-0 text-[#959595] text-[12px] w-full">
        High-speed Python APIs
      </p>
    </div>
  );
}

function CardFooter4() {
  return (
    <div
      className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full"
      data-name="Card Footer"
    >
      <ShieldCheck className="size-[12px] text-[#06a225]" />
      <p className="[word-break:break-word] font-['Outfit:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#06a225] text-[10px] uppercase whitespace-nowrap">
        Optimized Execution
      </p>
    </div>
  );
}

function TechCard4() {
  return (
    <div
      className="bg-white content-stretch drop-shadow-[0px_2px_4px_rgba(0,0,0,0.02)] flex flex-col gap-[12px] items-start p-[24px] md:col-1 md:justify-self-stretch md:row-2 md:self-start relative rounded-[12px] shrink-0 w-full"
      data-name="Tech Card"
    >
      <div
        aria-hidden
        className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[12px]"
      />
      <CardTop4 />
      <CardText4 />
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg
            className="block size-full"
            fill="none"
            height="1"
            preserveAspectRatio="none"
            viewBox="0 0 214 1"
            width="214"
          >
            <line id="Line" stroke="#E5E5E5" x2="214" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <CardFooter4 />
    </div>
  );
}

function IconContainer5() {
  return (
    <div
      className="bg-[rgba(27,20,100,0.05)] content-stretch flex items-center justify-center p-[10px] relative rounded-[8px] shrink-0"
      data-name="Icon Container"
    >
      <Database className="size-[20px] text-[#1B1464]" />
    </div>
  );
}

function VersionBadge5() {
  return (
    <div
      className="bg-[#f0f0ff] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0"
      data-name="Version Badge"
    >
      <p className="[word-break:break-word] font-['Outfit:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1b1464] text-[10px] whitespace-nowrap">
        Secure SQL
      </p>
    </div>
  );
}

function CardTop5() {
  return (
    <div
      className="content-stretch flex items-center justify-between relative shrink-0 w-full"
      data-name="Card Top"
    >
      <IconContainer5 />
      <VersionBadge5 />
    </div>
  );
}

function CardText5() {
  return (
    <div
      className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] relative shrink-0 w-full"
      data-name="Card Text"
    >
      <p className="font-['Outfit:Bold',sans-serif] font-bold relative shrink-0 text-[#1f1f1f] text-[16px] w-full">
        PostgreSQL
      </p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal relative shrink-0 text-[#959595] text-[12px] w-full">
        Relational Database
      </p>
    </div>
  );
}

function CardFooter5() {
  return (
    <div
      className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full"
      data-name="Card Footer"
    >
      <ShieldCheck className="size-[12px] text-[#06a225]" />
      <p className="[word-break:break-word] font-['Outfit:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#06a225] text-[10px] uppercase whitespace-nowrap">
        Enterprise Security
      </p>
    </div>
  );
}

function TechCard5() {
  return (
    <div
      className="bg-white content-stretch drop-shadow-[0px_2px_4px_rgba(0,0,0,0.02)] flex flex-col gap-[12px] items-start p-[24px] md:col-2 md:justify-self-stretch md:row-2 md:self-start relative rounded-[12px] shrink-0 w-full"
      data-name="Tech Card"
    >
      <div
        aria-hidden
        className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[12px]"
      />
      <CardTop5 />
      <CardText5 />
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg
            className="block size-full"
            fill="none"
            height="1"
            preserveAspectRatio="none"
            viewBox="0 0 214 1"
            width="214"
          >
            <line id="Line" stroke="#E5E5E5" x2="214" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <CardFooter5 />
    </div>
  );
}

function IconContainer6() {
  return (
    <div
      className="bg-[rgba(27,20,100,0.05)] content-stretch flex items-center justify-center p-[10px] relative rounded-[8px] shrink-0"
      data-name="Icon Container"
    >
      <Folder className="size-[20px] text-[#1B1464]" />
    </div>
  );
}

function VersionBadge6() {
  return (
    <div
      className="bg-[#f0f0ff] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0"
      data-name="Version Badge"
    >
      <p className="[word-break:break-word] font-['Outfit:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1b1464] text-[10px] whitespace-nowrap">
        High Performance
      </p>
    </div>
  );
}

function CardTop6() {
  return (
    <div
      className="content-stretch flex items-center justify-between relative shrink-0 w-full"
      data-name="Card Top"
    >
      <IconContainer6 />
      <VersionBadge6 />
    </div>
  );
}

function CardText6() {
  return (
    <div
      className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] relative shrink-0 w-full"
      data-name="Card Text"
    >
      <p className="font-['Outfit:Bold',sans-serif] font-bold relative shrink-0 text-[#1f1f1f] text-[16px] w-full">
        MongoDB
      </p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal relative shrink-0 text-[#959595] text-[12px] w-full">
        Document Database
      </p>
    </div>
  );
}

function CardFooter6() {
  return (
    <div
      className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full"
      data-name="Card Footer"
    >
      <ShieldCheck className="size-[12px] text-[#06a225]" />
      <p className="[word-break:break-word] font-['Outfit:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#06a225] text-[10px] uppercase whitespace-nowrap">
        Dynamic Schemas
      </p>
    </div>
  );
}

function TechCard6() {
  return (
    <div
      className="bg-white content-stretch drop-shadow-[0px_2px_4px_rgba(0,0,0,0.02)] flex flex-col gap-[12px] items-start p-[24px] md:col-3 md:justify-self-stretch md:row-2 md:self-start relative rounded-[12px] shrink-0 w-full"
      data-name="Tech Card"
    >
      <div
        aria-hidden
        className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[12px]"
      />
      <CardTop6 />
      <CardText6 />
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg
            className="block size-full"
            fill="none"
            height="1"
            preserveAspectRatio="none"
            viewBox="0 0 214 1"
            width="214"
          >
            <line id="Line" stroke="#E5E5E5" x2="214" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <CardFooter6 />
    </div>
  );
}

function IconContainer7() {
  return (
    <div
      className="bg-[rgba(27,20,100,0.05)] content-stretch flex items-center justify-center p-[10px] relative rounded-[8px] shrink-0"
      data-name="Icon Container"
    >
      <Cloud className="size-[20px] text-[#1B1464]" />
    </div>
  );
}

function VersionBadge7() {
  return (
    <div
      className="bg-[#f0f0ff] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0"
      data-name="Version Badge"
    >
      <p className="[word-break:break-word] font-['Outfit:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1b1464] text-[10px] whitespace-nowrap">
        Containerised
      </p>
    </div>
  );
}

function CardTop7() {
  return (
    <div
      className="content-stretch flex items-center justify-between relative shrink-0 w-full"
      data-name="Card Top"
    >
      <IconContainer7 />
      <VersionBadge7 />
    </div>
  );
}

function CardText7() {
  return (
    <div
      className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] relative shrink-0 w-full"
      data-name="Card Text"
    >
      <p className="font-['Outfit:Bold',sans-serif] font-bold relative shrink-0 text-[#1f1f1f] text-[16px] w-full">
        AWS / GCP
      </p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal relative shrink-0 text-[#959595] text-[12px] w-full">
        Scalable Infrastructure
      </p>
    </div>
  );
}

function CardFooter7() {
  return (
    <div
      className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full"
      data-name="Card Footer"
    >
      <ShieldCheck className="size-[12px] text-[#06a225]" />
      <p className="[word-break:break-word] font-['Outfit:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#06a225] text-[10px] uppercase whitespace-nowrap">
        Secure Persistence
      </p>
    </div>
  );
}

function TechCard7() {
  return (
    <div
      className="bg-white content-stretch drop-shadow-[0px_2px_4px_rgba(0,0,0,0.02)] flex flex-col gap-[12px] items-start p-[24px] md:col-4 md:justify-self-stretch md:row-2 md:self-start relative rounded-[12px] shrink-0 w-full"
      data-name="Tech Card"
    >
      <div
        aria-hidden
        className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[12px]"
      />
      <CardTop7 />
      <CardText7 />
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg
            className="block size-full"
            fill="none"
            height="1"
            preserveAspectRatio="none"
            viewBox="0 0 214 1"
            width="214"
          >
            <line id="Line" stroke="#E5E5E5" x2="214" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <CardFooter7 />
    </div>
  );
}

function TechGrid() {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[16px] md:gap-x-[24px] md:gap-y-[24px] relative shrink-0 w-full"
      data-name="Tech Grid"
    >
      <TechCard />
      <TechCard1 />
      <TechCard2 />
      <TechCard3 />
      <TechCard4 />
      <TechCard5 />
      <TechCard6 />
      <TechCard7 />
    </div>
  );
}

export function TechStackSection() {
  return (
    <div
      className="bg-[#f0f0ff] content-stretch flex flex-col gap-[32px] md:gap-[48px] items-start px-[20px] md:px-12 lg:px-16 xl:px-20 py-[48px] md:py-[112px] relative shrink-0 w-full"
      data-name="Tech Stack Section"
    >
      <SectionInfo />
      <TechGrid />
    </div>
  );
}
