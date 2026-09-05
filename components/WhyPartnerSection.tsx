import { Check as CheckIcon } from "lucide-react";

import { Eyebrow } from "./ui/Eyebrow";

function PhilosophyBanner() {
  return (
    <div
      className="bg-[#f0f0ff] content-stretch flex items-start p-[20px] relative rounded-[12px] shrink-0 w-full"
      data-name="Philosophy Banner"
    >
      <div
        aria-hidden
        className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[12px]"
      />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Outfit:Bold',sans-serif] font-bold leading-[normal] min-w-px relative text-[#1b1464] text-[12px] uppercase">
        Active Regional Integration · 100% Client-Centric
      </p>
    </div>
  );
}

function LeftContent() {
  return (
    <div
      className="content-stretch flex flex-col gap-[16px] md:gap-[24px] items-start md:col-[1/span_5] md:row-1 md:justify-self-stretch md:self-start relative shrink-0 w-full"
      data-name="Left Content"
    >
      <Eyebrow variant="onLight">Partner Philosophy</Eyebrow>
      <p className="[word-break:break-word] font-['Outfit:Bold',sans-serif] font-bold leading-[1.3] md:leading-[1.25] min-w-full relative shrink-0 text-[#1b1464] text-[26px] md:text-[36px] w-[min-content]">
        Why Partner With Addis Tech?
      </p>
      <p className="[word-break:break-word] font-['Outfit:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#1f1f1f] text-[13px] md:text-[15px] w-[min-content]">{`Based in one of Africa's fastest-growing tech hubs, we combine deep local market insights with international software engineering standards. Every deployment strictly adheres to zero-downtime guidelines.`}</p>
      <PhilosophyBanner />
    </div>
  );
}

function Frame21() {
  return (
    <div
      className="bg-[rgba(6,162,37,0.1)] content-stretch flex items-center justify-center p-[4px] relative rounded-[100px] shrink-0"
      data-name="Frame"
    >
      <CheckIcon className="size-[14px] text-[#06A225]" />
    </div>
  );
}

function CheckTitle() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full"
      data-name="Check Title"
    >
      <Frame21 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Outfit:Bold',sans-serif] font-bold leading-[normal] min-w-px relative text-[#1f1f1f] text-[16px]">
        Agile Excellence
      </p>
    </div>
  );
}

function Differentiator() {
  return (
    <div
      className="bg-white content-stretch drop-shadow-[0px_8px_15px_rgba(0,53,128,0.02)] flex flex-col gap-[10px] items-start p-[24px] relative rounded-[12px] shrink-0 w-full"
      data-name="Differentiator"
    >
      <div
        aria-hidden
        className="absolute border-[rgba(27,20,100,0.07)] border-b border-l-4 border-r border-solid border-t inset-0 pointer-events-none rounded-[12px]"
      />
      <CheckTitle />
      <p className="[word-break:break-word] font-['Outfit:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#959595] text-[14px] w-full">
        We iterate quickly, executing modern sprint-based pipelines to ensure
        your product reaches the target market faster.
      </p>
    </div>
  );
}

function Frame22() {
  return (
    <div
      className="bg-[rgba(6,162,37,0.1)] content-stretch flex items-center justify-center p-[4px] relative rounded-[100px] shrink-0"
      data-name="Frame"
    >
      <CheckIcon className="size-[14px] text-[#06A225]" />
    </div>
  );
}

function CheckTitle1() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full"
      data-name="Check Title"
    >
      <Frame22 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Outfit:Bold',sans-serif] font-bold leading-[normal] min-w-px relative text-[#1f1f1f] text-[16px]">
        Scalability First
      </p>
    </div>
  );
}

function Differentiator1() {
  return (
    <div
      className="bg-white content-stretch drop-shadow-[0px_8px_15px_rgba(0,53,128,0.02)] flex flex-col gap-[10px] items-start p-[24px] relative rounded-[12px] shrink-0 w-full"
      data-name="Differentiator"
    >
      <div
        aria-hidden
        className="absolute border-[rgba(27,20,100,0.07)] border-b border-l-4 border-r border-solid border-t inset-0 pointer-events-none rounded-[12px]"
      />
      <CheckTitle1 />
      <p className="[word-break:break-word] font-['Outfit:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#959595] text-[14px] w-full">
        Our microservice architectures are engineered to scale seamlessly from
        1,000 to 1,000,000+ active sessions without performance degradation.
      </p>
    </div>
  );
}

