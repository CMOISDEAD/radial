import { Map } from "mapbox-gl";

export const initMap = (
  container: HTMLDivElement,
  coords: [number, number],
) => {
  return new Map({
    container,
    style: "mapbox://styles/mapbox/dark-v10",
    pitchWithRotate: false,
    center: coords,
    zoom: 15,
    accessToken: import.meta.env.VITE_MAPBOX_TOKEN,
    doubleClickZoom: false,
  });
};
