import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const ScrollTriggerTest = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    const titleSplit = new SplitText(titleRef.current, { type: "chars" });

    gsap.from(titleSplit.chars, {
      x: -1300,
      yPercent: 100,
      duration: 1,
      opacity: 0,
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".test-text",
        start: "top 60%",
        end: "top 20%",
        toggleActions: "restart reverse none none",
        markers: {
          startColor: "purple",
          endColor: "tomato",
          fontSize: "2rem",
        },
      },
    });
  });
  return (
    <div>
      <div className="div1 h-screen bg-orange-200"></div>
      <div className="div2 h-screen bg-indigo-200">
        <h2
          ref={titleRef}
          className="test-text text-8xl uppercase font-black text-center text-gray-800"
        >
          Scroll Trigger
        </h2>
      </div>
    </div>
  );
};

export default ScrollTriggerTest;
