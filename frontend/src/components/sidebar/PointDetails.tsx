import { Image, Button, AvatarGroup, Avatar } from "@nextui-org/react";
import { useAppStore } from "../../store/useApp";

export const PointDetails = () => {
  const { selectedPoint: point, setSelectedPoint } = useAppStore(
    (state) => state,
  );

  return (
    <div className="relative">
      <Image
        isBlurred
        src={point.img}
        alt={`${point.name} image site`}
        className="h-56 max-w-lg object-cover w-full"
        width="full"
      />
      <div className="my-4">
        <h3 className="font-bold capitalize">{point.name}</h3>
        <p className="text-sm text-clip">{point.description}</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-success text-xs">
          <span className="text-lg text-sucess mr-2">OPEN</span>
          close at 8:00 PM.
        </p>
        <AvatarGroup
          isBordered
          max={2}
          total={10}
          renderCount={(count) => (
            <p className="text-small text-foreground font-medium ms-2">
              +{count} others
            </p>
          )}
        >
          <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
          <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
          <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
          <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
          <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
          <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
        </AvatarGroup>
      </div>
      <Button
        isIconOnly
        size="sm"
        variant="ghost"
        color="danger"
        radius="full"
        onPress={() => setSelectedPoint(null)}
        className="absolute top-1 right-1 z-50"
      >
        &times;
      </Button>
    </div>
  );
};
