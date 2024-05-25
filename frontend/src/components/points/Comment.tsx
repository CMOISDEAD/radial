import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { formatRelative } from "date-fns";
import { instance } from "../../api/instance";
import { RxDotsHorizontal } from "react-icons/rx";
import { useAppStore } from "../../store/useApp";
import { notify } from "../../utils/notifications";

export const Comment = ({ comment }: any) => {
  const { user: current, setSelectedPoint } = useAppStore((state) => state);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    instance
      .get(`/users/user/${comment.userId}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((e) => console.error(e));
  }, []);

  const handleDelete = async () => {
    try {
      const response: any = await instance.post(
        "/places/deletecomment",
        comment
      );
      setSelectedPoint(response.data);
      notify({ type: "success", msg: "Comment successfully deleted" });
    } catch (e) {
      notify({ type: "error", msg: "Something went wrong" });
    }
  };

  return (
    <Card>
      {user && (
        <CardHeader className="flex content-center items-center justify-between gap-3">
          <div className="flex gap-3">
            <Avatar isBordered showFallback src={user.image} size="sm" />
            <p className="text-lg font-bold">@{user.username}</p>
          </div>
          {current?.id === comment.userId && (
            <Dropdown>
              <DropdownTrigger>
                <Button isIconOnly variant="flat" size="sm">
                  <RxDotsHorizontal />
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                <DropdownItem
                  key="delete"
                  className="text-danger"
                  color="danger"
                  onPress={handleDelete}
                >
                  Delete comment
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          )}
        </CardHeader>
      )}
      <CardBody>{comment.text}</CardBody>
      <CardFooter>
        <p className="text-gray-600 text-xs">
          {formatRelative(comment.date * 1, Date.now())}
        </p>
      </CardFooter>
    </Card>
  );
};
