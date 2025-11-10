import { nanoid } from "nanoid";
import { create } from "zustand";
type MapPinType = {
  id?: string;
  objectType: "1" | "2" | "3";
  variant: "success" | "error" | "disabled";
  temperatureOut?: number;
  temperatureWater?: number;
  temperatureWaterColor?: string;
  coordX: string;
  coordY: string;
};

type MapPinStoreType = {
  pins: MapPinType[];
  addMapPin: (mapPin: MapPinType) => void;
};

export const usePinStore = create<MapPinStoreType>()((set) => ({
  pins: [
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
  ],
  addMapPin: (mapPin) =>
    set((state) => {
      const newMapPin = {
        ...mapPin,
        id: nanoid(),
        coordX: mapPin.coordX + "px",
        coordY: mapPin.coordY + "px",
      };
      return { pins: [...state.pins, newMapPin] };
    }),
}));
