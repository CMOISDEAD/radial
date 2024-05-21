import { Map } from "mapbox-gl";

export const initMap = (
  container: HTMLDivElement,
  coords: {
    lat: number;
    lng: number;
  },
) => {
  return new Map({
    container,
    style: "mapbox://styles/mapbox/dark-v10",
    pitchWithRotate: false,
    center: [coords.lng, coords.lat],
    zoom: 16,
    pitch: 55,
    accessToken: import.meta.env.VITE_MAPBOX_TOKEN,
    doubleClickZoom: false,
  });
};
