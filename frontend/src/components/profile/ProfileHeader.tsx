import { Chip, Image, Tooltip, useDisclosure } from "@nextui-org/react";
import { useAppStore } from "../../store/useApp";
import { ChangeImage } from "./ChangeImage";

export const ProfileHeader = () => {
  const { user } = useAppStore((state) => state);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  if (!user) return;

  return (
    <header>
      <div className="flex gap-8 content-start items-center justify-start">
        <Image
          isBlurred
          src="https://i.redd.it/asbwu34sl20d1.jpeg"
          alt="ground image"
          classNames={{
            img: "object-cover w-screen h-80",
            wrapper: "w-full h-80",
          }}
        />
      </div>
      <div className="relative flex gap-8 h-fit">
        <Tooltip showArrow content="User profile picture">
          <Image
            isBlurred
            radius="full"
            classNames={{
              img: "w-32  h-32 cursor-pointer object-cover object-center",
              wrapper: "-top-7 left-5 z-40 border-2 border-primary",
            }}
            src={user.image}
            fallbackSrc="https://placehold.co/300x200"
            alt="user image"
            onClick={onOpen}
          />
        </Tooltip>
        <div className="my-5 mr">
          <div className="flex flex-col gap-1">
            <h3 className="text-3xl font-bold">{user.name}</h3>
            <div className="flex content-center items-center justify-center gap-3">
              <Chip
                size="sm"
                color={user.role === "ADMIN" ? "secondary" : "primary"}
              >
                {user.role}
              </Chip>
              <p className="text-gray-600 text-xs">@{user.username}</p>
            </div>
          </div>
        </div>
      </div>
      <ChangeImage isOpen={isOpen} onOpenChange={onOpenChange} id={user.id} />
    </header>
  );
};
