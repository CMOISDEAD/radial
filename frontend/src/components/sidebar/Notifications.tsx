import {
  Badge,
  Button,
  Divider,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import { RxBell, RxShadowOuter } from "react-icons/rx";

export const Notifications = () => {
  return (
    <Popover backdrop="opaque" placement="right-end">
      <PopoverTrigger>
        <Button isIconOnly variant="flat">
          <Badge content={0} color="primary" size="sm">
            <RxBell />
          </Badge>
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="h-96 w-64 px-2 py-5">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 content-center items-center">
              <RxShadowOuter />
              <h3 className="text-lg font-bold capitalize">Notifications</h3>
            </div>
            <Divider orientation="horizontal" />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
