import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Preloader = () => {
  const preloaderRef = useRef<HTMLDivElement>(null);

  const tl = gsap.timeline({ delay: 0.25 });
  useGSAP(() => {
    if (preloaderRef.current) {
      tl.to(".progress-bar", {
        scaleX: 1,
        duration: 4,
        ease: "power3.inOut",
      })
        .set(".progress-bar", { transformOrigin: "right" })
        .to(".progress-bar", {
          scaleX: 0,
          duration: 1,
          ease: "power3.in",
        });
    }
    tl.to(".preloader-images", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      duration: 6,
      ease: "power3.in",
    });
  });
  return (
    <>
      <div
        ref={preloaderRef}
        id="preloader"
        // className="[clip-path: poligon(0% 0%, 100% 0%, 100% 50%, 50% 100%)]"
        style={{
          clipPath: "poligon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          // willChange: clipPath,
        }}
      >
        <div className="progress-bar"></div>
        <div
          className="preloader-images"
          style={{
            clipPath: "poligon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            willChange: "clipPath",
          }}
        >
          <div className="img">
            <img src="./case-1.jpg" alt="Кейс-1" />
          </div>
          <div className="img">
            <img src="./case-2.jpg" alt="Кейс-2" />
          </div>
          <div className="img">
            <img src="./case-3.jpg" alt="Кейс-3" />
          </div>
          <div className="img">
            <img src="./case-4.jpg" alt="Кейс-4" />
          </div>
        </div>
        <div className="preloader-copy">
          <p>
            Наши решения позволяют в реальном времени контролировать состояние
            оборудования, оптимизировать энергопотребление и повышать надёжность
            систем.
          </p>
        </div>
      </div>

      <div className="preloader-header">
        <a href="#">МосСтройИнформ</a>
      </div>
      <section id="hero-preloader">
        <div className="header-row">
          <div className="divider">
            <h2>Агентство</h2>
          </div>
          <div className="divider">
            <h2>Перспективного</h2>
          </div>
          <div className="divider">
            <h2>Развития</h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Preloader;
