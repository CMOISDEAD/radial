import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { instance } from "../../api/instance";
import { notify } from "../../utils/notifications";
import { useState } from "react";

type Inputs = {
  email: string;
};

export const GenRecover = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit } = useForm<Inputs>();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const onSubmit = async (data: Inputs) => {
    try {
      setIsLoading(true);
      await instance.post("/auth/generate", data);
      notify({
        msg: "Link has been sent to your email",
        type: "success",
      });
    } catch (e) {
      console.error(e);
      notify({
        msg: "Something went wrong!, please try again.",
        type: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Button variant="flat" color="primary" size="sm" onPress={onOpen}>
        Reset Password
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
                Recover password
              </ModalHeader>
              <ModalBody>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="p-5 flex flex-col content-center items-center justify-center gap-3"
                >
                  <Input
                    isRequired
                    label="Email"
                    type="email"
                    placeholder="email@emai.com"
                    {...register("email", { required: true })}
                  />
                  <Button
                    fullWidth
                    type="submit"
                    color="primary"
                    variant="flat"
                    isLoading={isLoading}
                  >
                    Generate Link
                  </Button>
                </form>
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
