import { useEffect, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navigation from "./Navigation";
import { Route, Routes } from "react-router-dom";
import authOperations from "../../redux/auth/authOperations";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import PublicRoute from "./PublicRoute/PublicRoute";
import authSelectors from "../../redux/auth/authSelectors";

const ContactsView = lazy(() =>
  import(
    "../../views/ContactsView/ContactsView.jsx" /* webpackChunkName: contacts-view*/
  )
);
const LoginView = lazy(() =>
  import(
    "../../views/LoginView/LoginView.jsx" /* webpackChunkName: login-view*/
  )
);
const RegisterView = lazy(() =>
  import(
    "../../views/RegisterView/RegisterView.jsx" /* webpackChunkName: register-view*/
  )
);

export default function Phonebook() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser
  );
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <>
        <Navigation />
        <Suspense>
          <Routes>
            <Route element={<PrivateRoute redirectTo="login" />}>
              <Route path="/contacts" element={<ContactsView />}></Route>
            </Route>
            <Route element={<PublicRoute restricted redirectTo="contacts" />}>
              <Route path="/login" element={<LoginView />}></Route>
            </Route>
            <Route element={<PublicRoute restricted redirectTo="contacts" />}>
              <Route path="/register" element={<RegisterView />}></Route>
            </Route>
          </Routes>
        </Suspense>
      </>
    )
  );
}
