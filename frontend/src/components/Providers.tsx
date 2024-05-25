import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { Root } from "./layout/Root";
import { Register } from "../views/Register";
import { Login } from "../views/Login";
import { User } from "../views/User";
import { Home } from "../views/Home";
import { ProtectedRoute } from "./layout/ProtectedRoute";
import { Recover } from "../views/Recover";

export const Providers = () => {
  const navigate = useNavigate();

  return (
    <NextUIProvider navigate={navigate}>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Root />
              </ProtectedRoute>
            }
          >
            <Route path="/" element={<Home />} />
            <Route path="/user/:user" element={<User />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/auth/recover/:token" element={<Recover />} />
        </Routes>
      </NextThemesProvider>
      <Toaster position="bottom-center" />
    </NextUIProvider>
  );
};
