import { FaRegMap, FaRegBookmark, FaRegBell } from "react-icons/fa6";
import { Button } from "@nextui-org/react";
import { UserDropdown } from "./UserDropdown";

export const ActionBar = ({ toggle }: { toggle: () => void }) => {
  return (
    <div className="w-fit h-full flex flex-col justify-between items-center content-center p-3 fixed left-0 z-50 bg-content1/70 backdrop-blur shadow-lg">
      <div className="flex flex-col items-center content-center gap-2">
        <Button
          variant="light"
          color="primary"
          size="sm"
          isIconOnly
          onPress={toggle}
        >
          <FaRegMap className="text-lg" />
        </Button>
        <Button variant="light" size="sm" isIconOnly>
          <FaRegBookmark className="text-lg" />
        </Button>
      </div>
      <div className="flex flex-col items-center content-center gap-2">
        <Button variant="light" size="sm" isIconOnly>
          <FaRegBell className="text-lg" />
        </Button>
        <UserDropdown />
      </div>
    </div>
  );
};
