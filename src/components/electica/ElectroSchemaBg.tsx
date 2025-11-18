const ElectroSchemaBg = () => {
  return (
    <svg
      id="electric-bg-svg"
      width="2560"
      height="1440"
      viewBox="0 0 2560 1440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="bg-[#505050]"
    >
      <defs>
        <pattern
          id="gridPattern"
          x="0"
          y="0"
          width="8"
          height="8"
          patternUnits="userSpaceOnUse"
        >
          <g stroke="#00FF00" strokeWidth="0.2" strokeOpacity="0.5" fill="none">
            <rect x="0" y="0" width="8" height="8" />
          </g>
        </pattern>

        <g>
          <path id="arrow-left" d="M0 4 H12 V0 L24 6 L12 12 V8 H0 Z" />
          <path id="arrow-right" d="M0 6 L12 0 V4 H24 V8 H12 V12 Z" />
          <path id="arrow-up" d="M6 0 L12 12 H8 V24 H4 V12 H0 Z" />
          <path id="arrow-down" d="M6 24 L0 12 H4 V0 H8 V12 H12 Z" />
        </g>
      </defs>
      <rect
        id="grid"
        x="0"
        y="0"
        width="100%"
        height="100%"
        style={{ fill: "url(#gridPattern)" }}
      />
    </svg>
  );
};

export default ElectroSchemaBg;
