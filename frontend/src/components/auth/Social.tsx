import { ButtonGroup, Button } from "@nextui-org/react";
import { FaGithub, FaGoogle, FaFacebook } from "react-icons/fa";

export const Social = () => {
  return (
    <ButtonGroup fullWidth variant="flat">
      <Button isIconOnly>
        <FaGoogle />
      </Button>
      <Button isIconOnly>
        <FaGithub />
      </Button>
      <Button isIconOnly>
        <FaFacebook />
      </Button>
    </ButtonGroup>
  );
};
