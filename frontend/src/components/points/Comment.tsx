import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
} from "@nextui-org/react";

export const Comment = () => {
  return (
    <Card>
      <CardHeader className="flex content-center gap-2">
        <Avatar
          isBordered
          src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
          size="sm"
        />
        <p className="text-lg font-bold">Comment</p>
      </CardHeader>
      <CardBody>
        Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
        cillum sint consectetur cupidatat.
      </CardBody>
      <CardFooter>
        <p className="text-gray-600 text-xs">
          {new Date("2024-05-17").toLocaleDateString("es-CO", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </CardFooter>
    </Card>
  );
};
