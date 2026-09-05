import Image from "next/image";

import {
  imgFullColorNovasLogo1Src,
  imgHeroSrc,
  imgImage17Src,
  imgImage18Src,
  imgImage19Src,
  imgLogisticsCoverSrc,
  imgMobilityCoverSrc,
  imgNovasDesktopMockupSrc,
} from "./assets";
import svgPaths from "./svg-ww4f5k9fbe";
import { Eyebrow } from "./ui/Eyebrow";

function TitleBlock() {
  return (
    <div
      className="content-stretch flex flex-col gap-[12px] md:gap-[16px] items-start relative shrink-0 w-full md:w-[600px]"
      data-name="Title Block"
    >
      <Eyebrow variant="onLight">Excellence in Action</Eyebrow>
      <p className="[word-break:break-word] font-['Outfit:Bold',sans-serif] font-bold leading-[1.3] md:leading-[1.25] min-w-full relative shrink-0 text-[#1b1464] text-[26px] md:text-[36px] w-[min-content]">
        Featured Portfolio
      </p>
    </div>
  );
}

function SectionHeader() {
  return (
    <div
      className="content-stretch flex flex-col md:flex-row items-start md:items-end justify-between relative shrink-0 w-full gap-[12px]"
      data-name="Section Header"
    >
      <TitleBlock />
      <p className="[word-break:break-word] font-['Outfit:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1b1464] text-[14px] uppercase whitespace-nowrap">
        View All Cases
      </p>
    </div>
  );
}

function BezelTopBar() {
  return (
    <div
      className="absolute flex h-[5.76px] items-center justify-center left-[205.68px] right-[205.54px] top-0"
      style={{ containerType: "size" }}
    >
      <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
        <div
          className="content-stretch flex h-full items-center justify-center relative"
          data-name="Bezel Top Bar"
        >
          <div className="relative shrink-0 size-[1.92px]" data-name="Ellipse">
            <svg
              className="absolute block inset-0 size-full"
              fill="none"
              height="1.92"
              preserveAspectRatio="none"
              viewBox="0 0 1.92 1.92"
              width="1.92"
            >
              <circle
                cx="0.96"
                cy="0.96"
                fill="#1E1E1E"
                id="Ellipse"
                r="0.96"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Menus() {
  return (
    <div
      className="bg-[rgba(255,255,255,0.12)] content-stretch flex items-center justify-center p-[2.762px] relative rounded-[100px] shrink-0"
      data-name="Menus"
    >
      <div className="relative rounded-[100px] shrink-0" data-name="Tab">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[3.683px] py-[2.762px] relative size-full">
            <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[3.68px] text-white whitespace-nowrap">
              Home
            </p>
          </div>
        </div>
      </div>
      <div className="relative shrink-0" data-name="Tab">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[3.683px] py-[2.762px] relative size-full">
            <p className="[word-break:break-word] font-['Outfit:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[3.68px] text-white whitespace-nowrap">{`My Booking `}</p>
          </div>
        </div>
      </div>
      <div className="relative shrink-0" data-name="Tab">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[3.683px] py-[2.762px] relative size-full">
            <p className="[word-break:break-word] font-['Outfit:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[3.68px] text-white whitespace-nowrap">
              List my Place
            </p>
          </div>
        </div>
      </div>
      <div className="relative shrink-0" data-name="Tab">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[3.683px] py-[2.762px] relative size-full">
            <p className="[word-break:break-word] font-['Outfit:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[3.68px] text-white whitespace-nowrap">
              About Us
            </p>
          </div>
        </div>
      </div>
      <div className="relative shrink-0" data-name="Tab">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[3.683px] py-[2.762px] relative size-full">
            <p className="[word-break:break-word] font-['Outfit:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[3.68px] text-white whitespace-nowrap">
              Blogs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div
      className="content-stretch flex items-center justify-center px-[3.683px] py-[2.762px] relative rounded-[100px] shrink-0"
      data-name="Button"
    >
      <p className="[word-break:break-word] font-['Outfit:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#030169] text-[3.68px] whitespace-nowrap">
        Sign Up
      </p>
    </div>
  );
}

function Button1() {
  return (
    <div
      className="bg-[#030169] content-stretch flex items-center justify-center px-[3.683px] py-[2.762px] relative rounded-[100px] shrink-0"
      data-name="Button"
    >
      <p className="[word-break:break-word] font-['Outfit:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[3.68px] text-white whitespace-nowrap">
        Log In
      </p>
    </div>
  );
}

function HeroText() {
  return (
    <div
      className="[word-break:break-word] backdrop-blur-[0px] content-stretch flex flex-col gap-[2.762px] items-center justify-center p-[5.525px] relative rounded-[23.02px] shrink-0 text-center w-[207.179px]"
      data-name="Hero Text"
    >
      <div className="capitalize font-['Outfit:Bold',sans-serif] font-bold leading-[0] min-w-full relative shrink-0 text-[14.733px] text-white w-[min-content] whitespace-pre-wrap">
        <p className="leading-[normal] mb-0">{`Find Your Perfect Stay, `}</p>
        <p className="leading-[normal]">Anywhere in Ethiopia</p>
      </div>
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#f2f2f2] text-[5.525px] w-[168.046px]">
        Discover beautiful apartments and short stays designed for comfort,
        style, and easy booking. From city escapes to business trips, your next
        home is just a click away.
      </p>
    </div>
  );
}

function HintIcon() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] gap-[1.842px] items-center min-w-px relative"
      data-name="Hint & Icon"
    >
      <p className="[word-break:break-word] font-['Outfit:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#888] text-[3.68px] whitespace-nowrap">{`Search Hotels & Cities`}</p>
    </div>
  );
}

