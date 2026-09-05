import { Eyebrow } from "./ui/Eyebrow";
import { PillButton } from "./ui/PillButton";

function Actions() {
  return (
    <div
      className="content-stretch flex gap-[8px] md:gap-[16px] items-start relative shrink-0 w-full"
      data-name="Actions"
    >
      <PillButton label="Explore Services" variant="outline" href="#services" />
      <PillButton label="Consult Our Experts" href="#contact" />
    </div>
  );
}

function HeroDetails() {
  return (
    <div
      className="col-[1/span_7] md:col-[1/span_7] content-stretch flex flex-col gap-[24px] md:gap-[32px] items-start justify-self-stretch relative row-1 self-start shrink-0"
      data-name="Hero Details"
    >
      <Eyebrow>{`Empowering East Africa's Digital Renaissance`}</Eyebrow>
      <p className="[word-break:break-word] font-['Outfit:Bold',sans-serif] font-bold leading-[0] min-w-full relative shrink-0 text-[34px] md:text-[58px] text-white w-[min-content]">
        <span className="leading-[1.2]">{`Engineering High-Performance `}</span>
        <span className="leading-[1.2] text-[#ffa600]">Digital Solutions</span>
      </p>
      <p className="[word-break:break-word] font-['Outfit:Regular',sans-serif] font-normal leading-[1.6] min-w-full relative shrink-0 text-[#e5f0fc] text-[15px] md:text-[18px] w-[min-content]">
        Founded in 2021 in Addis Ababa, AddisTech transforms complex business
        visions into scalable, market-ready technology. We bridge regional
        potential with global engineering standards.
      </p>
      <Actions />
    </div>
  );
}

function WindowControls() {
  return (
    <div
      className="content-stretch flex gap-[6px] md:gap-[8px] items-start relative shrink-0"
      data-name="Window Controls"
    >
      <div
        className="bg-[#ff6467] relative rounded-[100px] shrink-0 size-[10px] md:size-[12px]"
        data-name="Rectangle"
      />
      <div
        className="bg-[#ffa600] relative rounded-[100px] shrink-0 size-[10px] md:size-[12px]"
        data-name="Rectangle"
      />
      <div
        className="bg-[#06a225] relative rounded-[100px] shrink-0 size-[10px] md:size-[12px]"
        data-name="Rectangle"
      />
    </div>
  );
}

function MockupHeader() {
  return (
    <div
      className="content-stretch flex items-center justify-between p-[12px] md:p-[16px] relative shrink-0 w-full"
      data-name="Mockup Header"
    >
      <div
        aria-hidden
        className="absolute border-[rgba(255,255,255,0.1)] border-b border-solid inset-0 pointer-events-none"
      />
      <WindowControls />
      <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#b3d4f8] text-[12px] whitespace-nowrap">
        addistech_runtime_v2.sh
      </p>
    </div>
  );
}

function MockupCode() {
  return (
    <div
      className="[word-break:break-word] content-stretch flex flex-col font-['Outfit:Regular',sans-serif] font-normal gap-[8px] md:gap-[12px] items-start p-[16px] md:p-[24px] relative shrink-0 text-[12px] md:text-[14px] w-full"
      data-name="Mockup Code"
    >
      <p className="leading-[normal] relative shrink-0 text-[#ffa600] w-full">{`const addisTechInstance = {`}</p>
      <p className="leading-[normal] relative shrink-0 text-white w-full whitespace-pre-wrap">{`  headquarters: "Addis Ababa, ET",`}</p>
      <p className="leading-[0] relative shrink-0 text-white w-full whitespace-pre-wrap">
        <span className="leading-[normal]">{`  founded: `}</span>
        <span className="leading-[normal] text-[#ffa600]">2021</span>
        <span className="leading-[normal]">,</span>
      </p>
      <p className="leading-[normal] relative shrink-0 text-white w-full whitespace-pre-wrap">{`  vision: "Transforming regional potential to global standards",`}</p>
      <p className="leading-[normal] relative shrink-0 text-white w-full whitespace-pre-wrap">{`  architectures: ["Ecosystems", "High-Performance", "Scalability"]`}</p>
      <p className="leading-[normal] relative shrink-0 text-[#ffa600] w-full">{`};`}</p>
    </div>
  );
}

function Frame1() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center relative shrink-0"
      data-name="Frame"
    >
      <div
        className="bg-[#06a225] relative rounded-[100px] shrink-0 size-[8px]"
        data-name="Rectangle"
      />
      <p className="[word-break:break-word] font-['Outfit:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#b3d4f8] text-[11px] whitespace-nowrap">{`System Synced: Latency < 0.1s`}</p>
    </div>
  );
}

