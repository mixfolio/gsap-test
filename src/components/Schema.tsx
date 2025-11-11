import { useGSAP } from "@gsap/react";
import gsap from "gsap";
// import type { IConnector } from "../stores/useSchemaStore";
import { useRef } from "react";
import { useSchemaStore } from "../stores/useSchemaStore";

type PointsFormFields = {
  coordX: HTMLInputElement;
  coordY: HTMLInputElement;
};

const Schema = () => {
  const hotColor = "#FFA97F";
  const coldColor = "#0080FF";
  const connectors = useSchemaStore((state) => state.connectors);
  const points = useSchemaStore((state) => state.coords);
  const setPoints = useSchemaStore((state) => state.setCoords);
  const resetPoints = useSchemaStore((state) => state.resetCoords);
  const addConnector = useSchemaStore((state) => state.addConnector);
  const formRef = useRef<HTMLFormElement>(null);
  const refHotGroup = useRef<SVGGElement>(null);

  const handleSubmit: React.FormEventHandler<
    HTMLFormElement & PointsFormFields
  > = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.coordX.value && form.coordX.value) {
      setPoints(+form.coordX.value, +form.coordY.value);
      formRef?.current?.reset();
    }
  };

  const handleAddConnector = () => {
    if (points.length > 1) {
      addConnector(points);
      resetPoints();
    }
  };

  // console.log(points);

  // const elems = gsap.utils.selector(refHotGroup);

  // const coord = connectors[0].coords
  //   .reduce((acc, item) => {
  //     return [...acc, ...item];
  //   }, [])
  //   .join(" ");

  // console.log("coord", coord);

  const tl = gsap.timeline();
  useGSAP(() => {
    tl.to(refHotGroup.current, {
      strokeDashoffset: 0,
      duration: 2,
      repeat: -1,
      ease: "none",
    });
  }, []);

  return (
    <div
      className="bg-black"
      // onClick={(e) => console.log(e.target)}
    >
      <div className="space-x-4 absolute top-4 left-6">
        <button
          className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          onClick={() => tl.pause()}
        >
          Стоп
        </button>
        <button
          className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          onClick={() => tl.resume()}
        >
          Пуск
        </button>
      </div>
      <svg
        viewBox="0 0 2560 1248"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M96 408H224M224 408V336M224 408H728M728 408V336M728 408H1232V336"
          stroke="#F9F300"
          strokeWidth="4"
        />
        <path
          d="M96 432H240M240 432V336M240 432H744M744 432V336M744 432H1248V336"
          stroke="#4D4D4D"
          strokeWidth="4"
        />
        {/* Горячая вода */}
        <g
          id="line-hot-group"
          ref={refHotGroup}
          strokeWidth="4"
          strokeDasharray="16 8"
          strokeDashoffset="48"
          strokeLinecap="round"
        >
          {connectors.map((c) => (
            <polyline
              key={c.id}
              id={c.id}
              stroke={
                c.type === "hot"
                  ? hotColor
                  : c.type === "cold"
                  ? coldColor
                  : "gray"
              }
              points={c.coords
                .reduce((acc, item) => {
                  return [...acc, ...item];
                }, [])
                .join(" ")}
            />
          ))}
        </g>
        {/* Холодная вода */}
        {/* <g
          id="line-cold"
          stroke="#0080FF"
          strokeWidth="4"
          strokeDasharray="16 8"
          strokeDashoffset="48"
          strokeLinecap="round"
        >
          <path d="M1808 1176H1840 M2176 272V248H2024 M2176 128 V104 H2024 V656  M2176 688 V656 H2008 V368 H1912 M2280 312 V168 M2520 168 H2504 M2280 728 V312 H2192  M2024 392H2048 M2048 392V386M2048 392V398M2024 528H2048M2048 528V522M2048 528V534 M1912 368 V168 H1936  M1912 368H1664V496H1136M1912 312H1944  M1976 168H2008M2008 168V50 M1976 312 H2008 V168 M1496 936 V976 H1560 M1632 1016 V800 H1496 V816 M1656 1016H1496V1040 M1600 976H1616V1200 M1496 1160V1200H1560M1600 1200H1616 M1616 1200H1656  M2168 1192 H2136 M2512 1192 H2232 M2096 1192 H2056 V848 H2328 V728 H2192 M2096 1000 H2056 M1936 1152 H2056 M2416 344H2312V168  M2512 344 H2456 M2456 456 H2512  M1224 888 V832 H1153 M1224 888 V952 H1152 M1104 816H1024V880M1104 936H1024V880   M1224 1104 V1048 H1152 M1224 1104 V1168 H1152 M1104 1032H1024V1096M1104 1152H1024V1096M1024 880H848V960H688M776 888H800 M704 888 H736 M672 952 V936 H624 V888 H640 M624 1208 V1192 H640  M704 1192H736M1024 1096H704M432 1152H464M464 1152H512M464 1152V1200M432 1200H464M464 1200H512 M336 1168V1216 M112 1216 H384  M40 1216 H72 M320 800 H264 M320 1168 V736H128V784 M216 888H128V848 M216 784 H128 M128 784V848M320 904H264 M320 952H128V1000 M216 1000 H128 M128 1000 V1056 M216 1104 H128 V1056 M126 1056H40 M320 1016 H264 M320 1120 H264  M40 1168 H384 M128 848H40  M2168 1000 H2136 M2248 1048 H2152 V1000 M2392 1000 V1048 H2288 M2512 1000 H2232  M1384 1160V1184H1272V1104 M1272 840V960 M1384 936 V960 H1272 M1272 960V1104  M1360 936 V944 H1256 M640 792 H624 V752 H1272 V776  M640 1096 H624 V960 H648 M1272 1104 H1224 M1360 1160V1168 H1256 V888 H1224  M2296 168 V456 H2416 M2416 456 M2464 168 H2192 M632 496 H120 V104 H192  M320 104V216M1136 496V104H1184M1136 496H632M632 496V104H680 M720 104H824M824 104H824 M824 104V216M1328 104 V216 M1224 104 H1328 M232 104 H320" />
        </g> */}
      </svg>
      <div className="bg-gray-300 absolute top-6 right-6 p-6 rounded-xl w-[400px]">
        <h2 className="text-2xl mb-4">Создать коннектор</h2>
        <form ref={formRef} className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="coordX"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Координата X
            </label>
            <div className="mt-2.5">
              <input
                // value={coordX}
                // onChange={(e) => setCoordX(+e.target.value)}
                id="coordX"
                type="number"
                step="1"
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
                // value={coordY}
                // onChange={(e) => setCoordY(+e.target.value)}
                id="coordY"
                type="number"
                step="1"
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
            Добавить координаты
          </button>
          <div>{JSON.stringify(points)}</div>
        </form>

        <button
          disabled={points.length < 2}
          onClick={handleAddConnector}
          className="mt-4 flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          Добавить коннектор
        </button>
      </div>
    </div>
  );
};

export default Schema;
