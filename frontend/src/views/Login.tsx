import { FormEvent } from "react";
import {
  Image,
  Card,
  CardBody,
  CardFooter,
  Input,
  Button,
} from "@nextui-org/react";
import { Link } from "react-router-dom";

export const Login = () => {
  const handleLogIn = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Logged");
  };

  return (
    <div className="h-screen w-full flex relative">
      <Card
        className="bg-content1/70 w-1/4 p-5 absolute left-0 top-0 z-50 h-full backdrop-blur shadow-lg"
        radius="none"
      >
        <CardBody>
          <form
            className="flex flex-col gap-2 justify-center h-full"
            onSubmit={handleLogIn}
          >
            <h1 className="text-3xl font-bold capitalize">Log In</h1>
            <div className="flex flex-col gap-4">
              <Input
                required
                type="text"
                label="Username"
                placeholder="Jhon Doe"
                className="max-w-xs"
              />
              <Input
                required
                type="password"
                label="Password"
                placeholder="*********"
                className="max-w-xs"
              />
            </div>
            <Link to="/">
              <Button color="primary" fullWidth>
                Log In
              </Button>
            </Link>
          </form>
        </CardBody>
        <CardFooter>
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
