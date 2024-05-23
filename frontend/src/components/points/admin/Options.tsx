import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { RxDotsVertical } from "react-icons/rx";
import { UpdateSite } from "./UpdateSite";

export const Options = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Dropdown>
        <DropdownTrigger>
          <Button>
            <RxDotsVertical />
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Site General Options">
          <DropdownItem onPress={onOpen}>Update site</DropdownItem>
          <DropdownItem className="text-danger" color="danger">
            Delete Site
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <UpdateSite isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
};