function Frame23() {
  return (
    <div
      className="bg-[rgba(6,162,37,0.1)] content-stretch flex items-center justify-center p-[4px] relative rounded-[100px] shrink-0"
      data-name="Frame"
    >
      <CheckIcon className="size-[14px] text-[#06A225]" />
    </div>
  );
}

function CheckTitle2() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full"
      data-name="Check Title"
    >
      <Frame23 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Outfit:Bold',sans-serif] font-bold leading-[normal] min-w-px relative text-[#1f1f1f] text-[16px]">
        Security Focused
      </p>
    </div>
  );
}

function Differentiator2() {
  return (
    <div
      className="bg-white content-stretch drop-shadow-[0px_8px_15px_rgba(0,53,128,0.02)] flex flex-col gap-[10px] items-start p-[24px] relative rounded-[12px] shrink-0 w-full"
      data-name="Differentiator"
    >
      <div
        aria-hidden
        className="absolute border-[rgba(27,20,100,0.07)] border-b border-l-4 border-r border-solid border-t inset-0 pointer-events-none rounded-[12px]"
      />
      <CheckTitle2 />
      <p className="[word-break:break-word] font-['Outfit:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#959595] text-[14px] w-full">
        We integrate rigorous data protection protocols, secure state
        containers, and encrypted payment rails directly into the build core.
      </p>
    </div>
  );
}

function Frame24() {
  return (
    <div
      className="bg-[rgba(6,162,37,0.1)] content-stretch flex items-center justify-center p-[4px] relative rounded-[100px] shrink-0"
      data-name="Frame"
    >
      <CheckIcon className="size-[14px] text-[#06A225]" />
    </div>
  );
}

function CheckTitle3() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full"
      data-name="Check Title"
    >
      <Frame24 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Outfit:Bold',sans-serif] font-bold leading-[normal] min-w-px relative text-[#1f1f1f] text-[16px]">
        Local Expertise, Global Vision
      </p>
    </div>
  );
}

function Differentiator3() {
  return (
    <div
      className="bg-white content-stretch drop-shadow-[0px_8px_15px_rgba(0,53,128,0.02)] flex flex-col gap-[10px] items-start p-[24px] relative rounded-[12px] shrink-0 w-full"
      data-name="Differentiator"
    >
      <div
        aria-hidden
        className="absolute border-[rgba(27,20,100,0.07)] border-b border-l-4 border-r border-solid border-t inset-0 pointer-events-none rounded-[12px]"
      />
      <CheckTitle3 />
      <p className="[word-break:break-word] font-['Outfit:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#959595] text-[14px] w-full">
        We understand the nuances and payment standards of the Ethiopian market
        while deploying strictly premium, world-class code bases.
      </p>
    </div>
  );
}

function RightDifferentiators() {
  return (
    <div
      className="content-stretch flex flex-col gap-[16px] md:gap-[16px] items-start md:col-[6/span_7] md:row-1 md:justify-self-stretch md:self-start relative shrink-0 w-full"
      data-name="Right Differentiators"
    >
      <Differentiator />
      <Differentiator1 />
      <Differentiator2 />
      <Differentiator3 />
    </div>
  );
}

function WhyPartnerSplitGrid() {
  return (
    <div
      className="flex flex-col md:grid gap-[32px] md:gap-x-[64px] md:gap-y-[64px] md:grid-cols-[repeat(12,minmax(0,1fr))] md:grid-rows-[repeat(1,fit-content(100%))] relative shrink-0 w-full"
      data-name="Why Partner Split Grid"
    >
      <LeftContent />
      <RightDifferentiators />
    </div>
  );
}

export function WhyPartnerSection() {
  return (
    <div
      id="why-us"
      className="content-stretch flex flex-col items-start px-[20px] md:px-12 lg:px-16 xl:px-20 py-[48px] md:py-[112px] relative shrink-0 w-full scroll-mt-[68px]"
      data-name="Why Partner Section"
    >
      <WhyPartnerSplitGrid />
    </div>
  );
}