function Input() {
  return (
    <div
      className="bg-white relative rounded-[24px] shrink-0 w-full"
      data-name="Input"
    >
      <div
        aria-hidden
        className="absolute border-[#e5e5e5] border-[0.138px] border-solid inset-0 pointer-events-none rounded-[24px]"
      />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[2.762px] items-center p-[3.683px] relative size-full">
          <div
            className="relative shrink-0 size-[10.129px]"
            data-name="image 17"
          >
            <Image
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={imgImage17Src}
              width={10}
              height={10}
            />
          </div>
          <HintIcon />
        </div>
      </div>
    </div>
  );
}

function HintIcon1() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] gap-[1.842px] items-center min-w-px relative"
      data-name="Hint & Icon"
    >
      <p className="[word-break:break-word] font-['Outfit:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#888] text-[3.68px] whitespace-nowrap">{`Select your Dates `}</p>
    </div>
  );
}

function Input1() {
  return (
    <div
      className="bg-white relative rounded-[24px] shrink-0 w-full"
      data-name="Input"
    >
      <div
        aria-hidden
        className="absolute border-[#e5e5e5] border-[0.138px] border-solid inset-0 pointer-events-none rounded-[24px]"
      />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[2.762px] items-center p-[3.683px] relative size-full">
          <div
            className="relative shrink-0 size-[10.129px]"
            data-name="image 17"
          >
            <Image
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={imgImage18Src}
              width={10}
              height={10}
            />
          </div>
          <HintIcon1 />
        </div>
      </div>
    </div>
  );
}

function HintIcon2() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] gap-[1.842px] items-center min-w-px relative"
      data-name="Hint & Icon"
    >
      <p className="[word-break:break-word] font-['Outfit:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#888] text-[3.68px] whitespace-nowrap">{`Enter Traveller’s `}</p>
    </div>
  );
}

function Input2() {
  return (
    <div
      className="bg-white relative rounded-[24px] shrink-0 w-full"
      data-name="Input"
    >
      <div
        aria-hidden
        className="absolute border-[#e5e5e5] border-[0.138px] border-solid inset-0 pointer-events-none rounded-[24px]"
      />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[2.762px] items-center p-[3.683px] relative size-full">
          <div
            className="relative shrink-0 size-[10.129px]"
            data-name="image 17"
          >
            <Image
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={imgImage19Src}
              width={10}
              height={10}
            />
          </div>
          <HintIcon2 />
        </div>
      </div>
    </div>
  );
}

