import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { RxPlusCircled } from "react-icons/rx";
import { AddForm } from "./AddForm";

export const AddSite = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button isIconOnly variant="flat" onPress={onOpen}>
        <RxPlusCircled />
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="4xl"
        backdrop="opaque"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Add a new site
              </ModalHeader>
              <ModalBody>
                <AddForm />
              </ModalBody>
              <ModalFooter>
                <Button
                  fullWidth
                  variant="light"
                  color="danger"
                  onPress={onClose}
                >
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
