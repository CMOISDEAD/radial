import { Image, Card, CardBody, CardFooter } from "@nextui-org/react";
import { useAppStore } from "../../store/useApp";

interface Props {
  point: Point;
}

export const PointCard = ({ point }: Props) => {
  const { map, setSelectedPoint } = useAppStore((state) => state);
  const { img, name } = point;

  const handleSelect = () => {
    setSelectedPoint(point);
    map!.flyTo({ center: [point.lng, point.lat], zoom: 15 });
  };

  return (
    <Card shadow="sm" isPressable onPress={handleSelect}>
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
        <p className="text-success">Open</p>
      </CardFooter>
    </Card>
  );
};