function Field() {
  return (
    <div
      className="content-stretch flex gap-[2.302px] items-start relative shrink-0 w-full"
      data-name="Field"
    >
      <div className="flex-[1_0_0] min-w-px relative" data-name="Search Input">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col gap-[1.842px] items-start justify-center py-[2.762px] relative size-full">
            <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#1f1f1f] text-[3.68px] whitespace-nowrap">
              Where to?
            </p>
            <Input />
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-w-px relative" data-name="Search Input">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col gap-[1.842px] items-start justify-center py-[2.762px] relative size-full">
            <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#1f1f1f] text-[3.68px] whitespace-nowrap">
              When will?
            </p>
            <Input1 />
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-w-px relative" data-name="Search Input">
        <div className="flex flex-col items-center justify-end size-full">
          <div className="content-stretch flex flex-col gap-[1.842px] items-center justify-end py-[2.762px] relative size-full">
            <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#1f1f1f] text-[3.68px] w-full">
              Who Will?
            </p>
            <Input2 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Chips1() {
  return (
    <div
      className="bg-[#f0f0ff] content-stretch flex items-center justify-center px-[7.366px] py-[3.683px] relative rounded-[23.02px] shrink-0"
      data-name="Chips"
    >
      <p className="[word-break:break-word] font-['Outfit:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1f1f1f] text-[3.683px] whitespace-nowrap">
        Hotels
      </p>
    </div>
  );
}

function Chips2() {
  return (
    <div
      className="bg-[#f0f0ff] content-stretch flex items-center justify-center p-[3.683px] relative rounded-[23.02px] shrink-0"
      data-name="Chips"
    >
      <p className="[word-break:break-word] font-['Outfit:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1f1f1f] text-[3.683px] whitespace-nowrap">
        Guest Houses
      </p>
    </div>
  );
}

function Chips3() {
  return (
    <div
      className="bg-[#f0f0ff] content-stretch flex items-center justify-center p-[3.683px] relative rounded-[23.02px] shrink-0"
      data-name="Chips"
    >
      <p className="[word-break:break-word] font-['Outfit:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1f1f1f] text-[3.683px] whitespace-nowrap">
        Apartments
      </p>
    </div>
  );
}

function Chips() {
  return (
    <div
      className="content-stretch flex gap-[3.683px] items-center relative shrink-0"
      data-name="Chips"
    >
      <Chips1 />
      <Chips2 />
      <Chips3 />
    </div>
  );
}

function Preference() {
  return (
    <div
      className="content-stretch flex gap-[2.762px] items-center relative shrink-0"
      data-name="Preference"
    >
      <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#1f1f1f] text-[4.604px] whitespace-nowrap">
        I am Looking for
      </p>
      <Chips />
    </div>
  );
}

function Chips4() {
  return (
    <div
      className="bg-[#030169] content-stretch flex gap-[2.302px] items-center justify-center pl-[4.604px] pr-[5.525px] py-[5.525px] relative rounded-[23.02px] shrink-0"
      data-name="Chips"
    >
      <div className="relative shrink-0 size-[5.525px]" data-name="search-01">
        <div
          className="absolute inset-[72.92%_8.33%_8.33%_72.92%]"
          data-name="Vector"
        >
          <div className="absolute inset-[-16.67%]">
            <svg
              className="block size-full"
              fill="none"
              height="1.3812"
              preserveAspectRatio="none"
              viewBox="0 0 1.3812 1.3812"
              width="1.3812"
            >
              <path
                d={svgPaths.p1279b800}
                id="Vector"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0.345299"
              />
            </svg>
          </div>
        </div>
        <div
          className="absolute inset-[8.33%_16.67%_16.67%_8.33%]"
          data-name="Vector"
        >
          <div className="absolute inset-[-4.17%]">
            <svg
              className="block size-full"
              fill="none"
              height="4.48889"
              preserveAspectRatio="none"
              viewBox="0 0 4.48889 4.48889"
              width="4.48889"
            >
              <path
                d={svgPaths.p3b0dd800}
                id="Vector"
                stroke="white"
                strokeLinejoin="round"
                strokeWidth="0.345299"
              />
            </svg>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[4.604px] text-white whitespace-nowrap">{`Search Places `}</p>
    </div>
  );
}

function Grouped() {
  return (
    <div
      className="content-stretch flex items-start justify-between relative shrink-0 w-full"
      data-name="Grouped"
    >
      <Preference />
      <Chips4 />
    </div>
  );
}

function SearchField() {
  return (
    <div
      className="bg-white drop-shadow-[0px_0px_5.064px_rgba(0,0,0,0.06)] relative rounded-[11.51px] shrink-0 w-full"
      data-name="Search Field"
    >
      <div className="content-stretch flex flex-col items-start px-[7.366px] py-[5.525px] relative size-full">
        <div
          className="relative shrink-0 w-[341.616px]"
          data-name="Search Field"
        >
          <div className="flex flex-col items-center size-full">
            <div className="content-stretch flex flex-col items-center p-[2.302px] relative size-full">
              <Field />
            </div>
          </div>
        </div>
        <Grouped />
      </div>
    </div>
  );
}

function InputSection() {
  return (
    <div
      className="content-stretch flex flex-col gap-[33.149px] items-center relative shrink-0 w-[351.745px]"
      data-name="Input Section"
    >
      <HeroText />
      <SearchField />
    </div>
  );
}

function HeroSection1() {
  return (
    <div
      className="content-stretch flex flex-col gap-[23.02px] items-center relative shrink-0 w-[397.785px]"
      data-name="Hero section"
    >
      <div className="relative shrink-0 w-[397.785px]" data-name="Nav Bars">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-between pt-[7.366px] px-[14.733px] relative size-full">
            <Menus />
            <div
              className="h-[14.733px] relative shrink-0 w-[45.169px]"
              data-name="Full Color - Novas Logo 1"
            >
              <Image
                alt=""
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                src={imgFullColorNovasLogo1Src}
                width={45}
                height={15}
              />
            </div>
            <div
              className="relative shrink-0 w-[111.417px]"
              data-name="Profiles"
            >
              <div className="flex flex-row items-center justify-end size-full">
                <div className="content-stretch flex gap-[2.762px] items-center justify-end relative size-full">
                  <Button />
                  <Button1 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <InputSection />
    </div>
  );
}

function Pagination1() {
  return (
    <div className="flex h-[11.51px] items-center justify-center relative shrink-0 w-[2.762px]">
      <div className="flex-none rotate-90">
        <div
          className="bg-[#030169] h-[2.762px] relative rounded-[23.02px] w-[11.51px]"
          data-name="Pagination"
        />
      </div>
    </div>
  );
}

function Pagination2() {
  return (
    <div
      className="bg-white relative rounded-[23.02px] shrink-0 size-[2.762px]"
      data-name="Pagination"
    />
  );
}

function Pagination3() {
  return (
    <div
      className="bg-white relative rounded-[23.02px] shrink-0 size-[2.762px]"
      data-name="Pagination"
    />
  );
}

function Pagination() {
  return (
    <div
      className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[1.381px] items-start justify-center left-[383.51px] top-[calc(50%-14.52px)]"
      data-name="Pagination"
    >
      <Pagination1 />
      <Pagination2 />
      <Pagination3 />
    </div>
  );
}

function Hero() {
  return (
    <div
      className="content-stretch flex flex-col gap-[2.302px] items-start overflow-clip pb-[29.466px] relative shrink-0"
      data-name="Hero"
    >
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            alt=""
            className="absolute h-[119.13%] left-0 max-w-none top-[0.04%] w-full"
            src={imgHeroSrc}
            width={100}
            height={100}
          />
        </div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.01) 70.484%, rgba(255, 255, 255, 0.32) 81.937%, rgba(255, 255, 255, 0.64) 89.791%, rgb(255, 255, 255) 100%)",
          }}
        />
      </div>
      <HeroSection1 />
      <Pagination />
    </div>
  );
}

