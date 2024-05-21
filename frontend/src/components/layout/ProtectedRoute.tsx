import { useAppStore } from "../../store/useApp";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAppStore((state) => state);

  // TODO: this should be replaced with a real check
  if (user) return <Navigate to="/login" />;

  return children;
};
