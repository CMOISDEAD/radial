import { Button, Card, CardBody, CardHeader, Input } from "@nextui-org/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { notify } from "../utils/notifications";
import { instance } from "../api/instance";

type Inputs = {
  password: string;
  confirm: string;
};

export const Recover = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit } = useForm<Inputs>();
  const { token } = useParams();
  const navigate = useNavigate();

  const onSubmit = async (data: Inputs) => {
    try {
      if (data.password !== data.confirm) throw Error;
      setIsLoading(true);
      await instance.post("/auth/recover", {
        token,
        password: data.password,
      });
      notify({
        msg: "Password has been reset",
        type: "success",
      });
      navigate("/login");
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
    <div className="flex content-center items-center justify-center h-screen">
      <Card>
        <CardBody>
          <form
            className="p-5 flex flex-col content-center items-center justify-center gap-3"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              isRequired
              label="New Password"
              type="password"
              placeholder="New Password"
              {...register("password", { required: true })}
            />
            <Input
              isRequired
              label="Confirm"
              type="password"
              placeholder="New Password"
              {...register("confirm", { required: true })}
            />
            <Button
              fullWidth
              variant="flat"
              color="success"
              type="submit"
              isLoading={isLoading}
            >
              Reset Password
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};
