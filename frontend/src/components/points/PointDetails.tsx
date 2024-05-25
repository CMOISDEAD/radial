import {
  Image,
  ButtonGroup,
  Button,
  AvatarGroup,
  Avatar,
  Chip,
} from "@nextui-org/react";
import { useAppStore } from "../../store/useApp";
import { RxCalendar, RxCross1, RxHeart } from "react-icons/rx";
import { CommentSection } from "./CommentSection";
import { Options } from "./admin/Options";
import { GoVerified } from "react-icons/go";

export const PointDetails = () => {
  const {
    user,
    selectedPoint: point,
    setSelectedPoint,
  } = useAppStore((state) => state);

  if (!point) return null;

  return (
    <div className="relative p-2">
      <ButtonGroup
        isIconOnly
        variant="flat"
        size="sm"
        className="absolute top-2 right-0 z-20"
      >
        {(user?.role === "ADMIN" || point.userId === user?.id) && <Options />}
        <Button color="danger" onPress={() => setSelectedPoint(null)}>
          <RxCross1 />
        </Button>
      </ButtonGroup>
      <header className="flex content-center items-center justify-center">
        <Image
          src={point.images[0]}
          alt={`${point.name} image site`}
          className="h-56 max-w-lg object-cover w-full"
        />
      </header>
      <div className="my-5">
        <div className="flex content-center justify-between">
          <h3 className="text-2xl font-bold capitalize">{point.name}</h3>
          {point.checked ? <GoVerified className="text-blue-600" /> : null}
        </div>
        <p className="text-sm text-clip">{point.description}</p>
      </div>
      <div className="flex justify-between items-center my-5">
        <p className="text-sm flex content-center items-center gap-2">
          <Chip size="sm" color="primary" variant="flat">
            OPEN
          </Chip>
          <RxCalendar />
          closes at {point.schedule[0].end_hour}
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
      <CommentSection />
    </div>
  );
};
