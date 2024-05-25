import { Image, Card, CardBody, CardFooter } from "@nextui-org/react";
import { useAppStore, useMapStore } from "../../store/useApp";
import { RxCalendar, RxStar } from "react-icons/rx";
import { GoVerified } from "react-icons/go";

interface Props {
  point: Point;
  callback?: () => any;
}

export const PointCard = ({ point, callback }: Props) => {
  const { map, directions } = useMapStore((state) => state);
  const { setSelectedPoint } = useAppStore((state) => state);

  const handleSelect = () => {
    if (callback) return callback();
    setSelectedPoint(point);
    const coords = point.feature.geometry.coordinates;
    map!.flyTo({ center: coords, zoom: 16 });
    directions(coords[0], coords[1]);
  };

  return (
    <Card isPressable shadow="sm" onPress={handleSelect} className="min-w-56">
      <CardBody className="overflow-visible p-0">
        <Image
          width="100%"
          className="w-full object-cover h-[140px]"
          src={point.images[0]}
          alt="Restaurant image preview"
        />
      </CardBody>
      <CardFooter className="text-small flex-col content-start items-start justify-start">
        <div className="flex gap-2 content-center items-center justify-between w-full">
          <p className="font-bold text-start">{point.name}</p>
          {point.checked ? <GoVerified className="text-blue-600" /> : null}
        </div>
        <div className="text-sm flex gap-2 content-center items-center justify-between w-full">
          <div className="flex gap-2 content-center items-center text-xs">
            <RxCalendar />
            <p>Open</p>
          </div>
          <RxStar className="text-yellow-600" />
        </div>
      </CardFooter>
    </Card>
  );
};
