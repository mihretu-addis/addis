type EyebrowProps = {
  children: string;
  variant?: "onDark" | "onLight";
};

export function Eyebrow({ children, variant = "onDark" }: EyebrowProps) {
  if (variant === "onLight") {
    return (
      <div
        className="bg-[rgba(27,20,100,0.07)] content-stretch flex items-center justify-center px-[16px] py-[6px] relative rounded-[100px] shrink-0"
        data-name="Eyebrow"
      >
        <div
          aria-hidden
          className="absolute border border-[rgba(27,20,100,0.15)] border-solid inset-0 pointer-events-none rounded-[100px]"
        />
        <p className="[word-break:break-word] font-['Outfit:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1b1464] text-[11px] uppercase whitespace-nowrap">
          {children}
        </p>
      </div>
    );
  }

  return (
    <div
      className="bg-[rgba(255,255,255,0.08)] content-stretch flex items-center justify-center px-[16px] py-[6px] relative rounded-[100px] shrink-0"
      data-name="Eyebrow"
    >
      <div
        aria-hidden
        className="absolute border border-[rgba(255,255,255,0.15)] border-solid inset-0 pointer-events-none rounded-[100px]"
      />
      <p className="[word-break:break-word] font-['Outfit:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#ffa600] text-[11px] uppercase whitespace-nowrap">
        {children}
      </p>
    </div>
  );
}
