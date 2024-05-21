import { Map } from "mapbox-gl";
import { create } from "zustand";

interface StoreState {
  map: Map | null;
  user: IUser | null;
  selectedPoint: Point | null;
  setMap: (map: Map | null) => void;
  setSelectedPoint: (point: Point | null) => void;
}

export const useAppStore = create<StoreState>()((set) => ({
  map: null,
  user: null,
  selectedPoint: null,
  setSelectedPoint: (point) => set({ selectedPoint: point }),
  setMap: (map) => set({ map }),
}));