function Bezel() {
  return (
    <div
      className="bg-[#0f0f11] content-stretch drop-shadow-[0px_9.6px_9.6px_rgba(0,0,0,0.35)] flex flex-col items-start p-[7.68px] relative rounded-[11.52px] shrink-0"
      data-name="Bezel"
    >
      <div
        aria-hidden
        className="absolute border-[#2c2d31] border-[0.48px] border-solid inset-0 pointer-events-none rounded-[11.52px]"
      />
      <BezelTopBar />
      <Hero />
    </div>
  );
}

function MonitorAssembly() {
  return (
    <div
      className="absolute content-stretch flex flex-col items-center left-0 right-0 top-[38.4px]"
      data-name="Monitor Assembly"
    >
      <Bezel />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <div
            className="h-[9.6px] relative w-[115.2px]"
            data-name="Stand Base"
          >
            <div className="absolute inset-[-20%_3.37%_-35%_3.37%]">
              <svg
                className="block size-full"
                fill="none"
                height="14.88"
                preserveAspectRatio="none"
                viewBox="0 0 107.446 14.88"
                width="107.446"
              >
                <g filter="url(#filter0_d_0_430)" id="Stand Base">
                  <path
                    d={svgPaths.p8449380}
                    fill="url(#paint0_linear_0_430)"
                  />
                </g>
                <defs>
                  <filter
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                    height="14.88"
                    id="filter0_d_0_430"
                    width="107.446"
                    x="0"
                    y="0"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      result="hardAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feOffset dy="1.92" />
                    <feGaussianBlur stdDeviation="1.92" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25098 0"
                    />
                    <feBlend
                      in2="BackgroundImageFix"
                      mode="normal"
                      result="effect1_dropShadow_0_430"
                    />
                    <feBlend
                      in="SourceGraphic"
                      in2="effect1_dropShadow_0_430"
                      mode="normal"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint0_linear_0_430"
                    x1="53.7231"
                    x2="53.7231"
                    y1="1.92"
                    y2="11.52"
                  >
                    <stop stopColor="#3A3B3E" />
                    <stop offset="1" stopColor="#1E1F21" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MainSceneWorkspace() {
  return (
    <div
      className="absolute content-stretch flex flex-col h-[432px] items-center justify-end left-0 right-0 top-0"
      data-name="Main Scene Workspace"
    >
      <MonitorAssembly />
    </div>
  );
}

function WoodenDeskTop() {
  return (
    <div
      className="h-[105.6px] pointer-events-none relative shrink-0 w-full"
      data-name="Wooden Desk Top"
    >
      <div
        aria-hidden
        className="absolute bg-gradient-to-b from-[#eed7c1] inset-0 to-[#c0937f] via-1/2 via-[#d7b59e]"
      />
      <div
        aria-hidden
        className="absolute border-[rgba(255,255,255,0.2)] border-solid border-t-[0.48px] inset-0"
      />
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_-4.8px_9.6px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function NovasDesktopMockup() {
  return (
    <div
      className="absolute content-stretch flex flex-col items-center justify-end inset-0 min-h-[280px] md:min-h-[432px] overflow-clip rounded-2xl"
      data-name="novas-desktop-mockup"
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none rounded-2xl overflow-hidden"
      >
        <Image
          alt="Novas Desktop Mockup"
          className="object-cover object-center"
          src={imgNovasDesktopMockupSrc}
          fill
          sizes="(max-width: 768px) 100vw, 576px"
        />
        <div className="absolute bg-[rgba(0,0,0,0.1)] inset-0" />
      </div>
      <MainSceneWorkspace />
      <WoodenDeskTop />
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute inset-0">
      <NovasDesktopMockup />
    </div>
  );
}

function Frame9() {
  return (
    <div className="h-[220px] md:h-[326px] overflow-clip relative shrink-0 w-full max-w-[576px] mx-auto md:mx-0 rounded-2xl">
      <Frame10 />
    </div>
  );
}

function TitleLink() {
  return (
    <div
      className="[word-break:break-word] content-stretch flex flex-col md:flex-row font-['Outfit:Bold',sans-serif] font-bold items-start md:items-center justify-between relative shrink-0 w-full gap-[4px] md:gap-0 whitespace-nowrap"
      data-name="Title & Link"
    >
      <p className="leading-[1.3] relative shrink-0 text-[18px] md:text-[24px] text-white">
        Novas Booking
      </p>
      <p className="leading-[normal] relative shrink-0 text-[#ffa600] text-[13px] md:text-[14px]">
        novasbooking.com
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div
      className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-start px-[8px] md:px-[12px] py-[4px] md:py-[6px] relative rounded-[4px] md:rounded-[6px] shrink-0"
      data-name="Frame"
    >
      <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#ffa600] text-[10px] md:text-[12px] whitespace-nowrap">
        Next.js
      </p>
    </div>
  );
}

function Frame3() {
  return (
    <div
      className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-start px-[8px] md:px-[12px] py-[4px] md:py-[6px] relative rounded-[4px] md:rounded-[6px] shrink-0"
      data-name="Frame"
    >
      <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#ffa600] text-[10px] md:text-[12px] whitespace-nowrap">
        PostgreSQL
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div
      className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-start px-[8px] md:px-[12px] py-[4px] md:py-[6px] relative rounded-[4px] md:rounded-[6px] shrink-0"
      data-name="Frame"
    >
      <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#ffa600] text-[10px] md:text-[12px] whitespace-nowrap">
        Real-time Booking
      </p>
    </div>
  );
}

function Frame7() {
  return (
    <div
      className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-start px-[8px] md:px-[12px] py-[4px] md:py-[6px] relative rounded-[4px] md:rounded-[6px] shrink-0"
      data-name="Frame"
    >
      <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#ffa600] text-[10px] md:text-[12px] whitespace-nowrap">
        Stripe
      </p>
    </div>
  );
}

function Frame8() {
  return (
    <div
      className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-start px-[8px] md:px-[12px] py-[4px] md:py-[6px] relative rounded-[4px] md:rounded-[6px] shrink-0"
      data-name="Frame"
    >
      <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#ffa600] text-[10px] md:text-[12px] whitespace-nowrap">
        Telebirr
      </p>
    </div>
  );
}

function Frame11() {
  return (
    <div
      className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-start px-[8px] md:px-[12px] py-[4px] md:py-[6px] relative rounded-[4px] md:rounded-[6px] shrink-0"
      data-name="Frame"
    >
      <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#ffa600] text-[10px] md:text-[12px] whitespace-nowrap">
        CBE Birr
      </p>
    </div>
  );
}

function Frame12() {
  return (
    <div
      className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-start px-[8px] md:px-[12px] py-[4px] md:py-[6px] relative rounded-[4px] md:rounded-[6px] shrink-0"
      data-name="Frame"
    >
      <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#ffa600] text-[10px] md:text-[12px] whitespace-nowrap">
        AWS
      </p>
    </div>
  );
}

function TechUsedList() {
  return (
    <div
      className="content-start flex flex-wrap gap-[4px] md:gap-[8px] items-start relative shrink-0 w-full"
      data-name="Tech Used List"
    >
      <Frame2 />
      <Frame3 />
      <Frame4 />
      <Frame7 />
      <Frame8 />
      <Frame11 />
      <Frame12 />
    </div>
  );
}

function FlagshipDetails() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] md:gap-[24px] items-start min-w-px relative"
      data-name="Flagship Details"
    >
      <TitleLink />
      <p className="[word-break:break-word] font-['Outfit:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#e5f0fc] text-[13px] md:text-[15px] w-full">
        A Booking.com-level ecosystem designed for the global travel market.
        Enterprise-grade platform built on a cutting-edge tech stack for
        sub-second latency and massive scalability. Features sophisticated
        inventory engine, high-speed search filters, and real-time availability.
        Fully integrated with international channels (Visa, Mastercard, Stripe)
        and Local Ethiopian mobile payment methods (Telebirr, CBE Birr).
      </p>
      <TechUsedList />
    </div>
  );
}

function FlagshipCase() {
  return (
    <div
      className="bg-[#1b1464] content-stretch flex flex-col md:flex-row gap-[20px] md:gap-[48px] items-center overflow-clip p-[20px] md:p-[40px] relative rounded-[16px] md:rounded-[20px] shrink-0 w-full"
      data-name="Flagship Case"
    >
      <Frame9 />
      <FlagshipDetails />
    </div>
  );
}

function Frame13() {
  return (
    <div
      className="bg-[#f0f0ff] content-stretch flex items-start px-[8px] md:px-[12px] py-[4px] md:py-[6px] relative rounded-[4px] md:rounded-[6px] shrink-0"
      data-name="Frame"
    >
      <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#1b1464] text-[11px] md:text-[12px] whitespace-nowrap">
        FastAPI
      </p>
    </div>
  );
}

function Frame14() {
  return (
    <div
      className="bg-[#f0f0ff] content-stretch flex items-start px-[8px] md:px-[12px] py-[4px] md:py-[6px] relative rounded-[4px] md:rounded-[6px] shrink-0"
      data-name="Frame"
    >
      <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#1b1464] text-[11px] md:text-[12px] whitespace-nowrap">
        MongoDB
      </p>
    </div>
  );
}

function Frame15() {
  return (
    <div
      className="bg-[#f0f0ff] content-stretch flex items-start px-[8px] md:px-[12px] py-[4px] md:py-[6px] relative rounded-[4px] md:rounded-[6px] shrink-0"
      data-name="Frame"
    >
      <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#1b1464] text-[11px] md:text-[12px] whitespace-nowrap">
        Real-time GPS
      </p>
    </div>
  );
}

function Frame16() {
  return (
    <div
      className="bg-[#f0f0ff] content-stretch flex items-start px-[8px] md:px-[12px] py-[4px] md:py-[6px] relative rounded-[4px] md:rounded-[6px] shrink-0"
      data-name="Frame"
    >
      <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#1b1464] text-[11px] md:text-[12px] whitespace-nowrap">
        Cloud Run
      </p>
    </div>
  );
}

function TechUsed() {
  return (
    <div
      className="content-start flex flex-wrap gap-[4px] md:gap-[8px] items-start relative shrink-0 w-full"
      data-name="Tech Used"
    >
      <Frame13 />
      <Frame14 />
      <Frame15 />
      <Frame16 />
    </div>
  );
}

function SecondaryDetails() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] md:gap-[24px] items-start min-w-px relative"
      data-name="Secondary Details"
    >
      <p className="[word-break:break-word] font-['Outfit:Bold',sans-serif] font-bold leading-[1.3] relative shrink-0 text-[#1b1464] text-[18px] md:text-[24px] w-full">{`Smart Logistics & Freight Marketplace`}</p>
      <p className="[word-break:break-word] font-['Outfit:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#1f1f1f] text-[13px] md:text-[15px] w-full">
        High-performance logistics hub connecting regional shippers with
        verified transport providers. Outfitted with automated load matching,
        real-time GPS fleet tracking, and secure digital document management to
        maximize operational efficiency.
      </p>
      <TechUsed />
    </div>
  );
}

