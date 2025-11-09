import { useRef } from "react";
import map from "../assets/google-map.png";
import { PinComp } from "./PinComp";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

type MapPinType = {
  id: string;
  objectType: "1" | "2" | "3";
  variant: "success" | "error" | "disabled";
  temperatureOut?: number;
  temperatureWater?: number;
  temperatureWaterColor?: string;
  coordX: string;
  coordY: string;
};

const pins: MapPinType[] = [
  {
    id: "pin-1",
    objectType: "1",
    variant: "success",
    temperatureOut: -14.6,
    temperatureWater: 95.3,
    coordX: "580px",
    coordY: "180px",
  },
  {
    id: "pin-2",
    objectType: "2",
    variant: "error",
    temperatureOut: -14.2,
    temperatureWater: 63.3,
    temperatureWaterColor: "red",
    coordX: "1080px",
    coordY: "360px",
  },
  {
    id: "pin-3",
    objectType: "1",
    variant: "success",
    temperatureOut: -14.6,
    temperatureWater: 55.3,
    temperatureWaterColor: "red",
    coordX: "880px",
    coordY: "180px",
  },

  {
    id: "pin-4",
    objectType: "3",
    variant: "disabled",
    coordX: "880px",
    coordY: "680px",
  },
];

const Map = () => {
  const pinRef = useRef(null);

  useGSAP(() => {
    gsap.to(pinRef.current, {
      scale: 1.1,
      repeat: -1,
      duration: 1,
      ease: "power1.in",
      yoyo: true,
    });
  }, []);
  return (
    <section className="relative">
      <img src={map} alt="Карта" />
      {pins &&
        pins.map((pin) => (
          <PinComp
            key={pin.id}
            ref={pinRef}
            objectType={pin.objectType}
            temperatureWaterColor={pin.temperatureWaterColor}
            colorBg={
              pin.variant === "success"
                ? "green"
                : pin.variant === "error"
                ? "red"
                : pin.variant === "disabled"
                ? "gray"
                : "gray"
            }
            // className={`absolute top-[${pin.coordX}] left-[${pin.coordY}]`}
            style={{ position: "absolute", top: pin.coordY, left: pin.coordX }}
            temperatureOut={pin.temperatureOut}
            temperatureWater={pin.temperatureWater}
          />
        ))}
    </section>
  );
};

export default Map;
