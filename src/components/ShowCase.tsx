import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";
import gsap from "gsap";
import { useRef } from "react";

const ShowCase = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!isTablet) {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
        },
      });
      timeline
        .to(".mask", {
          transform: "scale(1)",
          opacity: 0.8,
        })
        .to(".content", { opacity: 1, y: 0, ease: "power1.in" });
    }
  }, [isTablet]);
  return (
    <section ref={sectionRef} id="showcase">
      <div className="media">
        <video src="./video/hud.m4v" loop muted autoPlay playsInline />
        {/* <div className="mask">
          <img src="./mask-logo.svg" alt="Mask" />
        </div> */}

        <div className="mask bg-black w-full h-full scale-0 opacity-0 flex justify-center items-center">
          <h2 className="text-white text-center text-7xl/24">
            Создаем <br />
            <span>инновационные цифровые решения</span>
            , <br />
            открывающие <br />
            <span className="text-lime-600">
              новые возможности для роста бизнеса
            </span>
          </h2>
        </div>
      </div>
      <div className="content">
        <div className="wrapper">
          <div className="lg:max-w-md">
            <h2>Наша сила</h2>
            <div className="mt-10 space-y-6">
              <div>
                <h4>1</h4>
                <p>
                  Создаём{" "}
                  <span className="text-white">
                    инновационные цифровые решения и сервисы
                  </span>{" "}
                  с нуля
                </p>
              </div>
              <div>
                <h4>2</h4>
                <p>
                  Помогаем развивать{" "}
                  <span className="text-white">бизнес в цифровой среде</span>,
                  создаем основу для роста на рынке
                </p>
              </div>
              <div>
                <h4>3</h4>
                <p>
                  Привлекаем в свою команду крутых специалистов, которые создают
                  будущее
                </p>
              </div>
              <div>
                <h4>4</h4>
                <p>Занимаемся исследованием и разработкой AI-решений</p>
              </div>

              <p className="text-lime-600">Узнать о нас больше</p>
            </div>
          </div>
          <div className="lg:max-w-3xs space-y-12 text-center flex flex-col justify-center">
            <div>
              <p>До</p>
              <h3>10%</h3>
              <p>снижение затрат на эксплуатацию, ремонт и обслуживание</p>
            </div>
            <div>
              <p>До</p>
              <h3>20%</h3>
              <p>повышение производительности труда обслуживающего персонала</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowCase;
