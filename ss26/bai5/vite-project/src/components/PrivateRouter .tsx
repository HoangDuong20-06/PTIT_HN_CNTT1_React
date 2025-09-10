import { Navigate, Outlet } from "react-router-dom";
import { useState } from "react";

export default function PrivateRouter() {
  const [isAuth] = useState<boolean>(true);

  return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
}