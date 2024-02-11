import { useRef } from "react";
import { useMap } from "../hooks/useMap";

export const MapViewer = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  useMap(mapRef);

  return <div ref={mapRef} className="map h-screen" />;
};
