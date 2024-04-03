import { MdMap, MdOutlineNotifications } from "react-icons/md";
import { Button } from "@nextui-org/react";
import { UserDropdown } from "./UserDropdown";

export const ActionBar = ({ toggle }: { toggle: () => void }) => {
  return (
    <div className="w-fit h-full flex flex-col justify-between items-center content-center p-3 fixed left-0 z-50 bg-default-50 backdrop-blur shadow-lg">
      <div className="flex flex-col items-center content-center gap-2">
        <Button
          variant="light"
          color="primary"
          size="sm"
          isIconOnly
          onPress={toggle}
        >
          <MdMap className="text-xl" />
        </Button>
      </div>
      <div className="flex flex-col items-center content-center gap-2">
        <Button variant="light" size="sm" isIconOnly>
          <MdOutlineNotifications className="text-xl" />
        </Button>
        <UserDropdown />
      </div>
    </div>
  );
};
