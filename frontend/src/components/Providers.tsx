import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Login } from "../views/Login";
import { Register } from "../views/Register";
import App from "../App";
import { Toaster } from "react-hot-toast";

export const Providers = () => {
  const navigate = useNavigate();

  return (
    <NextUIProvider navigate={navigate}>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </NextThemesProvider>
      <Toaster position="bottom-center" />
    </NextUIProvider>
  );
};
