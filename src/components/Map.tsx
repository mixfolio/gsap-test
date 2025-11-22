import React, { useRef } from "react";
import map from "../assets/google-map.png";
import { PinComp } from "./PinComp";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { usePinStore } from "../stores/usePinsStore";

// interface MapPinType {
//   objectType: "1" | "2" | "3";
//   variant: "success" | "error" | "disabled";
//   temperatureOut?: number;
//   temperatureWater?: number;
//   temperatureWaterColor?: string;
//   coordX: string;
//   coordY: string;
// }

type PinFormFields = {
  objectType: HTMLSelectElement;
  variant: HTMLSelectElement;
};

const Map = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const pinsRef = useRef<HTMLDivElement>(null);
  const elems = gsap.utils.selector(pinsRef);

  const pins = usePinStore((store) => store.pins);
  const addMapPin = usePinStore((store) => store.addMapPin);

  const handleSubmit: React.FormEventHandler<
    HTMLFormElement & PinFormFields
  > = (event) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);

    //     const form = event.currentTarget
    // // addMapPin({});

    const formData = Object.fromEntries(form.entries());
    // console.log(formData);
    //@ts-ignore
    addMapPin(formData);
    formRef?.current?.reset();
  };

  useGSAP(() => {
    gsap.to(elems(".pin"), {
      scale: 1.1,
      repeat: -1,
      duration: 1,
      ease: "power1.in",
      yoyo: true,
      stagger: 0.3,
    });
  }, []);
  return (
    <section id="map" className="relative">
      <img src={map} alt="Карта" />
      <div ref={pinsRef}>
        {pins &&
          pins.map((pin) => (
            <PinComp
              className="pin"
              key={pin.id}
              objectType={pin.objectType}
              temperatureWaterColor={pin.temperatureWaterColor}
              variant={pin.variant}
              // className={`absolute top-[${pin.coordX}] left-[${pin.coordY}]`}
              style={{
                position: "absolute",
                top: pin.coordY,
                left: pin.coordX,
              }}
              temperatureOut={pin.temperatureOut}
              temperatureWater={pin.temperatureWater}
            />
          ))}
      </div>

      <div className="bg-gray-300 lg:absolute top-6 left-6 p-6 rounded-xl w-[400px]">
        <h2 className="text-2xl mb-4">Создать пин</h2>
        <form ref={formRef} className="space-y-4" onSubmit={handleSubmit}>
          <select
            name="objectType"
            className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
          >
            <option value="1">Котельная</option>
            <option value="2">Подача воды</option>
            <option value="3">Канализация</option>
          </select>
          <select
            name="variant"
            className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
          >
            <option value="success">Все ок</option>
            <option value="error">Есть косяки</option>
            <option value="disabled">Объект не подключен</option>
          </select>
          <div>
            <label
              htmlFor="temperatureOut"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Температура снаружи
            </label>
            <div className="mt-2.5">
              <input
                required
                type="number"
                step="0.1"
                name="temperatureOut"
                placeholder="22.6"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="temperatureWater"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Температура воды
            </label>
            <div className="mt-2.5">
              <input
                required
                id="temperatureWater"
                type="number"
                step="0.1"
                name="temperatureWater"
                placeholder="99.9"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="temperatureWaterColor"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Температура воды цвет
            </label>
            <div className="mt-2.5">
              <select
                id="temperatureWaterColor"
                name="temperatureWaterColor"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              >
                <option value="black">Черный</option>
                <option value="red">Красный</option>
              </select>
            </div>
          </div>
          <div>
            <label
              htmlFor="coordX"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Координата X
            </label>
            <div className="mt-2.5">
              <input
                id="coordX"
                type="text"
                name="coordX"
                placeholder="number"
                required
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="coordY"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Координата Y
            </label>
            <div className="mt-2.5">
              <input
                id="coordY"
                type="text"
                name="coordY"
                placeholder="number"
                required
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>

          <button
            type="submit"
            className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Добавить
          </button>
        </form>
      </div>
    </section>
  );
};

export default Map;
