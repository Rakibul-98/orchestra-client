import { ReactNode } from "react";
// import { useAppSelector } from "../redux/features/hooks";
// import { selectCurrentUser } from "../redux/features/auth/authSlice";
import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  // const user = useAppSelector(selectCurrentUser);
  const user = "abc";
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}