function SecondaryCase() {
  return (
    <div
      className="bg-white content-stretch flex flex-col md:flex-row gap-[16px] md:gap-[48px] items-center p-[20px] md:p-[40px] relative rounded-[16px] md:rounded-[20px] shrink-0 w-full"
      data-name="Secondary Case"
    >
      <div
        aria-hidden
        className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[16px] md:rounded-[20px]"
      />
      <SecondaryDetails />
      <div
        className="h-[160px] md:h-[240px] relative rounded-2xl md:rounded-3xl shrink-0 w-full max-w-[400px] md:w-[400px] overflow-hidden mx-auto md:mx-0"
        data-name="Logistics Cover"
      >
        <Image
          alt="Smart Logistics & Freight"
          className="object-cover object-center rounded-2xl md:rounded-3xl size-full"
          src={imgLogisticsCoverSrc}
          fill
          sizes="(max-width: 768px) 100vw, 400px"
        />
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div
      className="bg-[#f0f0ff] content-stretch flex items-start px-[8px] md:px-[12px] py-[4px] md:py-[6px] relative rounded-[4px] md:rounded-[6px] shrink-0"
      data-name="Frame"
    >
      <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#1b1464] text-[11px] md:text-[12px] whitespace-nowrap">
        Flutter
      </p>
    </div>
  );
}

