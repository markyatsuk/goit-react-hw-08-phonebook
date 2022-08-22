import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Navigation from "./Navigation";
import { Route, Routes } from "react-router-dom";
import ContactsView from "../../views/ContactsView/ContactsView";
import LoginView from "../../views/LoginView/LoginView";
import RegisterView from "../../views/Register/RegisterView";
import authOperations from "../../redux/auth/authOperations";

export default function Phonebook() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/contacts" element={<ContactsView />}></Route>
        <Route path="/login" element={<LoginView />}></Route>
        <Route path="/register" element={<RegisterView />}></Route>
      </Routes>
    </>
  );
}
