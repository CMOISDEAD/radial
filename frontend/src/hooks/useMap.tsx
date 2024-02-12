import { useEffect, useRef, useState } from "react";
import { initMap } from "../utils/mapinit";
import { Map } from "mapbox-gl";
import { generateNewMarker } from "../utils/markers";
import { useAppStore } from "../store/useApp";
import { interestPoints, features } from "../utils/data";

export const useMap = (container: React.RefObject<HTMLDivElement>) => {
  const [coords, setCoords] = useState({
    lat: 25.66901932031443,
    lng: -100.31019063199852,
  });
  const initRef = useRef<Map | null>(null);
  const { setSelectedPoint, setMap } = useAppStore((state) => state);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoords({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
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
      setMap(initRef.current);
    }
  }, [container, coords, setMap]);

  useEffect(() => {
    initRef.current &&
      initRef.current.on("load", () => {
        generateNewMarker({
          map: initRef.current!,
          ...initRef.current!.getCenter(),
        });
        initRef.current!.addSource("places", {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            //ts-expect-error - This is a valid check
            features: features as any,
          },
        });
        initRef.current!.addLayer({
          id: "places",
          type: "symbol",
          source: "places",
          layout: {
            "icon-image": "{icon}-15",
            "icon-allow-overlap": true,
          },
        });
        initRef.current!.on("click", "places", (e) => {
          //ts-expect-error - This is a valid check
          const { id } = e.features![0].properties;
          const find = interestPoints.find((point) => point.id === id);
          if (!find) return console.log("Interest point not found.");
          setSelectedPoint(find);
          initRef.current!.flyTo({
            //@ts-expect-error - This is a valid check
            center: e.features![0].geometry.coordinates as [number, number],
            zoom: 15,
            essential: true,
          });
        });
        initRef.current!.on("mouseenter", "places", () => {
          initRef.current!.getCanvas().style.cursor = "pointer";
        });
        initRef.current!.on("mouseleave", "places", () => {
          initRef.current!.getCanvas().style.cursor = "";
        });
      });
    initRef.current &&
      initRef.current.on("dblclick", ({ lngLat }) =>
        generateNewMarker({
          map: initRef.current!,
          ...lngLat,
        }),
      );

    return () => {
      initRef.current?.off("load", generateNewMarker);
      initRef.current?.off("dblclick", generateNewMarker);
    };
  }, [coords, setSelectedPoint]);
};