function Frame18() {
  return (
    <div
      className="bg-[#f0f0ff] content-stretch flex items-start px-[8px] md:px-[12px] py-[4px] md:py-[6px] relative rounded-[4px] md:rounded-[6px] shrink-0"
      data-name="Frame"
    >
      <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#1b1464] text-[11px] md:text-[12px] whitespace-nowrap">
        Node.js
      </p>
    </div>
  );
}

function Frame19() {
  return (
    <div
      className="bg-[#f0f0ff] content-stretch flex items-start px-[8px] md:px-[12px] py-[4px] md:py-[6px] relative rounded-[4px] md:rounded-[6px] shrink-0"
      data-name="Frame"
    >
      <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#1b1464] text-[11px] md:text-[12px] whitespace-nowrap">
        Redis
      </p>
    </div>
  );
}

function Frame20() {
  return (
    <div
      className="bg-[#f0f0ff] content-stretch flex items-start px-[8px] md:px-[12px] py-[4px] md:py-[6px] relative rounded-[4px] md:rounded-[6px] shrink-0"
      data-name="Frame"
    >
      <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#1b1464] text-[11px] md:text-[12px] whitespace-nowrap">
        Google Maps API
      </p>
    </div>
  );
}

function TechUsed1() {
  return (
    <div
      className="content-start flex flex-wrap gap-[4px] md:gap-[8px] items-start relative shrink-0 w-full"
      data-name="Tech Used"
    >
      <Frame17 />
      <Frame18 />
      <Frame19 />
      <Frame20 />
    </div>
  );
}

