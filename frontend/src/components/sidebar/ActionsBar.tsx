import { Button, Link } from "@nextui-org/react";
import { UserDropdown } from "./UserDropdown";
import { useLocation } from "react-router-dom";
import { RxPlusCircled, RxGlobe, RxBell } from "react-icons/rx";

export const ActionBar = ({ toggle }: { toggle: () => void }) => {
  const { pathname } = useLocation();

  return (
    <div className="w-fit h-full flex flex-col justify-between items-center content-center p-3 fixed left-0 z-50 bg-background/70 backdrop-blur shadow-lg">
      <div className="flex flex-col items-center content-center gap-2">
        <Button
          isIconOnly
          variant="flat"
          color={pathname === "/" ? "primary" : "default"}
          onPress={pathname === "/" ? toggle : undefined}
          as={pathname === "/" ? "button" : Link}
          href="/"
        >
          <RxGlobe />
        </Button>
        <Button
          isIconOnly
          variant="flat"
          color={pathname === "/add" ? "primary" : "default"}
        >
          <RxPlusCircled />
        </Button>
      </div>
      <div className="flex flex-col items-center content-center gap-4">
        <Button isIconOnly variant="flat">
          <RxBell />
        </Button>
        <UserDropdown />
      </div>
    </div>
  );
};
