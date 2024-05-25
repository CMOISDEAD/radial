import { useEffect, useRef, useState } from "react";
import { initMap } from "../utils/mapinit";
import { Map } from "mapbox-gl";
import { generateNewMarker } from "../utils/markers";
import { useAppStore, useMapStore } from "../store/useApp";
import { generateUserMarker } from "../components/map/UserMark";
import axios from "axios";

export const useMap = (container: React.RefObject<HTMLDivElement>) => {
  const [coords, _setCoords] = useState({
    lat: 4.556260250318374,
    lng: -75.65964791577778,
  });
  const initRef = useRef<Map | null>(null);
  const { setMap, setDirections } = useMapStore((state) => state);
  const { points, setSelectedPoint } = useAppStore((state) => state);

  const calculateDirections = async (lng: number, lat: number) => {
    const res = await axios.get(
      `https://api.mapbox.com/directions/v5/mapbox/cycling/${-75.65964791577778},${4.556260250318374};${lng},${lat}?geometries=geojson&access_token=${
        import.meta.env.VITE_MAPBOX_TOKEN
      }`
    );
    const data = res.data.routes[0];
    const route = data.geometry.coordinates;
    const geojson = {
      type: "Feature",
      properties: {},
      geometry: {
        type: "LineString",
        coordinates: route,
      },
    };
    // if the route already exists on the map, we'll reset it using setData
    if (initRef.current!.getSource("route")) {
      // @ts-ignore
      initRef.current!.getSource("route").setData(geojson);
    }
    // otherwise, we'll make a new request
    else {
      initRef.current!.addLayer({
        id: "route",
        type: "line",
        source: {
          type: "geojson",
          // @ts-ignore
          data: geojson,
        },
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "#3887be",
          "line-width": 5,
          "line-opacity": 0.75,
        },
      });
    }
  };

  useEffect(() => {
    if (container.current) {
      initRef.current = initMap(container.current, coords);
      setMap(initRef.current);
      setDirections(calculateDirections);
    }
  }, [container, coords, setMap]);

  useEffect(() => {
    initRef.current &&
      initRef.current.on("load", () => {
        generateUserMarker({
          map: initRef.current!,
          ...initRef.current!.getCenter(),
        });
        initRef.current!.addSource("places", {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            //@ts-expect-error - This is a valid check
            features: points.map((point: any) => {
              return {
                ...point.feature,
                properties: {
                  ...point.feature.properties,
                  id: point.id,
                },
              };
            }),
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
          //@ts-expect-error - feature have an id property
          const { id } = e.features![0].properties;
          const find = points?.find((point) => point.id === id);
          if (!find) return console.log(e.features![0].properties);
          setSelectedPoint(find);
          initRef.current!.flyTo({
            //@ts-expect-error - This is a valid check
            center: e.features![0].geometry.coordinates as [number, number],
            zoom: 16,
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
      initRef.current.on("click", async ({ lngLat }) => {
        calculateDirections(lngLat.lng, lngLat.lat);
      });

    return () => {
      initRef.current?.off("load", generateNewMarker);
    };
  }, [coords, setSelectedPoint]);
};
