import { useEffect, useRef, useState } from "react";
import { initMap } from "../utils/mapinit";
import { Map } from "mapbox-gl";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import { generateNewMarker } from "../utils/markers";
import { useAppStore } from "../store/useApp";
import { interestPoints, features } from "../utils/data";

import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css";

export const useMap = (container: React.RefObject<HTMLDivElement>) => {
  const [coords, setCoords] = useState({
    lat: 4.556260250318374,
    lng: -75.65964791577778,
  });
  const initRef = useRef<Map | null>(null);
  const { setSelectedPoint, setMap } = useAppStore((state) => state);

  useEffect(() => {
    // navigator.geolocation.getCurrentPosition(
    //   (position) => {
    //     setCoords({
    //       lat: position.coords.latitude,
    //       lng: position.coords.longitude,
    //     });
    //   },
    //   () => alert("No se pudo obtener tu ubicación"),
    //   {
    //     enableHighAccuracy: true,
    //   },
    // );
  }, []);

  useEffect(() => {
    if (container.current) {
      initRef.current = initMap(container.current, coords);
      const directions = new MapboxDirections({
        accessToken: import.meta.env.VITE_MAPBOX_TOKEN,
        unit: "metric",
      });
      directions.setOrigin([coords.lng, coords.lat]);
      initRef.current.addControl(directions, "top-right");
      initRef.current.removeControl(directions);
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
            features: features,
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
