import { getCookie } from "@app/helpers";
import { PROYECTS_ROUTE } from "@app/routes";
import { Navigate, Outlet } from "react-router-dom";

const AuthGuard = () => {
  const user = getCookie({ key: "_token" });
  return user ? <Outlet /> : <Navigate replace to={PROYECTS_ROUTE.TEACHER} />;
};
export default AuthGuard;
