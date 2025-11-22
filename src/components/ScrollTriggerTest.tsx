import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const ScrollTriggerTest = () => {
  const sect1Ref = useRef<HTMLDivElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    const textParagraph = new SplitText(pRef.current, { type: "words" });
    const titleSplit = new SplitText(titleRef.current, { type: "chars" });

    gsap.from(textParagraph.words, {
      opacity: 0,
      stagger: 0.1,
      scrollTrigger: {
        trigger: sect1Ref.current,
        start: "top top",
        end: "bottom top",
        toggleActions: "restart reset none none",
      },
    });

    gsap.from(titleSplit.chars, {
      // x: -1300,
      yPercent: 100,
      duration: 1,
      opacity: 0,
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".test-text",
        start: "top 80%",
        end: "top 5%",
        scrub: true,
        pin: true,
        toggleActions: "restart none none none",
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
      <div ref={sect1Ref} className="div1 h-screen bg-orange-200">
        <div className="w-2xl mx-auto flex items-center h-full">
          <p className="text-4xl text-gray-600" ref={pRef}>
            Наша команда 2016 года активно занималась научными разработками и в
            2024 году начала реализовывать свои разработки в виде инновационных
            цифровых решений. За это время компания реализовала и внедрила более
            десятка крупных проектов
          </p>
        </div>
      </div>
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
