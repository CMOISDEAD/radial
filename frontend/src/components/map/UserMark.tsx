import { createRef } from "react";
import { createRoot } from "react-dom/client";
import { Avatar, Image, Tooltip } from "@nextui-org/react";
import { Map, Marker } from "mapbox-gl";

export const generateUserMarker = ({
  lat,
  lng,
  map,
}: {
  lng: number;
  lat: number;
  map: Map;
}) => {
  const ref = createRef<HTMLDivElement | null>();

  // @ts-expect-error ref is read-only.
  ref.current = document.createElement("div");

  createRoot(ref.current).render(<UserMark />);

  new Marker(ref.current).setLngLat([lng, lat]).addTo(map);
};

const UserMark = () => {
  const user = {
    image: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    username: "username",
  };

  return (
    <Tooltip
      content={
        <div className="p-5 flex flex-col content-center items-center justify-center gap-2">
          <Image
            src={user.image}
            alt="user image"
            width={50}
            height={50}
            className="rounded-full"
          />
          <p className="text-center">{user.username}</p>
        </div>
      }
    >
      <Avatar
        isBordered
        color="primary"
        src={user.image}
        alt="user image marker"
        className="cursor-pointer"
      />
    </Tooltip>
  );
};
