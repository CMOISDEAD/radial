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
import { instance } from "../../../api/instance";
import { notify } from "../../../utils/notifications";
import { useAppStore } from "../../../store/useApp";

export const Options = () => {
  const { user, selectedPoint, setPoints, setSelectedPoint } = useAppStore(
    (state) => state
  );
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleCheck = () => {
    if (!selectedPoint) return;
    if (user!.role !== "ADMIN") {
      return notify({
        type: "error",
        msg: "You are not authorized to perform this action.",
      });
    }
    instance
      .put(`/places/check/${selectedPoint.id}`)
      .then((res) => {
        setSelectedPoint(res.data);
        notify({
          type: "success",
          msg: `Site ${
            res.data.checked ? "unverified" : "verified"
          } successfully.`,
        });
      })
      .catch((error) => {
        console.error(error);
        notify({
          type: "error",
          msg: "Something went wrong, site was not verified",
        });
      });
  };

  const handleDelete = () => {
    if (!selectedPoint) return;
    instance
      .delete(`/places/delete/${selectedPoint.id}`)
      .then((res) => {
        setPoints(res.data);
        setSelectedPoint(null);
        notify({
          type: "success",
          msg: "Point eliminated successfully.",
        });
      })
      .catch((error) => {
        console.error(error);
        notify({
          type: "error",
          msg: "Something went wrong, point was not eliminated",
        });
      });
  };

  return (
    <>
      <Dropdown>
        <DropdownTrigger>
          <Button>
            <RxDotsVertical />
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Site General Options">
          <DropdownItem onPress={handleCheck}>
            {selectedPoint!.checked ? "Unverify Site" : "Verify Site"}
          </DropdownItem>
          <DropdownItem onPress={onOpen}>Update site</DropdownItem>
          <DropdownItem
            className="text-danger"
            color="danger"
            onPress={handleDelete}
          >
            Delete Site
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <UpdateSite isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
};
