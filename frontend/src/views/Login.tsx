import {
  Image,
  Card,
  CardBody,
  CardFooter,
  Input,
  Button,
} from "@nextui-org/react";
import { Link, useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { notify } from "../utils/notifications";
import { Social } from "../components/auth/Social";
import { instance } from "../api/instance";

type Inputs = {
  username: string;
  password: string;
};

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const navigate = useNavigate();

  const handleLogIn: SubmitHandler<Inputs> = (data) => {
    const { username, password } = data;
    instance
      .post("/auth/login", { username, password })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        notify({
          msg: "Logged In",
          type: "success",
        });
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        notify({
          msg: "Something went wrong!, please try again.",
          type: "error",
        });
      });
  };

  return (
    <div className="h-screen w-full flex relative">
      <Card
        className="bg-content1/70 w-1/4 p-5 absolute left-0 top-0 z-50 h-full backdrop-blur shadow-lg"
        radius="none"
      >
        <CardBody>
          <form
            onSubmit={handleSubmit(handleLogIn)}
            className="flex flex-col gap-2 justify-center h-full"
          >
            <h1 className="text-3xl font-bold capitalize">Log In</h1>
            <div className="flex flex-col gap-4">
              <Input
                required
                type="text"
                label="Username"
                placeholder="Jhon Doe"
                className="max-w-xs"
                {...register("username", { required: true })}
              />
              {errors.username && (
                <p className="text-xs text-warning">This field is required</p>
              )}
              <Input
                required
                type="password"
                label="Password"
                placeholder="*********"
                className="max-w-xs"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <p className="text-xs text-warning">This field is required</p>
              )}
            </div>
            <Button color="primary" fullWidth type="submit">
              Log In
            </Button>
          </form>
          <Social />
        </CardBody>
        <CardFooter className="flex flex-col gap-2 content-center justify-start items-start">
          <p className="text-xs text-neutral-500">
            Don't remember your password?{" "}
            <Link
              to="#"
              className="text-primary hover:text-success transition-colors"
            >
              Reset Password
            </Link>
          </p>
          <p className="text-xs text-neutral-500">
            Don't have an account?{" "}
            <Link
              to="/"
              className="text-primary hover:text-success transition-colors"
            >
              Sign Up
            </Link>
          </p>
        </CardFooter>
      </Card>
      <div className="flex-grow h-full w-full">
        <Image
          removeWrapper
          src="https://assets-global.website-files.com/5f2a93fe880654a977c51043/64c115737a8f4e5e30f5a354_Frame%206.png"
          alt="map view image"
          radius="none"
          className="object-cover h-full w-full"
        />
      </div>
    </div>
  );
};
