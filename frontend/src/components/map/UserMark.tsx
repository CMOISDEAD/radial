import { createRef } from "react";
import { createRoot } from "react-dom/client";
import { Avatar, Image, Tooltip } from "@nextui-org/react";
import { Map, Marker } from "mapbox-gl";
import { useAppStore } from "../../store/useApp";

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
  const { user } = useAppStore((state) => state);

  return (
    <Tooltip
      content={
        <div className="p-5 flex flex-col content-center items-center justify-center gap-2">
          {user ? (
            <div>
              <Image
                src={user.image}
                fallbackSrc="https://placehold.co/300x200"
                alt="user image"
                width={50}
                height={50}
                className="rounded-full object-cover object-center"
              />
              <p className="text-center text-lg">{user.username}</p>
              <p className="text-center text-xs">{user.role}</p>
            </div>
          ) : (
            <p className="text-center font-bold text-xs">Please Log in</p>
          )}
        </div>
      }
    >
      <Avatar
        isBordered
        showFallback
        color={user?.role === "ADMIN" ? "secondary" : "default"}
        src={user?.image}
        alt="user image marker"
        className="cursor-pointer"
      />
    </Tooltip>
  );
};
