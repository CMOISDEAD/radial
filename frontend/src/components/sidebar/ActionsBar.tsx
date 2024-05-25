import { Button } from "@nextui-org/react";
import { UserDropdown } from "./UserDropdown";
import { useLocation, Link } from "react-router-dom";
import { RxGlobe } from "react-icons/rx";
import { AddSite } from "./addsite/AddSite";
import { Notifications } from "./Notifications";

export const ActionBar = ({ toggle }: { toggle: () => void }) => {
  const { pathname } = useLocation();

  return (
    <div className="w-fit h-full flex flex-col justify-between items-center content-center p-3 fixed left-0 z-50 bg-background/70 backdrop-blur shadow-lg">
      <div className="flex flex-col items-center content-center gap-2">
        {pathname === "/" ? (
          <Button isIconOnly variant="flat" color={"primary"} onPress={toggle}>
            <RxGlobe />
          </Button>
        ) : (
          <Link to="/">
            <Button isIconOnly variant="flat">
              <RxGlobe />
            </Button>
          </Link>
        )}
        <AddSite />
      </div>
      <div className="flex flex-col items-center content-center gap-4">
        <Notifications />
        <UserDropdown />
      </div>
    </div>
  );
};
