import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import authSelectors from "../../../redux/auth/authSelectors";

export default function PublicRoute({ restricted = false, redirectTo }) {
  const isLoggedIn = useSelector(authSelectors.getIsLogged);
  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? <Navigate to={redirectTo} /> : <Outlet />;
}