function MockupFooter() {
  return (
    <div
      className="content-stretch flex items-center justify-between p-[10px] md:p-[16px] relative shrink-0 w-full"
      data-name="Mockup Footer"
    >
      <div
        aria-hidden
        className="absolute border-[rgba(255,255,255,0.1)] border-solid border-t inset-0 pointer-events-none"
      />
      <Frame1 />
    </div>
  );
}

function MockupFrame() {
  return (
    <div
      className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.05)] hidden md:block col-[8/span_5] h-[440px] justify-self-stretch relative rounded-[12px] row-1 shrink-0"
      data-name="Mockup Frame"
    >
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <MockupHeader />
        <MockupCode />
        <MockupFooter />
      </div>
      <div
        aria-hidden
        className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]"
      />
    </div>
  );
}

function HeroSplitGrid() {
  return (
    <div
      className="gap-x-[48px] gap-y-[32px] md:gap-y-[48px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] relative shrink-0 w-full"
      data-name="Hero Split Grid"
    >
      <HeroDetails />
      <MockupFrame />
    </div>
  );
}

function StatItem() {
  return (
    <div
      className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['Outfit:Bold',sans-serif] font-bold gap-[4px] md:gap-[8px] items-center md:items-start min-w-px justify-center relative"
      data-name="Stat Item 1"
    >
      <p className="leading-[1.25] relative shrink-0 text-[#ffa600] text-[28px] md:text-[36px] w-full text-center md:text-left">
        45+
      </p>
      <p className="leading-[normal] relative shrink-0 text-[#e5f0fc] text-[11px] uppercase w-full text-center md:text-left">
        Enterprise Projects Completed
      </p>
    </div>
  );
}

function StatItem1() {
  return (
    <div
      className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['Outfit:Bold',sans-serif] font-bold gap-[4px] md:gap-[8px] items-center md:items-start min-w-px justify-center relative"
      data-name="Stat Item 2"
    >
      <p className="leading-[1.25] relative shrink-0 text-[28px] md:text-[36px] text-white w-full text-center md:text-left">
        5+
      </p>
      <p className="leading-[normal] relative shrink-0 text-[#e5f0fc] text-[11px] uppercase w-full text-center md:text-left">
        Years of Engineering Excellence
      </p>
    </div>
  );
}

function StatItem2() {
  return (
    <div
      className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['Outfit:Bold',sans-serif] font-bold gap-[4px] md:gap-[8px] items-center md:items-start min-w-px justify-center relative"
      data-name="Stat Item 3"
    >
      <p className="leading-[1.25] relative shrink-0 text-[#ffa600] text-[28px] md:text-[36px] w-full text-center md:text-left">
        99.9%
      </p>
      <p className="leading-[normal] relative shrink-0 text-[#e5f0fc] text-[11px] uppercase w-full text-center md:text-left">{`Uptime & Scalability Reliability`}</p>
    </div>
  );
}

function StatBar() {
  return (
    <div
      className="content-stretch flex items-start justify-center md:justify-start pt-[24px] md:pt-[40px] gap-[20px] relative shrink-0 w-full"
      data-name="Stat Bar"
    >
      <div
        aria-hidden
        className="absolute border-[rgba(255,255,255,0.1)] border-solid border-t inset-0 pointer-events-none"
      />
      <StatItem />
      <StatItem1 />
      <StatItem2 />
    </div>
  );
}

export function HeroSection() {
  return (
    <div
      id="about"
      className="bg-gradient-to-r content-stretch flex flex-col from-[#1b1464] gap-[32px] md:gap-[64px] items-start overflow-clip px-[20px] md:px-12 lg:px-16 xl:px-20 py-[40px] md:py-[120px] relative shrink-0 to-[#0b0642] w-full scroll-mt-[68px]"
      data-name="Hero Section"
    >
      <div
        className="absolute bg-[rgba(0,108,228,0.15)] md:bg-[rgba(0,108,228,0.2)] blur-[40px] md:blur-[65px] h-[300px] md:h-[600px] left-[-100px] md:left-[-200px] rounded-[16777200px] top-[-50px] md:top-[-100px] w-[300px] md:w-[1200px]"
        data-name="Rectangle"
      />
      <div
        className="absolute bg-[rgba(255,166,0,0.11)] blur-[40px] md:blur-[65px] bottom-[-50px] md:bottom-[-100px] h-[250px] md:h-[500px] right-[-75px] md:right-[-150px] rounded-[16777200px] w-[500px] md:w-[1000px]"
        data-name="Rectangle"
      />
      <HeroSplitGrid />
      <StatBar />
    </div>
  );
}
