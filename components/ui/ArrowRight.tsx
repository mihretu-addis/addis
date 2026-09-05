import svgPaths from "../svg-ww4f5k9fbe";

type ArrowRightProps = {
  stroke?: string;
};

export function ArrowRight({ stroke = "#0B0642" }: ArrowRightProps) {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="arrow-right">
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="12"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
        width="12"
      >
        <g id="arrow-right">
          <path
            d={svgPaths.p278a3600}
            id="Vector"
            stroke={stroke}
            strokeLinecap="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
}