function ThirdDetails() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] md:gap-[24px] items-start min-w-px relative"
      data-name="Third Details"
    >
      <p className="[word-break:break-word] font-['Outfit:Bold',sans-serif] font-bold leading-[1.3] relative shrink-0 text-[#1b1464] text-[18px] md:text-[24px] w-full">{`Ride-Sharing & Urban Mobility`}</p>
      <p className="[word-break:break-word] font-['Outfit:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#1f1f1f] text-[13px] md:text-[15px] w-full">
        A high-availability urban mobility platform tailored for reliable,
        local, on-demand transportation. Integrated with high-performance
        routing models, dynamic pricing calculations, and offline CBE-payment
        validation structures.
      </p>
      <TechUsed1 />
    </div>
  );
}

function ThirdCase() {
  return (
    <div
      className="bg-white content-stretch flex flex-col md:flex-row gap-[16px] md:gap-[48px] items-center p-[20px] md:p-[40px] relative rounded-[16px] md:rounded-[20px] shrink-0 w-full"
      data-name="Third Case"
    >
      <div
        aria-hidden
        className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[16px] md:rounded-[20px]"
      />
      <div
        className="h-[160px] md:h-[240px] relative rounded-2xl md:rounded-3xl shrink-0 w-full max-w-[400px] md:w-[400px] overflow-hidden mx-auto md:mx-0"
        data-name="Mobility Cover"
      >
        <Image
          alt="Ride-Sharing & Urban Mobility"
          className="object-cover object-center rounded-2xl md:rounded-3xl size-full"
          src={imgMobilityCoverSrc}
          fill
          sizes="(max-width: 768px) 100vw, 400px"
        />
      </div>
      <ThirdDetails />
    </div>
  );
}

export function PortfolioSection() {
  return (
    <div
      id="portfolio"
      className="bg-[#f0f0ff] content-stretch flex flex-col gap-[28px] md:gap-[48px] items-start px-[20px] md:px-12 lg:px-16 xl:px-20 py-[48px] md:py-[112px] relative shrink-0 w-full scroll-mt-[68px]"
      data-name="Portfolio Section"
    >
      <SectionHeader />
      <FlagshipCase />
      <SecondaryCase />
      <ThirdCase />
    </div>
  );
}
