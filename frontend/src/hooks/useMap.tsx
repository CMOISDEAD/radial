import { useEffect, useRef, useState } from "react";
import { initMap } from "../utils/mapinit";
import { Map } from "mapbox-gl";
import { generateNewMarker } from "../utils/markers";

export const useMap = (container: React.RefObject<HTMLDivElement>) => {
  const [coords, setCoords] = useState({
    lon: -100.31019063199852,
    lat: 25.66901932031443,
  });
  const initRef = useRef<Map | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoords({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      () => alert("No se pudo obtener tu ubicación"),
      {
        enableHighAccuracy: true,
      },
    );
  }, []);

  useEffect(() => {
    if (container.current) {
      initRef.current = initMap(container.current, coords);
    }
  }, [container, coords]);

  useEffect(() => {
    initRef.current &&
      initRef.current.on("load", () =>
        generateNewMarker({
          map: initRef.current!,
          ...initRef.current!.getCenter(),
        }),
      );
    initRef.current &&
      initRef.current.on("dblclick", ({ lngLat }) =>
        generateNewMarker({ map: initRef.current!, ...lngLat }),
      );

    return () => {
      initRef.current?.off("load", generateNewMarker);
      initRef.current?.off("dblclick", generateNewMarker);
    };
  }, [coords]);
};
