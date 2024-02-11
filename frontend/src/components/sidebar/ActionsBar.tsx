import {
  PiBellLight,
  PiFireLight,
  PiMapTrifoldLight,
  PiStarLight,
} from "react-icons/pi";
import { Avatar, Button } from "@nextui-org/react";

export const ActionBar = () => {
  return (
    <div className="w-2/12 h-full flex flex-col justify-between items-center content-center py-5 bg-content1">
      <div className="flex flex-col items-center content-center gap-2">
        <Button variant="light" color="primary" size="sm" isIconOnly>
          <PiMapTrifoldLight className="text-xl" />
        </Button>
        <Button variant="light" size="sm" isIconOnly>
          <PiFireLight className="text-xl" />
        </Button>
        <Button variant="light" size="sm" isIconOnly>
          <PiStarLight className="text-xl" />
        </Button>
        <Button variant="light" size="sm" isIconOnly>
          <PiStarLight className="text-xl" />
        </Button>
      </div>
      <div className="flex flex-col items-center content-center gap-2">
        <Button variant="light" size="sm" isIconOnly>
          <PiBellLight className="text-xl" />
        </Button>
        <Avatar
          isBordered
          src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
          size="sm"
          color="primary"
        />
      </div>
    </div>
  );
};
