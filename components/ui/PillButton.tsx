import type { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from "react";
import { ArrowRight } from "./ArrowRight";

type PillButtonProps = {
  label: string;
  variant?: "solid" | "outline" | "onLight";
  className?: string;
  href?: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  disabled?: boolean;
};

function PillContent({
  label,
  variant,
  showArrow,
}: {
  label: string;
  variant: "solid" | "outline" | "onLight";
  showArrow: boolean;
}) {
  if (variant === "onLight") {
    return (
      <p className="[word-break:break-word] font-['Outfit:Bold',sans-serif] font-bold leading-[14px] relative shrink-0 text-[11px] text-[#1b1464] uppercase whitespace-nowrap">
        {label}
      </p>
    );
  }

  if (variant === "outline") {
    return (
      <>
        <div
          aria-hidden
          className="absolute border-[1.5px] border-solid border-white inset-0 pointer-events-none rounded-[100px]"
        />
        <p className="[word-break:break-word] font-['Outfit:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[12px] md:text-[14px] text-white whitespace-nowrap">
          {label}
        </p>
        {showArrow ? <ArrowRight stroke="white" /> : null}
      </>
    );
  }

  return (
    <>
      <p className="[word-break:break-word] font-['Outfit:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0b0642] text-[12px] md:text-[14px] whitespace-nowrap">
        {label}
      </p>
      {showArrow ? <ArrowRight /> : null}
    </>
  );
}

function getVariantClassName(variant: "solid" | "outline" | "onLight") {
  if (variant === "onLight") {
    return "bg-[rgba(27,20,100,0.07)] border border-[rgba(27,20,100,0.149)] content-stretch flex items-center justify-center px-[16px] py-[6px] relative rounded-[100px] shrink-0";
  }

  if (variant === "outline") {
    return "bg-[rgba(0,0,0,0)] content-stretch flex gap-[8px] h-[46px] md:h-[46px] items-center justify-center px-[12px] md:px-[24px] py-[10px] md:py-[12px] relative rounded-[100px] shrink-0";
  }

  return "bg-[#ffa600] content-stretch flex gap-[8px] h-[46px] md:h-[46px] items-center justify-center px-[12px] md:px-[24px] py-[10px] md:py-[12px] relative rounded-[100px] shrink-0 disabled:opacity-60";
}

export function PillButton({
  label,
  variant = "solid",
  className = "",
  href,
  type = "button",
  onClick,
  disabled,
}: PillButtonProps) {
  const showArrow = variant !== "onLight";
  const baseClassName = `${getVariantClassName(variant)} ${className}`;
  const content: ReactNode = (
    <PillContent label={label} variant={variant} showArrow={showArrow} />
  );

  if (href) {
    return (
      <a
        href={href}
        className={baseClassName}
        data-name="Pill Button"
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClassName}
      data-name="Pill Button"
    >
      {content}
    </button>
  );
}
