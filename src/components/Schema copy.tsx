//@ts-nocheck

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

{
  /* <style>
    #heating-svg #arrows path {
      animation-name: heating-change-color;
      animation-direction: alternate;
      animation-duration: 1s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }
    #heating-svg #line-hot-1,
    #heating-svg #line-cold-1,
    #heating-svg #line-hot-2,
    #heating-svg #line-cold-2,
    #heating-svg #line-В {
      animation: heating-line-animate 2s infinite linear;
    }
    @keyframes heating-change-color { 100% { opacity: 0.5; } }
    @keyframes heating-line-animate { 100% { strokeDashoffset: 0; } }

    // Важное правило с префиксом id SVG
    #heating-svg text {
      font-family: Arial, sans-serif;
      fill: white;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 16px;
    }
  </style> */
}

const testPath = {
  id: "testLine-01",
  coords: [
    [100, 100],
    [100, 200],
    [200, 200],
    [200, 400],
    [400, 400],
  ],
};

const Schema = () => {
  const [connectors, setConnectors] = useState<any[]>([]);
  const linesHotRef = useRef<SVGGElement>(null);

  console.log(
    `M${testPath.coords[0].join(" ")} L${testPath.coords[1].join(" ")}`
  );
  console.log("array", testPath.coords);
  console.log("arrayReverse", [...testPath.coords].reverse());
  useEffect(() => {
    if (linesHotRef.current) {
      //   console.dir(linesHotRef.current);
      const arr = Array.from(linesHotRef.current.children);
      setConnectors(arr);
    }
  }, []);

  useGSAP(() => {
    connectors.map(
      (item) =>
        gsap.to(item, {
          strokeDashoffset: 0,
          duration: 2,
          repeat: -1,
          ease: "none",
        }),

      gsap.to("#testLine-01", {
        strokeDashoffset: 0,
        duration: 2,
        repeat: -1,
        ease: "none",
      })
    );
    console.log(connectors);

    // gsap.to("path", {
    //   strokeDashoffset: 0,
    //   duration: 2,
    //   repeat: -1,
    //   ease: "none",
    // });
  }, [connectors]);

  return (
    <div className="bg-black" onClick={(e) => console.log(e.target)}>
      <svg
        id="heating-svg"
        viewBox="0 0 2560 1440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
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
            <g
              stroke="#00FF00"
              strokeWidth="0.2"
              strokeOpacity="0.5"
              fill="none"
            >
              <rect x="0" y="0" width="8" height="8" />
            </g>
          </pattern>

          <g>
            <path id="arrow-left" d="M0 4 H12 V0 L24 6 L12 12 V8 H0 Z" />
            <path id="arrow-right" d="M0 6 L12 0 V4 H24 V8 H12 V12 Z" />
            <path id="arrow-up" d="M6 0 L12 12 H8 V24 H4 V12 H0 Z" />
            <path id="arrow-down" d="M6 24 L0 12 H4 V0 H8 V12 H12 Z" />
          </g>
          <svg id="gas-label" width="32" height="24">
            <rect
              x="0.5"
              y="0.5"
              width="31"
              height="23"
              rx="4"
              ry="4"
              stroke="#00FF00"
            />
            <text
              fontFamily="Arial Narrow"
              x="50%"
              y="55%"
              fill="#00FF00"
              textAnchor="middle"
              fontSize="16"
              dominantBaseline="middle"
            >
              Газ
            </text>
          </svg>
        </defs>

        <g>
          {/* <!--  start Gas line --> */}
          {/* <g id="line-gas" stroke="#F9F300" strokeWidth="4">
            <path id="g01" d="M80 408 L280 408" />
            <path id="g02" d="M280 408 L280 336" />
            <path id="g03" d="M280 408 L792 408" />
            <path id="g04" d="M792 408 L792 336" />
            <path id="g05" d="M792 408 L1304 408" />
            <path id="g06" d="M1304 408 L1304 336" />
            <path id="g07" d="M1304 408 L1816 408 L1816 336" />
          </g> */}
          {/* <!--  end Gas line --> */}
          {/* <!--  start line-hot-1 --> */}
          <g
            id="line-hot-1"
            stroke="#FFA97F"
            strokeWidth="4"
            strokeDasharray="16 8"
            strokeDashoffset="48"
            strokeLinecap="round"
            ref={linesHotRef}
          >
            <path id="lh1-01" d="M536 216 L536 56 L1048 56" />
            <path id="lh1-02" d="M1048 56 L1048 216 " />
            <path id="lh1-03" d="M1048 56 L1560 56" />
            <path id="lh1-04" d="M1560 216 L1560 56" />
            <path id="lh1-05" d="M1560 56 L2072 56" />
            <path id="lh1-06" d="M2072 216 L2072 56" />
            <path id="lh1-07" d="M2072 56 L2480 56" />

            <path id="lh1-08" d="M2280 56 L2280 656 L2224 656" />
            <path id="lh1-09" d="M2224 656 L2224 560 L2128 560" />
            <path id="lh1-10" d="M2224 656 L2128 656" />
            <path id="lh1-11" d="M2224 656 L2224 752 L2128 752" />
          </g>
          {/* <!--  end line-hot-1 --> */}

          {/* <!-- start line-cold-1 --> */}
          {/* <g
            id="line-cold-1"
            stroke="#0080FF"
            strokeWidth="4"
            strokeDasharray="16 8"
            strokeDashoffset="48"
            strokeLinecap="round"
          >
            <path id="lc1-02" d="M1712 456 L1712 128 L1776 128" />
            <path id="lc1-03" d="M1816 128 L1912 128 L1912 216" />
            <path id="lc1-04" d="M1712 456 L1200 456" />
            <path id="lc1-05" d="M1200 456 L1200 128 L1264 128" />
            <path id="lc1-06" d="M1304 128 L1400 128 L1400 216" />
            <path id="lc1-07" d="M1200 456 L688 456" />
            <path id="lc1-08" d="M688 456 L688 128 L752 128" />
            <path id="lc1-09" d="M792 128 L888 128 L888 216" />
            <path id="lc1-10" d="M688 456 L160 456 L160 128 L240 128" />
            <path id="lc1-11" d="M280 128 L376 128 L376 216" />

            <path id="lc1-12" d="M2480 904 L2400 904" />
            <path id="lc1-13" d="M2392 904 L1720 904" />
            <path id="lc1-14" d="M1720 904 L1720 776 L1640 776" />

            <path id="lc1-15" d="M1720 904 L1280 904" />
            <path id="lc1-16" d="M1280 904 L1280 776 L1200 776" />

            <path id="lc1-17" d="M1280 904 L840 904" />
            <path id="lc1-18" d="M840 904 L840 776 L760 776" />

            <path id="lc1-19" d="M840 904 L400 904 L400 776 L320 776" />

            <path id="lc1-20" d="M1624 640 L1712 640" />
            <path id="lc1-21" d="M1624 736 L1624 640" />
            <path id="lc1-22" d="M1184 640 L1624 640" />
            <path id="lc1-23" d="M1184 736 L1184 640" />
            <path id="lc1-24" d="M744 640 L1184 640" />
            <path id="lc1-25" d="M744 736 L744 640" />
            <path id="lc1-26" d="M304 736 L304 640 L744 640" />

            <path id="lc1-27" d="M1984 640 L1712 640" />
            <path id="lc1-28" d="M2080 544 L1984 544 L1984 640" />
            <path id="lc1-29" d="M2080 640 L1984 640" />
            <path id="lc1-30" d="M2080 736 L1984 736 L1984 640" />

            <path id="lc1-31" d="M2400 904 L2400 1024 L2216 1024" />
            <path id="lc1-32" d="M2176 1024 L1872 1024" />
            <path id="lc1-33" d="M1872 1024 L1872 1120" />
            <path id="lc1-34" d="M1712 640 L1712 456" />
          </g> */}
          {/* <!-- start line-cold-1 --> */}

          {/* <!-- start В1 --> */}
          <g
            id="line-В"
            stroke="#00B1F4"
            strokeWidth="4"
            strokeDasharray="16 8"
            strokeDashoffset="48"
            strokeLinecap="round"
          >
            <path id="B01" d="M80 1088 L240 1088" />
            <path id="B02" d="M240 1088 L288 1088" />
            <path id="B03" d="M328 1088 L376 1088" />
            <path id="B04" d="M376 1088 L448 1088" />
            <path id="B05" d="M240 1088 L240 1200 L288 1200" />
            <path id="B06" d="M328 1200 L376 1200 L376 1088" />

            <path id="B07" d="M448 1088 L448 1336 L328 1336" />
            <path id="B08" d="M288 1336 L80 1336" />
            <path id="B09" d="M448 1088 L768 1088" />
            <path id="B10" d="M768 1088 L768 1024 L848 1024" />
            <path id="B11" d="M768 1088 L768 1144 L848 1144" />
            <path id="B12" d="M896 1040 L976 1040 L976 1104" />
            <path id="B13" d="M896 1160 L976 1160 L976 1104" />
            <path id="B15" d="M976 1104 L1200 1104 L1200 1024 L1328 1024" />
            <path id="B16" d="M1384 1024 L1560 1024" />
            <path id="B17" d="M1600 1024 L1872 1024" />

            <path id="B18" d="M1872 1240 L1872 1336 L1976 1336" />
            <path id="B19" d="M2024 1352 L2176 1352" />
            <path id="B20" d="M2216 1352 L2304 1352 L2304 904" />
          </g>
          {/* <!-- end В1 --> */}
        </g>

        <g id="arrows">
          <g fill="white">
            <use x="48" y="402" href="#arrow-left" />
            <use x="48" y="1082" href="#arrow-left" />
            <use x="48" y="1330" href="#arrow-right" />
            <use x="2488" y="50" href="#arrow-left" />
            <use x="2488" y="898" href="#arrow-right" />
          </g>
        </g>
        <g id="text">
          <text x="2480" y="88" textAnchor="end">
            Т1
          </text>
          <text x="2480" y="936" textAnchor="end">
            Т2
          </text>
          <text x="80" y="1072" textAnchor="start">
            В1
          </text>
          <text x="80" y="1360" textAnchor="start">
            Охлаждение стоков
          </text>
        </g>

        {/* <path
          id={testPath.id}
          d={`M${testPath.coord[0].join(" ")} L${testPath.coord[1].join(
            " "
          )} L${testPath.coord[2].join(" ")}`}
          stroke="#ffffff"
          strokeWidth="4"
        /> */}

        <path
          id={testPath.id}
          d={String(
            [...testPath.coords]
              .reverse()
              .map((c, i) => (i === 0 ? "M" + c.join(" ") : "L" + c.join(" ")))
          )}
          stroke="cyan"
          strokeWidth="4"
          strokeDasharray="16 8"
          strokeDashoffset="48"
        />

        <path id="testPath" d="M100 100 L100 200 L200 200 L200 400 L400 400" />

        {/* <rect id="grid" x="0" y="0" width="100%" height="100%" style="fill:url(#gridPattern)" /> */}
      </svg>
    </div>
  );
};

export default Schema;
