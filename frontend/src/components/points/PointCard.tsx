import { Image, Card, CardBody, CardFooter } from "@nextui-org/react";
import { useAppStore } from "../../store/useApp";
import { RxCalendar, RxStar } from "react-icons/rx";

interface Props {
  point: Point;
  callback?: () => any;
}

export const PointCard = ({ point, callback }: Props) => {
  const { map, setSelectedPoint } = useAppStore((state) => state);
  const { img, name } = point;

  const handleSelect = () => {
    if (callback) return callback();
    setSelectedPoint(point);
    map!.flyTo({ center: [point.lng, point.lat], zoom: 16 });
  };

  return (
    <Card shadow="sm" isPressable onPress={handleSelect} className="min-w-56">
      <CardBody className="overflow-visible p-0">
        <Image
          width="100%"
          className="w-full object-cover h-[140px]"
          src={img}
          alt="Restaurant image preview"
        />
      </CardBody>
      <CardFooter className="text-small flex-col content-start items-start justify-start">
        <p className="font-bold text-start">{name}</p>
        <div className="text-sm flex gap-2 content-center items-center justify-between w-full">
          <div className="flex gap-2 content-center items-center ">
            <RxCalendar />
            <p className="font-bold">Open</p>
          </div>
          <RxStar className="text-yellow-600" />
        </div>
      </CardFooter>
    </Card>
  );
};
