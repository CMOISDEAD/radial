import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import { UpdateForm } from "./UpdateForm";
import { useAppStore } from "../../../store/useApp";

export const UpdateSite = ({ isOpen, onOpenChange }: any) => {
  const { selectedPoint } = useAppStore((store) => store);

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      backdrop="opaque"
      size="4xl"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Update Site
            </ModalHeader>
            <ModalBody>
              <UpdateForm values={selectedPoint} />
            </ModalBody>
            <ModalFooter className="w-full flex content-center items-center justify-center">
              <Button
                fullWidth
                color="danger"
                onPress={onClose}
                className="w-full"
              >
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
