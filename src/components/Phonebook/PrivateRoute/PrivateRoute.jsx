import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import authSelectors from "../../../redux/auth/authSelectors";

export default function PrivateRoute({ redirectTo }) {
  const isLoggedIn = useSelector(authSelectors.getIsLogged);
  return isLoggedIn ? <Outlet /> : <Navigate to={redirectTo} />;
}
