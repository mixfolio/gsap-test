import { create } from "zustand";
import { connectors } from "./schemaDb";
import { nanoid } from "nanoid";

export interface IConnector {
  id: string;
  type?: string;
  coords: number[][];
}

type SchemaStoreType = {
  connectors: IConnector[];
  coords: number[][];
  setCoords: (x: number, y: number) => void;
  resetCoords: () => void;
  addConnector: (coords: number[][]) => void;
};

export const useSchemaStore = create<SchemaStoreType>()((set) => ({
  connectors: connectors,
  coords: [],
  setCoords: (x, y) =>
    set((state) => {
      const newCoords = [x, y];
      return { coords: [...state.coords, newCoords] };
    }),
  resetCoords: () => set({ coords: [] }),
  addConnector: (coords) =>
    set((state) => {
      const newConnector = {
        id: nanoid(),
        type: "green",
        coords: coords,
      };
      return { connectors: [...state.connectors, newConnector] };
    }),
}));
