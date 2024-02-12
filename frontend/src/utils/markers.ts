import { Map, Marker, Popup } from "mapbox-gl";

// generate a new marker on the map in the given coordinates
export const generateNewMarker = ({
  lat,
  lng,
  map,
}: {
  lng: number;
  lat: number;
  map: Map;
}) => {
  const popup = new Popup({
    closeButton: false,
    anchor: "left",
  }).setHTML(`<div class="popup">You click here: <br/>[${lng},  ${lat}]</div>`);
  new Marker({ color: "#FF5733", scale: 1.5 })
    .setLngLat([lng, lat])
    .setPopup(popup)
    .addTo(map);
};
