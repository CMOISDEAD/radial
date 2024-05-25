import { Map } from "mapbox-gl";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface MapStore {
  map: Map | null;
  features: any[] | null;
  directions: null | any;
  setDirections: (callback: (lng: number, lat: number) => void) => void;
  setMap: (map: Map) => void;
  setFeatures: (places: any) => void;
}

export const useMapStore = create<MapStore>()((set) => ({
  map: null,
  features: null,
  directions: null,
  setDirections: (directions) => set({ directions }),
  setMap: (map) => set({ map }),
  setFeatures: (places) =>
    set({
      features: places.map(({ feature }: any) => feature),
    }),
}));

interface StoreState {
  user: IUser | null;
  token: string | null;
  points: any[] | null;
  selectedPoint: Point | null;
  trigger: null | any;
  directionInfo: null | any;
  vehicle: string;
  setUser: (user: any) => void;
  setToken: (token: string | null) => void;
  setVehicle: (vehicle: string) => void;
  setDirectionInfo: (directionInfo: any | null) => void;
  setPoints: (points: any[]) => void;
  setSelectedPoint: (point: Point | null) => void;
}

export const useAppStore = create<StoreState>()(
  persist(
    (set) => ({
      points: null,
      token: null,
      user: null,
      selectedPoint: null,
      trigger: null,
      directionInfo: null,
      vehicle: "walk",
      setPoints: (points) => set({ points }),
      setToken: (token) => set({ token }),
      setVehicle: (vehicle) => set({ vehicle }),
      setUser: (user) => set({ user }),
      setDirectionInfo: (directionInfo) => set({ directionInfo }),
      setSelectedPoint: (point) => set({ selectedPoint: point }),
    }),
    {
      name: "app-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
