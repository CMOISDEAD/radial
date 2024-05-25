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
import { instance } from "../api/instance";

type Inputs = {
  name: string;
  username: string;
  password: string;
  email: string;
  country: string;
  city: string;
};

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const navigate = useNavigate();

  const handleRegister: SubmitHandler<Inputs> = (data) => {
    instance
      .post("/auth/register", data)
      .then((_res) => {
        notify({
          msg: "User created",
          type: "success",
        });
        navigate("/login");
      })
      .catch((err) => {
        console.error(err);
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
            onSubmit={handleSubmit(handleRegister)}
            className="flex flex-col gap-2 justify-center h-full"
          >
            <h1 className="text-3xl font-bold capitalize">Register</h1>
            <div className="flex flex-col gap-4">
              <Input
                required
                type="text"
                label="Name"
                placeholder="John Doe"
                className="max-w-xs"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <p className="text-xs text-warning">This field is required</p>
              )}
              <Input
                required
                type="text"
                label="Username"
                placeholder="Smith"
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
              <Input
                required
                type="email"
                label="email"
                placeholder="email@ibm.com"
                className="max-w-xs"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="text-xs text-warning">This field is required</p>
              )}
              <Input
                required
                type="text"
                label="City"
                placeholder="Armenia"
                className="max-w-xs"
                {...register("city", { required: true })}
              />
              <Input
                required
                type="text"
                label="Country"
                placeholder="Colombia"
                className="max-w-xs"
                {...register("country", { required: true })}
              />
              {errors.city && (
                <p className="text-xs text-warning">This field is required</p>
              )}
            </div>
            <Button color="primary" fullWidth type="submit">
              Register
            </Button>
          </form>
        </CardBody>
        <CardFooter>
          <p className="text-xs text-neutral-500">
            You already have an account?{" "}
            <Link
              to="/login"
              className="text-primary hover:text-success transition-colors"
            >
              Log In
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
