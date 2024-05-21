import { Outlet } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import { Sidebar } from "../sidebar/Sidebar";

export const Root = () => {
  return (
    <ProtectedRoute>
      <Sidebar />
      <div className="flex-grow">
        <Outlet />
      </div>
    </ProtectedRoute>
  );
};
