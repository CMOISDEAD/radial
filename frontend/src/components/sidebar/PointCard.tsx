import { Image, Card, CardBody, CardFooter } from "@nextui-org/react";

interface Props {
  point: any;
  callback: (point: any) => void;
}

export const PointCard = ({ point, callback }: Props) => {
  const { img, name } = point;

  const handleSelect = () => {
    callback(point);
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
