import { useRef } from "react";
import { useMap } from "../../hooks/useMap";
import { useAppStore } from "../../store/useApp";
import { RxClock, RxRulerSquare } from "react-icons/rx";
import { ButtonGroup, Button } from "@nextui-org/react";
import { IoBicycle, IoCar, IoWalk } from "react-icons/io5";

export const MapViewer = () => {
  const { directionInfo, vehicle, setVehicle } = useAppStore((state) => state);
  const mapRef = useRef<HTMLDivElement>(null);
  useMap(mapRef);

  return (
    <div className="relative">
      <div ref={mapRef} className="map h-screen" />
      {directionInfo && (
        <div className="absolute bottom-2 right-2 bg-background/70 backdrop-blur p-2 rounded-md flex flex-col gap-2 shadow">
          <ButtonGroup isIconOnly variant="flat">
            <Button
              color={vehicle === "cycling" ? "primary" : "default"}
              onPress={() => setVehicle("cycling")}
            >
              <IoBicycle />
            </Button>
            <Button
              color={vehicle === "walk" ? "primary" : "default"}
              onPress={() => setVehicle("walk")}
            >
              <IoWalk />
            </Button>
            <Button
              color={vehicle === "car" ? "primary" : "default"}
              onPress={() => setVehicle("car")}
            >
              <IoCar />
            </Button>
          </ButtonGroup>
          <p className="flex gap-2 content-center items-center">
            <RxClock />
            {directionInfo.duration} <span className="text-sm">minutes</span>
          </p>
          <p className="flex gap-2 content-center items-center">
            <RxRulerSquare />
            {directionInfo.distance} <span className="text-sm">meters</span>
          </p>
        </div>
      )}
    </div>
  );
};
