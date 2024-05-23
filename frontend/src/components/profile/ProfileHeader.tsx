import { Image, Tooltip } from "@nextui-org/react";

export const ProfileHeader = ({ user }: any) => {
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
              img: "w-32 max-h-fit cursor-pointer",
              wrapper: "-top-7 left-5 z-40 border-2 border-primary",
            }}
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
            alt="user image"
          />
        </Tooltip>
        <div className="my-5 mr">
          <div className="flex flex-col">
            <h3 className="text-3xl font-bold">Usuario</h3>
            <p className="text-gray-600 text-xs">@usuario</p>
          </div>
        </div>
      </div>
    </header>
  );
};
