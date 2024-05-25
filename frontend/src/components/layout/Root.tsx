import { Outlet } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import { Sidebar } from "../sidebar/Sidebar";
import { useEffect } from "react";
import { useAppStore } from "../../store/useApp";
import { decodeToken } from "react-jwt";
import { instance } from "../../api/instance";
import { useRefresh } from "../../hooks/useRefresh";

export const Root = () => {
  const { token, setUser } = useAppStore((state) => state);
  const { refreshPlaces } = useRefresh();

  useEffect(() => {
    refreshPlaces();
    if (!token) return;
    const { id }: any = decodeToken(token);
    instance
      .get(`/users/user/${id}`)
      .then(({ data }) => setUser(data))
      .catch((e) => console.error(e));
  }, [token]);

  return (
    <ProtectedRoute>
      <Sidebar />
      <div className="flex-grow">
        <Outlet />
      </div>
    </ProtectedRoute>
  );
};
