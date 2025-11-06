import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Cooler = () => {
  useGSAP(() => {
    gsap.to("#blue-box", {
      // x: 250,
      repeat: 1,
      yoyo: true,
      rotation: 360,
    });
  }, []);
  return (
    <div className="min-h-screen">
      {/* <div id="blue-box" className="w-20 h-20 bg-blue-500 rounded-lg" /> */}
      <svg
        width="33"
        height="32"
        viewBox="0 0 33 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 2C0 0.895431 0.895431 0 2 0H32V32H2C0.895431 32 0 31.1046 0 30V2Z"
          fill="#808080"
        />
        <circle
          cx="16.089"
          cy="16"
          r="16"
          fill="url(#paint0_radial_654_3547)"
        />
        <g id="blue-box" style={{ transformOrigin: "14px 14px" }}>
          <path
            d="M19.4408 2.35461C21.8975 2.95608 24.1004 4.2031 25.8596 5.90644C23.9724 10.3728 20.4574 13.9326 16.0889 15.9998C18.2848 12.8215 19.6009 9.03335 19.6009 4.87786C19.6009 4.02297 19.5464 3.1808 19.4408 2.35461Z"
            fill="url(#paint1_radial_654_3547)"
          />
          <path
            d="M12.7516 29.645C10.2949 29.0436 8.09198 27.7965 6.33278 26.0932C8.22003 21.6268 11.735 18.0671 16.1035 15.9998C13.9076 19.1782 12.5915 22.9663 12.5915 27.1218C12.5915 27.9767 12.646 28.8188 12.7516 29.645Z"
            fill="url(#paint2_radial_654_3547)"
          />
          <path
            d="M5.95155 6.281C7.7008 4.45414 9.88219 3.16989 12.2369 2.49805C15.1613 6.36565 16.4866 11.1896 16.0927 16.0065C14.4381 12.5155 11.8155 9.48175 8.21677 7.404C7.47642 6.97656 6.71984 6.60265 5.95155 6.281Z"
            fill="url(#paint3_radial_654_3547)"
          />
          <path
            d="M26.2412 25.7192C24.4919 27.546 22.3105 28.8303 19.9558 29.5021C17.0314 25.6345 15.7061 20.8106 16.1001 15.9937C17.7546 19.4846 20.3772 22.5184 23.9759 24.5962C24.7163 25.0236 25.4729 25.3975 26.2412 25.7192Z"
            fill="url(#paint4_radial_654_3547)"
          />
          <path
            d="M2.60662 19.9269C1.89914 17.4986 1.87764 14.9673 2.47318 12.5921C7.28481 11.9933 12.1251 13.2575 16.0997 16.0072C12.2492 15.6946 8.31055 16.4489 4.71178 18.5267C3.97143 18.9541 3.26932 19.4224 2.60662 19.9269Z"
            fill="url(#paint5_radial_654_3547)"
          />
          <path
            d="M29.5855 12.0747C30.293 14.503 30.3145 17.0343 29.7189 19.4095C24.9073 20.0083 20.067 18.744 16.0924 15.9944C19.9429 16.307 23.8816 15.5527 27.4803 13.4749C28.2207 13.0475 28.9228 12.5792 29.5855 12.0747Z"
            fill="url(#paint6_radial_654_3547)"
          />
        </g>
        <circle
          cx="16.089"
          cy="16"
          r="4.29268"
          fill="url(#paint7_radial_654_3547)"
        />
        <circle
          cx="16.089"
          cy="16"
          r="3.12195"
          fill="url(#paint8_radial_654_3547)"
        />
        <circle
          cx="16"
          cy="16"
          r="14"
          fill="#199800"
          style={{ mixBlendMode: "hard-light" }}
        />
        <defs>
          <radialGradient
            id="paint0_radial_654_3547"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(16.089 16) rotate(90) scale(16)"
          >
            <stop offset="0.918269" stop-color="#272727" />
            <stop offset="0.982813" stop-color="#989898" />
          </radialGradient>
          <radialGradient
            id="paint1_radial_654_3547"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(21.7474 7.80469) rotate(-156.801) scale(4.45801 12.8595)"
          >
            <stop stop-color="white" />
            <stop offset="0.293269" stop-color="#BBB8B8" />
            <stop offset="1" stop-color="#414141" />
          </radialGradient>
          <radialGradient
            id="paint2_radial_654_3547"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(10.445 24.1949) rotate(23.1986) scale(4.45801 12.8595)"
          >
            <stop stop-color="white" />
            <stop offset="0.293269" stop-color="#BBB8B8" />
            <stop offset="1" stop-color="#414141" />
          </radialGradient>
          <radialGradient
            id="paint3_radial_654_3547"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(11.8247 7.00847) rotate(143.199) scale(4.45801 12.8595)"
          >
            <stop stop-color="white" />
            <stop offset="0.293269" stop-color="#BBB8B8" />
            <stop offset="1" stop-color="#414141" />
          </radialGradient>
          <radialGradient
            id="paint4_radial_654_3547"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(20.368 24.9917) rotate(-36.8014) scale(4.45801 12.8595)"
          >
            <stop stop-color="white" />
            <stop offset="0.293269" stop-color="#BBB8B8" />
            <stop offset="1" stop-color="#414141" />
          </radialGradient>
          <radialGradient
            id="paint5_radial_654_3547"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(6.17323 15.2043) rotate(83.1986) scale(4.45801 12.8595)"
          >
            <stop stop-color="white" />
            <stop offset="0.293269" stop-color="#BBB8B8" />
            <stop offset="1" stop-color="#414141" />
          </radialGradient>
          <radialGradient
            id="paint6_radial_654_3547"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(26.0189 16.7973) rotate(-96.8014) scale(4.45801 12.8595)"
          >
            <stop stop-color="white" />
            <stop offset="0.293269" stop-color="#BBB8B8" />
            <stop offset="1" stop-color="#414141" />
          </radialGradient>
          <radialGradient
            id="paint7_radial_654_3547"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(16.089 16) rotate(90) scale(4.29268)"
          >
            <stop offset="0.725962" stop-color="#5E5E5E" />
            <stop offset="0.772963" stop-color="#D6D6D6" />
            <stop offset="0.954894" stop-color="#ACACAC" />
            <stop offset="1" stop-color="#515151" />
          </radialGradient>
          <radialGradient
            id="paint8_radial_654_3547"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(16.089 16) rotate(90) scale(3.12195)"
          >
            <stop offset="0.0336538" stop-color="white" />
            <stop offset="0.384615" stop-color="#BFBFBF" />
            <stop offset="0.884615" stop-color="#7E7E7E" />
            <stop offset="0.995192" stop-color="#3C3C3C" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Cooler;
