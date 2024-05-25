import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import { notify } from "../../utils/notifications";
import axios from "axios";
import { instance } from "../../api/instance";
import { useAppStore } from "../../store/useApp";
import { upload } from "../../utils/upload";

export const ChangeImage = ({ isOpen, onOpenChange, id }: any) => {
  const { user, setUser } = useAppStore((state) => state);

  const updatePhoto = async ({ id, photo }: any) => {
    const image = photo;
    try {
      const data = await upload(image);
      const response = await instance.put(`/users/update/${id}`, {
        ...user,
        image: data.url,
      });
      setUser(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //@ts-ignore
    const photo = e.target.profile.files[0];
    if (!photo)
      return notify({
        msg: "Please select a photo",
        type: "error",
      });
    await updatePhoto({ id, photo });
    notify({
      msg: "Image updated successful",
      type: "success",
    });
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Modal Title
            </ModalHeader>
            <ModalBody>
              <form onSubmit={handleSubmit}>
                <input
                  id="profile"
                  name="profile"
                  type="file"
                  accept="image/*"
                  required
                  className="block w-full cursor-pointer rounded-lg border border-divider bg-background text-sm text-gray-400 placeholder-gray-400 transition-all hover:bg-neutral-800 focus:outline-none"
                />
                <Button color="success" type="submit">
                  Update
                </Button>
              </form>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button color="primary" onPress={onClose}>
                Action
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
