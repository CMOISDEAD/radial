import { useAppStore } from "../../store/useApp";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { token, user } = useAppStore((state) => state);

  if (!user && !token) return <Navigate to="/login" />;

  return children;
};
