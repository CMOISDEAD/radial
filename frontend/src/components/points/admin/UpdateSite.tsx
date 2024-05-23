import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  ButtonGroup,
} from "@nextui-org/react";
import { RxPencil1, RxTrash } from "react-icons/rx";

export const UpdateSite = ({ isOpen, onOpenChange }: any) => {
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
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                pulvinar risus non risus hendrerit venenatis. Pellentesque sit
                amet hendrerit risus, sed porttitor quam.
              </p>
            </ModalBody>
            <ModalFooter>
              <ButtonGroup variant="flat" fullWidth>
                <Button
                  color="danger"
                  onPress={onClose}
                  startContent={<RxTrash />}
                >
                  Close
                </Button>
                <Button
                  color="success"
                  onPress={onClose}
                  startContent={<RxPencil1 />}
                >
                  Update
                </Button>
              </ButtonGroup>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
