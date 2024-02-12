import { Map } from "mapbox-gl";
import { create } from "zustand";

interface StoreState {
  selectedPoint: null | Point;
  setSelectedPoint: (point: null | Point) => void;
  map: null | Map;
  setMap: (map: null | Map) => void;
}

export const useAppStore = create<StoreState>()((set) => ({
  selectedPoint: null,
  map: null,
  setSelectedPoint: (point) => set({ selectedPoint: point }),
  setMap: (map) => set({ map }),
}));
